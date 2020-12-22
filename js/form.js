class Form{
    constructor(){
        this.input = createInput("NAME");
        this.button = createButton("PLAY");
        this.greeting = createElement("h4");

    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement("h2");
        title.html("CAR RACING GAME");
        title.position(250,60);

       
        this.input.position(250,250);

 
        this.button.position(290,280);

        

        this.button.mousePressed((data) => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount +=1;
            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(250,100);

        })


    }
}