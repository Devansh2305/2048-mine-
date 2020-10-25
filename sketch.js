//creating variable
let grid;
let grid_new;
let score = 0;
let flag1 , flag2 , flag3;




function setup(){
 // createCanvas(400,400);
  createCanvas(windowWidth , windowHeight);
  noLoop();
  

  //creating grid
  grid = blankGrid();
  grid_new = blankGrid();
      addNumber();
      addNumber();
      updateCanvas();
}


//checking all keyPressed
function keyPressed(){
  let flipped = false;
  let rotated = false;
   played = true;
   //let dir = 1;

   switch(keyCode){
     case DOWN_ARROW:
     //do nothing
      break;

     case UP_ARROW:
     grid = flipGrid(grid);
     flipped = true;
     break;

     case RIGHT_ARROW:
     grid = transposeGrid(grid , 1);
     rotated = true;
     break;

     case LEFT_ARROW:
     //dir = -1;
    
    grid = transposeGrid(grid , 1);
    grid = flipGrid(grid);
    rotated = true;
    flipped = true;
     break;
    default:
      played = false;
   }

 // if(keyCode === DOWN_ARROW){
    //nothing
  //  played = true;
//  } else if (keyCode === UP_ARROW){
  
    //played = true;
 // }else if (keyCode === RIGHT_ARROW){
   
    //played = true;
  // }else if (keyCode === LEFT_ARROW){
     
   // grid = flipGrid(grid);
    
   // flipped = true;
   // played = true;
  // }else{
  //   played = false;
  // }

   if (played){
    let past = copyGrid(grid);
     for ( let i = 0; i<4; i++){
      grid[i] = operate(grid[i]);
     }
     let changed = compare(past , grid);

     if(flipped){
       grid = flipGrid(grid);
     }
     if(rotated){
      grid = transposeGrid(grid , -1);
     // grid = transposeGrid(grid);
     // grid = transposeGrid(grid);
    }
     if(changed){
       addNumber();
  }
  updateCanvas(); 

  let gameover = isGameOver();
  if( gameover){
    alert("GAME OVER");
  }

  let gamewon = isGameWon();
  if (gamewon){
    alert("GAME WON")
  }
  }

   }

function updateCanvas(){
  background(255);
  drawGrid();
  select ('#Score').html("Score: " + score);
}




//styling of the grid
function drawGrid(){
let w = 100;
  for (let i=0; i<4; i++){
    for (let j=0; j<4; j++){
      noFill();
      strokeWeight(2);
      let val = grid[i][j];
      let s =  val.toString();
      
      if(grid_new[i][j] === 1){
        stroke(200,0,200);
        strokeWeight(5);
        grid_new[i][j] = 0;
      }else {
       // strokeWeight(5);
        stroke(0);
      }
      if(val !== 0){
     
      fill(colorsSizes[s].color);
      } else {
        noFill();
      }
     rect(i*w , j*w, w , w , 50);
     
     if(grid[i][j] !==0){
    textAlign(CENTER,CENTER);
   
    
   // let len = s.length - 1;
   // let sizes = [64,64,36,18];
   // let fs = map(log(val),0,log(2048),64,16);
   // console.log(fs);
   
    noStroke();
    fill(0);
    textSize(colorsSizes[s].size);
    text(val , i*w + w/2 , j*w + w/2);

     }
    }
  }
}