

let btn = document.getElementById("bgbtn");
let bgcen = document.getElementById("bgcen");
btn.addEventListener("click",display);


function display(){

            const randomcol=   Math.floor(Math.random()*18255266).toString(18);
            document.body.style.backgroundColor="#"+randomcol
            bgcen.textContent="#"+randomcol
    


};