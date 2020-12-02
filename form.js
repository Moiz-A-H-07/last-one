class Form{
    constructor(){
       
        this.text=createButton('type')
        this.scan=createButton('scan')
       // this.greeting=createElement('h2')
       this.title=createElement('h2')
        //this.standard=createInput("Standard")
       // this.age=createInput("Age")
       // this.mno=createInput("Mobile Number")
       // this.reset=createButton('next')
        // gamestate 4 buttons
      
    }
    hide(){
        this.button.hide()
        this.name.hide()
        this.scan.hide()
        //this.greeting.hide()
        this.title.hide()
        //this.age.hide()
       // this.nur.hide()
        //.sen.hide()
       // this.jun.hide()
        //this.mno.hide()
       // this.standard.hide()
    }
    display(){
       // var title=createElement('h2')
this.title.html("book recommendation and ratings")
this.title.position(displayWidth/2-50,0)
this.scan.position(displayWidth/2-40,displayHeight/2)
this.text.position(displayWidth/2+40,displayHeight/2)
//this.input.position(displayWidth/2-40,displayHeight/2-80)
//this.standard.position(displayWidth/2-40,displayHeight/2-60)
//this.age.position(displayWidth/2-40,displayHeight/2-40)
//this.mno.position(displayHeight/2-40,displayHeight/2-20)
//this.button.position(displayWidth/2+30,displayHeight/2)

//this.reset.position(displayWidth-100,20)
this.text.mousePressed(()=>{
    this.text.hide()
    this.scan.hide()
    this.title.hide()
    this.name=createInput("Book Name")
    this.button=createInput("author")
    this.con=createButton("continue")
    this.name.position(displayWidth/2,displayHeight/2-50)
    this.button.position(displayWidth/2,displayHeight/2+50)
    this.con.position(displayWidth/2,displayHeight/2+100)

    this.con.mousePressed(()=>{
        var book=database.ref('book/book1')
        book.on("value",function(data){
          name1=data.val()  
        })
        document.getElementById(this.name).value = this.name;
        var n = name1.localeCompare(this.name);
        x={str:this.name}
        y={str:name1}
        if(n==0){
            text("matched",displayWidth/2,displayHeight/2)
        }
       // console.log(name1)
      // window.open("https://moiz-a-h-07.github.io/details/")
    })
 

   
})
this.scan.mousePressed(()=>{
    
    textSize(30)
    fill("blue")
    text("scan the front book of the image which has the bookName and the Author name",displayWidth/2-100,displayHeight/2-80)
    s=new Scan()
   s.scanToJpg()
})

    }

}
