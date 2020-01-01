import parseDomain from "parse-domain";
import oneCookbooks from "./101cookbooks";
import allrecipes from "./allrecipes";
//import ambitiouskitchen from "./ambitiouskitchen";
import bbc from "./bbc";
import bbcgoodfood from "./bbcgoodfood";
import bonappetit from "./bonappetit";
import budgetbytes from "./budgetbytes";
//import closetcooking from "./closetcooking";
import cookieandkate from "./cookieandkate";
//import copykat from "./copykat";
//import damndelicious from "./damndelicious";
import eatingwell from "./eatingwell";
import epicurious from "./epicurious";
import finecooking from "./finecooking";
import food from "./food";
import foodandwine from "./foodandwine";
import foodnetwork from "./foodnetwork";
import gimmesomeoven from "./gimmesomeoven";
import myrecipes from "./myrecipes";
import seriouseats from "./seriouseats";
import simplyrecipes from "./simplyrecipes";
import smittenkitchen from "./smittenkitchen";
import thepioneerwoman from "./thepioneerwoman";
//import therealfoodrds from "./therealfoodrds";
import thespruceeats from "./thespruceeats";
import whatsgabycooking from "./whatsgabycooking";
//import woolworths from "./woolworths.js";
//import yummly from "./yummly";

const domains = {
  "101cookbooks": oneCookbooks, //broken
  allrecipes, //broken
  //ambitiouskitchen,
  bbc, //broken
  bbcgoodfood, //broken
  bonappetit, //broken
  budgetbytes, //broken
  //closetcooking,
  cookieandkate, //broken
  //copykat,
  //damndelicious,
  eatingwell, //broken
  epicurious, //time doesnt work
  finecooking, //broken
  food, //broken
  foodandwine, //broken
  foodnetwork, //WORKS
  gimmesomeoven, //broken
  myrecipes, //broken
  seriouseats, //broken
  simplyrecipes, //broken
  smittenkitchen, //broken
  thepioneerwoman, //broken
  //therealfoodrds,
  thespruceeats, //broken
  whatsgabycooking //broken
  //woolworths,
  //yummly
};

const recipeScraper = url => {
  let domain = parseDomain(url).domain;
  return new Promise((resolve, reject) => {
    if (domains[domain] !== undefined) {
      resolve(domains[domain](url));
    } else {
      reject(new Error("Site not yet supported"));
    }
  });
};

export default recipeScraper;
