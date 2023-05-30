FROM node:10.16.3-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD npm run start-docker