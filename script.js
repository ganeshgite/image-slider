 const slider = document.querySelector(".slider");
 const slides = document.querySelectorAll(".slide");
 const prevBtn = document.querySelector(".prev_slide");
 const nextBtn = document.querySelector(".next_slide");
 let slideIndex = 0;
 console.log(slideIndex)


 const prevBtnFun = () =>{

    slides[slideIndex].classList.remove("active");

    slideIndex =  slideIndex === 0   ? slides.length-1 :  slideIndex -1 ;
    
    slides[slideIndex].classList.add("active");
    
    slider.style.transform=`translateX(-${slideIndex * 100}%)` ;

}
const nextBtnFun = ()  =>{
    slides[slideIndex].classList.remove("active");

    slideIndex =  slideIndex === slides.length -1  ? 0 :  slideIndex + 1 ;
    
    slides[slideIndex].classList.add("active");
    
    slider.style.transform=`translateX(-${slideIndex * 100}%)` ;


    
}
 prevBtn.addEventListener("click",prevBtnFun);
 nextBtn.addEventListener("click",nextBtnFun);


