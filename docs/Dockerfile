# ---- build stage ----
FROM node:22-alpine AS build
WORKDIR /app/docs

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- runtime stage ----
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/docs/build /usr/share/nginx/html

EXPOSE 80