// let state = {
//     rotation: random()
// }
let state = {
    rotation: 0,
    size: 0,
    posX: 0,
    posY: 0
}

const square = {
    ...state,
    name: "square",
    render: () => {
        rect(square.posX, square.posY, 50, 50);
    }
};

const rectangle = {
    ...state,
    name: "rectangle",
    render: () => {
        rect(rectangle.posX, rectangle.posY, 30, 50);
    }
};

const circle = {
    ...state,
    name: "circle",
    render: () => {
        ellipse(
            random(0, windowWidth), random(0, windowHeight), 50, 50);
    }
};

const oval = {
    ...state,
    name: "oval",
    render: () => {
        ellipse(random(0, windowWidth), random(0, windowHeight), 20,50)
    }
};