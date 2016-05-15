FROM nodesource/node:4.0

RUN npm install -g typings
RUN npm install -g gulp-cli
ADD package.json package.json 
ADD typings.json typings.json
RUN npm install
RUN typings install

ADD . .
RUN gulp ts

EXPOSE 3000 

CMD ["node", "bin/www"]
