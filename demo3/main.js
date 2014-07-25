var sceneWidth = 480;
var sceneHeight = 720;

var game = new Phaser.Game(sceneWidth, sceneHeight, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
    game.load.image('background','assets/misc/starfield.jpg');

	GameUI.preloadAssetsInUIData(guiData, game);
}

var button;
var background;

function create() {

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, sceneWidth, sceneHeight, 'background');

    GameUI.init(Phaser, game.stage, guiData, game.renderer.view);

	loadScene("win-main");

	return;
}

