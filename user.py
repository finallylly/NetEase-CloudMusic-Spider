# -*- coding: utf-8 -*-
import requests
import os, json
import base64
import music_mysql
import pymysql
from Crypto.Cipher import AES

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

# 由于网易云音乐歌曲评论采取AJAX填充的方式所以在HTML上爬不到，需要调用评论API，而API进行了加密处理，下面是相关解决的方法
def aesEncrypt(text, secKey):
    pad = 16 - len(text) % 16
    text = text + pad * chr(pad)
    encryptor = AES.new(secKey, 2, '0102030405060708')
    ciphertext = encryptor.encrypt(text)
    ciphertext = base64.b64encode(ciphertext)
    return ciphertext


def rsaEncrypt(text, pubKey, modulus):
    text = text[::-1]
    rs = int(text.encode('hex'), 16) ** int(pubKey, 16) % int(modulus, 16)
    return format(rs, 'x').zfill(256)


def createSecretKey(size):
    return (''.join(map(lambda xx: (hex(ord(xx))[2:]), os.urandom(size))))[0:16]

# header
headers = {
    'Referer': 'http://music.163.com/',
    'Cookie': 'appver=1.5.0.75771;MUSIC_U=e954e2600e0c1ecfadbd06b365a3950f2fbcf4e9ffcf7e2733a8dda4202263671b4513c5c9ddb66f1b44c7a29488a6fff4ade6dff45127b3e9fc49f25c8de500d8f960110ee0022abf122d59fa1ed6a2;',
}

# 添加用户id、名字、以及喜欢的歌曲到user_love_songs数据库中
def get_user_music(uid,user_name):
    text = {'uid': uid, 'type':0, 'limit':1000,'offset':0}
    modulus = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
    nonce = '0CoJUm6Qyw8W8jud'
    pubKey = '010001'
    text = json.dumps(text)
    secKey = createSecretKey(16)
    encText = aesEncrypt(aesEncrypt(text, nonce), secKey)
    encSecKey = rsaEncrypt(secKey, pubKey, modulus)
    # data = {'params': encText, 'encSecKey': encSecKey}
    print encText
    print encSecKey
    # post的数据
    user_data = {
        'params': encText,
        'encSecKey': encSecKey
        # 'params': 'ZcyfL9oShQyhzx/Ub7Pm/kQtrd9REkSisPYgkXXx2vnYTvsLcEhzGKAVze69Hfd6gRh0ZeDwfRO8VSM9hEBaiva1K5V/mPydiAcmLlP0Y1vHKmA7BJHnjhbtrKNgu2W+5Wpm7MO0rtr/Ro5bbzDy9cQho2qdiVvTnSG1vs+OMvF0dH/zi1PfJupBF3VLPAIy',
        # 'encSecKey': '0108a18184e9ba2ad5064de5c62af312b2d384eb68e4720ead3ef0e951a6d1e2e80ee52a29f36601e793a5d569cb07206e61438b2c8be05cb36d25898c8434d9d42902516d57f4faa751f7179f9cfd4560fe16a09b6d78fb925162773283f2bc71cc6d88960b0e96f7d5aa02789dec8bfcf17aad30b6529d0cb5c8dbe1acc357'
    }

    data = []
    url = 'http://music.163.com/weapi/v1/play/record?csrf_token='

    response = requests.post(url, headers=headers, data=user_data)
    response = response.content
    json_text= json.loads(response)

    # print json.dumps(json_text, ensure_ascii=False).encode("GB18030")
    # print json.dumps(json_text, sort_keys=True, indent=4, ensure_ascii=False).encode("GB18030")

    try:
        json_all_data = json_text['allData']
        for json_music in json_all_data:
            json_song = json_music['song']
            json_song_name = json_song['name']   # 歌曲名字
            # print(json_song_name, end="")
            # print('---', end="")
            # 演唱者名字
            ar = json_song['ar']
            length = len(ar)
            songer_name = ''
            for songer in range(0, length):
                songer_name = songer_name + ar[songer]['name']
                # print(ar[songer]['name'], end="")
                # if (songer != length - 1):
                #     print('/', end="")
                # if (songer == length - 1):
                #     print('')
            # print(songer_name)
            song = json_song_name + '---' + songer_name
            data.append(song)
        # 添加用户id、名字、以及喜欢的歌曲到数据库中
        music_mysql.insert_user(uid, user_name, data=data)
    except pymysql.err.IntegrityError:
        print('id='+str(uid))
        print('的用户已经添加到user_luve_songs数据库中啦~').decode("utf8")
    except KeyError:
        print('id='+str(uid))
        print('的用户听歌排行不可查看~').decode("utf8")
    except Exception as e:
        print('出现错误啦~错误是:'.decode("utf8"), e)