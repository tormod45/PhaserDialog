function Main(game){
    this.game=game;
}

// public functions
Main.prototype.start=function(){

    console.log("Main.start: game started at ("+this.game.width+","+this.game.height+").");

    var dialog=new Dialog( 
        {x:50, y:100, width:600}, // the geo of the dialog box
        { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "left", boundsAlignV: "top" } // the style of the text
    );

    var controller=new DialogController(dialog);

    controller.setList(
        [
            {        
                text: "Testing sample text.... very very very very long long long long...   [Enter]", // the text you want to play
                lettersPerSec: 50, // letters per second
            },
            {        
                text: "Testing sample text... this is a slow one.   [Enter]", // the text you want to play
                lettersPerSec: 20, // letters per second
            },
            {        
                text: "Testing sample text... this is a very very very very fast one.   [Enter]", // the text you want to play
                lettersPerSec: 150, // letters per second
            }
        ],
        function(){console.log("all texts in the list has been played!")}
    );

    controller.playNext();

    _setupKeys(controller);
}

// private functions
function _setupKeys(controller){
    enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onUp.add(function(){
        console.log("Enter pressed!");
        this.playNext();
    }, controller);
}