FROM node:5.9

RUN npm install -g node-inspector
RUN npm install -g pm2

RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY package.json /home/node/app/
RUN npm install

COPY . /home/node/app/.

RUN chmod +x /home/node/app/docker-entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["/home/node/app/docker-entrypoint.sh"]
