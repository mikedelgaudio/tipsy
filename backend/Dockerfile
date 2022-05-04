FROM node:16.14.2-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY /dist .
EXPOSE 3001
USER nobody
CMD [ "npm", "start" ]