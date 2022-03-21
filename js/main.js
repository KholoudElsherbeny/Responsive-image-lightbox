'use strict';
// Defination and call
const gray = document.querySelectorAll(".pho");
let showScroll = document.querySelector(".scroll");
let exit = document.querySelector(".close");
let currentPhoto = document.querySelector(".current-photo");
let totalPhoto = document.querySelector(".total-photo");
let scrollBody = document.querySelector(".body");
let photo = scrollBody.querySelector("img");

window.onload = function (){
    // counter of range photo (1 to 6)
    for(let i = 0 ; i <= gray.length ; i++){
        totalPhoto.textContent = gray.length;
        let newIndex = i ;
        gray[i].onclick = function(){
            function go(){
                currentPhoto.textContent = newIndex + 1;
                let goalImage = gray[newIndex].querySelector("img").src;
                photo.src = goalImage ;
            }
            go();
            // next and prev icons
            let nextBtn = document.querySelector(".next");
            let prevBtn = document.querySelector(".prev");
            // when open first image -->prevbtn is none "display"
            if(newIndex == 0){
                prevBtn.style.display = "none";
            }
            // when least image --> nextbtn is block "stop"
            if(newIndex >= gray.length){
                nextBtn.style.display = "block";
            }
            // when click in prevbtn --> show on prev iamge
            prevBtn.onclick = ()=>{
                newIndex--;
                if(newIndex == 0){
                    go();
                    prevBtn.style.display = "none";
                }else{
                    go();
                    nextBtn.style.display = "block";
                }
            }
            // when click in nextbtn --> show on next images
            nextBtn.onclick = ()=>{
                newIndex++;
                if(newIndex >= gray.length -1){
                    go();
                    nextBtn.style.display = "none";
                }else{
                    go();
                    prevBtn.style.display = "block";
                }
            }
            // when clin in images --> open "scroll"
            showScroll.classList.add("showContent");
            // when click in exit ---> close "scroll"
            exit.onclick = function(){
                showScroll.classList.remove("showContent");
            }
        }
    };
};