# -*- coding: utf-8 -*-
import music_mysql
import comment
import user
import userinfo
import thread
import time
import varmain as vm

import warnings
import sys
reload(sys)

sys.setdefaultencoding('utf-8')
warnings.filterwarnings("ignore")

# BASE_SONG_ID = 582670

# 添加想要抓取的歌曲的ID
# songs_name_data = [BASE_SONG_ID]
# songs_name_data = [30070095,1859874,582670]
# songs_name_data = [4922660,28445796,22642420,785902,96676,28977373,582670,31010794,27808169,18861490,32217265,532802,586299,730631,4332303,35476883,450048216,29431066,30814948,32217106,30462689,28535311,393685,2919622,22636878,17110575,38358214,27676089,29436904,209115,463718,29571244,27789013,350127,28053533,25638306,31209775,297752,22742166,167804,16426514,530507,18374823,417595364,28285910,79938,5264843,5051250,409654891,22831286,406475394,731250,25731432,297748,27804029,29771436,28923458,22844535,34923114,16426485,27955653,416385506,28157586,402070928,350760,22742146,406238,406475388,27733284,1919371,5041667,28870102,624670,21948131,299116,29047169,103693,4173190,31284040,22688487,31445554,28949446,31445772,28996642,2175282,4341314,22707008,3413895,410042104,408814900,25862794,29947420,28639182,31191275,33911781,28793052,17753288,3026369]
# songs_name_data = [446945324, 417596830]

tlist=[]
for x in range(1,16):
    tlist.append(x)
    exec("data%s = []" %(x))  #uid
    exec("sec_data%s = []" %(x)) #auto_id uid
tlen = len(tlist)

user_data = 0
count = 0

def get_comment(begin=0):
    print vm.comment_done
    # 遍历想要爬取的歌曲，并将其（id,name,comment）添加到user_comment数据中
    for id in songs_name_data:
        comment.get_comment(id, 10, begin)

    while 1:
        # print vm.comment_done
        if vm.comment_done==-1:
            break
        else:
            pass
#####################################################################################
def split_uid(song_id):
    # 从user_comment数据库中获取用户的个人（id，name）
    global user_data, count
    user_data = music_mysql.get_user_id_mysql(song_id)
    #获取已存在love song用户ID
    existUID = music_mysql.get_love_song_uid_mysql(song_id)

    # 遍历得到的用户数据，并将其的（id，name，听歌排行中的前100首）歌添加到user_love_songs数据库中
    count = 0
    for udata in user_data:
        #用户信息已入库 continue
        if udata['id'] in existUID:
            continue
        else:
            print udata['id']

        count = count+1
        for x in tlist:
            exec("if %s==%s:data%s.append(udata)" %(count%tlen,x%tlen,x))
    

        # uid = udata['id']
        # song_id = udata['song_id']
        # user_name = udata['name']
        # if song_id==BASE_SONG_ID:
        #     user.get_user_music(uid, song_id, user_name)

# 为线程定义一个函数
def calculate(data):
    for udata in data:
        uid = udata['id']
        song_id = udata['song_id']
        user_name = udata['name']
        if song_id==BASE_SONG_ID:
            user.get_user_music(uid, song_id, user_name)
        vm.top_100_done += 1
        # if vm.top_100_done%100==0:
        #     print 'top_100_done='+str(vm.top_100_done)
        #     time.sleep(1)

def get_top_100():
    for x in tlist:
        exec("print len(data%s)" %(x))

    # 创建新线程
    try:
        for x in tlist:
            exec("thread.start_new_thread( calculate, (data%s, ) )" %(x))
            pass
    except:
        print "Error: unable to start thread"

    while 1:
        if vm.top_100_done==count:
            print "===================================="
            print "top_100_done=" + str(vm.top_100_done)
            print "===================================="
            break
        else:
            # print vm.top_100_done, len(user_data)
            pass

#################################################################################################
#数据分组
def split_uinfo():
    global user_data, count
    user_data =  music_mysql.get_id_uid_mysql(BASE_SONG_ID)
    count = 0
    for udata in user_data:
        count = count+1
        for x in tlist:
            exec("if %s==%s:sec_data%s.append(udata)" %(count%tlen,x%tlen,x))

def upinfo(data):
    for udata in data:
        auto_id = udata['auto_id']
        uid = udata['id']
        info=userinfo.getUserInfo(uid)
        music_mysql.up_info_mysql(auto_id, info)
        vm.userinfo_done += 1
        print "update id:" + str(auto_id) + " uid:" + str(uid)

def upinfo_thread_start():
    for x in tlist:
        exec("print len(sec_data%s)" %(x))

    # 创建新线程
    try:
        for x in tlist:
            exec("thread.start_new_thread( upinfo, (sec_data%s, ) )" %(x))
            pass
    except:
        print "Error: unable to start thread"

    while 1:
        if vm.userinfo_done==count:
            print "===================================="
            print "userinfo_done=" + str(vm.userinfo_done)
            print "===================================="
            break
        else:
            pass

if __name__ == '__main__':
    if len(sys.argv) <=4  or sys.argv[1] == '--help':
        print('')
        print('Usage: ')
        print('  ' + sys.argv[0] + ' [SongID] [0|1 Comment ] [0|1 LoveSong] [0|1 UserInfo]')
        print('')
        print('Example:')
        print('  ' + sys.argv[0] + ' 582670 1 1 1' )
        print('')
        sys.exit(0)

    # BASE_SONG_ID = 582670
    BASE_SONG_ID = int(sys.argv[1])
    songs_name_data = [BASE_SONG_ID]
    if int(sys.argv[2])==1:
        get_comment(0)  #评论起始条数, 默认读取全部, 补数据可指定起始数
    
    if int(sys.argv[3])==1:
        split_uid(BASE_SONG_ID)
        get_top_100()
        
    if int(sys.argv[4])==1:
        split_uinfo()
        upinfo_thread_start()


    
