#!/usr/bin/python
# -*- coding: UTF-8 -*-

import logging

#获取IP
def getIP(filename='./proxy/music_163.txt'):
    fp = open(filename,'r')
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
