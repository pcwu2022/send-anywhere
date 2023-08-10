FROM node:ubuntu
COPY . /send-anywhere
CMD npm run build; npm run start