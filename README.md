
集成到Phaser项目
=====================================
1.创建Phaser项目。

2.把本项目的gameui目录中的文件拷贝到Phaser项目中。

3.用Hola Studio创建游戏的UI。

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

7.打开窗口。
```	
	Phaser.CanTK.openWindow("dialog", 0, 0, game.width, game.height);
```
