FROM node:23

#Sets the working directory inside the container to /app.
WORKDIR /

#Copies package.json and package-lock.json (or yarn.lock, depending on the package manager) from your local system to the working directory (/app) inside the container.
COPY package*.json ./

RUN yarn

#Copies all the application source code from the current directory on your local system to the working directory (/app) inside the container.
COPY . .

#ENV NODE_VERSION 23.6.0

RUN yarn build

CMD ["yarn", "start"]