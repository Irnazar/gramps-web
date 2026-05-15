FROM node:22 AS frontend-build
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM dmstraub/gramps-webapi:latest
COPY --from=frontend-build /build/dist /app/static
LABEL org.opencontainers.image.source="https://github.com/gramps-project/gramps-web"
