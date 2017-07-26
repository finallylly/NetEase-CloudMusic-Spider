# -*- coding: utf-8 -*-
import requests
import time
from bs4 import BeautifulSoup
import warnings

import sys
reload(sys)
sys.setdefaultencoding('utf-8')
warnings.filterwarnings("ignore")

_session = requests.session()
BASE_URL = 'http://music.163.com/user/home?id='

def getUserInfo(uid=59986101):
    #初始化
    info = {'sex':0, 'birthday':'', 'province':0, 'city':0, 'total':0, 'status':1}
    #url
    url = BASE_URL+str(uid);
    #获取内容
    soup = BeautifulSoup(_session.get(url).content)

    content = soup.find('div', attrs={'class': 'g-bd'})

    # 性别
    sex1 = content.find(id='j-name-wrap').find('i', attrs={'class': 'u-icn-01'})
    sex2 = content.find(id='j-name-wrap').find('i', attrs={'class': 'u-icn-02'})
    if sex1!=None:
        info['sex']  = '男'
    elif sex2!=None:
        info['sex']  = '女'
    else:
        info['sex'] = 0
    # print "sex="+str(info['sex'])

    #生日
    try:
        timeStamp = content.find(id='head-box').find('dd').find(id='age').attrs['data-age']
        timeStamp = long(timeStamp)/1000
        timeArray = time.localtime(timeStamp)
        info['birthday'] = time.strftime("%Y-%m-%d", timeArray)
        # print info['birthday']
    except Exception as e:
        print 'birthday not set'

    #地区
    try:
        area = content.find(id='head-box').find('dd').find('div', attrs={'class': 'inf s-fc3'}).find('span').string
        area = area.split('：')
        area = area[1].split('-')
        info['province'] = area[0].strip()
        info['city'] = area[1].strip()
        # print info['province'].encode("GB18030")
        # print info['city'].encode("GB18030")
    except Exception as e:
        print 'area not set'

    #累计听歌数
    total= content.find(id='rHeader').find('h4').string
    info['total'] = total[4:-1]
    # print info['total']

    return info

if __name__ == '__main__':
    print getUserInfo(59986101)