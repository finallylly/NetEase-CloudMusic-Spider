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
BASE_URL = 'http://www.xicidaili.com/nt/'
BASE_URL = 'http://www.xicidaili.com/wt/'

URL_LIST = ['http://www.xicidaili.com/nn/','http://www.xicidaili.com/nt/','http://www.xicidaili.com/wt/']

# Total_Page = 2290
Total_Page = 2290

headers = {
'User-Agent':'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Mobile Safari/537.36',
'Connection':'close'
}

proxy = 'http://113.79.75.149:9797'
proxies = {'http':proxy}

req = requests.Session()
req.keep_alive = False
requests.adapters.DEFAULT_RETRIES = 0

#IP获取
def getProxy():
    cur_page = 1
    count = 0
    while cur_page <= Total_Page:
        for BASE_URL in URL_LIST:
            url = BASE_URL+str(cur_page)
            try:
                s = req.get(url, headers=headers, proxies=proxies, verify=False, timeout=2)
                print s
                # s = req.get(url, headers=headers)

                soup = BeautifulSoup(s.content)
                ips = soup.select('#ip_list tr')
                for i in ips[1:]:
                    ipp = i.select('td')
                    ip = ipp[1].text
                    port = ipp[2].text
                    msg = ip + '\t' + port + '\n'
                    result = test_useful(ip, port)
                    if result==True:
                        fp = open('host.txt','a')
                        fp.write(msg)
                        fp.close()

                        count+=1
                        print "count="+str(count)
                        print BASE_URL, "cur_page=",cur_page
            except Exception as e :
                # print i.encode('GB18030')
                print ('no ip !')
                print e
            print BASE_URL, "cur_page=",cur_page, 'done'
        cur_page+=1

    print 'done'

#IP测试
def test_useful(ip, port):
    # url = 'https://www.baidu.com'
    # url = 'http://www.jianshu.com/p/1a7358890b15'
    url = 'http://music.163.com'

    proxy = 'http://' +  ip+ ':' + port
    proxies = {'http':proxy}
    try :
        s = req.get(url, headers=headers, proxies=proxies, verify=False, timeout=5)
        if s.status_code==200:
            print s
            return True
        else:
            print 'lose'
    # except requests.exceptions.ConnectionError as e:
    except Exception as e:
        print 'e'

    return False


if __name__ == '__main__':

    getProxy()

    # http://www.jianshu.com/p/ebf2e5b34aad
    # http://www.jianshu.com/p/b6ca3deff350
    # https://www.zhihu.com/question/47464143
