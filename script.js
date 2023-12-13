const accessKey = "X3kRI7y58BapVf38-p7vg9OjjwEvaS-jL2HEt_GSZJQ";

const searchForm = document.querySelector("#search-form")
const searchBox = document.querySelector("#search-box")
const searchResult = document.querySelector("#search-result")
const showMoreBtn = document.querySelector("#show-more-btn")
// document.querySelector("search-form")


let keyword = '';
let page = 1;

async function searchImage(){
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url)
  const data = await response.json();

  const results = data.results;

  results.map((result) =>{
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  })
  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  page = 1;
  searchImage();
})

showMoreBtn.addEventListener("click", ()=>{
  page++;
  searchImage();
})