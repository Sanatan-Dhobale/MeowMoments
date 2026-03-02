
const btn = document.querySelector("button");
const catImageAPI = "live_RQLhhHiJfJcJcHLtVD7i471V33ciAdisiBp9gigDBZLRnsfXFu6f2BwZh2jmdE7h";
let factArea = document.querySelector(".fact p");
let catName = document.querySelector(".name");
let wikiLink = document.querySelector(".info");
let catImage = document.querySelector("#catImage");

async function genFact() {
    let response = await fetch("https://catfact.ninja/fact");
    let data = await response.json();
    factArea.innerHTML = data.fact;
    console.log("Hey fact");
    console.log(data.fact);
}

async function catImg() {
    let response = await fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1",
        {
            headers: {
                "x-api-key": catImageAPI
            }
        });
    let data = await response.json();
    catName.innerHTML = `<p>Name: ${data[0].breeds[0].name}</p>`
    wikiLink.innerHTML = `<a href="${data[0].breeds[0].wikipedia_url}">More about ${data[0].breeds[0].name}</a>`

    catImage.src = data[0].url;
    console.log(data[0].url);
    genFact();
}

catImg();

btn.addEventListener("click", ()=>{
    catImg();
});

