FROM node:12.16.1-alpine AS build

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

COPY /dist ./app

RUN npm config set unsafe-perm true
RUN npm install
RUN npm install -g typescript
RUN npm install -g ts-node
USER node
RUN npm run build

EXPOSE 6001
CMD ["node", "dist/app.js"]