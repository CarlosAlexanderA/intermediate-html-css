const images = document.querySelectorAll("img");
const tooltip = document.querySelectorAll(".tooltip")
const content = document.querySelector(".content")

let lengthContent = content.children.length

for (let i = 0; i < lengthContent; i++) {
    let child = content.querySelector(`.box:nth-child(${i + 1 }) .tooltip`)
    content.children[i].addEventListener("mouseenter", ()=>{
        child.style.display = "flex";
    }); 
    content.children[i].addEventListener("mouseleave", ()=>{
        child.style.display = "none"
    })
}

