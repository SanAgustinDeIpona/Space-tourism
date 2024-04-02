import {ajax} from './ajax.js';

export function home(){
    const $main = document.querySelector(".main");

    ajax({
        url: '/starter-code/html/home.html',
        cdSuccess: (data)=>{
            $main.innerHTML = data;
        },
        error: (error)=>{
            console.log(error);
        }
    });
}