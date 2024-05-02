FROM node:22-alpine3.18 as builder

WORKDIR /app/
#copy necessary files
COPY public/ /app/public
COPY src/ /app/src
COPY package.json/ /app/
COPY .env.production /app/

RUN npm install
RUN npm run build

FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

RUN rm -rf /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy build from Stage 1
COPY --from=builder /app/build /usr/share/nginx/html
    
# Start nginx
CMD ["nginx", "-g", "daemon off;"]