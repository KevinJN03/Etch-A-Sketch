const gridContainer = document.querySelector(".grid-container");
const allBtn = document.querySelectorAll(".btn");
const slider = document.querySelector("#range-slider");
const gridText = document.querySelector("#grid-text");
let Picker = document.querySelector("#color-picker")
function game(){

makeGrid(16)
 Picker.onmouseleave = function(){
    let colorPicker = document.querySelector("#color-picker").value
    changeColorGrid(colorPicker);
    changeBackground(allBtn[0])
 }
slider.addEventListener("click", () => {
    clear()
    console.log(`${slider.value} x ${slider.value} = ${slider.value * slider.value}`)
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${slider.value}, 1fr); grid-template-rows: repeat(${slider.value}, 1fr)`)
    gridText.textContent = `${slider.value} X ${slider.value}`
   
    makeGrid(slider.value)

    
    
})

allBtn[0].addEventListener("click", () => {
    let colorPicker = document.querySelector("#color-picker").value
    console.log(colorPicker)
    changeBackground(allBtn[0])
    changeColorGrid(colorPicker)
})

allBtn[1].addEventListener("click", () => {
    changeBackground(allBtn[1])
    //colorPicker = Math.floor(Math.random()*16777215).toString(16);
    //changeColorGrid(`#${colorPicker}`)
    randomColor()
})

allBtn[2].addEventListener("click", () => {
    //let colorPicker = document.querySelector("#color-picker").value
    changeBackground(allBtn[2])
    colorPicker = "var(--primary-white)"
    changeColorGrid(colorPicker)
   // changeColorGrid("var(--primary-white)")
    
})

allBtn[3].addEventListener("click", clear)

// gridContainer.onclick = function(){
// let colorPicker = document.querySelector("#color-picker").value
// changeColorGrid(colorPicker)
// }
    
}
game()

function changeColorGrid(color){
    const gridSquare = document.querySelectorAll(".grid-square");
    for(let x=0; x < gridSquare.length; x++){
    gridSquare[x].onmouseenter = function(){
        gridSquare[x].style.backgroundColor = color
    }
    }

}
function randomColor(){
    const gridSquare = document.querySelectorAll(".grid-square");
    
    for(let x=0; x < gridSquare.length; x++){
    
    gridSquare[x].onmouseenter = function(){
        colorPicker = Math.floor(Math.random()*16777215).toString(16);
        gridSquare[x].style.backgroundColor = `#${colorPicker}`
    }
    }
}


function makeGrid(num){
    const gridSquare = document.querySelectorAll(".grid-square");
    for(let i = 0; i< num * num; i++){
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridContainer.append(gridSquare)
    }
}

function clear(){
    const gridSquare = document.querySelectorAll(".grid-square");
    for(let i=0; i < gridSquare.length; i++){
        gridSquare[i].remove()
    }
    
}


const changeBackground = (btn) => {

    const allBtn = document.querySelectorAll(".btn");
for(let i =0; i < allBtn.length; i++){
    if(allBtn[i] == btn){
        btn.setAttribute("style", "background: var(--primary-black); color: var(--primary-white)")
    } else {
        allBtn[i].setAttribute("style", "background: var(--primary-grey); color: var(--primary-black)")
    }
}
}