const square = {
    name: "square",
    render: () => {
        rect(random(0, windowWidth), random(0, windowHeight), 50,50)
    }
};

const rectangle = {
    name: "rectangle",
    render: () => {
        rect(random(0, windowWidth), random(0, windowHeight), 30,50)
    }
};

const circle = {
    name: "circle",
    render: () => {
        ellipse(random(0, windowWidth), random(0, windowHeight), 50,50)
    }
};

const oval = {
    name: "oval",
    render: () => {
        ellipse(random(0, windowWidth), random(0, windowHeight), 20,50)
    }
};

let twoShapes = [circle, square, oval, rectangle];

let multiplier = (arr, qty) => {
    let yes = Array(qty).fill().map((y,i) => 
        arr[i % arr.length].render()
    )
    console.log(yes)
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    multiplier(twoShapes,8)
};


//------
//collection of shapes
//go through the multiplier, rotator, scaler, colouriser, positionator

//selecting is a different battle
//select all "x" --> change shape specifc params
//--------