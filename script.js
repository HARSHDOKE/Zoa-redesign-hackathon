let text = document.querySelector(".rounded-txt p");
text.innerHTML = text.innerText.split('').map(
    (char,i)=>
        `<span style="transform:rotate(${i * 10 + "deg"})">${char}</span>`
).join('');