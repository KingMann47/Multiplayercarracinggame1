class Form{
    constructor(){}

  display(){

    var title = createElement('h2');
    title.html("Get Ready to Race!!");
    title.position(400,100)

    var input = createInput("Name");
    input.position(425,200);

    var button = createButton('play')
    button.position(500,250);
    
    button.mousePressed(function(){
        input.hide();
        button.hide();

        var name= input.value();

        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount)

        var greeting = createElement('h3')
        greeting.html("Hello "+ name + " Are You Ready For The Race???")
        greeting.position(350,200)
    
    })
  }

}