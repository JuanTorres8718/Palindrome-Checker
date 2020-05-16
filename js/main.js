const fun =()=>{
  const pResponse = document.querySelector('.response')
  pResponse.innerHTML= ``;
}


function palindrome () {
  const value = document.querySelector('#palindrome').value
  const str1= value.replace(/[\W_]/g, "").toLowerCase();
  const str2= value.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("");
  const pResponse = document.querySelector('.response')
  if(str1 === str2){
    pResponse.setAttribute('style','color:green');
    pResponse.innerHTML= `Correct, That word or phrases is a palindrome`;
    setTimeout(fun ,5000);
  }else{
    pResponse.setAttribute('style','color:red');
    pResponse.innerHTML= `Sorry, but that word or phrases is not a palindrome `;
    setTimeout(fun ,5000);
  }
}

// console.log(palindrome("0_0 (: /-\ :) 0-0"))

const btn = document.querySelector('#send')

btn.addEventListener('click', palindrome);