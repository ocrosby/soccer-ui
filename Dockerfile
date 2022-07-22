# stage 1

FROM node:alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm install npm@latest -g && npm ci --legacy-peer-deps && npm run build:prod

# stage 2

FROM nginx:alpine
# COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf
# COPY ./conf/security-headers.conf /etc/nginx/security-headers.conf
COPY --from=my-app-build /app/dist/soccer-ui /usr/share/nginx/html
EXPOSE 80
