FROM node:15.10.0-slim
RUN npm set registry https://registry.npm.taobao.org

RUN apt-get update
RUN apt-get install -y git