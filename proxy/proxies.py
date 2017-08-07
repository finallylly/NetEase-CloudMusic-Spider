# -*- coding: utf-8 -*-
import requests
import json
import os
from bs4 import BeautifulSoup

import warnings
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
warnings.filterwarnings("ignore")

BASE_URL = 'http://www.xicidaili.com/nn/'

# Total_Page = 2290
Total_Page = 2290

headers = {'User-Agent':'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Mobile Safari/537.36'}

# proxy = 'http://27.211.105.206:8118'
# proxies = {'http':proxy}

req = requests.Session()

#IP获取
def getProxy():
    cur_page = 1
    fp = open('host.txt','w')
    while cur_page <= Total_Page:
        url = BASE_URL+str(cur_page)

        # s = req.get(url, headers=headers, proxies=proxies, verify=False)
        s = req.get(url, headers=headers)

        soup = BeautifulSoup(s.content)
        ips = soup.select('#ip_list tr')
        for i in ips[1:]:
            try:
                ipp = i.select('td')
                ip = ipp[1].text
                port = ipp[2].text
                msg = ip + '\t' + port + '\n'
                result = test_useful(ip, port)
                if result==True:
                    fp.write(msg)
            except Exception as e :
                print i.encode('GB18030')
                print ('no ip !')
        print 'cur_page='+str(cur_page)
        cur_page+=1
    fp.close()

    print 'done'

#IP测试
def test_useful(ip, port):
    url = 'https://www.baidu.com'
    proxy = 'http://' +  ip+ ':' + port
    proxies = {'http':proxy}
    try :
        s = req.get(url, headers=headers, proxies=proxies, verify=False)
        if s.status_code==200:
            print s
            return True
        else:
            print 'lose'
    except Exception as e:
        print e

    return False


if __name__ == '__main__':

    getProxy()

    # http://www.jianshu.com/p/ebf2e5b34aad
    # http://www.jianshu.com/p/b6ca3deff350
    # https://www.zhihu.com/question/47464143
