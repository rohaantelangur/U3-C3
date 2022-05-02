// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar, searchNews, searchbycounty } from "../components/AllFunction.js"
  document.getElementById("navbar").innerHTML=navbar()
  // console.log(navbar());

document.getElementById("search_input").addEventListener("input", searchNews)

let countries = document.getElementById("sidebar").children
// console.log(countries);
for(let element of countries){
  element.addEventListener("click",searchbycounty)
}