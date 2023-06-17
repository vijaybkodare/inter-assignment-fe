FROM node:lts as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/shar/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

CMD ["npm", "run", "start"]