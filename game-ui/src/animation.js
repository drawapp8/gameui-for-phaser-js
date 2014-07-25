
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
				if(onEnd) {
					onEnd();
				}

				sprite.setDisableRepaint(false);
				me.restoreSpriteState();
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

