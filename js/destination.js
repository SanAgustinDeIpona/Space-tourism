import {ajax} from './ajax.js';

export function destination(){

    const $ = (element)=> document.querySelector(element);
    const $main = $('.main');
    let dataDestinations = [];

    //para obtener los datos de destination en data.json

    ajax({
    url: "./data.json",
    cdSuccess: async function(data){
        dataDestinations = await Array(JSON.parse(data))[0]["destinations"];
        
    },
    error: function(error){ 
        console.log(error);
    }
    }); 

    const renderedDestination = (desti = 0)=>{

    const $img = $(".destination__img"),
        $place = $(".destination__place"),
        $content = $(".destination__content"),
        $distance = $(".destination__distance"),
        $time = $(".destination__time");

    let mars = dataDestinations[desti]; 
    $img.src = mars.images.png;
    $place.innerText = mars.name.toUpperCase();
    $content.innerText = mars.description;
    $distance.innerText = mars.distance.toUpperCase();
    $time.innerText = mars.travel.toUpperCase();
    }

    /*para mostrar el contenido de destination */
    ajax({
        url: "html/destination.html",
        cdSuccess: async function(data){
            $main.innerHTML = await data;
            renderedDestination();
        },
        error: function(error){ 
            console.log(error);
        }
    });

    document.addEventListener("click", (e)=>{
        if(e.target.classList.contains("destination__link"))
        {
            const destinationLink = document.querySelectorAll(".destination__link");
            renderedDestination(e.target.getAttribute("destination"));
            
            destinationLink.forEach(link =>{
                link.classList.remove("destination__link--active");
            });

            e.target.classList.add("destination__link--active");
        }
    });
}