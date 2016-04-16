
Phaser.Widget = function(game, x, y) {
	this.dirty = true;
	this.pointerDownPoint = {x:0, y:0};
	this.pointerLastPoint = {x:0, y:0};
	this.pointerUpPoint = {x:0, y:0};

	this.canvas = PIXI.CanvasPool.create(this);
	this.context = this.canvas.getContext('2d');
	Phaser.Sprite.call(this, game, x, y, PIXI.Texture.fromCanvas(this.canvas));
}

Phaser.Widget.setActiveWidget = function(activeWidget) {
	Phaser.Widget.activeWidget = activeWidget; 

	return;
}

Phaser.Widget.dispatchOnPointerMove = function(pointer) {
	var activeWidget = Phaser.Widget.activeWidget;
	if(activeWidget && activeWidget.pointerDown) {
		activeWidget.onPointerMove(activeWidget, pointer);
	}

	return;
}

Phaser.Widget.create = function(game, cantkWidget, x, y) {
	var widget = new Phaser.Widget(game, x, y);
	widget.cantkWidget = cantkWidget;
	widget.name = cantkWidget.name;
	widget.enableInput();

	return widget;
}

Phaser.Widget.prototype = Object.create(Phaser.Sprite.prototype);
Phaser.Widget.prototype.constructor = Phaser.Widget;

Phaser.Widget.prototype.preUpdate = function () {
	if (!this.preUpdateLifeSpan() || !this.preUpdateInWorld())
	{
		return false;
	}

	return this.preUpdateCore();

};

Phaser.Widget.prototype.update = function() {};

Phaser.Widget.prototype.destroy = function (destroyChildren) {
	this.texture.destroy(true);
	PIXI.CanvasPool.remove(this);
	Phaser.Component.Destroy.prototype.destroy.call(this, destroyChildren);
};

Phaser.Widget.prototype.updateCanvas = function() {
	if(this.cantkWidget) {
		var cantkWidget = this.cantkWidget;
		this.dirty = false;
		this.canvas.width = cantkWidget.width;
		this.canvas.height = cantkWidget.height;
		cantkWidget.paint(this.context);
		this.updateTexture();

		return true;
	}

	return false;
}

Phaser.Widget.prototype.updateTexture = function () {
	var base = this.texture.baseTexture;
	var crop = this.texture.crop;
	var frame = this.texture.frame;

	var w = this.canvas.width;
	var h = this.canvas.height;

	base.width = w;
	base.height = h;

	crop.width = w;
	crop.height = h;

	frame.width = w;
	frame.height = h;

	this.texture.width = w;
	this.texture.height = h;

	this._width = w;
	this._height = h;

	this.renderable = (w !== 0 && h !== 0);
	this.texture.requiresReTint = true;
	this.texture.baseTexture.dirty();

};

Phaser.Widget.prototype._renderWebGL = function (renderSession) {
	if (this.dirty) {
		this.updateCanvas()
	}

	PIXI.Sprite.prototype._renderWebGL.call(this, renderSession);
};

Phaser.Widget.prototype._renderCanvas = function (renderSession) {
	if (this.dirty)	 {
		this.updateCanvas();
	}
	 
	PIXI.Sprite.prototype._renderCanvas.call(this, renderSession);
};

Phaser.Widget.prototype.isClicked = function() {
	return true;
}

Phaser.Widget.prototype.getCanvas2D = function() {
	return this.context;
}

Phaser.Widget.prototype.getScale = function() {
	return 1;
}

Phaser.Widget.prototype.getViewScale = function() {
	return 1;
}

Phaser.Widget.prototype.getAbsPosition = function() {
	return this.position;
}

Phaser.Widget.prototype.postRedrawAll = function() {
	this.dirty = true;

	return this;
}

Phaser.Widget.prototype.getMoveAbsDeltaX = function() {
	var dx = this.pointerLastPoint.x - this.pointerDownPoint.x;

	return dx;
}

Phaser.Widget.prototype.getMoveAbsDeltaY = function() {
	var dy = this.pointerLastPoint.y - this.pointerDownPoint.y;
	console.log(dy);

	return dy;
}

Phaser.Widget.prototype.onPointerDown = function(sprite, pointer) {
	this.dirty = true;
	var point = pointer;
	this.pointerDown = true;
	this.pointerDownPoint.x = point.x;
	this.pointerDownPoint.y = point.y;
	this.pointerLastPoint.x = point.x;
	this.pointerLastPoint.y = point.y;
	this.cantkWidget.onPointerDown(point);
	Phaser.Widget.setActiveWidget(this);

	console.log("onPointerDown:");

	return true;
}

Phaser.Widget.prototype.onPointerMove = function(sprite, pointer) {
	var point = pointer;
	this.pointerLastPoint.x = point.x;
	this.pointerLastPoint.y = point.y;
	this.cantkWidget.onPointerMove(point);
	this.postRedrawAll();
}

Phaser.Widget.prototype.onPointerUp = function(sprite, pointer) {
	this.dirty = true;
	var point = pointer;
	this.pointerDown = false;
	this.pointerUpPoint.x = point.x;
	this.pointerUpPoint.y = point.y;
	this.cantkWidget.onPointerUp(point);
	Phaser.Widget.setActiveWidget(null);

	console.log("onPointerUp:");
	return true;
}

Phaser.Widget.prototype.enableInput = function(sprite, pointer) {
	this.inputEnabled = true;
	this.input.name = this.name;
	
	this.input.stop();
	if(this.cantkWidget.isUIWindow) {
		var priority = Phaser.CanTK.getWindowInputPriority();
		this.input.start(priority, true);
	}
	else {
		this.input.start(0, true);
	}

	this.events.onInputDown.add(this.onPointerDown, this);
	this.events.onInputUp.add(this.onPointerUp, this);

	return;
}
