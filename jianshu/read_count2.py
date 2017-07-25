#!/usr/bin/python
# -*- coding: UTF-8 -*-

import requests
import threading
import time
 
# header
headers = {'Referer': 'http://www.jianshu.com/p/1a7358890b15'}
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
            response = requests.post(url, headers=headers, data=user_data)
        except Exception as e:
            passes+=1
            print 'pass:'+str(passes)

        count+=1
        if count%100==0:
            print count

        counter -= 1

def runThread():
    for x in xrange(1,500):
        # 创建新线程
        exec("thread%s = myThread(%s, 'Thread-%s', 1)" %(x,x,x))
        # 开启新线程
        exec("thread%s.start()" %(x))
        # 添加线程到线程列表
        exec("threads.append(thread%s)" %(x))
    
 
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
    print "Total:"+str(count*50000)+"\n"
    count += 1

    runThread()
