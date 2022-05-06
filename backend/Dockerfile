FROM node:16.14.2-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16.14.2-alpine AS runner
WORKDIR /app
EXPOSE 3001
COPY --from=build /app/ .
USER nobody
CMD [ "npm", "start" ]