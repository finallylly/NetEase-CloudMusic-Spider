# NetEase-CloudMusic-Spider


## Introduction
`NetEase-CloudMusic-Spider` is a sipder that you can find beautiful girlfiend or handsome boyfriend.


## Source Code Structure
- js/core.js
- sql/create_sql.sql
- spider_start.py     
- comment.py
- user.py
- music_mysql.py


## Usage method

1. Use `sql/create_sql.sql` to create sql database.
2. Change `musci_mysql.py` database username and password.
3. Add your favorite song ID to the `songs_name_data ` list.
4. Run `spider_start.py`,and wait a few minutes.
5. Open the mysql database,then through the search method to find  user who favorite songs is the same as you.



## References
http://nearby.wang/s_51.html