const inputDiv = document.querySelector(".inputDiv");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const paragraph = document.querySelector(".paragraph");

let number = 0;

button.addEventListener("click",()=>{
    if(input.value != ""){
    number++;
    p = document.createElement("p");
    p.innerText = number + "." + input.value;
    paragraph.appendChild(p);
    p.classList.add("list");
    input.value = ""
    deleteButton = document.createElement("div");
    deleteButton.classList.add("deleteButton");
    p.appendChild(deleteButton);
    deleteButton.innerText="X";
    
    deleteButton.addEventListener("click",()=>{
        
        paragraph.removeChild(p);
        number --;
    })
    }
});
