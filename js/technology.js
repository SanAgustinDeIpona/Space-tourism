import {ajax} from './ajax.js';

export function technology(){
    const $ = (element)=> document.querySelector(element);
    const $main = $('.main');
    let dataTechnology = [];


      //para obtener los datos de crew en data.json

    ajax({ 
        url: "./data.json",
        cdSuccess: async function(data){
            dataTechnology = await Array(JSON.parse(data))[0]["technology"];
        },
        error: function(error){ 
            console.log(error);
        }
    });

            /*para mostrar el contenido de destination */
    ajax({
        url: "html/technology.html",
        cdSuccess: async function(data){
            $main.innerHTML = await data;
            renderedTechnology();
        },
        error: function(error){ 
            console.log(error);
        }
    });

    const renderedTechnology = (desti = 0)=>{

        const $img = $(".technology__img"),
            $title = $(".technology__text"),
            $description = $(".technology__description");
    
        let mars = dataTechnology[desti]; 
        $img.src = mars.images.portrait;
        $title.innerText = mars.name.toUpperCase();
        $description.innerText = mars.description;
    }

    document.addEventListener("click", (e)=>{
        if(e.target.classList.contains("technology__next")){
            const next = document.querySelectorAll(".technology__next");

            next.forEach(item =>{
                item.classList.remove("technology__next--active");
            });

            e.target.classList.add("technology__next--active");
            renderedTechnology(e.target.getAttribute("technology-next"));
        }
    });
}