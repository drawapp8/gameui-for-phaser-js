(function(){
/*
 * File: main.js
 * Author:  Li XianJing <xianjimli@hotmail.com>
 * Brief: GameUI main API 
 * 
 * Copyright (c) 2014  Li XianJing <xianjimli@hotmail.com>
 * 
 */

GameUI = function() {

};

GameUI.windows = [];

GameUI.preloadAssetsInUIData = function(uiData, onLoadingProgress) {
	var images = [];
	var wm = findWindowManager(uiData);

	foreachAsset(wm ? wm : uiData, function(src) {
		src = toAbsoluteURL(src);

		if(images.indexOf(src) < 0) {
			images.push(src);
		}

		return src;
	});

	Adapter.init();
	Adapter.loadAssets(images, onLoadingProgress);

	return images;
}

GameUI.init = function(game, stage, uiData, view) {
	var wm = findWindowManager(uiData);

	GameUI.view = view;
	GameUI.game = game;
	GameUI.stage = stage;
	GameUI.uiData = uiData;
	GameUI.viewWidth = view.width;
	GameUI.viewHeight = view.height;

	CanTK.init();

	var config = CanTK.detectDeviceConfig();

	if(uiData.config) {
		config.platform = uiData.config.platform;
	}

	GameUI.rootWidget = CanTK.createElementWithJson(wm ? wm : uiData);
	GameUI.rootWidget.setDeviceConfig(uiData.config);	
	GameUI.rootWidget.setDeviceConfig(config);	

	Adapter.init();

	return;
}

GameUI.setStage = function(stage) {
	GameUI.stage = stage;

	return;
}

GameUI.openWindow = function(windowName, x, y, width, height, onWindowClose, initData) {
	var cantkWidget = lookUpWidget(GameUI.rootWidget, windowName);
	var win = GameUI.createUISprite(cantkWidget, x, y, width, height, onWindowClose, initData);
	
	if(win) {
		GameUI.stage.addChild(win);
		GameUI.windows.push(cantkWidget);
	}

	return win;
};

GameUI.createWidget = function(windowName, widgetName, x, y, width, height) {
	var cantkWidget = lookUpWidget(GameUI.rootWidget, windowName, widgetName);
	var widget = GameUI.createSprite(cantkWidget, x, y, width, height);
		
	GameUI.stage.addChild(widget);
	
	return widget;
}

GameUI.loadScene = function(windowName, onSpriteCreate, initData) {
	var w = GameUI.viewWidth;
	var h = GameUI.viewHeight;
	var win = lookUpWidget(GameUI.rootWidget, windowName, null);

	win.setSize(w, h);
	win.setPosition(0, 0);
	win.relayoutChildren();
	win.callOnBeforeOpen(initData);

	var bgImage = win.getImageSrcByType(CanTK.UIElement.DEFAULT_IMAGE);

	if(bgImage) {
		bgImage = toAbsoluteURL(bgImage);
		var bgSprite = Adapter.createSpriteFromImage(bgImage, 0, 0, w, h);

		GameUI.stage.addChild(bgSprite);
	}

	var n = win.children.length;
	for(var i = 0; i < n; i++) {
		var iter = win.children[i];

		iter.onInit();
		iter.saveState();

		var sprite = GameUI.createSprite(iter);
		sprite.name = iter.name;

		onSpriteCreate(sprite);
	}
	
	win.callOnOpen(initData);

	return n;
};

///////////////////////////////internal functions/////////////////////////////////////////
function foreachAsset (element, onAsset) {
	for(var key in element.images) {
		if(key != "display") {
			var src = element.images[key];

			if(src) {
				var newSrc = onAsset(src);
				element.images[key] = newSrc;
			}
		}
	}

	var resourceNames = ["textureJsonURL", "textureURL", "skeletonJsonURL", "soundURL"];
	for(var i = 0; i < resourceNames.length; i++) {
		var name = resourceNames[i];
		var src = element[name];
		if(src) {
			var newSrc = onAsset(src);
			element[name] = newSrc;
		}
	}
                
	if(element.children) {
		for(var i = 0; i < element.children.length; i++) {
			foreachAsset(element.children[i], onAsset);
		}
	}

	return;
}

function toAbsoluteURL(url) {
    var absURL = url;

    if(!url) {
        return url;
    }

    if(url.indexOf("://") < 0) {
        if(url[0] === '/') {
            absURL = location.protocol + "//" + location.host + url;
        }
        else {
            var href = location.href;
            absURL = href.substr(0, href.lastIndexOf("/")) + "/" + url;
        }
    }

    return absURL;
}

function findWindowManager (element) {
	if(element.type === "ui-window-manager") {
		return element;
	}

	if(element.children) {
		for(var i = 0; i < element.children.length; i++) {
			var wm = findWindowManager(element.children[i]);
			if(wm) {
				return wm;
			}
		}
	}

	return null;
}

function lookUpWidget(rootWidget, windowName, widgetName) {
	var win = rootWidget.findChildByName(windowName, true);
	var widget = win;

	if(!win) {
		console.log("Fatal Error: not found " + windowName);
		return null;
	}

	if(widgetName) {
		widget = win.findChildByName(widgetName, true);
		if(!widget) {
			console.log("Fatal Error: not found " + widgetName);
			return null;
		}
	}
			
	return widget;
};


GameUI.getHTMLElementPosition = function (element) {
        var docElem = document.documentElement;
        var win = window;
        var box = null;
        if (typeof element.getBoundingClientRect === 'function') {
            box = element.getBoundingClientRect();
        } else {
            if (element instanceof HTMLCanvasElement) {
                box = {
                    left: 0,
                    top: 0,
                    width: element.width,
                    height: element.height
                };
            } else {
                box = {
                    left: 0,
                    top: 0,
                    width: parseInt(element.style.width),
                    height: parseInt(element.style.height)
                };
            }
        }
        return {
            left: box.left + win.pageXOffset - docElem.clientLeft,
            top: box.top + win.pageYOffset - docElem.clientTop,
            width: box.width,
            height: box.height
        };
};
var Adapter = {};

Adapter.init = function() {
	Adapter.engine = Phaser;

	Adapter.loadAssets = function(srcs) {
		for(var i = 0; i < srcs.length; i++) {
			var iter = srcs[i];
			game.load.image(iter, iter)
		}

		return;
	}
	
	Adapter.createTextureFromCanvas = function(canvas) {
		return new Phaser.RenderTexture(game, canvas.width, canvas.height);
	}

	Adapter.createSpriteFromImage = function(src, x, y, w, h) {
		var sprite = new Adapter.engine.Image(game, x, y, src);

		sprite.width = w;
		sprite.height = h;
		
		sprite.setVisible = function(visible) {
			this.visible = visible;

			return;
		}

		sprite.isVisible = function() {
			return this.visible;
		}

		return sprite;
	}
	
	Adapter.createTextureFromImage = function (src) {
		return src;
	}
	
	Adapter.setTexture = function(sprite, texture) {
		sprite.loadTexture(texture);

		return;
	}
	
	Adapter.setBeforePaintCallback= function(sprite, onBeforePaint) {
		sprite.orgUpdateTransform = sprite.updateTransform;
		sprite.updateTransform = function() {
			if(this.isVisible()) {
				onBeforePaint.call(this);
				this.orgUpdateTransform();
			}

			return;
		}

		return;
	}

	Adapter.createSprite = function(texture, x, y, w, h) {
		if(texture instanceof HTMLCanvasElement) {
			texture = Adapter.createTextureFromCanvas(texture);
		}
		else if(texture instanceof HTMLImageElement) {
			texture = Adapter.createTextureFromImage(texture);
		}

		var sprite = new Adapter.engine.Sprite(game, x, y, texture);
		
		sprite.getAbsPosition = function() {
			var point = {};
			var pos = GameUI.getHTMLElementPosition(GameUI.view);

            point.x = this.getX() + pos.left;
            point.y = this.getY() + pos.top;

			return point;
		}
		
		sprite.getViewScale = function() {
			return 1;
		}

	
		sprite.getX = function() {
			return this.x;
		}
		
		sprite.setX = function(x) {
			this.x = x;

			return;
		}
		
		sprite.getY = function() {
			return this.y;
		}
		
		sprite.setY = function(y) {
			this.y = y;

			return;
		}
		
		sprite.getAnchorX = function() {
			return this.anchor.x;
		}
		
		sprite.setAnchorX = function(anchorX) {
			this.anchor.x = anchorX;

			return;
		}
		
		sprite.getAnchorY = function() {
			return this.anchor.y;
		}
		
		sprite.setAnchorY = function(anchorY) {
			this.anchor.y = anchorY;

			return;
		}

		sprite.getPivotX = function() {
			return this.pivot.x;
		}
		
		sprite.setPivotX = function(pivotX) {
			this.pivot.x = pivotX;

			return;
		}
		
		sprite.getPivotY = function() {
			return this.pivot.y;
		}
		
		sprite.setPivotY = function(pivotY) {
			this.pivot.y = pivotY;

			return;
		}
		
		sprite.getScale = function() {
			return this.scale;
		}
		
		sprite.setScale = function(scale) {
			this.scale.x = scale;
			this.scale.y = scale;

			return;
		}
		
		sprite.getAlpha = function() {
			return this.alpha;
		}
		
		sprite.setAlpha = function(alpha) {
			this.alpha = alpha;

			return;
		}
		
		sprite.rotationFromRadian = function(radian) {
			return radian;
		}

		sprite.getRotation = function() {
			return this.rotation;
		}
		
		sprite.setRotation = function(rotation) {
			this.rotation = rotation;

			return;
		}

		sprite.setVisible = function(visible) {
			this.visible = visible;

			return;
		}

		sprite.isVisible = function() {
			return this.visible;
		}

		sprite.movePivotToCenter = function() {
			var pivotX = sprite.getWidth() >> 1;
			var pivotY = sprite.getHeight() >> 1;
			
			var x = sprite.getX() + pivotX;
			var y = sprite.getY() + pivotY;

			this.setPivotX(pivotX);
			this.setPivotY(pivotY);

			this.setX(x);
			this.setY(y);

			return;
		}

		sprite.enableInput = function() {

			this.inputEnabled = true;
			this.input.name = this.name;

			this.input.stop();
			if(this.widget.isUIWindow) {
				var priority = 10 + GameUI.windows.length;
				this.input.start(priority, true);
			}
			else {
				this.input.start(0, true);
			}
			
			this.events.onInputOver.add(this.onPointerMove, this);
			this.events.onInputDown.add(this.onPointerDown, this);
			this.events.onInputUp.add(this.onPointerUp, this);

			return true;
		}

		sprite.orgUpdateTransform= sprite.updateTransform;
		sprite.updateTransform = function() {
			if(this.isVisible()) {
				this.updateWidgetIfDirty();
				this.orgUpdateTransform();
			}

			return;
		}

		sprite.updateTexture = function() {
			this.texture.baseTexture.width = this.canvas.width;
			this.texture.baseTexture.height = this.canvas.height;
			this.texture.baseTexture.source = this.canvas;
			this.texture.frame.width = this.canvas.width;
			this.texture.frame.height = this.canvas.height;

			this._width = this.canvas.width;
			this._height = this.canvas.height;

			this.requiresUpdate =  true;
		};

		sprite._renderWebGL = Adapter.engine.Text.prototype._renderWebGL;

		sprite.isEventTarget = function() {
			var widget = this.widget;

			if(!GameUI.windows.length) {
				return true;
			}

			if(widget.isUIWindow) {
				return widget === GameUI.windows[GameUI.windows.length-1];
			}
		
			return false;
		}

		sprite.onPointerDown = function(sprite, pointer) {
			if(!this.isEventTarget()) {
				return false;
			}

			var point = {};
			point.x = pointer.x - this.getX();
			point.y = pointer.y - this.getY();

			this.handlePointerDown(point);

			Adapter.activeSprite = sprite;

			return false;
		}
		
		sprite.onPointerMove = function(sprite, pointer) {
			if(!this.isEventTarget()) {
				return false;
			}

			var point = {};
			point.x = pointer.x - this.getX();
			point.y = pointer.y - this.getY();

			this.handlePointerMove(point);

			return false;
		}
		
		sprite.onPointerUp = function(sprite, pointer) {
			if(!this.isEventTarget()) {
				return false;
			}

			var point = {};
			point.x = pointer.x - this.getX();
			point.y = pointer.y - this.getY();

			Adapter.activeSprite = null;

			return this.handlePointerUp(point);
		}
		
		sprite.onRemoved = function() {
			this.input.stop();
		}

		sprite.setX(x);
		sprite.setY(y);
		sprite.width = w;
		sprite.height = h;

		return sprite;
	}

	game.input.addMoveCallback(function(pointer, x, y) {
		if(Adapter.activeSprite) {
			Adapter.activeSprite.onPointerMove(Adapter.activeSprite, pointer);
		}
	});
};


GameUI.Animation = function(sprite) {
	this.duration = 400;
	this.sprite = sprite;
	this.interpolator = new CanTK.DecelerateInterpolator();

	this.setDuration = function(duration) {
		this.duration = duration;

		return;
	}

	this.setInterpolator = function(name) {
		switch(name) {
			case 'a':
			case 'acc':
			case 'accelerate': {
				this.interpolator = new CanTK.AccelerateInterpolator();
				break;
			}
			case 'd':
			case 'dec':
			case 'decelerate': {
				this.interpolator = new CanTK.DecelerateInterpolator();
				break;
			}
			case 'b': 
			case 'bounce': {
				this.interpolator = new CanTK.BounceInterpolator();
				break;
			}
			case 'l': 
			case 'line':
			case 'linear': {
				this.interpolator = new CanTK.LinearInterpolator();
				break;
			}
			case 'ad':
			case 'accdec': {
				this.interpolator = new CanTK.AccDecelerateInterpolator();
			}
		}

		return;
	}

	this.setXRange = function(xFrom, xTo) {
		this.xFrom = xFrom;
		this.xTo = xTo;

		return;
	}
	
	this.setYRange = function(yFrom, yTo) {
		this.yFrom = yFrom;
		this.yTo = yTo;

		return;
	}
	
	this.setAlphaRange = function(alphaFrom, alphaTo) {
		this.alphaFrom = alphaFrom;
		this.alphaTo = alphaTo;

		return;
	}
	
	this.setScaleRange = function(scaleFrom, scaleTo) {
		this.scaleFrom = scaleFrom;
		this.scaleTo = scaleTo;

		return;
	}
	
	this.setRotationRange = function(rotationFrom, rotationTo) {
		this.rotationFrom = rotationFrom;
		this.rotationTo = rotationTo;

		return;
	}

	this.start = function(onStart, onEnd) {
		var me = this;
		this.startTime = Date.now();

		this.saveSpriteState();
		
		if(this.pivotAtCenter) {
			sprite.movePivotToCenter();
		}

		if(onStart) {
			onStart();
		}

		if(sprite.onStartAnimation) {
			sprite.onStartAnimation();
		}

		sprite.setDisableRepaint(true);
		sprite.updateTransform = function() {
			var updateTransform = me.updateTransform;

			if(!me.step()) {
				sprite.setDisableRepaint(false);
				me.restoreSpriteState();
				
				if(onEnd) {
					onEnd();
				}

				if(sprite.onEndAnimation) {
					sprite.onEndAnimation();
				}
			}
			else {
				updateTransform.call(this);
			}

			return;
		}

		return;
	}

	this.step = function() {
		var ellapsed = Date.now() - this.startTime;

		if(ellapsed >= this.duration) {
			return this.stepIt(1);
		}
		else {
			var timePercent = ellapsed/this.duration;
			var percent = this.interpolator.get(timePercent);

			return this.stepIt(percent);
		}
	}

	this.stepIt = function(percent) {
		var x;
		var y;
		var scale;
		var alpha;
		var rotation;

		if(!isNaN(this.xFrom) && !isNaN(this.xTo)) {
			x = this.xFrom + (this.xTo - this.xFrom) * percent;
		}
		
		if(!isNaN(this.yFrom) && !isNaN(this.yTo)) {
			y = this.yFrom + (this.yTo - this.yFrom) * percent;
		}
		
		if(!isNaN(this.scaleFrom) && !isNaN(this.scaleTo)) {
			scale = this.scaleFrom + (this.scaleTo - this.scaleFrom) * percent;
		}
		
		if(!isNaN(this.rotationFrom) && !isNaN(this.rotationTo)) {
			rotation = this.rotationFrom + (this.rotationTo - this.rotationFrom) * percent;
			rotation = sprite.rotationFromRadian(rotation);
		}
		
		if(!isNaN(this.alphaFrom) && !isNaN(this.alphaTo)) {
			alpha = this.alphaFrom + (this.alphaTo - this.alphaFrom) * percent;
		}

		if(!isNaN(x)) {
			this.sprite.setX(Math.round(x));
		}

		if(!isNaN(y)) {
			this.sprite.setY(Math.round(y));
		}

		if(!isNaN(alpha)) {
			this.sprite.setAlpha(alpha);
		}
		
		if(!isNaN(rotation)) {
			this.sprite.setRotation(rotation);
		}

		if(!isNaN(scale)) {
			this.sprite.setScale(scale);
		}

		return percent < 1;
	}

	this.saveSpriteState = function() {
		this.state = {};
		this.state.position = {};

		this.state.x = sprite.getX();
		this.state.y = sprite.getY();
		this.state.pivotX = sprite.getPivotX();
		this.state.pivotY = sprite.getPivotY();
		this.state.anchorX = sprite.getAnchorX();
		this.state.anchorY = sprite.getAnchorY();
		this.state.scale = sprite.getScale();
		this.state.rotation = sprite.getRotation();
		this.state.alpha = sprite.getAlpha();
		this.updateTransform = sprite.updateTransform;

		return;
	}

	this.restoreSpriteState = function() {
		sprite.setX(this.state.x)
		sprite.setY(this.state.y);
		sprite.setPivotX(this.state.pivotX);
		sprite.setPivotY(this.state.pivotY);
		sprite.setAnchorX(this.state.anchorX);
		sprite.setAnchorY(this.state.anchorY);
		sprite.setScale(this.state.scale);
		sprite.setRotation(this.state.rotation);
		sprite.setAlpha(this.state.alpha);
		sprite.updateTransform = this.updateTransform;

		return;
	}

	this.setSpritePivotAtCenter = function() {
		this.pivotAtCenter = true;

		return;
	}

	return;
}

GameUI.Animation.createDefaultWindowOpenAnimation = function(widget) {
	var animation = new GameUI.Animation(widget);

	animation.setInterpolator('ad');
	animation.setScaleRange(0.2, 1.0);
	animation.setAlphaRange(0.2, 1.0);
	animation.setSpritePivotAtCenter();

	return animation;
	
}

GameUI.Animation.createDefaultWindowCloseAnimation = function(widget) {
	var animation = new GameUI.Animation(widget);

	animation.setInterpolator('ad');
	animation.setScaleRange(1.0, 0.2);
	animation.setAlphaRange(1.0, 0.2);
	animation.setSpritePivotAtCenter();

	return animation;
}

CanTK.UIElement.prototype.openWindow = function(name, onWindowClose, closeCurrent, initData) {
	var x;
	var y;
	var w;
	var h;
	var win = this.getWindow();
	var cantkWidget = lookUpWidget(GameUI.rootWidget, name);

	if(win) {
		if(cantkWidget.isUINormalWindow) {
			x = win.x;
			y = win.y;
			w = win.w;
			h = win.h;
		}
		else {
			cantkWidget.parentShape = win;
			cantkWidget.relayout();
			cantkWidget.parentShape = null;

			w = cantkWidget.w;
			h = cantkWidget.h;
			x = win.x + ((win.w - cantkWidget.w) >> 1);
			y = win.y + ((win.h - cantkWidget.h) >> 1);
		}
	}

	if(closeCurrent) {
		this.closeWindow(0);
	}

	var widget = GameUI.openWindow(name, x, y, w, h, onWindowClose, initData); 

	var animation = GameUI.Animation.createDefaultWindowOpenAnimation(widget);
	widget.setWindowCloseAnimation(GameUI.Animation.createDefaultWindowCloseAnimation(widget));

	animation.start();
	
	return widget;
};

CanTK.UIElement.prototype.closeWindow = function(retInfo) {
	var win = null;
	var view = this.getView();

	if(view.widget.isUIWindow) {
		win = view.widget;
		GameUI.windows.remove(win);
	}
	view.widget.setView(null, true);

	if(view.animation) {
		view.animation.start(null, function onEnd() {
			view.setVisible(false);
			if(win) {
				win.callOnClose(retInfo);
			}

			setTimeout(function() {
				GameUI.stage.removeChild(view);
				view.onRemoved();
			}, 0);
		});
	}
	else {
		if(win) {
			win.callOnClose(retInfo);
		}
		GameUI.stage.removeChild(view);
		view.onRemoved();
	}

	return;
};

CanTK.UIElement.prototype.saveState = function() {
	if(isNaN(this.savedX)) {
		this.savedX = this.x;
	}
	if(isNaN(this.savedY)) {
		this.savedY = this.y;
	}
	if(isNaN(this.savedW)) {
		this.savedW = this.w;
	}
	if(isNaN(this.savedH)) {
		this.savedH = this.h;
	}

	return;
};

CanTK.UIElement.prototype.setPosition = function(x, y) {
	this.x = x;
	this.y = y;

	return;
}

Physics = CanTK.Physics;
Physics.updateBodyElementsPosition = function(world) {
	for (var b = world.m_bodyList; b; b = b.m_next) {
		var element = b.element;

		var p = b.GetWorldCenter();
		if(element && element.view) {
			var view = element.view;
			var p = b.GetWorldCenter();
			var a = b.GetAngle();

			if(p.x || p.y) {
				var x = Physics.toPixel(p.x) - (element.w >> 1);
				var y = Physics.toPixel(p.y) - (element.h >> 1);

				view.setX(x);
				if(view.normalizeY) {
					view.setY(view.normalizeY(y));
				}
				else {
					view.setY(y);
				}
				view.setRotation(a);
			}
		}
	}

	return;

	for (var joint = world.m_jointList; joint; joint = joint.m_next) {
		switch (joint.m_type) {
			case b2Joint.e_distanceJoint: {
				break;
			}
			case b2Joint.e_pulleyJoint: {
				break;
			}
			default: {
				var p = joint.GetAnchorA();
				var element = joint.element;
				element.x = Physics.toPixel(p.x) - (element.w >> 1);
				element.y = Physics.toPixel(p.y) - (element.h >> 1);
				break;
			}
		}
	}

	return;
}

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


this.GameUI = GameUI;

}).call(this);
