# Etapa 1: Construcción
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

# Etapa 2: Servidor Nginx para OpenShift
FROM nginxinc/nginx-unprivileged:alpine
# Usamos comodines para que busque los archivos dentro de cualquier subcarpeta de dist
COPY --from=build /app/dist/citas-servicio-app/browser/. /usr/share/nginx/html/.
# Por si acaso no existe la carpeta browser, intentamos también la raíz del dist
COPY --from=build /app/dist/citas-servicio-app/. /usr/share/nginx/html/.

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]