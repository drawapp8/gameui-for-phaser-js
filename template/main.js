
var game = new Phaser.Game(480, 854, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('background','assets/misc/starfield.jpg');

}

var button;
var background;

function create() {

    game.stage.backgroundColor = '#182d3b';
    var buttonStyle = { font: "32px Arial", fill: "#ffffff"};

    background = game.add.tileSprite(0, 0, game.width, game.height, 'background');

    button = game.add.button(game.world.centerX - 95, 400, null, onOpenDialog, this);
    var label = game.make.text(5, 0, "Open Dialog", buttonStyle );
    button.addChild(label);

    button = game.add.button(game.world.centerX - 95, 300, null, onOpenWindow, this);
    var label = game.make.text(5, 0, "Open Win", buttonStyle );
    button.addChild(label);
}

function onOpenDialog(button, pointer, isOver) {
}

function onOpenWindow(button, pointer, isOver) {
}
