//Rotation, colour, scale, quantity, distribution
//Selectors
//Param selectors and modifiers (maybe that will be in the shape object istelf)

let multiplier = () => {
    console.log("Multiplied, baby!")
}

let rotater = () => {
    console.log("You got a spin, mate")
}

let sizer = () => {
    console.log("The size is different")
}

//----------------

// let state = {
//     size: 50,
//     rotation: 3,
// }
let cool;


let init = (arr, qty) => {
    cool = Array(qty).fill().map((x,i) => 
        arr[i % arr.length].render()
    )
    return cool;
}

const mods = {
    rotate: (cool) => {
        cool.map()
    }
}

let colourPal = []

let displayEm;

// let endResult = 