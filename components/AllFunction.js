const navbar =()=>{
    return `<a href="index.html">Home</a>
    <input type="text" id="search_input">`
}

const searchNews = ()=>{
let InputWord = document.getElementById("search_input").value
console.log(InputWord)

getdata(InputWord)
}


function searchbycounty(){
    event.preventDefault()
    console.log(this.id);
    getdata1(this.id)

}

const getdata = async (query)=>{
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
        let result =  await res.json()
        console.log(result);
        // append2(result.articles)
        localStorage.setItem("word",JSON.stringify(result))
        window.location.href="search.html"
    } catch (error) {
        console.log(error);
    }
}

const getdata1 = async (country)=>{
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`)
        let result =  await res.json()
        console.log(result.articles);
        append1(result.articles)
    } catch (error) {
        console.log(error);
    }
}

const append1 = (data) =>{
    document.getElementById("results").innerHTML=null

data.map(function(ele){
    console.log(ele);

    let div =document.createElement("div")
    div.setAttribute("class","news")
    let image = document.createComment("img")
    image.src=ele.source.urlToImage
    
    let titale = document.createElement("h3")
    titale.innerText=ele.title
    let disc = document.createElement("p")
    disc.innerHTML=ele.description
    
    div.append(image, titale, disc)
    document.getElementById("results").append(div)
})

    
}






// document.getElementById("search_input").addEventListener("input", searchNews)


export {navbar, searchNews, searchbycounty}