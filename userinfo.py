# -*- coding: utf-8 -*-
import requests
import time
import random
from bs4 import BeautifulSoup

import warnings
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
warnings.filterwarnings("ignore")

sys.path.append('proxy')
import ipMap

_session = requests.session()
_session = requests.Session()
_session.keep_alive = False
requests.adapters.DEFAULT_RETRIES = 0

#代理IP
proxies = ipMap.getIP('./proxy/music_163.txt')

BASE_URL = 'http://music.163.com/user/home?id='

def getUserInfo(uid=59986101):
    #初始化
    info = {'sex':0, 'birthday':'', 'province':0, 'city':0, 'total':0, 'status':1}
    #url
    url = BASE_URL+str(uid);
    
    #确保代理爬虫正常
    code = 0
    while code!=200:
        try:
            #获取内容
            # response = _session.post(url, headers=headers, data=data, proxies=random.choice(proxies), verify=False, timeout=2)
            response = _session.get(url, proxies=random.choice(proxies), verify=False, timeout=2)
            soup = BeautifulSoup(response.content)
            content = soup.find('div', attrs={'class': 'g-bd'})
            code = response.status_code
        except Exception as e:
            print "userinfo error: proxy ip invalid | no json"

    # soup = BeautifulSoup(_session.get(url).content)
    # content = soup.find('div', attrs={'class': 'g-bd'})

    # 性别
    try:
        sex1 = content.find(id='j-name-wrap').find('i', attrs={'class': 'u-icn-01'})
        sex2 = content.find(id='j-name-wrap').find('i', attrs={'class': 'u-icn-02'})
        if sex1!=None:
            info['sex']  = '男'
        elif sex2!=None:
            info['sex']  = '女'
        else:
            info['sex'] = 0
        # print "sex="+str(info['sex'])
    except Exception as e:
        print 'sex not set'

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
    try:
        total= content.find(id='rHeader').find('h4').string
        info['total'] = total[4:-1]
        # print info['total']
    except Exception as e:
        print 'total not set'

    return info

if __name__ == '__main__':
    print getUserInfo(59986101)