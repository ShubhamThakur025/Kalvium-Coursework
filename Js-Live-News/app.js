let newsBtn = document.getElementById('btn-news')
let newsBoard = document.querySelector('.bulletin')

newsBtn.onclick = () =>{
    newsBoard.style.display = 'block'
    newsBoard.scrollIntoView({ behavior: 'smooth' });
}

//Progression 1: create a function and fetch the api using axios
let newsBox = document.getElementById('news-box')
function getNews() {
    axios
        .get("https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=08c1985584ce857fa6cbde7e86a373c5")
        .then((response) => {
            console.log(response.data)
            createNews(response.data.articles)
        })
        .catch((error) => {
            console.log(error)
        })

function createNews(newsCollection) {
    newsCollection.forEach(element => {
        newsBox.innerHTML += `
        <div id="news-card">
      <h3 class="title">${element.title}</h3>
      <div class="img-card">
      <img src = ${element.image} class = "image">
      </div>
      <p class="news-desc">${element.content}</p>
    </div>
        `
    });
}}
getNews()