
var game = new Phaser.Game(480, 854, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('background','assets/misc/starfield.jpg');

}

var button;
var background;
var choosedLabel;

function create() {

	Phaser.CanTK.init(game, guiData);
    game.stage.backgroundColor = '#182d3b';
    var buttonStyle = { font: "32px Arial", fill: "#ffffff"};

    background = game.add.tileSprite(0, 0, game.width, game.height, 'background');

    button = game.add.button(game.world.centerX - 95, 200, null, onOpenDialog, this);
    var label = game.make.text(5, 0, "Open Dialog", buttonStyle );
    button.addChild(label);

    button = game.add.button(game.world.centerX - 95, 300, null, onOpenWindow, this);
    var label = game.make.text(5, 0, "Open Win", buttonStyle );
    button.addChild(label);
    
    button = game.add.button(game.world.centerX - 95, 400, null, onOpenDialog2, this);
    var label = game.make.text(5, 0, "Choose", buttonStyle );
    button.addChild(label);
    
   choosedLabel = game.make.text(0, game.height-30, "Not Choosed", buttonStyle );
   game.stage.addChild(choosedLabel);
}

function onOpenDialog(button, pointer, isOver) {
	Phaser.CanTK.openWindow("dialog", 0, 0, game.width, game.height);
}

function onOpenDialog2(button, pointer, isOver) {
	function onReturn(ret) {
		choosedLabel.setText("You Choosed " + ret);
	}
	Phaser.CanTK.openWindow("selectorDialog", 0, game.height-300, game.width, 300, onReturn);
}

function onOpenWindow(button, pointer, isOver) {
	Phaser.CanTK.openWindow("scene", 0, 0, game.width, game.height);
}
