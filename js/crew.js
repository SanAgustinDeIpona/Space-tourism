import {ajax} from './ajax.js';

export function crew(){
    const $ = (element)=> document.querySelector(element);
    const $main = $('.main');
    let dataDestinations = [];

        //para obtener los datos de crew en data.json

        ajax({
            url: "./data.json",
            cdSuccess: async function(data){
                dataDestinations = await Array(JSON.parse(data))[0]["crew"];
                
            },
            error: function(error){ 
                console.log(error);
            }
            });

        /*para mostrar el contenido de destination */
        ajax({
            url: "html/crew.html",
            cdSuccess: async function(data){
                $main.innerHTML = await data;
                renderedCrew();
            },
            error: function(error){ 
                console.log(error);
            }
        });

        
    const renderedCrew = (desti = 0)=>{

        const $img = $(".crew__img"),
            $position = $(".crew__position"),
            $name = $(".crew__name"),
            $description = $(".crew__description");
    
        let mars = dataDestinations[desti]; 
        $img.src = mars.images.png;
        $position.innerText = mars.role.toUpperCase();
        $name.innerText = mars.name.toUpperCase();
        $description.innerText = mars.bio;
    }

    document.addEventListener("click", (e)=>{
        if(e.target.classList.contains("crew__next")){
            const next = document.querySelectorAll(".crew__next");

            next.forEach(item =>{
                item.classList.remove("crew__next--active");
            });

            e.target.classList.add("crew__next--active");
            renderedCrew(e.target.getAttribute("crew-next"));
        }
    });
}