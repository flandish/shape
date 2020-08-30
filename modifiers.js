//Rotation, colour, scale, quantity, distribution
//Selectors
//Param selectors and modifiers (maybe that will be in the shape object istelf)

let cool;
//let c = "color(255,255,0)";

let init = (arr, qty) => {
     cool = Array(qty).fill().map((x,i) => 
        cool = arr[i % arr.length] //makes object instead of 'undefined'
    );
    //console.log(cool)
    return cool;


    //maybe it should be something like
        //foreach cool push arr[i % arr.length]
}

// Each shape 







let rotater = (cool, r) => {
    cool.forEach(i => {
        i.rotation = r;
        console.log("ya")
    });
    console.log("Rotate, mate");

    return rotated;
}

let sizer = (cool, s) => {
    cool.forEach(i => {
        i.size = s
    });
    console.log("The size is different");

    return cool;
}

let positioner = (cool) => {
    cool.forEach(i => {
        i.posX = Math.floor(random(0, windowWidth));
        i.posY = Math.floor(random(0, windowHeight));
    });

    return cool;
}

// let colouriser = (cool) => {
//     cool.forEach
// }

// let colourPal = {
//     1: c = p5.color(255,0,0),
//     2: c = p5.color(0,255,0),
//     3: c = p5.color(0,0,255)
// };



//USE THE INDEX?



// map the changes, but add back in the same values 
// for the rest of the keys?


let arr1 = [{x:1, y:5}, {x:2, y:10}]
let arr2 = [{s: 20}, {s: 50}]
let obj1 = {cool: "yes"}


let arr3 = [
    {
        x: 1,
        y: 2,
        s: 3
    },
    {
        x: 5,
        y: 10,
        s: 50
    }
]

// let mappy1 = arr3.map(i => {
//     return {
//         x: i.x * 2,
//         y: i.y * 2,
//         func: () => {let filt = arr3.filter( key => i.key == "x" || i.key == "y")}
//     }
// });

// let mappy1 = arr3.map(i => {

//     let theRest = arr3.filter( k => k!=='x' || k!=='y')

//     return {
//         x: i.x * 2,
//         y: i.y * 2,
//         theRest
//     }
// });

let mappy1 = arr3.map(i => {
    return {
        x: i.x * 2,
        y: i.y * 2,
        s: i.s 
    }
});

let mappy2 = arr3.map

//let arr = [1,2];

let mapTest = arr1.map((k,i) => {
    return {
        x: k.x*2,
        y: k.y*2
    }
});

let mapTest2 = arr2.map((k,i) => {
    return {
        s: k.s*2
    }
});

// const mapCombi = [...mapTest, ...mapTest2].reduce((acc, cur) => {
//     return { 
//         x: cur.x,
//         y: cur.y
//     } + {
//         x: acc.x,
//         y: acc.y,
//     }
// });

const mapCombi = [...mapTest, ...mapTest2].map((key, i) => {
    return{
        x: key.x,
        y: key.y,
        s: key.s
    }
});




//console.log(map)

// const mapCombi2 = mapcombi.reduce((acc, cur) => {
//     mapcombi
// });



// arr1.forEach((i) => {
//     objecties.push()
// })

//const objecties = [];

//const mapCombi2 

//let getGoing = cool.map


//could go something like:
//map each modifier individually
//build up with ...bits for final render

//or maybe just use mapTest.x as the value?


    //positioner(cool);
    //rotater(cool, 3.2);
    //sizer(cool, 1);
    // colouriser(cool);
     
    // cool.forEach(i => { //why do the x/y coordinates repeat?

    //     scale(i.size);
    //     //rotate(i.rotation);

    //     i.render();
        
    // });

    //console.log(cool)








    // Array of Shapes
    // Modify with multiple modifiers
    // New Array
    // Display new Array

    // Array of Shapes