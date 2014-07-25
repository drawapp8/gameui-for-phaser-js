function openWindow(name, x, y, w, h) {
	var widget = GameUI.openWindow(name, x, y, w, h, function(ret) {
		console.log("Window Closed: " + ret);   
	}, "it a demo");

	function createOpenAnimation(widget) {
		var animation = new GameUI.Animation(widget);
		
		animation.setInterpolator('ad');
		animation.setScaleRange(0.2, 1.0);
		animation.setAlphaRange(0.2, 1.0);
		animation.setRotationRange(0, 2*Math.PI);
		animation.setSpritePivotAtCenter();

		return animation;
	}
	
	function createCloseAnimation(widget) {
		var animation = new GameUI.Animation(widget);
		
		animation.setInterpolator('a');
		animation.setScaleRange(1.0, 0.2);
		animation.setAlphaRange(1.0, 0.2);
		animation.setRotationRange(2*Math.PI, 0);
		animation.setSpritePivotAtCenter();

		return animation;
	}

	widget.setWindowCloseAnimation(createCloseAnimation(widget));

	var animation = createOpenAnimation(widget);
	animation.start();

	return;
}

function loadScene(name) {
	GameUI.loadScene(name, function(sprite) {
		console.log("Sprite Created: " + sprite.name);
	});

	return;
}

function createWidget(winName, widgetName) {
	return GameUI.createWidget(winName, widgetName, 0, 0);
}
