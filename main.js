const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        //animate links
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`
            }
        })
        
        
        //buger animation
        burger.classList.toggle('toggle')
    })

    navLinks.forEach((link)=>{
        link.addEventListener('click',()=>{
            nav.classList.toggle('nav-active');
            navLinks.forEach((link,index)=>{
                if(link.style.animation){
                    link.style.animation = '';
                }else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`
                }
            })
            burger.classList.toggle('toggle')

    })
    })

    
}

document.querySelector("#container").addEventListener("click",()=>{
    
    if(document.querySelector(".burger").classList.length == 2){
        document.querySelector(".nav-links").classList.toggle('nav-active');
        document.querySelector(".burger").classList.toggle('toggle')
    }
    console.log(document.querySelector(".burger").classList.length,"hiii")

})

navSlide();