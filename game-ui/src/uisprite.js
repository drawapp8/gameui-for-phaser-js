
GameUI.createUISprite = function(cantkWidget, x, y, width, height, onClose, initData) {
	var canvas = document.createElement('canvas');

	if(isNaN(x)) {
		x = cantkWidget.savedX;
	}

	if(isNaN(y)) {
		y = cantkWidget.savedY;
	}

	if(isNaN(width)) {
		width = cantkWidget.savedW;
	}

	if(isNaN(height)) {
		height = cantkWidget.savedH;
	}
		
	canvas.width = width;
	canvas.height = height;

	//var sprite = Adapter.createSprite(canvas, x, y, width, height);
	var sprite = Adapter.createSprite(canvas, x, y, width, height);
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "red";
	ctx.fillRect(0, 0, width, height);

	sprite.canvas = canvas;
	sprite.widget = cantkWidget;
	sprite.name = cantkWidget.name;
	sprite.widget.saveState();
	sprite.widget.setView(sprite);

	////////////////////////////////////////////////////////////////////
	
	sprite.setDisableRepaint = function(disableRepaint) {
		this.disableRepaint =  disableRepaint;

		return;
	}
	
	sprite.setWindowCloseAnimation = function(animation) {
		this.animation = animation;

		return;
	}

	/////////////////////////////////for view //////////////////////////
	
	sprite.getCanvas2D = function() {
		return this.canvas.getContext("2d");
	}

	sprite.getMoveDeltaX = function() {
		return this.deltaMovedX;
	}

	sprite.getMoveDeltaY = function() {
		return this.deltaMovedY;
	}

	sprite.getMoveAbsDeltaX = function() {
		return this.lastPointerPosition.x - this.pointerDownPosition.x;
	}

	sprite.getMoveAbsDeltaY = function() {
		return this.lastPointerPosition.y - this.pointerDownPosition.y;
	}

	sprite.getWidth = function() {
		return this.canvas.width;
	}

	sprite.getHeight = function() {
		return this.canvas.height;
	}

	sprite.getScale = function() {
		return 1;
	}

	sprite.postRedraw = function() {
		this.dirty = true;

		return;
	}

	sprite.postRedrawAll = function() {
		this.dirty = true;

		return;
	}

	sprite.isClicked = function() {
		var dx = this.getMoveAbsDeltaX();
		var dy = this.getMoveAbsDeltaY();

		return Math.abs(dx) < 5 && Math.abs(dy) < 5;
	}

	//////////////////////////////////////////////////////////////
	sprite.updateWidgetIfDirty = function()	{
		if(this.dirty && !this.disableRepaint) {
			this.updateWidget();
			this.dirty = false;
		}

		return;
	}

	sprite.updateWidget = function(firstTime)	{
		var ctx = this.getCanvas2D();

		this.updateCount++;

		this.widget.setPosition(0, 0);
		this.widget.setSize(this.canvas.width, this.canvas.height);
		if(firstTime) {
			this.widget.relayoutChildren();
		}

		ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.widget.paintSelf(ctx);

		this.updateTexture();
	};

	sprite.handlePointerMove = function(point) {
		if(this.lastPointerPosition) {
			this.deltaMovedX = point.x - this.lastPointerPosition.x;
			this.deltaMovedY = point.y - this.lastPointerPosition.y;
		}
		this.lastPointerPosition = point;
		
		this.widget.onPointerMove(point);

		this.postRedrawAll();

		return;
	}

	sprite.handlePointerDown = function(point) {
		this.deltaMovedX = 0;
		this.deltaMovedY = 0;
		this.pointerDownPosition = point;
		this.lastPointerPosition = point;
		
		this.widget.onPointerDown(point);

		return this.widget.hitTestResult;
	}
	
	sprite.handlePointerUp = function(point) {
		this.deltaMovedX = point.x - this.lastPointerPosition.x;
		this.deltaMovedY = point.y - this.lastPointerPosition.y;

		this.lastPointerPosition = point;
		
		this.widget.onPointerUp(point);

		return;
	}

	if(!sprite.onRemoved) {
		sprite.onRemoved = function() {
		}
	}

	if(sprite.widget.isUIWindow) {
		var win = sprite.widget;

		delete win.parentShape;
		win.callOnBeforeOpen(initData);
		win.onClose = onClose;

		setTimeout(function() {
			win.callOnOpen(initData);
			win.postRedraw();
		}, 20);
	}

	sprite.updateWidget(true);
	sprite.dirty = false;

	sprite.enableInput();
	sprite.setAnchorX(0);
	sprite.setAnchorY(0);

	if(sprite.onCreated) {
		sprite.onCreated();
	}

	return sprite;
};

GameUI.createImageAnimationSprite = function(images, x, y, width, height, frameRate) {
	var sprite = Adapter.createSpriteFromImage(images[0], x, y, width, height);

	sprite.textures = [];
	sprite.currentFrameIndex = 0;
	sprite.duration = Math.round(1000/frameRate);
	sprite.previousTime = Date.now();

	for(var i = 0; i < images.length; i++) {
		var texture = Adapter.createTextureFromImage(images[i]);
		sprite.textures.push(texture);
	}

	sprite.updateFrame = function()	{
		var now = Date.now();
		var deltaTime = now - this.previousTime;
		
		if(deltaTime > this.duration) {
			this.nextFrame();
			this.previousTime = now;
		}

		return;
	};
	
	sprite.nextFrame = function() {
		var n = this.textures.length;

		if(n) {
			this.currentFrameIndex = (this.currentFrameIndex+1)%n;
			var texture = this.textures[this.currentFrameIndex];

			Adapter.setTexture(this, texture);
		}

		return;
	};

	Adapter.setBeforePaintCallback(sprite, sprite.updateFrame);

	return sprite;
}


GameUI.createSprite = function(cantkWidget, x, y, width, height) {
	var widget = null;
	if(isNaN(x)) {
		x = cantkWidget.savedX;
	}

	if(isNaN(y)) {
		y = cantkWidget.savedY;
	}

	if(isNaN(width)) {
		width = cantkWidget.savedW;
	}

	if(isNaN(height)) {
		height = cantkWidget.savedH;
	}

	if(cantkWidget.isUIImageAnimation) {
		var images = [];

		cantkWidget.foreachImage(function (name, src) {
			images.push(src);
		});

		widget = GameUI.createImageAnimationSprite(images, x, y, width, height, cantkWidget.getFrameRate());
	}
	else if(cantkWidget.isUIImage) {
		var imageSrc = cantkWidget.getImageSrcByType(CanTK.UIElement.DEFAULT_IMAGE);

		widget = Adapter.createSpriteFromImage(imageSrc, x, y, width, height);
	}
	else {
		widget = GameUI.createUISprite(cantkWidget, x, y, width, height);		
	}


	if(widget) {
		GameUI.stage.addChild(widget);
	}

	return widget;
};


