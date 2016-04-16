/*
 * File:    phaser-cantk.js
 * Author:  Li XianJing <xianjimli@hotmail.com>
 * Brief:   cantk for phaser
 * 
 * Copyright (c) 2015 - 2016  Holaverse Inc.
 * 
 */

Phaser.CanTK = {};
Phaser.CanTK.App = {};

Phaser.CanTK.wins = [];
Phaser.CanTK.init = function(game, uiData, onDone) {
	Phaser.CanTK.game = game;
	Phaser.CanTK.uiData = uiData;
	var wmData = Phaser.CanTK.uiData.wm;

	wmData.images = {};
	var wm = CanTK.createElementWithJson(wmData);
	wm.setSize(game.width, game.height);
	wm.relayout();
	wm.setApp(Phaser.CanTK.App);
	Phaser.CanTK.wm = wm;

	game.input.addMoveCallback(function(pointer, x, y) {
		Phaser.Widget.dispatchOnPointerMove(pointer);
	});

	wm.openWindowOrg = wm.openWindow;
	wm.openWindow = function(name, onClose, closeCurrent, initData, options) {
		this.openWindowOrg(name, onClose, closeCurrent, initData, options);
		
		var win = wm.find(name);
		var widget = Phaser.Widget.create(game, win, win.x, win.y);
		win.setView(widget);
		game.stage.addChild(widget);

		win.addEventListener("close", function() {
			game.stage.removeChild(widget);
			Phaser.CanTK.wins.pop();
			Phaser.CanTK.redrawWindows();
		});
		win.postRedraw();
		Phaser.CanTK.wins.push(win);

		return widget;
	}

	wm.loadAssets();

	return;
}

Phaser.CanTK.redrawWindows = function() {
	Phaser.CanTK.wins.forEach(function(win) {
		win.postRedraw();
	});
}

Phaser.CanTK.getWindowInputPriority = function() {
	return 10 + Phaser.CanTK.wins.length;
}

Phaser.CanTK.createWidgetsForScene = function(name, onWidgetCreated) {
	var wm = Phaser.CanTK.wm;
	var win = wm.find(name);
	var game = Phaser.CanTK.game;

	if(win) {
		win.fromJsonNow(win.jsonData);
		var arr = win.children;
		for(var i = 0; i < arr.length; i++) {
			var iter = arr[i];
			var widget = Phaser.Widget.create(game, iter, iter.left, iter.top);
			iter.setView(widget);
			if(onWidgetCreated) {
				onWidgetCreated(widget);
			}
			game.stage.addChild(widget);
		}
		win.children = [];
	}
}

Phaser.CanTK.loadScene = function(name, onLoadDone, onWidgetCreated) {
	var wm = Phaser.CanTK.wm;
	var win = wm.find(name);
	wm.loadAssets(name, function(percent, finished, total) {
		if(percent >= 100) {
			Phaser.CanTK.createWidgetsForScene(name, onWidgetCreated);	
			if(onLoadDone) {
				onLoadDone();
			}
		}
	});
}

Phaser.CanTK.openWindow = function(name, x, y, w, h, onWindowClose, initData) {
	var wm = Phaser.CanTK.wm;
	var win = wm.find(name);
	if(win) {
		win.x = x;
		win.y = y;
		win.w = w;
		win.h = h;

		wm.openWindow(name, onWindowClose, false, initData);

		return win.view;
	}

	return null;
}
