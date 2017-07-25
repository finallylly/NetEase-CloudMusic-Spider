#!/usr/bin/python
# -*- coding: utf-8 -*-

import requests
import thread
import time

# header
headers = {'Referer': 'http://www.jianshu.com/p/1a7358890b15'}
# user_data
user_data = {'uuid':'b3a9e7fd-f0e1-40ce-adb9-d0cb61796880'}
# url
url = 'http://www.jianshu.com/notes/1a7358890b15/mark_viewed.json'

data = []
count = 0
passes = 0 

def calculate():
    global count,passes
    while 1:
        '''抛异常,不然网络不好的话,post会报错,导致所属进程终止运行,
        当所有进程都被终止了,程序也就不会生效了'''
        try:
            response = requests.post(url, headers=headers, data=user_data)
        except Exception as e:
            passes+=1
            print 'pass:'+str(passes)
        
        count+=1
        if count%100==0:
            print count

def runThread():
    for x in xrange(1,50):
        thread.start_new_thread( calculate, () )

if __name__ == '__main__':
    # 创建新线程
    try:
        runThread()
    except:
        print "Error: unable to start thread"

    while 1:
        time.sleep(1)
        pass