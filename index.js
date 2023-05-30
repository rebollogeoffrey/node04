require("dotenv").config();

const { MY_NAME, MY_CITY, MY_LANGUAGE } = process.env;

console.log(`Voici la premiere valeur ${MY_NAME}, puis la deuxieme ${MY_CITY} et attention la derniere : ${MY_LANGUAGE}`);