#制定node镜像的版本
FROM node:8.9-alpine

#移动当前目录下面的文件到app目录下
ADD . /app/
#进入到app目录下面，类似cd
WORKDIR /app
#安装依赖
RUN npm i --registry=https://registry.npm.taobao.org
# 暴露容器端口
EXPOSE 9001
# 启动node应用
CMD npm run dev

