"use strict";

window.addEventListener("DOMContentLoaded", async function () {
  let filteredData;
  let out = this.document.querySelector("#out-text");




  async function getData(url) {
    let data;

    try {
      let response = await fetch(url);
      data = await response.json();
    } catch (e) {
      console.log(e);
    }

    return data;
  }



  filteredData = await getData("./translit/symbols.json");
  console.log(filteredData["ru"]);






  function translitSymbols(e) {
    let str = "";
    let text = document.querySelector("#enter-text").value;

    for (let i = 0; i < text.length; i++) {
      let k = text[i];

      if (filteredData["ru"][k] != undefined) {
        str += filteredData["ru"][k];
    
      } else {
        if (filteredData["ru"][k.toLowerCase()]) {
          let small = filteredData["ru"][k.toLowerCase()];
          str += small.toUpperCase();
        }
      }
    }

    out.textContent = str;
  }

  document.querySelector("#enter-text").addEventListener("input", translitSymbols);

  





});


