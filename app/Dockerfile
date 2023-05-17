# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH
ENV PATH ./node_modules/.bin:$PATH

# install app dependencies
# COPY ./app/package*.json ./
COPY ./package*.json ./
RUN npm install

# add app
COPY . .

# Expose dev port
EXPOSE 3000

# start app
CMD ["npm", "run", "dev"]
