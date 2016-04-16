[Hola Cantk](https://github.com/drawapp8/cantk/)是一个功能强大的游戏引擎，它拥有丰富的GUI控件，配合[Hola Studio](http://studio.holaverse.cn/)可以快速开发出游戏的UI界面。[Phaser](http://www.phaser.io/)是一个流行而且强大的游戏引擎，但是它的GUI控件很少，而且缺乏界面编辑器，导出开发游戏UI界面比较低效。gameui-for-phaser-js就是为了发挥两者的长处，让你可以用[Hola Studio](http://studio.holaverse.cn/)UI界面，用[Phaser](http://www.phaser.io/)开发游戏，然后把两者无缝结合起来。

集成到Phaser项目
=====================================
1.创建Phaser项目。

2.把本项目的gameui目录中的文件拷贝到Phaser项目中。

3.用[Hola Studio](http://studio.holaverse.cn/)创建游戏的UI。

4.在Hola Studio的文件菜单中导出『HTML文件』。

5.把导出的zip文件中的myapp.js，assets目录拷贝到Phaser项目。

6.在index.html中添加下列脚本：
```
    <script src="myapp.js"></script>
    <script src="cantk-phaser/cantk-core.js"></script>
    <script src="cantk-phaser/phaser-widget.js"></script>
    <script src="cantk-phaser/phaser-cantk.js"></script>
```

7.初始化。
```	
	Phaser.CanTK.init(game, guiData);
```

8.打开窗口。
```	
	Phaser.CanTK.openWindow("dialog", 0, 0, game.width, game.height, function(retInfo) {
		console.log("dialog closed, and return " + retInfo);
	});
```
