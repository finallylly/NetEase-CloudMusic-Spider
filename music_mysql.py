# -*- coding: utf-8 -*-
import pymysql

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

config = {
    'host': '127.0.0.1',
    'port': 3306,
    'user': 'root',
    'password': 'root',
    'db': 'cloudmusic',
    'charset': 'utf8mb4',
    'cursorclass': pymysql.cursors.DictCursor,
}


# 将用户（id,name,comment）添加到user_comment数据中
def insert_commnet(id, song_id, name, comment):
    # Connect to the database
    db = pymysql.connect(**config)
    # 使用cursor()方法获取操作游标
    cursor = db.cursor()
    # SQL 插入语句
    sql = "INSERT INTO `user_comment`(`id`, `song_id`, `name`, `comment`) VALUES (%s, %s, %s, %s)"
    try:
        # 执行sql语句
        cursor.execute(sql, (id, song_id, name, comment))
        # 提交到数据库执行
        db.commit()
    except Exception as e:
        print '出现错误啦~错误是:'.decode("utf8"), e
        # 如果发生错误则回滚
        db.rollback()
    # 关闭数据库连接
    db.close()

# 更新user_love_songs数据库中用户的个人信息
def up_info_mysql(auto_id, info):
    # Connect to the database
    db = pymysql.connect(**config)
    # 使用cursor()方法获取操作游标
    cursor = db.cursor()
    # SQL 插入语句
    sql = "UPDATE `user_love_songs` SET `sex`='%s', `birthday`='%s', `total`=%s, `province`='%s', `city`='%s', `status`=%s WHERE `auto_id`=%s" %(info['sex'], info['birthday'], info['total'], info['province'], info['city'],  info['status'], str(auto_id))
    try:
        # 执行sql语句
        cursor.execute(sql)
        db.commit()
    except Exception as e:
        print '出现错误啦~错误是:'.decode("utf8"), e
        # 如果发生错误则回滚
        db.rollback()
    # 关闭数据库连接
    db.close()

# 从user_love_songs数据库中获取用户的个人（id）,并返回user_data列表
def get_id_uid_mysql(song_id):
    user_data = []
    # Connect to the database
    db = pymysql.connect(**config)
    # 使用cursor()方法获取操作游标
    cursor = db.cursor()
    # SQL 插入语句
    sql = 'SELECT `auto_id`,`id` FROM `user_love_songs` WHERE `status`=0 AND `song_id`='+str(song_id)
    try:
        # 执行sql语句
        cursor.execute(sql)
        for user in cursor:
            user_id_name = {'auto_id': '0', 'id': '0'}
            user_id_name['auto_id'] = user['auto_id']
            user_id_name['id'] = user['id']
            if user_id_name not in user_data:  #这个效率可能不是很高
                user_data.append(user_id_name)
        # 提交到数据库执行
        db.commit()
        return user_data
    except Exception as e:
        print '出现错误啦~错误是:'.decode("utf8"), e
        # 如果发生错误则回滚
        db.rollback()
    # 关闭数据库连接
    db.close()

# 从user_comment数据库中获取用户的个人（id，name）,并返回user_data列表
def get_user_id_mysql(song_id):
    user_data = []
    # Connect to the database
    db = pymysql.connect(**config)
    # 使用cursor()方法获取操作游标
    cursor = db.cursor()
    # SQL 插入语句
    sql = 'SELECT * FROM `user_comment` WHERE `song_id`=%s and `top100_visible`=1'
    try:
        # 执行sql语句
        cursor.execute(sql, (song_id))
        for user in cursor:
            user_id_name = {'id': '0', 'name': '0'}
            id = user['id']
            song_id = user['song_id']
            name = user['name']
            user_id_name['id'] = id
            user_id_name['song_id'] = song_id
            user_id_name['name'] = name
            if user_id_name not in user_data:
                user_data.append(user_id_name)
        # 提交到数据库执行
        db.commit()
        return user_data
    except Exception as e:
        print '出现错误啦~错误是:'.decode("utf8"), e
        # 如果发生错误则回滚
        db.rollback()
    # 关闭数据库连接
    db.close()

