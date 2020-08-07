
// I especially used both Jquery and JS to check my knowledge

/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/


const tttboard = '';
const squares = document.querySelectorAll('.tttboard div')
const playerDisplay = document.querySelector('#player')
const messages = document.querySelector('h2');
const moveX = [];
const moveO = [];
const maxTurn = 9;

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


  
      $(window).on('load', () => {
        
              let currentPlayer = 'playerG'
  
              squares.forEach(square => {
              $(square).click(waitClick);
               })
  
              function waitClick(e) {
              const squareArray = Array.from(squares)
              const index = squareArray.indexOf(e.target)
                
              if(currentPlayer === 'playerG') {
              let x = $(squares[index]).text();
              if(x === ''){
              $(squares[index]).text('G');
              }
              let boxIdX = $(squares[index]).attr("id");
              moveX.push(boxIdX);
              checkX = moveX.join();

              winGrid.forEach(function(wgx) {
               checkPx = wgx.join();
              if(checkPx === checkX){ console.log('Bu oyunu ' + currentPlayer + ' kazandi');
            }
              })

              currentPlayer = 'playerA'
              } else {
             
              var z = $(squares[index]).text();
              if(z === ''){
              $(squares[index]).text('A');
              }
              let boxIdO = $(squares[index]).attr("id");
              moveO.push(boxIdO);
              checkO = moveO.join();

              winGrid.forEach(function(wgo) {
               checkPo = wgo.join();
              if(checkPo === checkO){ console.log('Bu oyunu ' + currentPlayer + ' kazandi') }
              });
            currentPlayer = 'playerG'
             }
         }
  
  })

  