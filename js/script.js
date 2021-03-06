
// I especially used both Jquery and JS to check my knowledge

/*----- constants -----*/


const moveX = [];
const moveO = [];
const maxTurn = 9;
let tttboard;
let currentPlayer = 'player1';
let gameMes = null;


const winGrid = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6]
]


/*----- app's state (variables) -----*/

let squares = document.querySelectorAll('.tttboard div')
let playerDisplay = document.querySelector('h3')
let messages = document.querySelector('h2');


/*----- event listeners -----*/

document.getElementById('reset-button').addEventListener('click', init);

/*----- cached element references -----*/
const squareArray = Array.from(squares);


/*----- functions -----*/


        function render(){

                squares.forEach(square => {
                $(square).click(waitClick);
                 })
                }   
             
function pushMes(msg){
  $( messages ).text( msg );
}
 
function init() {

  let gameMes = 'Tic Tac Toe by Rookie';
  for(i=0; i <= 8; i++){
 
    squares[i].textContent = '';
    
  }
  const moveX = [];
  const moveO = [];
  render();

};

function waitClick(e) {
      
  const index = squareArray.indexOf(e.target);

  if(currentPlayer === 'player1') {
  let x = $(squares[index]).text();
  if(x === ''){
  $(squares[index]).text('G');
  }
  
  let boxIdX = $(squares[index]).attr('id');
  moveX.push(boxIdX);
  moveX.sort();
  checkX = moveX.join();

  winGrid.forEach(function(wgX) {
   checkPx = wgX.join();
  if(checkPx === checkX){ let gameMes = 'Player 1 Won!';
  $( squares ).unbind( "click", waitClick );
  pushMes(gameMes);
  }
  })


  currentPlayer = 'player2'
  } else {
 
  let z = $(squares[index]).text();
  if(z === ''){
  $(squares[index]).text('A');
  }
  let boxIdO = $(squares[index]).attr('id');
  moveO.push(boxIdO);
  moveO.sort();
  checkO = moveO.join();

  winGrid.forEach(function(wgO) {
   checkPo = wgO.join();
   if(checkPo === checkO){ let gameMes = 'Player 2 Won!';
   $( squares ).unbind( "click", waitClick );
   pushMes(gameMes);
  }
  });
currentPlayer = 'player1'
 }

}

init();
