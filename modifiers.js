//Rotation, colour, scale, quantity, distribution
//Selectors
//Param selectors and modifiers (maybe that will be in the shape object istelf)

let cool;

const init = (arr, qty) => {
    cool = Array(qty).fill().map((x,i) => 
        cool = arr[i % arr.length] //makes object instead of 'undefined'
    );

    

    return cool;
}

let rotater = (cool, r) => {
    cool.forEach(i => {
        i.rotation = r;
    });
    console.log("Rotate, mate");
}

let sizer = (cool, s) => {
    cool.forEach(i => {
        i.size = s
    });
    console.log("The size is different");
}

let positioner = (cool) => {
    cool.forEach(i => {
        i.posX = Math.floor(random(0, windowWidth));
        i.posY = Math.floor(random(0, windowHeight));
    });
}

let displayEm = (cool) => {

    rotater(cool, 3.2);
    sizer(cool, 1);

    cool.forEach(i => {

        positioner(cool);
        scale(i.size);
        rotate(i.rotation);

        i.render();
        
    });
    console.log(cool);
};

let colourPal = [];