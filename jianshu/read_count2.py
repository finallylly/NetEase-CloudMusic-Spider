#!/usr/bin/python
# -*- coding: UTF-8 -*-

import requests
import threading
import time
import random
import logging

#日志模块配置
logging.basicConfig(level=logging.WARN, format='[%(levelname)8s]\t (%(threadName)10s)\t %(message)30s', filename='logger.log')

req = requests.Session()
req.keep_alive = False
requests.adapters.DEFAULT_RETRIES = 0

 
# header
headers = {'Referer': 'http://www.jianshu.com/p/1a7358890b15','Connection':'close'}
# user_data
user_data = {'uuid':'b3a9e7fd-f0e1-40ce-adb9-d0cb61796880'}
# url
url = 'http://www.jianshu.com/notes/1a7358890b15/mark_viewed.json'

data = []
threads = []
count = 0
passes = 0

class myThread (threading.Thread):
    def __init__(self, threadID, name, counter):
        threading.Thread.__init__(self)
        self.threadID = threadID
        self.name = name
        self.counter = counter
    def run(self):
        # print "Starting " + self.name
        print_time(self.name, self.counter, 100)

def print_time(threadName, delay, counter):
    global count,passes
    while counter:
        # time.sleep(delay)
        
        try:
            response = req.post(url, headers=headers, data=user_data, proxies=random.choice(proxies), verify=False, timeout=2)
        except Exception as e:
            passes+=1

        count+=1
        if (count-passes)%10==0:
            logging.warn('worker start：%s'%time.time())
            print 'count:'+str(count)
            print 'pass:'+str(passes)
            print 'success:'+str(count-passes)
            print ''

        counter -= 1


def runThread():
    for x in xrange(1,20):
        # 创建新线程
        exec("thread%s = myThread(%s, 'Thread-%s', 1)" %(x,x,x))
        # 开启新线程
        exec("thread%s.start()" %(x))
        # 添加线程到线程列表
        exec("threads.append(thread%s)" %(x))

#获取IP
def getIP():
    fp = open('../proxy/jianshu.txt','r')
    ips = fp.readlines()
    proxies = list()
    for p in ips:
        ip =p.strip('\n').split('\t')
        my_proxy = 'http://' +  ip[0] + ':' + ip[1]
        proxy = {'http':my_proxy}
        proxies.append(proxy)
    return proxies

if __name__ == '__main__':

    proxies = getIP()

    count = 0
    while count>=0:
        t0 = time.time()

        # 等待所有线程完成
        for t in threads:
            t.join()

        print "Exiting Main Thread"
        t1 = time.time()
        print "time used:"+str(t1-t0)

        print "Starting Main Thread"
        print "Total:"+str(count*2000)+"\n"
        count += 1

        runThread()
