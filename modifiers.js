//Rotation, colour, scale, quantity, distribution
//Selectors
//Param selectors and modifiers (maybe that will be in the shape object istelf)
let cool;

let multiplier = (arr, qty) => {
    cool = Array(qty).fill().map((x,i) => 
        arr[i % arr.length].render()
    )
    return cool;
}
const mods = {
    rotate: () => {
        
    }
}

let rotateMate = (cool, a) => {
    cool.map(()=>rotate(a))
    //cool.rotate(a);
}

let sizeWise = (arr, s) => {
    arr.map(() => {
        scale(s)
    })
}

let colourPal = []

// let endResult = 