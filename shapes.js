let square = {
    name: "square",
    render: () => {
        rect(random(0, windowWidth), random(0, windowHeight), 50,50)
    }
};

let rectangle = {
    name: "rectangle",
    render: () => {
        rect(random(0, windowWidth),
        random(0, windowHeight),
        30,50)
    }
};

let circle = {
    name: "circle",
    render: () => {
        ellipse(
            random(0, windowWidth),
            random(0, windowHeight),
            50,50
        )
    }
};

let oval = {
    name: "oval",
    render: () => {
        ellipse(random(0, windowWidth), random(0, windowHeight), 20,50)
    }
};