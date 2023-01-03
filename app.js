const container = document.querySelector("#photos");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".images");
const input = document.querySelector("input")

container.addEventListener("click", function (e){
    var id = e.target.dataset.id;
    if(id == id){
        btns.forEach(function (btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        })
        articles.forEach(function(article){
            article.classList.remove("active");
        })
        const element = document.getElementById(id)
        element.classList.add("active")
    }
});

input.addEventListener("keyup", display);

function display (){
    localStorage.setItem("value", input.value);
}


const sessionStorage = [
    {name: "Arber"},
    {name: "Atdhe"}
]

function ss (){
    sessionStorage.setItem("name", "Arber")
}