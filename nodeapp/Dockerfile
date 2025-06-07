#To grab the NodeJS base image
FROM node:18

#To create the application work directory
WORKDIR /app

#TO copy the application files
COPY package.json .

#TO copy the modified index.js file
COPY index.js .

#Install NPM
RUN npm install

#Expose the port to access the site from web browser
EXPOSE 3000

#To start application
CMD [ "npm", "start" ]
