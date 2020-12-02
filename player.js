class Player{
    constructor(){
       // this.standard=0;
   // this.mno=0;
    this.name=null
  //this.age=0
}
    getCount(){
        var playerCountRef=database.ref('playercount')
        playerCountRef.on("value",(data)=>{playercount=data.val()})
    }
    updateCount(count){
        database.ref('/').update({
            playercount:count
        })
    }
    update(){
        var playerIndex="players/player"+this.index
        database.ref(playerIndex).set({name:this.name})
    }


static getPlayerInfo(){
    var playerInfoRef=database.ref('players')
    playerInfoRef.on("value",(data)=>{allplayers=data.val()})

}
    }