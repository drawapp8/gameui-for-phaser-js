
var game = new Phaser.Game(480, 854, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {
	Phaser.CanTK.init(game, guiData);
    game.load.image('background','assets/misc/starfield.jpg');
}

function create() {
    Phaser.CanTK.loadScene("win-main", function() {
    	console.log("scene load done");	
    }, function (widget) {
    	console.log(widget.name + " created.");	
    });
}

