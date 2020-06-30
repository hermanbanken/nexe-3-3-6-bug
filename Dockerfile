FROM node:12-alpine
COPY package.json package-lock.json index.js ./
RUN npm ci
RUN npm run build
CMD /bin
