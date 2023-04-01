FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19.0-alpine
COPY --from=build /app/dist/reminder-app /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
