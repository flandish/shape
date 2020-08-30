// let state = {
//     rotation: random()
// }
// let state = {
//     rotation: 0,
//     size: Math.random(),
//     posX: 0,
//     posY: 0
//     // colour: color(100)
// }

const m = 50;

const square = {
    name: "square",
    render: () => {
        push()
        //fill(color(255,0,0));
        // fill(square.colour);
        rect(random(windowWidth), random(windowWidth), 50, 50);
        pop()
    }
};

const rectangle = {
    name: "rectangle",
    render: () => {
        rect(random(windowWidth), random(windowWidth), 30, 50);
        //console.log(rect.x)
    }
};

const circle = {
    name: "circle",
    render: () => {
        ellipse(random(windowWidth), random(windowWidth), 50, 50);
    }
};

const oval = {
    
    name: "oval",
    render: () => {
        ellipse(random(windowWidth), random(windowWidth), 20,50)
    }
};