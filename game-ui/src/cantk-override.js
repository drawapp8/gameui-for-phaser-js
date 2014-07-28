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

