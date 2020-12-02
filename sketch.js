var allplayers;
var gamestate=0;
var playercount,database,form,player,game,backgroundimage;
var canvas;
var kakooz,kakooz_Img;
var t=true
var but,math,s;
var x,y,name1;
function preload(){
   
//   kakooz_Img=loadImage("../image/kakooz.png")
}

function setup(){
    database=firebase.database()
    console.log(database);
    canvas= createCanvas(displayWidth,displayHeight);
    game=new Game()
    game.getState()
    game.start()
   
}

function draw(){
    if(playercount==1){
        game.update(1)
    }
    if(gamestate==1){
        clear()
        //game.play()
        game.update(2)
       
    }
    if(gamestate==2){
       // textSize(30)
        //fill("red")
       // text("kakooz",displayWidth/2,displayHeight/2) 
      kakooz=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
      //image(kakooz_Img, 0,-displayHeight*4,displayWidth, displayHeight*5);
      //kakooz.addImage(kakooz_Img)
// if(t==true){

 
    drawSprites();
 // form.next()
  //gamestate=3;
 // form.displayButtons()

//}
        //game.update(3)
        //kakooz.destroy() 
    }
    if(gamestate==3){
      //  t=false
        //fill("white")
       // game.paragraph()
       // form.next()
   // game.getState()

   
       
    }

    //background("white");

    
}

/*function scanToJpg() {
    scanner.scan(displayImagesOnPage,
    {
       "output_settings" :
       [
          {
             "type" : "return-base64",
             "format" : "jpg"
          }
       ]
    }
    );
 }*/


/*function readPosition(data){
    position=data.val()
    console.log(position.x)
    hipnoticball.x=position.x
    hipnoticball.y=position.y
}
function writePosition(x,y){
    database.ref('ball/position').set({
'x':position.x+x,'y':position.y+y
})
    
    
}

function showError(){
    console.log("error in writing the database")
}*/