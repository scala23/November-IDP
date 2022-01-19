let grid = []
let player = 1

function setup() {
	createCanvas(600, 600);
	background('0');
	grid = new make2Darray(3,3)
	for(i=0;i<grid.length;i++) {
		for(j=0;j<grid[0].length;j++) {
			grid[i][j] = 0
		} 
	}
}
function draw() {
  fill('grey')
  stroke(0)
  rect(0,0,599,599)
  for(let i = 1; i < 3; i++) {
    line(i*200,0,i*200,height)
    line(0,i*200,width, i*200)
  }
  fill(0)
  textSize(70)
  for(i=0;i<grid.length;i++) {
    for(j=0;j<grid[0].length;j++) {
      if(grid[i][j] == 1) {
        text("X", j*200 + 75,i*200+120)
      }else if(grid[i][j] == -1) {
        text("O", j*200 + 75,i*200+120)
      }
    }
  }
}
	
function mousePressed() {

  let x=floor(mouseX/200)
  let y=floor(mouseY/200)
  let played = 0

  print("X " + x)
 	print("Y " + y)

  if (grid[y][x] == 0) {
    grid[y][x] = player
    played = 1
  	checkwin(y,x)
  }
	
  if (played == 1 ) {
		player = -player
	}
}
	
function checkwin(y,x) {
		if (grid[y][x-1] == grid[x][y] && grid[y][x+1] == grid[x][y]) {
      text("WIN!")
		}
}

function make2Darray(cols, rows) {
  let arr = new Array(cols)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
  }
  return arr
}