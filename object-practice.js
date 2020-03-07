const square = {
    name: "square",
    render: () => {
        // translate(random(0, windowWidth), random(0, windowHeight));
        rect(random(0, windowWidth), random(0, windowHeight), 50,50)
        // rect(windowWidth/2, windowHeight/2, 50, 50);
    }
};

const rectangle = {
    name: "rectangle",
    render: () => {
        // translate(random(0, windowWidth), random(0, windowHeight));
        rect(random(0, windowWidth), random(0, windowHeight), 30,50)
        // rect(windowWidth/2, windowHeight/2, 50, 50);
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
    // newArr = Array(qty)
    // .fill(arr[0])
    // //.map(render())
    // console.log(newArr)
    // arr.map(e => Array(qty).fill(e.render()))
    // console.log(arr)
    let yes = Array(qty).fill().map((y,i) => 
        arr[i % arr.length].render()
    )
    console.log(yes)
    


            // for (var i =0 ; i<qty; i++) {
        //     for(var j=0; j < arr.length; j++){
        //         if(j > 1) {j =0}
        //         yes.push(arr[j])
        //     }
}

// let multiplier = (shapeArray, quantity) => { //maybe it should pass in an array of single, differnt shapes
//     let cool = Array(quantity)
//     cool.forEach(() => {
//         push("huys")
//     });
    //.fill(shapeArray)
    
    // console.log(cool)
    // .map(e => e.render())
    // .map(e => {
    //     console.log(e)
    //    e.render();
    // });
    
    // console.log(multiplier)
//};
// let multiplier = (shapesArray, quantity) => {
//     shapesArray.map(e => {
//         let go = Array(quantity)
//         .fill(e.render())
//         //combo.push(go)
//         //needs to be combined
//         //then needs to shuffled
//         //(to stop layering)
//         //return combo
//         //console.log(go)

//         console.log(go)
//         //console.log(go.reduce(reducer))
//     });



    // let combo = yeah => {
    //     yeah.push(combo)
    // multiplier(twoShapes, 10)
    // console.log("combo" + combo)

    // }
    
    // let render = go.map((e, go) => {
    //     e.render()
    //     //let no = go.concat(go)
    //     //console.log(no)
    // })
// }

// const reducer = (acc, curr) => {
//     acc.concat(curr)
//     return acc
// }

//let maybe = reducer(multiplier(twoShapes, 10))

function setup(){
    createCanvas(windowWidth, windowHeight);
    multiplier(twoShapes,8)
};


    //const splitArray = shapesArray.map()

    //shapesArray.fill()
    //map
    //reduce -> concat

//------
//collection of shapes
//go through the multiplier, rotator, scaler, colouriser, positionator

//selecting is a different battle
//select all "x" --> change shape specifc params
//--------

//is it like this?

//create an object for all the modifiers (multitply, rotate, distribution, colour etc)
//and have objects that create the shapes
//have the shape obejcts inherit the modifiers

//https://medium.com/code-monkey/object-composition-in-javascript-2f9b9077b5e6



//draw 2 different types of shapes
//each with a quantity of 5

//select only one type of shape
//change the size

//create() {
//   shape
//}

//repeat(create, 10)
//  push to final array?

//


//repeat (function, number){
//     return
// }
