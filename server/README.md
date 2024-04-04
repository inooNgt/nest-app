## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

### server

root Di.16

#### mysql

```
sudo service mysql start
sudo service mysql stop
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf  -> bind_address 0.0.0.0
sudo service mysql restart
sudo mysql -u root -p 登录
#创建一个名为username且密码是123456的用户@%表示所有的ip地址都可以用这个用户名连接
CREATE USER 'username'@'%' IDENTIFIED BY '123456';
#赋予相应的权限 *.*代表所有的数据库都可以访问
grant all on *.* to 'username'@'%';
flush privileges;



use mysql;
#将Host设置为通配符%。Host设置了“%”后便可以允许远程访问
update user set host = "%"" where user ="root";
# 使配置立即生效
flush privilegs;
```

初始化数据库表：

```
# 运行迁移
npm run typeorm migration:run
# 还原迁移
npm run typeorm migration:revert
# 同步数据库架构，需要将带有破折号的参数传递给 npm 脚本，则需要在--之后添加
npm run typeorm schema:sync -- --dataSource "src/data-source.ts"
# 完全删除数据库架构
npm run typeorm schema:drop



# sequelize 数据库变更
npx sequelize db:migrate
# 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
# npx sequelize db:migrate:undo
# 回退到初始状态
# npx sequelize db:migrate:undo:all

```

#### ufw

```
sudo apt-get install ufw 安装ufw
sudo ufw enable 启用
sudo ufw reload 重启
sudo ufw status 查看状态
sudo ufw allow 80 允许外部访问80端口
sudo ufw delete allow 80 禁止外部访问80 端口
sudo ufw allow from 192.168.1.1 允许此IP访问所有的本机端口
sudo ufw deny smtp 禁止外部访问smtp服务
sudo ufw delete allow smtp 删除上面建立的某条规则
```

### RESTful 风格的 URL 定义

Router Controller 映射关系：

Method Path Route Name Controller.Action
GET /posts posts controller.posts.index
GET /posts/new new_post controller.posts.new
GET /posts/:id post controller.posts.show
GET /posts/:id/edit edit_post controller.posts.edit
POST /posts posts controller.posts.create
PUT /posts/:id post controller.posts.update
DELETE /posts/:id post controller.posts.destroy
