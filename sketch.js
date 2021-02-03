var ball;
var database
var pos
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var test = database.ref("Car/Position")
    test.on("value",ball2)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
function ball2(data){
pos=data.val()
ball.x=pos.x
ball.y=pos.y
}
function changePosition(x,y){
    var dataref = database.ref("Car/Position")
    dataref.set({
        x:ball.x+x,
        y:ball.y+y
    })
}
