# build stage
FROM node:16.14.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
USER nobody

# production stage
FROM nginx:1.20.2-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
USER nobody
CMD ["nginx", "-g", "daemon off;"]