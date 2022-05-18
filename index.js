let grid = document.getElementsByClassName("grid")
let divs = grid[0].children
let turn = true;
let xCombo = [];
let oCombo = [];
let winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let point = {
    a: 0,
    b: 0,
}
let pointH2 = document.querySelector("h2");
let finishDiv = document.getElementsByClassName("finish")[0];

finishDiv.children[0].addEventListener("click", () => {
   playAgain()
});
finishDiv.children[1].addEventListener("click", () => {
    restartChallenge()
})
const playAgain = () => {
    xCombo=[];
    oCombo = [];
    Array.from(divs).forEach((el) => {
        el.children[0].innerHTML = "";
        el.children[0].style.pointerEvents = "auto"
    })
    turn = true
}
const restartChallenge = () => {
    playAgain();
    point.a = 0;
    point.b=0;
    pointH2.innerHTML = `a: ${point.a}__b: ${point.b}`
}
pointH2.innerHTML = `a: ${point.a}__b: ${point.b}`
Array.from(divs).forEach((el, index) => {
    console.log(el)
    el.children[0].addEventListener("click", () => alternateTurn(el, index))
})

function alternateTurn(el, index){
    if (turn){
        el.children[0].innerHTML = "x";
        xCombo.push(index)
        if (xCombo.length >= 3){
            let order = xCombo.sort()
            let isWin = equals(order, winCombination);
            console.log("isWin",isWin)
            if (isWin) {
                point.a++
                pointH2.innerHTML = `a: ${point.a}__b: ${point.b}`
            }
        }
    } else {
        el.children[0].innerHTML = "o";
        oCombo.push(index)
        if (oCombo.length >= 3){
            let order = oCombo.sort()
            let isWin = equals(order, winCombination);
            console.log("isWin",isWin)
            if (isWin) {
                point.b++
                pointH2.innerHTML = `a: ${point.a}__b: ${point.b}`
            }
        }
    }
    el.children[0].style.pointerEvents = "none"
    turn=!turn
}

const equals = (combo) => {
    let isWin = false
    winCombination.forEach(e => {
        if(e.every(elem => combo.includes(elem))){
            isWin = true
        }
    })
    return isWin
}

const gameFinish = () => {

}
