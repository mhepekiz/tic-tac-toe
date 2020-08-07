
// I especially used both Jquery and JS to check my knowledge

/*----- constants -----*/


const moveX = [];
const moveO = [];
const maxTurn = 9;
let tttboard;
let currentPlayer = 'player1';


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




/*----- event listeners -----*/

const squares = document.querySelectorAll('.tttboard div')
const playerDisplay = document.querySelector('#player')
const messages = document.querySelector('h2');


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
  tttboard = [
  '', '', '',
  '', '', '',
  '', '', ''
  ];
  render();
};


function waitClick(e) {
      
  const index = squareArray.indexOf(e.target);

  if(currentPlayer === 'player1') {
  let x = $(squares[index]).text();
  if(x === ''){
  $(squares[index]).text('G');
  }
  let boxIdX = $(squares[index]).attr("id");
  moveX.push(boxIdX);
  moveX.sort();
  checkX = moveX.join();

  winGrid.forEach(function(wgX) {
   checkPx = wgX.join();
  if(checkPx === checkX){ let gameMes = 'Player 1 Won!';
  pushMes(gameMes);
  }
  })


  currentPlayer = 'player2'
  } else {
 
  var z = $(squares[index]).text();
  if(z === ''){
  $(squares[index]).text('A');
  }
  let boxIdO = $(squares[index]).attr("id");
  moveO.push(boxIdO);
  moveO.sort();
  checkO = moveO.join();

  winGrid.forEach(function(wgO) {
   checkPo = wgO.join();
   if(checkPo === checkO){ let gameMes = 'Player 2 Won!';
   pushMes(gameMes);
  }
  });
currentPlayer = 'player1'
 }



}

init();
