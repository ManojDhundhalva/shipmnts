FROM node:22

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY src ./src

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "start"]