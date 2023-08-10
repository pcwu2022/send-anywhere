FROM node:alpine
COPY . /send-anywhere
WORKDIR /send-anywhere
CMD npm run build; npm run start