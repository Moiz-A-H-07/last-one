class Game{
    constructor(){}
    getState(){
        var gameStateRef=database.ref('gamestate');
        gameStateRef.on("value",function(data){gamestate=data.val()})
    }
    update(state){
        database.ref('/').update({gamestate:state})
    }
    async start(){
        if(gamestate==0){
            player=new Player()
            var playerCountRef=await database.ref('playercount').once("value");
            if(playerCountRef.exists()){
                playercount=playerCountRef.val()
                player.getCount()
            }
            
            form=new Form()
            //but=new Button()
            //math=new Maths()
            form.display()
        }
      
    }

    

    play(){
        form.hide()
        //form.next()
        //textSize(30)
        //text("game start",120,100)
        Player.getPlayerInfo()
        //player.getCarsatend()
        if(allplayers!==undefined){
    background("white")
    //image(trackIMG,0,-displayHeight*4,displayWidth,displayHeight*5)
            //var displayPosition=130
/*var index=0
var x=175,y;
            for(var plr in allplayers){
                index=index+1
                x=x+200
                y=displayHeight-allplayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(index==player.index){
                    stroke(10)
                    fill("red")
                    ellipse(x,y,60,60)
                    cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y*/
                }
            
                /*if(plr=="player"+player.index){
                    fill("red")
                }else{
                    fill("black")
                }
            
            displayPosition+=20
            textSize(15)
            text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayPosition)*/
      /*  }}
    
   
    drawSprites();

}*/
    }
}