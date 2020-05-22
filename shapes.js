const square = {
    name: "square",
    render: () => {
        rect(random(0, windowWidth), random(0, windowHeight), 50, 50)
    }
};

const rectangle = {
    name: "rectangle",
    render: () => {
        rect(random(0, windowWidth),
        random(0, windowHeight),
        30,50)
    }
};

const circle = {
    name: "circle",
    render: () => {
        ellipse(
            random(0, windowWidth),
            random(0, windowHeight),
            50,50
        )
    }
};

const oval = {
    name: "oval",
    render: () => {
        ellipse(random(0, windowWidth), random(0, windowHeight), 20,50)
    }
};