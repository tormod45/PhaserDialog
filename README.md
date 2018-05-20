# PhaserDialog
A demo project of a dialog system using Phaser engine. It has two parts: a Dialog, and a DialogController.

Usage:
1. establish a dialog component

```javascript
var Dialog=new Dialog(
  {x:50, y:100, width:600}, // put the geo of your dialog box
  { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "left", boundsAlignV: "top" } // put the text style
);
```

2. setup the controller object to control the dialog component
```javascript
var controller=new DialogController(dialog);
```

3. input the list of dialog you want to play
```javascript
controller.setList(
    [
        {        
            text: "Testing sample text....   [Enter]", // the text you want to play
            lettersPerSec: 50, // letters per second
        },
        {        
            text: "Testing sample text... this is a slow one.   [Enter]", // the text you want to play
            lettersPerSec: 20, // letters per second
        },
    ],
    function(){console.log("all texts in the list has been played!")} // what you want to do on completion
);
```

4. call playNext() every time to play the next script
```javascript
controller.playNext();
```
