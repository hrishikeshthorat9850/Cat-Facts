let btn = document.querySelector('button');
let h3 = document.querySelector('h3');
let url = 'https://catfact.ninja/fact';

async function getCatFact(){
    try{
        let resolve = await fetch(url);
        let data = await resolve.json();
        h3.innerText = data.fact;
    }catch(err){
        h3.innerText = 'Sorry !!! Fact Not Found.'; 
    }
}

btn.addEventListener('click',()=>{
    getCatFact();
}) 
h3.classList.add('heading');
