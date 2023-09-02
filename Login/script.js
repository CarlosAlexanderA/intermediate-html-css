const inputs = document.querySelectorAll("input");
const submit = document.getElementById("btnSubmit");
const msgError = document.querySelectorAll(".msgError")

submit.addEventListener("click", ()=>{
    console.log("algo")
    inputs.forEach((item, index)=>{

        if(item.value == ""){
            // item.style.backgroundColor = "red";
            item.classList.add("input")
            msgError[index].style.display = "block";
            console.log(item.value);
        }else{
            msgError[index].style.display = "none";

        }

        console.log(index);

    
    });
});