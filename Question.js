class Question {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2')
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      
      this.title.html("My Quiz Game");
      this.title.position(350,0);
  
     // this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);
      //this.button.position(displayWidth/2+ 30, displayHeight/2);
  
  this.question.html("Question :- What goes up but never comes down?")
  this.question.position(150,80);
  this.option1.html("1: Age");
  this.option1.position(150,100);
  this.option2.html("2: mountain");
  this.option2.position(150,120);
  this.option3.html("3: Tree");
  this.option3.position(150,140);
  
  this.input.position(150,230)
      //this.button.mousePressed(()=>{
      //  this.input.hide();
        //this.button.hide();
       // player.name = this.input.value();
        //playerCount+=1;
        //player.index = playerCount;
        //player.update();
        //player.updateCount(playerCount);
        //this.greeting.html("Hello " + player.name)
        //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    //  });
  
    }
  }
  