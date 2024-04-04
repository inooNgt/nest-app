## mysql

```
mysqladmin -u root password "0000000" #设置用户密码
mysql -u root -p #登录
```

检查MySQL服务器是否启动：
```
ps -ef | grep mysqld
```

### MySQL 用户设置

```sql
use mysql;
INSERT INTO user 
          (host, user, password, 
           select_priv, insert_priv, update_priv) 
           VALUES ('localhost', 'guest', 
           PASSWORD('guest123'), 'Y', 'Y', 'Y');
FLUSH PRIVILEGES;
```