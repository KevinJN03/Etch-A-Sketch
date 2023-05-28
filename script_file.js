const gridContainer = document.querySelector(".grid-container");
const allBtn = document.querySelectorAll(".btn");
const slider = document.querySelector("#range-slider");

makeGrid(2)


let colortest = document.querySelector("h1").style.color
console.log("Color", colortest)
slider.addEventListener("click", () => {
    console.log(`${slider.value} x ${slider.value} = ${slider.value * slider.value}`)
    clear()
    makeGrid(slider.value)
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${slider.value}, 1fr)`)
    
    //slider.value = slider.max
})
allBtn[0].addEventListener("click", () => {
    const colorPicker = document.querySelector("#color-picker").value
    console.log(colorPicker)
    changeBackground(allBtn[0])
    changeColorGrid(colorPicker)
// originalColor(allBtn[0])
})

allBtn[1].addEventListener("click", () => {
    changeBackground(allBtn[1])
    // originalColor(allBtn[1])
})

allBtn[2].addEventListener("click", () => {
    changeBackground(allBtn[2])
    // originalColor(allBtn[2])
    changeColorGrid("var(--primary-white)")
    
})

allBtn[3].addEventListener("click", clear)
    
// gridContainer.onmouseover = function(){
// changeColorGrid("red")
// }


function changeColorGrid(color){
    const gridSquare = document.querySelectorAll(".grid-square");
    for(let x=0; x < gridSquare.length; x++){
    gridSquare[x].onmouseenter = function(){
        gridSquare[x].style.backgroundColor = color
    }
    gridSquare[x].onmouseleave = function(){
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