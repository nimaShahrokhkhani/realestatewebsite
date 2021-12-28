FROM node:16 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install -g npm@latest
RUN npm install --legacy-peer-deps

COPY . ./
RUN npm run build

