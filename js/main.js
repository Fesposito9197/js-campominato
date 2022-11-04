function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function renderBoard(container , cellNumber) {
    for (let i = 1; i <= cellNumber ; i++) {
        const boardCell = document.createElement("div");
        boardCell.innerHTML = i;
        boardCell.classList.add("cell");
        boardCell.classList.add(`board-number-${cellNumber}`);
        boardCell.addEventListener("click" , function (event) {
            if (gameOver){
                return;
            }
            
            if (bomb.includes(Number(this.innerHTML)) == true) {
                
                for (let i = 0; i < bomb.length; i++) {
                    gameOver = true
                    document.querySelector(' .cell:nth-child('+bomb[i]+')').classList.add('bomb')
                    userPoint.innerHTML = `Hai perso il tuo punteggio era di ${userClick}`
                    userPoint.classList.remove("d-none")

                }
            }else{
                if (!(this.classList.contains("number-selected"))) {
                    userClick += 1
                    this.classList.add("number-selected")
                    userPoint.classList.remove("d-none")
                }
                userPoint.innerHTML = `Il tuo punteggio è ${userClick}`
                
                if (userClick === goodCell){
                    alert("HAI VINTO")
                    gameOver = true
                }
            }
        })
        container.append(boardCell);
    }
}
                
let gameOver = false             
let bomb = []
let goodCell = 0

const play = document.getElementById('play');
const boardContainer = document.querySelector(".board")
const userPoint = document.querySelector(".point")
let userClick = 0 


play.addEventListener("click" , function() {
    const levelVal = Number(document.getElementById('level').value);
    goodCell = levelVal - 16
    bomb = []
    gameOver = false
    userPoint.innerHTML = 0
    
    while (bomb.length < 16 ) {
        let generatedNumber = getRndInteger(1 , levelVal)
        
        if (bomb.includes(generatedNumber) == false) {
            bomb.push(generatedNumber)
            console.log(bomb)
        }
    }
    
    boardContainer.innerHTML=""
    userClick = 0
    renderBoard(boardContainer , levelVal)
})