function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function renderBoard(container , cellNumber) {
    for (let i = 1; i <= cellNumber ; i++) {
        const boardCell = document.createElement("div");
        boardCell.innerHTML = i;
        boardCell.classList.add("cell");
        boardCell.classList.add(`board-number-${cellNumber}`);
        boardCell.addEventListener("click" , function () {
            console.log( bomb)
            console.log( this.innerHTML)
            
            if (bomb.includes(Number(this.innerHTML)) == true) {
                for (let i = 0; i < bomb.length; i++) {
                    
                    document.querySelector('.board .cell:nth-child('+bomb[i]+')').classList.add('bomb')
                }
                
                // tolgo eventlistener dal boardcell
                
            }else{
                if (!(this.classList.contains("number-selected"))) {
                    userClick += 1
                    this.classList.add("number-selected")
                }
                console.log(this)
               
                userPoint.innerHTML = userClick
                console.log(goodCell)
                if (userClick === goodCell){
                    alert("HAI VINTO")
                }
            }

            
            
                
                
        })
        container.append(boardCell);
    }
}


let bomb = []
let goodCell = 0
console.log(goodCell)
const play = document.getElementById('play');
const boardContainer = document.querySelector(".board")
const userPoint = document.getElementById("point")
let userClick = 0 


play.addEventListener("click" , function() {
    const levelVal = Number(document.getElementById('level').value);
    goodCell = levelVal - 16
    bomb = []
    userPoint.innerHTML = 0
    console.log(levelVal);
    while (bomb.length < 16 ) {
        let generatedNumber = getRndInteger(1 , levelVal)
        
        if (bomb.includes(generatedNumber) == false) {
            bomb.push(generatedNumber)
        }
    }
    console.log(bomb)
    boardContainer.innerHTML=""
    userClick = 0
    renderBoard(boardContainer , levelVal)
})
        
    


        
                
            



    
   
    


   
    
    
    
