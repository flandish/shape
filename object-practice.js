let shapes = [circle, square, oval, rectangle];

function setup(){
    createCanvas(windowWidth, windowHeight);
    init(shapes, 10);

    //rotater(cool, 4);
    // sizer(cool);
    //positioner(cool);


    //displayEm.render();
    cool.forEach(e => {
        e.render()
    });
    //console.log(cool)
    //mapTest();
    //console.log(mapTest);
    // console.log(mapTest2)
    // console.log(mapCombi)
    console.log(mappy1)
};

//------
//collection of shapes
//go through the multiplier, rotator, scaler, colouriser, positionator

//selecting is a different battle
//select all "x" --> change shape specifc params
//--------