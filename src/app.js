/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  pronoun.forEach(pronounElement => {
    adj.forEach(adjElement => {
      noun.forEach(nounElement => {
        console.log(pronounElement + adjElement + nounElement + ".com");
      });
    });
  });
};
