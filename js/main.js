let clicked;

let stars = document.querySelectorAll('.rating');


stars.forEach((element)=>{
    element.addEventListener('click',() => {

        stars.forEach((e)=>{
            e.style.backgroundColor = "hsl(213, 19%, 18%)";
            e.style.borderColor = "hsl(213, 19%, 18%)";
            e.style.color = "hsl(216, 12%, 54%)";
            e.classList.add("doHover");
        })

        element.style.backgroundColor = "hsl(217, 12%, 63%)";
        element.style.borderColor = "hsl(217, 12%, 63%)";
        element.style.color = "hsl(0, 0%, 100%)";
        element.classList.remove("doHover");
        clicked = element.textContent;
    
    })
})

document.querySelector('.submit').addEventListener('click',() => {
    if(!clicked){

        Swal.fire(
            'Did you miss something?',
            'Rating us is required :)',
            'question'
        )
        
    }else {

        document.querySelector('.outer-container-index').style.display = 'none';
        document.querySelector('.p-rating').textContent = `You selected ${clicked} out of 5`;
        document.querySelector('.outer-success').style.display = 'flex';

    }
})

