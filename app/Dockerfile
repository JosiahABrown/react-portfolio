FROM node:alpine
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# install app dependencies
COPY ./package*.json ./
RUN npm install

# add app
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]