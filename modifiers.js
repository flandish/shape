//Rotation, colour, scale, quantity, distribution
//Selectors
//Param selectors and modifiers (maybe that will be in the shape object istelf)

let cool;

const init = (arr, qty) => {
    cool = Array(qty).fill().map((x,i) => 
        cool = arr[i % arr.length] //makes object instead of 'undefined'
    );

    cool.forEach(i => {
        i.render();      
    });

    return cool;
}

// let multiplier = () => {
//     console.log("Multiplied, baby!")
// }

let rotater = (cool) => {
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


const mods = {
    rotate: (cool) => {
        cool.map()
    }
}

let colourPal = []

let displayEm;

// let endResult = 