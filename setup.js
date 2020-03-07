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
function setup() {
    createCanvas(windowWidth, windowHeight);
    multiplier(twoShapes, 10);
}
