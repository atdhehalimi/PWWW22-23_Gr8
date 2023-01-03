const container = document.querySelector("#photos");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".images");

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



// local storage

const input = document.querySelectorAll("input")

input.addEventListener("keyput", function display (){
    localStorage.setItem("value", input.value);
});


// html api geolocation

var x = document.getElementById("demo");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML = "Gjatesia: " + position.coords.latitude + 
//   "<br>Gjeresia: " + position.coords.longitude;
// }





var x = document.getElementById("Test");

function getLocation() {
    //Check if Geolocation is supported 
    if (navigator.geolocation) {
	  //If supported, run the getCurrentPosition() method
	  //If the getCurrentPosition() method is successful, it returns a coordinates object to the function specified in the parameter (showPosition)
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
	  //If not, display a message to the user
        x = "Geolocation is not supported by this browser.";
    }
}

//The showPosition() function outputs the Latitude and Longitude
function showPosition(position) {
    x = "Latitude: " + position.coords.latitude + 
    "Longitude: " + position.coords.longitude;

    alert(x)
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
}}

// form validation



// background change