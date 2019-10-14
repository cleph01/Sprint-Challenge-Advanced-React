import { useState, useEffect } from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = () => {

    const [value, setValue] = useLocalStorage('darkmode', false);

    useEffect( () => {

        let body_dark_mode = document.querySelector('body');
        let cards = document.querySelectorAll('.player-card');

        if(value === true){
            body_dark_mode.classList.add('dark-mode');
            
            for(let i = 0; i < cards.length; i++){
                cards[i].classList.add('dark-mode')
            }

        }else{
            body_dark_mode.classList.remove('dark-mode');
            
            for(let i = 0; i < cards.length; i++){
                cards[i].classList.remove('dark-mode')
            }

        }
    }, [value])


    return [value, setValue]
}