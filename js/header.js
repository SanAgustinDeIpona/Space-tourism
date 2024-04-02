import { crew } from "./crew.js";
import { destination } from "./destination.js";
import { home } from "./home.js";
import { technology } from "./technology.js";

export  function header(){
    const $menu = document.querySelector(".menu-container"),
    $icon = document.querySelector(".header__icon");

    const location = (option)=>{
        switch (option) {
            case "Home":
                home();
            break;
            
            case "Destination":
                destination();
            break;
            
            case "Crew":
                crew();
            break;
            
            case "Technology":
                technology();
            break;
        
            default:
                break;
        }
    }

    document.addEventListener("click", (e)=>{
        if(e.target.classList[0] === "header__icon"){
            $menu.classList.toggle("menu-container--active");
            
            if($menu.classList.contains("menu-container--active"))
                e.target.src = "assets/shared/icon-close.svg";
            else
                e.target.src = "assets/shared/icon-hamburger.svg";
        }

        if(e.target.getAttribute("location"))
        {
            $icon.src = "assets/shared/icon-hamburger.svg";
            $menu.classList.remove("menu-container--active");
            location(e.target.getAttribute("location"));
        }

    });
}