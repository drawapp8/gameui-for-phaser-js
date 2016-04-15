var sceneWidth = 480;
var sceneHeight = 720;

var game = new Phaser.Game(sceneWidth, sceneHeight, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

	game.load.image('background','assets/misc/starfield.jpg');
	game.load.image('mushroom', 'assets/misc/test.png');
	game.load.image('1', 'assets/misc/1.png');
	game.load.image('2', 'assets/misc/2.png');
	game.load.image('3', 'assets/misc/3.png');
}

var button;
var background;


function create() {
	var world = game.world;
	function actionOpenWindow() {
		Phaser.CanTK.openWindow("win-main", 0, 0, game.width, game.height);
	}
	
	function actionDialog() {
		Phaser.CanTK.openWindow("dialog", 0, 0, game.width, game.height);
	}

	var buttonStyle = { font: "32px Arial", fill: "#ffffff" };
	background = game.add.tileSprite(0, 0, sceneWidth, sceneHeight, 'background');

	button = game.add.button(game.world.centerX - 95, 400, null, actionOpenWindow, this);
	var buttonLabel = game.make.text( 0, 0, "Open Window", buttonStyle);
    button.addChild( buttonLabel);
	
	button = game.add.button(game.world.centerX - 95, 500, null, actionDialog, this);
	var buttonLabel = game.make.text( 0, 0, "Open Dialog", buttonStyle);
    button.addChild( buttonLabel);

	Phaser.CanTK.init(game, guiData);
	return;
}

