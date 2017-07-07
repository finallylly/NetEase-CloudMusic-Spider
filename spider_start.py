# -*- coding: utf-8 -*-
import music_mysql
import comment
import user
import thread
import time

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

# 添加想要抓取的歌曲的ID
songs_name_data = [582670]
# songs_name_data = [30070095,1859874,582670]
# songs_name_data = [4922660,28445796,22642420,785902,96676,28977373,582670,31010794,27808169,18861490,32217265,532802,586299,730631,4332303,35476883,450048216,29431066,30814948,32217106,30462689,28535311,393685,2919622,22636878,17110575,38358214,27676089,29436904,209115,463718,29571244,27789013,350127,28053533,25638306,31209775,297752,22742166,167804,16426514,530507,18374823,417595364,28285910,79938,5264843,5051250,409654891,22831286,406475394,731250,25731432,297748,27804029,29771436,28923458,22844535,34923114,16426485,27955653,416385506,28157586,402070928,350760,22742146,406238,406475388,27733284,1919371,5041667,28870102,624670,21948131,299116,29047169,103693,4173190,31284040,22688487,31445554,28949446,31445772,28996642,2175282,4341314,22707008,3413895,410042104,408814900,25862794,29947420,28639182,31191275,33911781,28793052,17753288,3026369]
# songs_name_data = [446945324, 417596830]


for x in xrange(1,11):
    exec("data%s = []" %(x))


def spider_start():
    # 遍历想要爬取的歌曲，并将其（id,name,comment）添加到user_comment数据中
    # for id in songs_name_data:
        # comment.get_comment(id)
    # 从user_comment数据库中获取用户的个人（id，name）

    user_data = music_mysql.get_user_id_mysql()
    # 遍历得到的用户数据，并将其的（id，name，听歌排行中的前100首）歌添加到user_love_songs数据库中
    
    count = 0
    for user_data in user_data:
        count = count+1
        for x in xrange(1,11):
            x = x%10
            exec("if count%10==1:data%s.append(user_data)" %(1))
        
        # if count%10==2:
        #     data2.append(user_data)
        # if count%10==3:
        #     data3.append(user_data)
        # if count%10==4:
        #     data4.append(user_data)
        # if count%10==5:
        #     data5.append(user_data)
        # if count%10==6:
        #     data6.append(user_data)
        # if count%10==7:
        #     data7.append(user_data)
        # if count%10==8:
        #     data8.append(user_data)
        # if count%10==9:
        #     data9.append(user_data)
        # if count%10==0:
        #     data10.append(user_data)
        
        # uid = user_data['id']
        # song_id = user_data['song_id']
        # user_name = user_data['name']
        # if song_id==582670:
        #     user.get_user_music(uid, song_id, user_name)

# 为线程定义一个函数
def calculate(data):
    for user_data in data:
        uid = user_data['id']
        song_id = user_data['song_id']
        user_name = user_data['name']
        if song_id==582670:
            user.get_user_music(uid, song_id, user_name)

if __name__ == '__main__':
    spider_start()

    # print len(data1)
    # print len(data2)
    # print len(data3)
    # print len(data4)
    # print len(data5)
    # print len(data6)
    # print len(data7)
    # print len(data8)
    # print len(data9)
    # print len(data10)
    
    # 创建两个线程
    try:
        thread.start_new_thread( calculate, (data1, ) )
        thread.start_new_thread( calculate, (data2, ) )
        thread.start_new_thread( calculate, (data3, ) )
        thread.start_new_thread( calculate, (data4, ) )
        thread.start_new_thread( calculate, (data5, ) )
        thread.start_new_thread( calculate, (data6, ) )
        thread.start_new_thread( calculate, (data7, ) )
        thread.start_new_thread( calculate, (data8, ) )
        thread.start_new_thread( calculate, (data9, ) )
        thread.start_new_thread( calculate, (data10, ) )
    except:
       print "Error: unable to start thread"

    while 1:
       pass