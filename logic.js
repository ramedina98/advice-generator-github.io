//Advice generator code... (author: Ricardo Medina)

const title = document.getElementById("advice_id"); 
const advice = document.getElementById("advicetext"); 
const btnAdvice = document.querySelector('.btn'); 

btnAdvice.addEventListener('click', (i) => {

      i.preventDefault(); 
      getAdvice(); 
})

const getAdvice = async () =>  {

      const resp = await fetch('https://api.adviceslip.com/advice');  
      const data = await resp.json(); 

      title.innerHTML = data.slip.id; 
      advice.innerHTML = '"' + data.slip.advice + '"'; 
}

getAdvice(); 