def get_love_song_uid_mysql(song_id):
    uids = set()
    # Connect to the database
    db = pymysql.connect(**config)
    # 使用cursor()方法获取操作游标
    cursor = db.cursor()
    # SQL 插入语句
    sql = 'SELECT `id` FROM `user_love_songs` WHERE `song_id`=%s' %(song_id)
    try:
        # 执行sql语句
        cursor.execute(sql)
        for data in cursor:
            uids.add(data['id'])
        # 提交到数据库执行
        db.commit()
        return uids
    except Exception as e:
        print '出现错误啦~错误是:'.decode("utf8"), e
        # 如果发生错误则回滚
        db.rollback()
    # 关闭数据库连接
    db.close()

# 将其的（id，name，听歌排行中的前100首）歌添加到user_love_songs数据库中
def insert_user(id, song_id, name, info, data):
    # Connect to the database
    db = pymysql.connect(**config)
    # 使用cursor()方法获取操作游标
    cursor = db.cursor()
    # SQL 插入语句
    sql = "INSERT INTO `user_love_songs`(`id`, `song_id`, `name`,`sex`, `birthday`, `total`,`province`, `city`, `status`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`, `21`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`, `37`, `38`, `39`, `40`, `41`, `42`, `43`, `44`, `45`, `46`, `47`, `48`, `49`, `50`, `51`, `52`, `53`, `54`, `55`, `56`, `57`, `58`, `59`, `60`, `61`, `62`, `63`, `64`, `65`, `66`, `67`, `68`, `69`, `70`, `71`, `72`, `73`, `74`, `75`, `76`, `77`, `78`, `79`, `80`, `81`, `82`, `83`, `84`, `85`, `86`, `87`, `88`, `89`, `90`, `91`, `92`, `93`, `94`, `95`, `96`, `97`, `98`, `99`, `100`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    try:
        # 执行sql语句
        cursor.execute(sql, (id, song_id, name, info['sex'], info['birthday'], info['total'], info['province'], info['city'],  info['status'], data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14], data[15], data[16], data[17], data[18], data[19], data[20], data[21], data[22], data[23], data[24], data[25], data[26], data[27], data[28], data[29], data[30], data[31], data[32], data[33], data[34], data[35], data[36], data[37], data[38], data[39], data[40], data[41], data[42], data[43], data[44], data[45], data[46], data[47], data[48], data[49], data[50], data[51], data[52], data[53], data[54], data[55], data[56], data[57], data[58], data[59], data[60], data[61], data[62], data[63], data[64], data[65], data[66], data[67], data[68], data[69], data[70], data[71], data[72], data[73], data[74], data[75], data[76], data[77], data[78], data[79], data[80], data[81], data[82], data[83], data[84], data[85], data[86], data[87], data[88], data[89], data[90], data[91], data[92], data[93], data[94], data[95], data[96], data[97], data[98], data[99]))
        # 提交到数据库执行
        db.commit()
        print('love of:'+str(id))
        # print('name='+name).decode("utf8")
        # print '已经添加到user_love_songs数据中啦'.decode("utf8")
    except pymysql.err.IntegrityError:
        print('id='+str(id))
        print '的用户已经添加到user_love_songs数据库中啦~'.decode("utf8")
    except IndexError:
        #更新top100可见状态
        setUnvisible(id)
        print('id='+str(id))
        print '的用户听的歌并没有超过100首'.decode("utf8")
    except Exception as e:
        print '出现错误啦~错误是:'.decode("utf8"), e
        # 如果发生错误则回滚
        db.rollback()
    # 关闭数据库连接
    db.close()

#更新top100可见状态
def setUnvisible(uid):
    # Connect to the database
    db = pymysql.connect(**config)
    # 使用cursor()方法获取操作游标
    cursor = db.cursor()
    # SQL 插入语句
    sql = "UPDATE `user_comment` SET `top100_visible`=0 WHERE `id`=%s"
    try:
        # 执行sql语句
        cursor.execute(sql, (uid))
        # 提交到数据库执行
        db.commit()
    except Exception as e:
        print '出现错误啦~错误是:'.decode("utf8"), e
        # 如果发生错误则回滚
        db.rollback()
    # 关闭数据库连接
    db.close()
