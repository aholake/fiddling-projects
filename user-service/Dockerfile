FROM node:16-alpine
COPY . /app
WORKDIR /app
RUN npm install &&\
    npm run compile
ENTRYPOINT ["node", "./build/src"]
