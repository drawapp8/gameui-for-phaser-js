var guiData= {
	"type": "ui-device",
	"name": "android-WXGA720",
	"w": 860,
	"h": 1802,
	"x": 524,
	"y": -111,
	"text": "",
	"xAttr": 0,
	"yAttr": 0,
	"widthAttr": 0,
	"heightAttr": 0,
	"hasChildren": true,
	"xParam": 1,
	"yParam": 1,
	"widthParam": 1,
	"heightParam": 1,
	"isUIDevice": true,
	"isUIElement": true,
	"style": {
		"lineWidth": 2,
		"lineColor": "Green",
		"fillColor": "Black",
		"textColor": "White",
		"fontSize": 24,
		"fontFamily": "serif"
	},
	"events": {
		"onClick": "console.log(\"onClick was triggered\")"
	},
	"images": {
		"display": 2,
		"default_bg": "drawapp8/images/devices/device_1280x720.png"
	},
	"config": {
		"name": "android-WXGA720",
		"bg": "/drawapp8/images/devices/device_1280x720.png",
		"platform": "android",
		"version": "4",
		"lcdDensity": "xhdpi",
		"width": 860,
		"height": 1802,
		"screenX": 74,
		"screenY": 268,
		"screenW": 720,
		"screenH": 1280,
		"hasMenuBar": true
	},
	"children": [
		{
			"type": "ui-screen",
			"name": "ui-screen",
			"w": 720,
			"h": 1280,
			"x": 74,
			"y": 268,
			"text": "",
			"xAttr": 0,
			"yAttr": 0,
			"widthAttr": 0,
			"heightAttr": 0,
			"xParam": 1,
			"yParam": 1,
			"widthParam": 1,
			"heightParam": 1,
			"hasStatusBar": true,
			"yStatusBar": 0,
			"hStatusBar": 40,
			"fixedX": 65,
			"fixedY": 238,
			"hasChildren": true,
			"isUIScreen": true,
			"isUIElement": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "white",
				"textColor": "Black",
				"fontSize": 24,
				"fontFamily": "serif"
			},
			"events": {
				"onClick": "console.log(\"onClick was triggered\")"
			},
			"images": {
				"display": 2
			},
			"children": [
				{
					"type": "ui-status-bar",
					"name": "ui-status-bar",
					"w": 720,
					"h": 40,
					"x": 0,
					"y": 0,
					"text": "",
					"xAttr": 0,
					"yAttr": 0,
					"widthAttr": 2,
					"heightAttr": 0,
					"xParam": 1,
					"yParam": 1,
					"widthParam": 1,
					"heightParam": 1,
					"hasChildren": true,
					"isUIStatusBar": true,
					"isUIElement": true,
					"style": {
						"lineWidth": 2,
						"lineColor": "Green",
						"fillColor": "white",
						"textColor": "Black",
						"fontSize": 24,
						"fontFamily": "serif"
					},
					"events": {
						"onClick": "console.log(\"onClick was triggered\")"
					},
					"images": {
						"display": 3,
						"default_bg": "drawapp8/images/theme/default/android/4/status_bar.png"
					}
				},
				{
					"type": "ui-window-manager",
					"name": "window-manager",
					"w": 720,
					"h": 1144,
					"x": 0,
					"y": 40,
					"text": "",
					"xAttr": 0,
					"yAttr": 0,
					"widthAttr": 2,
					"heightAttr": 0,
					"current": 3,
					"xParam": 1,
					"yParam": 1,
					"widthParam": 1,
					"heightParam": 1,
					"hasChildren": true,
					"showHignlight": true,
					"isUIWindowManager": true,
					"isUIFrames": true,
					"isUIElement": true,
					"style": {
						"lineWidth": 2,
						"lineColor": "Green",
						"fillColor": "white",
						"textColor": "Black",
						"fontSize": 24,
						"fontFamily": "serif"
					},
					"events": {
						"onClick": "console.log(\"onClick was triggered\")",
						"onChanged": null
					},
					"images": {
						"display": 2
					},
					"children": [
						{
							"type": "ui-window",
							"name": "win-main",
							"w": 720,
							"h": 1144,
							"x": 0,
							"y": 0,
							"text": "",
							"opacity": 0.4,
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"hasChildren": true,
							"windowType": "main",
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 24,
								"fontFamily": "serif"
							},
							"events": {
								"onClick": null,
								"onLoad": null,
								"onUnload": null,
								"onOpen": "var config = {};\nconfig.offsetYFrom = -20;\nconfig.offsetYTo = 0;\n\nconfig.frequency = 2;\n\nvar image = this.getWindow().findChildByName(\"ui-image-bird\", true);\nimage.setHighlightConfig(config);\n\nconfig = {};\nconfig.rotationFrom = -0.2;\nconfig.rotationTo = 0.2;\n\nconfig.scaleFrom =  0.9;\nconfig.scaleTo = 1.1;\n\nconfig.opacityFrom =  0.1;\nconfig.opacityTo = 1.0;\nconfig.frequency = 2;\n\nvar image = this.getWindow().findChildByName(\"ui-image-settings\", true);\nimage.setHighlightConfig(config);\n",
								"onBeforeOpen": null,
								"onClose": "console.log(\"onClose was triggered\")",
								"onSwitchToBack": null,
								"onSwitchToFront": null,
								"onGesture": null,
								"onKeyDown": null,
								"onKeyUp": null
							},
							"images": {
								"display": 2
							},
							"children": [
								{
									"type": "ui-button",
									"name": "ui-button",
									"w": 325,
									"h": 89,
									"x": 198,
									"y": 207,
									"text": "Open Window",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"hMargin": 5,
									"vMargin": 5,
									"xAttr": 3,
									"yAttr": 2,
									"widthAttr": 0,
									"heightAttr": 0,
									"wMin": 50,
									"hMin": 50,
									"enableAutoScaleFontSize": true,
									"xParam": 1,
									"yParam": 0.18094405594405594,
									"widthParam": 1,
									"heightParam": 1,
									"isUIButton": true,
									"isUIElement": true,
									"hasChildren": true,
									"linkTo": "win://win-bonus",
									"style": {
										"lineWidth": 2,
										"lineColor": "Red",
										"fillColor": "White",
										"textColor": "#E0E0E0",
										"fontSize": 32,
										"fontFamily": "serif",
										"textB": true,
										"enableGradient": true
									},
									"events": {
										"onClick": "this.openWindow(\"win-bonus\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 2,
										"focused_bg": "drawapp8/images/common/icons/xhdpi/button_blue.9.png",
										"active_bg": "drawapp8/images/common/icons/xhdpi/button_blue_active.9.png",
										"normal_bg": "drawapp8/images/common/icons/xhdpi/button_blue.9.png",
										"disable_bg": "drawapp8/images/common/icons/xhdpi/button_blue.9.png"
									}
								},
								{
									"type": "ui-button",
									"name": "ui-button",
									"w": 325,
									"h": 89,
									"x": 198,
									"y": 376,
									"text": "Open Dialog",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"hMargin": 5,
									"vMargin": 5,
									"xAttr": 3,
									"yAttr": 2,
									"widthAttr": 0,
									"heightAttr": 0,
									"wMin": 50,
									"hMin": 50,
									"enableAutoScaleFontSize": true,
									"xParam": 1,
									"yParam": 0.32867132867132864,
									"widthParam": 1,
									"heightParam": 1,
									"isUIButton": true,
									"isUIElement": true,
									"hasChildren": true,
									"linkTo": "win://win-dlg-confirm",
									"style": {
										"lineWidth": 2,
										"lineColor": "Red",
										"fillColor": "White",
										"textColor": "#E0E0E0",
										"fontSize": 32,
										"fontFamily": "serif",
										"textB": true,
										"enableGradient": true
									},
									"events": {
										"onClick": "this.openWindow(\"win-dlg-confirm\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 2,
										"focused_bg": "drawapp8/images/common/icons/xhdpi/button_red.9.png",
										"active_bg": "drawapp8/images/common/icons/xhdpi/button_red_active.9.png",
										"normal_bg": "drawapp8/images/common/icons/xhdpi/button_red.9.png",
										"disable_bg": "drawapp8/images/common/icons/xhdpi/button_red.9.png"
									}
								},
								{
									"type": "ui-label",
									"name": "ui-label",
									"w": 720,
									"h": 72,
									"x": 0,
									"y": 0,
									"text": "Game UI Demo",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"hMargin": 5,
									"vMargin": 5,
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"autoAdjustHeight": false,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUILabel": true,
									"isUIElement": true,
									"hasChildren": true,
									"ANIM_OLD_OUT": 1,
									"ANIM_NEW_IN": 3,
									"style": {
										"lineWidth": 2,
										"lineColor": "Red",
										"fillColor": "rgba(0,0,0,0)",
										"textColor": "Orange",
										"fontSize": 37,
										"fontFamily": "serif"
									},
									"events": {
										"onClick": null,
										"onChanged": null,
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 2
									}
								},
								{
									"type": "ui-button",
									"name": "ui-button",
									"w": 325,
									"h": 89,
									"x": 198,
									"y": 543,
									"text": "OpenDialog",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 3,
									"yAttr": 2,
									"widthAttr": 0,
									"heightAttr": 0,
									"wMin": 50,
									"hMin": 50,
									"enableAutoScaleFontSize": true,
									"xParam": 1,
									"yParam": 0.47465034965034963,
									"widthParam": 1,
									"heightParam": 1,
									"isUIButton": true,
									"isUIElement": true,
									"hasChildren": true,
									"linkTo": "win://win-images",
									"style": {
										"lineWidth": 2,
										"lineColor": "Red",
										"fillColor": "White",
										"textColor": "#E0E0E0",
										"fontSize": 28,
										"fontFamily": "serif",
										"textB": true,
										"enableGradient": true
									},
									"events": {
										"onClick": "this.openWindow(\"win-images\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 2,
										"focused_bg": "drawapp8/images/common/icons/xhdpi/btn_2.9.png",
										"active_bg": "drawapp8/images/common/icons/xhdpi/btn_2_pressed.9.png",
										"normal_bg": "drawapp8/images/common/icons/xhdpi/btn_2.9.png",
										"disable_bg": "drawapp8/images/common/icons/xhdpi/btn_2.9.png"
									}
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-bonus",
							"w": 720,
							"h": 1144,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "htranslate",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"hasChildren": true,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 24,
								"fontFamily": "serif"
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
								"onLoad": "console.log(\"onLoad was triggered\")",
								"onUnload": "console.log(\"onUnload was triggered\")",
								"onOpen": "var config = {};\nconfig.rotationFrom = -0.2;\nconfig.rotationTo = 0.2;\n\nconfig.scaleFrom =  0.9;\nconfig.scaleTo = 1.1;\n\nconfig.opacityFrom =  0.1;\nconfig.opacityTo = 1.0;\nconfig.frequency = 2;\n\nvar image = this.getWindow().findChildByName(\"ui-image-bonus\", true);\nimage.setHighlightConfig(config);",
								"onBeforeOpen": null,
								"onClose": null,
								"onSwitchToBack": null,
								"onSwitchToFront": null,
								"onGesture": "console.log(\"onGesture was triggered\")",
								"onKeyDown": null,
								"onKeyUp": null
							},
							"images": {
								"display": 2
							},
							"children": [
								{
									"type": "ui-grid-view",
									"name": "ui-grid-view",
									"w": 720,
									"h": 418,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 1,
									"spacer": 0,
									"offset": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 100,
									"hMax": 2000,
									"itemSize": 114,
									"itemWidth": 1,
									"itemHeight": 2,
									"itemWidthType": 1,
									"itemHeightType": 1,
									"scrollBarOpacity": 0,
									"scrollable": "always",
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 0.36538461538461536,
									"hasChildren": true,
									"cols": 1,
									"rows": 2,
									"widthScaleMin": 20,
									"widthScaleMax": 2000,
									"heightScaleMin": 200,
									"heightScaleMax": 2000,
									"isUIGrid": true,
									"isUILayout": true,
									"isUIGridView": true,
									"isUIVScrollView": true,
									"isUIScrollView": true,
									"isUIElement": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "#f0f0f0",
										"textColor": "Blue",
										"fontSize": 24,
										"fontFamily": "serif"
									},
									"events": {
										"onClick": null
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-image",
											"name": "ui-image",
											"w": 720,
											"h": 209,
											"x": 0,
											"y": 0,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"clickable": false,
											"clickedStyleParam": 0.8,
											"clickedStyleType": 0,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"hasChildren": true,
											"isUIImage": true,
											"isUIElement": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "White",
												"textColor": "Black",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 3,
												"default_bg": "apps/gameui-demos/demo1/images/bg_1.png"
											},
											"children": [
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 333,
													"h": 59,
													"x": 0,
													"y": 100,
													"text": "卑鄙分数",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"hMargin": 10,
													"vMargin": 10,
													"xAttr": 4,
													"yAttr": 2,
													"widthAttr": 1,
													"heightAttr": 0,
													"autoAdjustHeight": false,
													"xParam": 1,
													"yParam": 0.4784688995215311,
													"widthParam": 0.4625,
													"heightParam": 1,
													"hasChildren": true,
													"ANIM_OLD_OUT": 1,
													"ANIM_NEW_IN": 3,
													"widthScaleMin": 166,
													"widthScaleMax": 666,
													"isUILabel": true,
													"isUIElement": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"fillColor": "rgba(0,0,0,0)",
														"textColor": "#00afa7",
														"fontSize": 36,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2
													}
												},
												{
													"type": "ui-color-tile",
													"name": "ui-color-tile",
													"w": 720,
													"h": 42,
													"x": 0,
													"y": 167,
													"text": "",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"hMargin": 1,
													"vMargin": 1,
													"xAttr": 0,
													"yAttr": 5,
													"widthAttr": 2,
													"heightAttr": 0,
													"roundRadius": 0,
													"isUIButton": false,
													"isUIColorButton": false,
													"isUIColorTile": true,
													"enableAutoScaleFontSize": true,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"hasChildren": true,
													"isUIElement": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "rgba(0,0,0,0)",
														"fillColor": "#ff6d02",
														"textColor": "#f5f5f5",
														"fontSize": 32,
														"fontFamily": "serif",
														"textB": true,
														"activeFillColor": "#ff6d02"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2
													},
													"children": [
														{
															"type": "ui-label",
															"name": "ui-label",
															"w": 113,
															"h": 26,
															"x": 1,
															"y": 8,
															"text": "0",
															"vTextAlign": "middle",
															"hTextAlign": "left",
															"hMargin": 10,
															"vMargin": 10,
															"xAttr": 4,
															"yAttr": 3,
															"widthAttr": 0,
															"heightAttr": 0,
															"autoAdjustHeight": false,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"hasChildren": true,
															"ANIM_OLD_OUT": 1,
															"ANIM_NEW_IN": 3,
															"isUILabel": true,
															"isUIElement": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Red",
																"fillColor": "rgba(0,0,0,0)",
																"textColor": "#f5f5f5",
																"fontSize": 32,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": null,
																"onChanged": null,
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 2
															}
														}
													]
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 330,
													"h": 78,
													"x": 390,
													"y": 66,
													"text": "Game Paused",
													"vTextAlign": "middle",
													"hTextAlign": "right",
													"hMargin": 20,
													"vMargin": 20,
													"xAttr": 5,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"autoAdjustHeight": false,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"hasChildren": true,
													"ANIM_OLD_OUT": 1,
													"ANIM_NEW_IN": 3,
													"isUILabel": true,
													"isUIElement": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"fillColor": "rgba(0,0,0,0)",
														"textColor": "#888888",
														"fontSize": 36,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2
													}
												}
											]
										},
										{
											"type": "ui-image",
											"name": "ui-image",
											"w": 720,
											"h": 209,
											"x": 0,
											"y": 209,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"clickable": false,
											"clickedStyleParam": 0.8,
											"clickedStyleType": 0,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"hasChildren": true,
											"isUIImage": true,
											"isUIElement": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "White",
												"textColor": "Black",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 3,
												"default_bg": "apps/gameui-demos/demo1/images/bg_2.png"
											},
											"children": [
												{
													"type": "ui-grid-view",
													"name": "ui-grid-view",
													"w": 296,
													"h": 196,
													"x": 0,
													"y": 0,
													"text": "",
													"xAttr": 4,
													"yAttr": 6,
													"widthAttr": 1,
													"heightAttr": 3,
													"spacer": 0,
													"offset": 0,
													"wMin": 100,
													"wMax": 2000,
													"hMin": 100,
													"hMax": 2000,
													"itemSize": 114,
													"itemWidth": 1,
													"itemHeight": 4,
													"itemWidthType": 1,
													"itemHeightType": 1,
													"scrollBarOpacity": 0,
													"scrollable": "always",
													"xParam": 1,
													"yParam": 1,
													"widthParam": 0.4111111111111111,
													"heightParam": 1,
													"hasChildren": true,
													"cols": 1,
													"rows": 4,
													"widthScaleMin": 20,
													"widthScaleMax": 2000,
													"heightScaleMin": 183,
													"heightScaleMax": 2000,
													"isUIGrid": true,
													"isUILayout": true,
													"isUIGridView": true,
													"isUIVScrollView": true,
													"isUIScrollView": true,
													"isUIElement": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Orange",
														"fillColor": "#f0f0f0",
														"textColor": "Blue",
														"fontSize": 24,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null
													},
													"images": {
														"display": 2
													},
													"children": [
														{
															"type": "ui-label",
															"name": "ui-label",
															"w": 296,
															"h": 49,
															"x": 0,
															"y": 0,
															"text": "香蕉",
															"vTextAlign": "middle",
															"hTextAlign": "left",
															"hMargin": 10,
															"vMargin": 10,
															"xAttr": 0,
															"yAttr": 0,
															"widthAttr": 0,
															"heightAttr": 0,
															"autoAdjustHeight": false,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"hasChildren": true,
															"ANIM_OLD_OUT": 1,
															"ANIM_NEW_IN": 3,
															"isUILabel": true,
															"isUIElement": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Red",
																"fillColor": "rgba(0,0,0,0)",
																"textColor": "#00afa7",
																"fontSize": 32,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": null,
																"onChanged": null,
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 2
															}
														},
														{
															"type": "ui-label",
															"name": "ui-label",
															"w": 296,
															"h": 49,
															"x": 0,
															"y": 49,
															"text": "0",
															"vTextAlign": "middle",
															"hTextAlign": "left",
															"hMargin": 10,
															"vMargin": 10,
															"xAttr": 0,
															"yAttr": 0,
															"widthAttr": 0,
															"heightAttr": 0,
															"autoAdjustHeight": false,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"hasChildren": true,
															"ANIM_OLD_OUT": 1,
															"ANIM_NEW_IN": 3,
															"isUILabel": true,
															"isUIElement": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Red",
																"fillColor": "rgba(0,0,0,0)",
																"textColor": "#396070",
																"fontSize": 32,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": null,
																"onChanged": null,
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 2
															}
														},
														{
															"type": "ui-label",
															"name": "ui-label",
															"w": 296,
															"h": 49,
															"x": 0,
															"y": 98,
															"text": "距离",
															"vTextAlign": "middle",
															"hTextAlign": "left",
															"hMargin": 10,
															"vMargin": 10,
															"xAttr": 0,
															"yAttr": 0,
															"widthAttr": 0,
															"heightAttr": 0,
															"autoAdjustHeight": false,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"hasChildren": true,
															"ANIM_OLD_OUT": 1,
															"ANIM_NEW_IN": 3,
															"isUILabel": true,
															"isUIElement": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Red",
																"fillColor": "rgba(0,0,0,0)",
																"textColor": "#00afa7",
																"fontSize": 32,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": null,
																"onChanged": null,
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 2
															}
														},
														{
															"type": "ui-label",
															"name": "ui-label",
															"w": 296,
															"h": 49,
															"x": 0,
															"y": 147,
															"text": "0米",
															"vTextAlign": "middle",
															"hTextAlign": "left",
															"hMargin": 10,
															"vMargin": 10,
															"xAttr": 0,
															"yAttr": 0,
															"widthAttr": 0,
															"heightAttr": 0,
															"autoAdjustHeight": false,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"hasChildren": true,
															"ANIM_OLD_OUT": 1,
															"ANIM_NEW_IN": 3,
															"isUILabel": true,
															"isUIElement": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Red",
																"fillColor": "rgba(0,0,0,0)",
																"textColor": "#396070",
																"fontSize": 32,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": null,
																"onChanged": null,
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 2
															}
														}
													]
												},
												{
													"type": "ui-color-tile",
													"name": "ui-color-tile",
													"w": 720,
													"h": 13,
													"x": 0,
													"y": 196,
													"text": "",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"hMargin": 8,
													"vMargin": 8,
													"xAttr": 0,
													"yAttr": 5,
													"widthAttr": 2,
													"heightAttr": 0,
													"roundRadius": 0,
													"isUIButton": false,
													"isUIColorButton": false,
													"isUIColorTile": true,
													"enableAutoScaleFontSize": true,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"hasChildren": true,
													"isUIElement": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "rgba(0,0,0,0)",
														"fillColor": "#396070",
														"textColor": "Black",
														"fontSize": 36,
														"fontFamily": "serif",
														"textB": true,
														"activeFillColor": "#396070"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-view-pager",
									"name": "ui-view-pager",
									"w": 720,
									"h": 560,
									"x": 0,
									"y": 418,
									"text": "",
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 3,
									"current": 1,
									"showIndicator": false,
									"hasChildren": true,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"heightScaleMin": 505,
									"heightScaleMax": 2022,
									"isUIViewPager": true,
									"isUIPageManager": true,
									"isUIFrames": true,
									"isUIElement": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "#efefef",
										"textColor": "Blue",
										"fontSize": 24,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": null,
										"onChanged": null
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-page",
											"name": "ui-page",
											"w": 720,
											"h": 560,
											"x": 0,
											"y": 0,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 2,
											"heightAttr": 2,
											"hasChildren": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIPage": true,
											"isUIElement": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "White",
												"textColor": "Blue",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": null
											},
											"images": {
												"display": 3,
												"default_bg": "apps/gameui-demos/demo1/images/bg_3.png"
											},
											"children": [
												{
													"type": "ui-list-view",
													"name": "ui-list-view",
													"w": 720,
													"h": 560,
													"x": 0,
													"y": 0,
													"text": "",
													"xAttr": 0,
													"yAttr": 6,
													"widthAttr": 2,
													"heightAttr": 3,
													"wMin": 100,
													"wMax": 2000,
													"hMin": 100,
													"hMax": 2000,
													"itemHeight": 114,
													"itemHeightVariable": true,
													"offset": 0,
													"scrollBarOpacity": 0,
													"scrollable": "always",
													"updateStatus": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"hasChildren": true,
													"isUIList": true,
													"isUILayout": true,
													"isUIListView": true,
													"isUIVScrollView": true,
													"isUIScrollView": true,
													"isUIElement": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Orange",
														"fillColor": "#f0f0f0",
														"textColor": "Blue",
														"fontSize": 24,
														"fontFamily": "serif",
														"enableShadow": true,
														"shadow": {
															"x": 0,
															"y": 0,
															"blur": 8,
															"color": "Black"
														}
													},
													"events": {
														"onClick": null,
														"onUpdateData": null
													},
													"images": {
														"display": 2,
														"scrollBarImg": "drawapp8/images/theme/default/android/scrollbar.png"
													},
													"children": [
														{
															"type": "ui-list-item",
															"name": "ui-list-item",
															"w": 720,
															"h": 143,
															"x": 0,
															"y": 0,
															"text": "",
															"xAttr": 0,
															"yAttr": 0,
															"widthAttr": 2,
															"heightAttr": 0,
															"autoAdjustHeight": false,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"hasChildren": true,
															"ANIM_DRAW_LINE": 1,
															"isUIListItem": true,
															"isUIElement": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "rgba(0,0,0,0)",
																"fillColor": "rgba(0,0,0,0)",
																"textColor": "rgba(0,0,0,0)",
																"fontSize": 24,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": null,
																"onLongPress": null,
																"onRemoved": null
															},
															"images": {
																"display": 2
															},
															"children": [
																{
																	"type": "ui-group",
																	"name": "ui-group",
																	"w": 720,
																	"h": 129,
																	"x": 0,
																	"y": 0,
																	"text": "",
																	"hMargin": 10,
																	"vMargin": 10,
																	"xAttr": 0,
																	"yAttr": 0,
																	"widthAttr": 2,
																	"heightAttr": 0,
																	"roundRadius": 5,
																	"xParam": 1,
																	"yParam": 1,
																	"widthParam": 1,
																	"heightParam": 1,
																	"hasChildren": true,
																	"isUIGroup": true,
																	"isUIElement": true,
																	"widthScaleMin": 309,
																	"widthScaleMax": 2000,
																	"style": {
																		"lineWidth": 2,
																		"lineColor": "rgba(0,0,0,0)",
																		"fillColor": "rgba(0,0,0,0)",
																		"textColor": "Blue",
																		"fontSize": 24,
																		"fontFamily": "sans"
																	},
																	"events": {
																		"onClick": null,
																		"onInit": null
																	},
																	"images": {
																		"display": 2
																	},
																	"children": [
																		{
																			"type": "ui-color-tile",
																			"name": "ui-color-tile",
																			"w": 700,
																			"h": 41,
																			"x": 10,
																			"y": 44,
																			"text": "",
																			"vTextAlign": "middle",
																			"hTextAlign": "center",
																			"hMargin": 10,
																			"vMargin": 10,
																			"xAttr": 3,
																			"yAttr": 3,
																			"widthAttr": 2,
																			"heightAttr": 0,
																			"roundRadius": 8,
																			"isUIButton": false,
																			"isUIColorButton": false,
																			"isUIColorTile": true,
																			"enableAutoScaleFontSize": true,
																			"xParam": 1,
																			"yParam": 1,
																			"widthParam": 1,
																			"heightParam": 1,
																			"hasChildren": true,
																			"widthScaleMin": 240,
																			"widthScaleMax": 1200,
																			"isUIElement": true,
																			"style": {
																				"lineWidth": 2,
																				"lineColor": "rgba(0,0,0,0)",
																				"fillColor": "#FFCC33",
																				"textColor": "Black",
																				"fontSize": 35,
																				"fontFamily": "serif",
																				"textB": true
																			},
																			"events": {
																				"onClick": null,
																				"onOnUpdateTransform": null
																			},
																			"images": {
																				"display": 2
																			}
																		},
																		{
																			"type": "ui-color-tile",
																			"name": "ui-color-tile",
																			"w": 78,
																			"h": 87,
																			"x": 10,
																			"y": 21,
																			"text": "X2",
																			"vTextAlign": "middle",
																			"hTextAlign": "center",
																			"hMargin": 8,
																			"vMargin": 8,
																			"xAttr": 4,
																			"yAttr": 3,
																			"widthAttr": 0,
																			"heightAttr": 0,
																			"roundRadius": 300,
																			"isUIButton": false,
																			"isUIColorButton": false,
																			"isUIColorTile": true,
																			"enableAutoScaleFontSize": true,
																			"xParam": 1,
																			"yParam": 1,
																			"widthParam": 1,
																			"heightParam": 1,
																			"hasChildren": true,
																			"isUIElement": true,
																			"style": {
																				"lineWidth": 2,
																				"lineColor": "#008080",
																				"fillColor": "#f5f5f5",
																				"textColor": "#FF9900",
																				"fontSize": 28,
																				"fontFamily": "serif",
																				"textB": true
																			},
																			"events": {
																				"onClick": null,
																				"onOnUpdateTransform": null
																			},
																			"images": {
																				"display": 2
																			}
																		},
																		{
																			"type": "ui-color-tile",
																			"name": "ui-color-tile",
																			"w": 90,
																			"h": 105,
																			"x": 620,
																			"y": 12,
																			"text": "X3",
																			"vTextAlign": "middle",
																			"hTextAlign": "center",
																			"hMargin": 8,
																			"vMargin": 8,
																			"xAttr": 5,
																			"yAttr": 3,
																			"widthAttr": 0,
																			"heightAttr": 0,
																			"roundRadius": 300,
																			"isUIButton": false,
																			"isUIColorButton": false,
																			"isUIColorTile": true,
																			"enableAutoScaleFontSize": true,
																			"xParam": 1,
																			"yParam": 1,
																			"widthParam": 1,
																			"heightParam": 1,
																			"hasChildren": true,
																			"isUIElement": true,
																			"style": {
																				"lineWidth": 2,
																				"lineColor": "#008080",
																				"fillColor": "#f5f5f5",
																				"textColor": "Orange",
																				"fontSize": 28,
																				"fontFamily": "serif",
																				"textB": true
																			},
																			"events": {
																				"onClick": null,
																				"onOnUpdateTransform": null
																			},
																			"images": {
																				"display": 2
																			}
																		},
																		{
																			"type": "ui-label",
																			"name": "ui-label",
																			"w": 459,
																			"h": 54,
																			"x": 131,
																			"y": 10,
																			"text": "得分奖励加倍等级",
																			"vTextAlign": "bottom",
																			"hTextAlign": "center",
																			"hMargin": 5,
																			"vMargin": 5,
																			"xAttr": 3,
																			"yAttr": 4,
																			"widthAttr": 0,
																			"heightAttr": 0,
																			"autoAdjustHeight": false,
																			"xParam": 1,
																			"yParam": 1,
																			"widthParam": 1,
																			"heightParam": 1,
																			"hasChildren": true,
																			"ANIM_OLD_OUT": 1,
																			"ANIM_NEW_IN": 3,
																			"isUILabel": true,
																			"isUIElement": true,
																			"style": {
																				"lineWidth": 2,
																				"lineColor": "Red",
																				"fillColor": "rgba(0,0,0,0)",
																				"textColor": "#3eb000",
																				"fontSize": 28,
																				"fontFamily": "serif"
																			},
																			"events": {
																				"onClick": null,
																				"onChanged": null,
																				"onOnUpdateTransform": null
																			},
																			"images": {
																				"display": 2
																			}
																		}
																	]
																}
															]
														},
														{
															"type": "ui-list-item",
															"name": "ui-list-item",
															"w": 720,
															"h": 115,
															"x": 0,
															"y": 143,
															"text": "",
															"xAttr": 0,
															"yAttr": 0,
															"widthAttr": 2,
															"heightAttr": 0,
															"autoAdjustHeight": false,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"hasChildren": true,
															"ANIM_DRAW_LINE": 1,
															"isUIListItem": true,
															"isUIElement": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "rgba(0,0,0,0)",
																"fillColor": "rgba(0,0,0,0)",
																"textColor": "rgba(0,0,0,0)",
																"fontSize": 24,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": null,
																"onLongPress": null,
																"onRemoved": null
															},
															"images": {
																"display": 2
															},
															"children": [
																{
																	"type": "ui-image",
																	"name": "ui-image",
																	"w": 102,
																	"h": 99,
																	"x": 8,
																	"y": 8,
																	"text": "",
																	"xAttr": 0,
																	"yAttr": 3,
																	"widthAttr": 0,
																	"heightAttr": 0,
																	"clickable": false,
																	"clickedStyleParam": 0.8,
																	"clickedStyleType": 0,
																	"xParam": 1,
																	"yParam": 1,
																	"widthParam": 1,
																	"heightParam": 1,
																	"hasChildren": true,
																	"isUIImage": true,
																	"isUIElement": true,
																	"style": {
																		"lineWidth": 2,
																		"lineColor": "Red",
																		"fillColor": "White",
																		"textColor": "Black",
																		"fontSize": 24,
																		"fontFamily": "serif"
																	},
																	"events": {
																		"onClick": null,
																		"onOnUpdateTransform": null
																	},
																	"images": {
																		"display": 4,
																		"default_bg": "apps/gameui-demos/demo1/images/task_left_1.png"
																	}
																},
																{
																	"type": "ui-label",
																	"name": "ui-label",
																	"w": 122,
																	"h": 66,
																	"x": 110,
																	"y": 25,
																	"text": "任务1",
																	"vTextAlign": "middle",
																	"hTextAlign": "center",
																	"hMargin": 5,
																	"vMargin": 5,
																	"xAttr": 6,
																	"yAttr": 3,
																	"widthAttr": 0,
																	"heightAttr": 0,
																	"autoAdjustHeight": false,
																	"xParam": 1,
																	"yParam": 1,
																	"widthParam": 1,
																	"heightParam": 1,
																	"hasChildren": true,
																	"ANIM_OLD_OUT": 1,
																	"ANIM_NEW_IN": 3,
																	"isUILabel": true,
																	"isUIElement": true,
																	"style": {
																		"lineWidth": 2,
																		"lineColor": "Red",
																		"fillColor": "rgba(0,0,0,0)",
																		"textColor": "Orange",
																		"fontSize": 32,
																		"fontFamily": "serif"
																	},
																	"events": {
																		"onClick": null,
																		"onChanged": null,
																		"onOnUpdateTransform": null
																	},
																	"images": {
																		"display": 2
																	}
																},
																{
																	"type": "ui-label",
																	"name": "ui-label",
																	"w": 222,
																	"h": 67,
																	"x": 232,
																	"y": 24,
																	"text": "跳过障碍5次",
																	"vTextAlign": "middle",
																	"hTextAlign": "left",
																	"hMargin": 5,
																	"vMargin": 5,
																	"xAttr": 6,
																	"yAttr": 3,
																	"widthAttr": 0,
																	"heightAttr": 0,
																	"autoAdjustHeight": false,
																	"xParam": 1,
																	"yParam": 1,
																	"widthParam": 1,
																	"heightParam": 1,
																	"hasChildren": true,
																	"ANIM_OLD_OUT": 1,
																	"ANIM_NEW_IN": 3,
																	"isUILabel": true,
																	"isUIElement": true,
																	"style": {
																		"lineWidth": 2,
																		"lineColor": "Red",
																		"fillColor": "rgba(0,0,0,0)",
																		"textColor": "#888888",
																		"fontSize": 24,
																		"fontFamily": "serif"
																	},
																	"events": {
																		"onClick": null,
																		"onChanged": null,
																		"onOnUpdateTransform": null
																	},
																	"images": {
																		"display": 2
																	}
																},
																{
																	"type": "ui-color-button",
																	"name": "ui-color-button",
																	"w": 120,
																	"h": 114,
																	"x": 600,
																	"y": 0,
																	"text": "",
																	"vTextAlign": "middle",
																	"hTextAlign": "center",
																	"hMargin": 8,
																	"vMargin": 8,
																	"xAttr": 5,
																	"yAttr": 0,
																	"widthAttr": 0,
																	"heightAttr": 0,
																	"roundRadius": 8,
																	"xParam": 1,
																	"yParam": 1,
																	"widthParam": 1,
																	"heightParam": 1,
																	"hasChildren": true,
																	"isUIButton": true,
																	"isUIColorButton": true,
																	"isUIElement": true,
																	"style": {
																		"lineWidth": 2,
																		"lineColor": "#3eb000",
																		"fillColor": "#3eb000",
																		"textColor": "Black",
																		"fontSize": 24,
																		"fontFamily": "serif",
																		"textB": true,
																		"activeFillColor": "Gold"
																	},
																	"events": {
																		"onClick": null,
																		"onOnUpdateTransform": null
																	},
																	"images": {
																		"display": 2
																	},
																	"children": [
																		{
																			"type": "ui-image",
																			"name": "ui-image",
																			"w": 60,
																			"h": 55,
																			"x": 30,
																			"y": 51,
																			"text": "",
																			"xAttr": 3,
																			"yAttr": 5,
																			"widthAttr": 0,
																			"heightAttr": 0,
																			"clickable": false,
																			"clickedStyleParam": 0.8,
																			"clickedStyleType": 0,
																			"xParam": 1,
																			"yParam": 1,
																			"widthParam": 1,
																			"heightParam": 1,
																			"hasChildren": true,
																			"isUIImage": true,
																			"isUIElement": true,
																			"style": {
																				"lineWidth": 2,
																				"lineColor": "Red",
																				"fillColor": "White",
																				"textColor": "Black",
																				"fontSize": 24,
																				"fontFamily": "serif"
																			},
																			"events": {
																				"onClick": null,
																				"onOnUpdateTransform": null
																			},
																			"images": {
																				"display": 4,
																				"default_bg": "apps/gameui-demos/demo1/images/task_right.png"
																			}
																		},
																		{
																			"type": "ui-label",
																			"name": "ui-label",
																			"w": 97,
																			"h": 46,
																			"x": 12,
																			"y": 8,
																			"text": "Skip 5",
																			"vTextAlign": "middle",
																			"hTextAlign": "center",
																			"hMargin": 5,
																			"vMargin": 5,
																			"xAttr": 3,
																			"yAttr": 4,
																			"widthAttr": 0,
																			"heightAttr": 0,
																			"autoAdjustHeight": false,
																			"xParam": 1,
																			"yParam": 1,
																			"widthParam": 1,
																			"heightParam": 1,
																			"hasChildren": true,
																			"ANIM_OLD_OUT": 1,
																			"ANIM_NEW_IN": 3,
																			"isUILabel": true,
																			"isUIElement": true,
																			"style": {
																				"lineWidth": 2,
																				"lineColor": "Red",
																				"fillColor": "rgba(0,0,0,0)",
																				"textColor": "#f5f5f5",
																				"fontSize": 20,
																				"fontFamily": "serif"
																			},
																			"events": {
																				"onClick": null,
																				"onChanged": null,
																				"onOnUpdateTransform": null
																			},
																			"images": {
																				"display": 2
																			}
																		}
																	]
																}
															]
														},
														{
															"type": "ui-list-item",
															"name": "ui-list-item",
															"w": 720,
															"h": 115,
															"x": 0,
															"y": 258,
															"text": "",
															"xAttr": 0,
															"yAttr": 0,
															"widthAttr": 2,
															"heightAttr": 0,
															"autoAdjustHeight": true,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"hasChildren": true,
															"ANIM_DRAW_LINE": 1,
															"isUIListItem": true,
															"isUIElement": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "rgba(0,0,0,0)",
																"fillColor": "rgba(0,0,0,0)",
																"textColor": "rgba(0,0,0,0)",
																"fontSize": 24,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": null,
																"onLongPress": null,
																"onRemoved": null
															},
															"images": {
																"display": 2
															},
															"children": [
																{
																	"type": "ui-image",
																	"name": "ui-image",
																	"w": 102,
																	"h": 99,
																	"x": 8,
																	"y": 8,
																	"text": "",
																	"xAttr": 0,
																	"yAttr": 3,
																	"widthAttr": 0,
																	"heightAttr": 0,
																	"clickable": false,
																	"clickedStyleParam": 0.8,
																	"clickedStyleType": 0,
																	"xParam": 1,
																	"yParam": 1,
																	"widthParam": 1,
																	"heightParam": 1,
																	"hasChildren": true,
																	"isUIImage": true,
																	"isUIElement": true,
																	"style": {
																		"lineWidth": 2,
																		"lineColor": "Red",
																		"fillColor": "White",
																		"textColor": "Black",
																		"fontSize": 24,
																		"fontFamily": "serif"
																	},
																	"events": {
																		"onClick": null,
																		"onOnUpdateTransform": null
																	},
																	"images": {
																		"display": 4,
																		"default_bg": "apps/gameui-demos/demo1/images/task_left_1.png"
																	}
																},
																{
																	"type": "ui-label",
																	"name": "ui-label",
																	"w": 122,
																	"h": 66,
																	"x": 110,
																	"y": 25,
																	"text": "任务2",
																	"vTextAlign": "middle",
																	"hTextAlign": "center",
																	"hMargin": 5,
																	"vMargin": 5,
																	"xAttr": 6,
																	"yAttr": 3,
																	"widthAttr": 0,
																	"heightAttr": 0,
																	"autoAdjustHeight": false,
																	"xParam": 1,
																	"yParam": 1,
																	"widthParam": 1,
																	"heightParam": 1,
																	"hasChildren": true,
																	"ANIM_OLD_OUT": 1,
																	"ANIM_NEW_IN": 3,
																	"isUILabel": true,
																	"isUIElement": true,
																	"style": {
																		"lineWidth": 2,
																		"lineColor": "Red",
																		"fillColor": "rgba(0,0,0,0)",
																		"textColor": "Orange",
																		"fontSize": 32,
																		"fontFamily": "serif"
																	},
																	"events": {
																		"onClick": null,
																		"onChanged": null,
																		"onOnUpdateTransform": null
																	},
																	"images": {
																		"display": 2
																	}
																},
																{
																	"type": "ui-label",
																	"name": "ui-label",
																	"w": 222,
																	"h": 67,
																	"x": 232,
																	"y": 24,
																	"text": "跳过障碍5次",
																	"vTextAlign": "middle",
																	"hTextAlign": "left",
																	"hMargin": 5,
																	"vMargin": 5,
																	"xAttr": 6,
																	"yAttr": 3,
																	"widthAttr": 0,
																	"heightAttr": 0,
																	"autoAdjustHeight": false,
																	"xParam": 1,
																	"yParam": 1,
																	"widthParam": 1,
																	"heightParam": 1,
																	"hasChildren": true,
																	"ANIM_OLD_OUT": 1,
																	"ANIM_NEW_IN": 3,
																	"isUILabel": true,
																	"isUIElement": true,
																	"style": {
																		"lineWidth": 2,
																		"lineColor": "Red",
																		"fillColor": "rgba(0,0,0,0)",
																		"textColor": "#888888",
																		"fontSize": 24,
																		"fontFamily": "serif"
																	},
																	"events": {
																		"onClick": null,
																		"onChanged": null,
																		"onOnUpdateTransform": null
																	},
																	"images": {
																		"display": 2
																	}
																},
																{
																	"type": "ui-color-button",
																	"name": "ui-color-button",
																	"w": 120,
																	"h": 114,
																	"x": 600,
																	"y": 0,
																	"text": "",
																	"vTextAlign": "middle",
																	"hTextAlign": "center",
																	"hMargin": 8,
																	"vMargin": 8,
																	"xAttr": 5,
																	"yAttr": 0,
																	"widthAttr": 0,
																	"heightAttr": 0,
																	"roundRadius": 8,
																	"xParam": 1,
																	"yParam": 1,
																	"widthParam": 1,
																	"heightParam": 1,
																	"hasChildren": true,
																	"isUIButton": true,
																	"isUIColorButton": true,
																	"isUIElement": true,
																	"style": {
																		"lineWidth": 2,
																		"lineColor": "#3eb000",
																		"fillColor": "#3eb000",
																		"textColor": "Black",
																		"fontSize": 24,
																		"fontFamily": "serif",
																		"textB": true,
																		"activeFillColor": "Gold"
																	},
																	"events": {
																		"onClick": null,
																		"onOnUpdateTransform": null
																	},
																	"images": {
																		"display": 2
																	},
																	"children": [
																		{
																			"type": "ui-image",
																			"name": "ui-image",
																			"w": 60,
																			"h": 55,
																			"x": 30,
																			"y": 51,
																			"text": "",
																			"xAttr": 3,
																			"yAttr": 5,
																			"widthAttr": 0,
																			"heightAttr": 0,
																			"clickable": false,
																			"clickedStyleParam": 0.8,
																			"clickedStyleType": 0,
																			"xParam": 1,
																			"yParam": 1,
																			"widthParam": 1,
																			"heightParam": 1,
																			"hasChildren": true,
																			"isUIImage": true,
																			"isUIElement": true,
																			"style": {
																				"lineWidth": 2,
																				"lineColor": "Red",
																				"fillColor": "White",
																				"textColor": "Black",
																				"fontSize": 24,
																				"fontFamily": "serif"
																			},
																			"events": {
																				"onClick": null,
																				"onOnUpdateTransform": null
																			},
																			"images": {
																				"display": 4,
																				"default_bg": "apps/gameui-demos/demo1/images/task_right.png"
																			}
																		},
																		{
																			"type": "ui-label",
																			"name": "ui-label",
																			"w": 97,
																			"h": 46,
																			"x": 12,
																			"y": 8,
																			"text": "Skip 5",
																			"vTextAlign": "middle",
																			"hTextAlign": "center",
																			"hMargin": 5,
																			"vMargin": 5,
																			"xAttr": 3,
																			"yAttr": 4,
																			"widthAttr": 0,
																			"heightAttr": 0,
																			"autoAdjustHeight": false,
																			"xParam": 1,
																			"yParam": 1,
																			"widthParam": 1,
																			"heightParam": 1,
																			"hasChildren": true,
																			"ANIM_OLD_OUT": 1,
																			"ANIM_NEW_IN": 3,
																			"isUILabel": true,
																			"isUIElement": true,
																			"style": {
																				"lineWidth": 2,
																				"lineColor": "Red",
																				"fillColor": "rgba(0,0,0,0)",
																				"textColor": "#f5f5f5",
																				"fontSize": 20,
																				"fontFamily": "serif"
																			},
																			"events": {
																				"onClick": null,
																				"onChanged": null,
																				"onOnUpdateTransform": null
																			},
																			"images": {
																				"display": 2
																			}
																		}
																	]
																}
															]
														},
														{
															"type": "ui-list-item",
															"name": "ui-list-item",
															"w": 720,
															"h": 116,
															"x": 0,
															"y": 373,
															"text": "",
															"xAttr": 0,
															"yAttr": 0,
															"widthAttr": 2,
															"heightAttr": 0,
															"autoAdjustHeight": true,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"hasChildren": true,
															"ANIM_DRAW_LINE": 1,
															"isUIListItem": true,
															"isUIElement": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "rgba(0,0,0,0)",
																"fillColor": "rgba(0,0,0,0)",
																"textColor": "rgba(0,0,0,0)",
																"fontSize": 24,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": null,
																"onLongPress": null,
																"onRemoved": null
															},
															"images": {
																"display": 2
															},
															"children": [
																{
																	"type": "ui-image",
																	"name": "ui-image",
																	"w": 102,
																	"h": 99,
																	"x": 8,
																	"y": 9,
																	"text": "",
																	"xAttr": 0,
																	"yAttr": 3,
																	"widthAttr": 0,
																	"heightAttr": 0,
																	"clickable": false,
																	"clickedStyleParam": 0.8,
																	"clickedStyleType": 0,
																	"xParam": 1,
																	"yParam": 1,
																	"widthParam": 1,
																	"heightParam": 1,
																	"hasChildren": true,
																	"isUIImage": true,
																	"isUIElement": true,
																	"style": {
																		"lineWidth": 2,
																		"lineColor": "Red",
																		"fillColor": "White",
																		"textColor": "Black",
																		"fontSize": 24,
																		"fontFamily": "serif"
																	},
																	"events": {
																		"onClick": null,
																		"onOnUpdateTransform": null
																	},
																	"images": {
																		"display": 4,
																		"default_bg": "apps/gameui-demos/demo1/images/task_left_1.png"
																	}
																},
																{
																	"type": "ui-label",
																	"name": "ui-label",
																	"w": 122,
																	"h": 66,
																	"x": 110,
																	"y": 25,
																	"text": "任务3",
																	"vTextAlign": "middle",
																	"hTextAlign": "center",
																	"hMargin": 5,
																	"vMargin": 5,
																	"xAttr": 6,
																	"yAttr": 3,
																	"widthAttr": 0,
																	"heightAttr": 0,
																	"autoAdjustHeight": false,
																	"xParam": 1,
																	"yParam": 1,
																	"widthParam": 1,
																	"heightParam": 1,
																	"hasChildren": true,
																	"ANIM_OLD_OUT": 1,
																	"ANIM_NEW_IN": 3,
																	"isUILabel": true,
																	"isUIElement": true,
																	"style": {
																		"lineWidth": 2,
																		"lineColor": "Red",
																		"fillColor": "rgba(0,0,0,0)",
																		"textColor": "Orange",
																		"fontSize": 32,
																		"fontFamily": "serif"
																	},
																	"events": {
																		"onClick": null,
																		"onChanged": null,
																		"onOnUpdateTransform": null
																	},
																	"images": {
																		"display": 2
																	}
																},
																{
																	"type": "ui-label",
																	"name": "ui-label",
																	"w": 222,
																	"h": 67,
																	"x": 232,
																	"y": 25,
																	"text": "跳过障碍5次",
																	"vTextAlign": "middle",
																	"hTextAlign": "left",
																	"hMargin": 5,
																	"vMargin": 5,
																	"xAttr": 6,
																	"yAttr": 3,
																	"widthAttr": 0,
																	"heightAttr": 0,
																	"autoAdjustHeight": false,
																	"xParam": 1,
																	"yParam": 1,
																	"widthParam": 1,
																	"heightParam": 1,
																	"hasChildren": true,
																	"ANIM_OLD_OUT": 1,
																	"ANIM_NEW_IN": 3,
																	"isUILabel": true,
																	"isUIElement": true,
																	"style": {
																		"lineWidth": 2,
																		"lineColor": "Red",
																		"fillColor": "rgba(0,0,0,0)",
																		"textColor": "#888888",
																		"fontSize": 24,
																		"fontFamily": "serif"
																	},
																	"events": {
																		"onClick": null,
																		"onChanged": null,
																		"onOnUpdateTransform": null
																	},
																	"images": {
																		"display": 2
																	}
																},
																{
																	"type": "ui-color-button",
																	"name": "ui-color-button",
																	"w": 120,
																	"h": 114,
																	"x": 600,
																	"y": 2,
																	"text": "",
																	"vTextAlign": "middle",
																	"hTextAlign": "center",
																	"hMargin": 8,
																	"vMargin": 8,
																	"xAttr": 5,
																	"yAttr": 0,
																	"widthAttr": 0,
																	"heightAttr": 0,
																	"roundRadius": 8,
																	"xParam": 1,
																	"yParam": 1,
																	"widthParam": 1,
																	"heightParam": 1,
																	"hasChildren": true,
																	"isUIButton": true,
																	"isUIColorButton": true,
																	"isUIElement": true,
																	"style": {
																		"lineWidth": 2,
																		"lineColor": "#3eb000",
																		"fillColor": "#3eb000",
																		"textColor": "Black",
																		"fontSize": 24,
																		"fontFamily": "serif",
																		"textB": true,
																		"activeFillColor": "Gold"
																	},
																	"events": {
																		"onClick": null,
																		"onOnUpdateTransform": null
																	},
																	"images": {
																		"display": 2
																	},
																	"children": [
																		{
																			"type": "ui-image",
																			"name": "ui-image",
																			"w": 60,
																			"h": 55,
																			"x": 30,
																			"y": 51,
																			"text": "",
																			"xAttr": 3,
																			"yAttr": 5,
																			"widthAttr": 0,
																			"heightAttr": 0,
																			"clickable": false,
																			"clickedStyleParam": 0.8,
																			"clickedStyleType": 0,
																			"xParam": 1,
																			"yParam": 1,
																			"widthParam": 1,
																			"heightParam": 1,
																			"hasChildren": true,
																			"isUIImage": true,
																			"isUIElement": true,
																			"style": {
																				"lineWidth": 2,
																				"lineColor": "Red",
																				"fillColor": "White",
																				"textColor": "Black",
																				"fontSize": 24,
																				"fontFamily": "serif"
																			},
																			"events": {
																				"onClick": null,
																				"onOnUpdateTransform": null
																			},
																			"images": {
																				"display": 4,
																				"default_bg": "apps/gameui-demos/demo1/images/task_right.png"
																			}
																		},
																		{
																			"type": "ui-label",
																			"name": "ui-label",
																			"w": 97,
																			"h": 46,
																			"x": 12,
																			"y": 8,
																			"text": "Skip 5",
																			"vTextAlign": "middle",
																			"hTextAlign": "center",
																			"hMargin": 5,
																			"vMargin": 5,
																			"xAttr": 3,
																			"yAttr": 4,
																			"widthAttr": 0,
																			"heightAttr": 0,
																			"autoAdjustHeight": false,
																			"xParam": 1,
																			"yParam": 1,
																			"widthParam": 1,
																			"heightParam": 1,
																			"hasChildren": true,
																			"ANIM_OLD_OUT": 1,
																			"ANIM_NEW_IN": 3,
																			"isUILabel": true,
																			"isUIElement": true,
																			"style": {
																				"lineWidth": 2,
																				"lineColor": "Red",
																				"fillColor": "rgba(0,0,0,0)",
																				"textColor": "#f5f5f5",
																				"fontSize": 20,
																				"fontFamily": "serif"
																			},
																			"events": {
																				"onClick": null,
																				"onChanged": null,
																				"onOnUpdateTransform": null
																			},
																			"images": {
																				"display": 2
																			}
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											"type": "ui-page",
											"name": "ui-page",
											"w": 720,
											"h": 560,
											"x": 0,
											"y": 0,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 2,
											"heightAttr": 2,
											"hasChildren": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIPage": true,
											"isUIElement": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Orange",
												"fillColor": "White",
												"textColor": "Blue",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": null
											},
											"images": {
												"display": 3,
												"default_bg": "apps/gameui-demos/demo1/images/bg_3.png"
											},
											"children": [
												{
													"type": "ui-image",
													"name": "ui-image-bonus",
													"w": 100,
													"h": 100,
													"x": 310,
													"y": 70,
													"text": "",
													"xAttr": 3,
													"yAttr": 2,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 0,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 0.125,
													"widthParam": 1,
													"heightParam": 1,
													"hasChildren": true,
													"isUIImage": true,
													"isUIElement": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"fillColor": "White",
														"textColor": "Black",
														"fontSize": 24,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 4,
														"default_bg": "apps/gameui-demos/demo1/images/bonus.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 720,
													"h": 216,
													"x": 0,
													"y": 344,
													"text": "\"画app吧\"是一个用HTML5开发的在线集成开发环境(IDE)，可以用来开发基于HTML5的移动应用程序和桌面应用程序。",
													"vTextAlign": "top",
													"hTextAlign": "left",
													"hMargin": 10,
													"vMargin": 10,
													"xAttr": 0,
													"yAttr": 5,
													"widthAttr": 2,
													"heightAttr": 0,
													"autoAdjustHeight": false,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"hasChildren": true,
													"ANIM_OLD_OUT": 1,
													"ANIM_NEW_IN": 3,
													"isUILabel": true,
													"isUIElement": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"fillColor": "rgba(0,0,0,0)",
														"textColor": "Black",
														"fontSize": 28,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-button-group",
									"name": "ui-button-group",
									"w": 444,
									"h": 94,
									"x": 276,
									"y": 346,
									"text": "",
									"hMargin": 8,
									"vMargin": 8,
									"xAttr": 5,
									"yAttr": 2,
									"widthAttr": 0,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 1000,
									"hMin": 40,
									"hMax": 120,
									"buttonMaxWidth": 200,
									"xParam": 1,
									"yParam": 0.30244755244755245,
									"widthParam": 1,
									"heightParam": 1,
									"hasChildren": true,
									"isUIButtonGroup": true,
									"isUIElement": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "rgba(0,0,0,0)",
										"textColor": "Black",
										"fontSize": 24,
										"fontFamily": "serif"
									},
									"events": {
										"onClick": null,
										"onInit": null
									},
									"images": {
										"display": 3
									},
									"children": [
										{
											"type": "ui-radiobox",
											"name": "ui-radiobox",
											"w": 200,
											"h": 78,
											"x": 15,
											"y": 8,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 2,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 2,
											"roundRadius": 5,
											"value": false,
											"xParam": 0.035046728971962614,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"hasChildren": true,
											"isUIRadioBox": true,
											"isUICheckBox": true,
											"isUIElement": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Orange",
												"fillColor": "#006600",
												"textColor": "#C0C0C0",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var win = this.getWindow();\nvar viewPager = win.findChildByName(\"ui-view-pager\", true);\nviewPager.setCurrent(0);\n",
												"onChanged": "console.log(\"onChanged was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 100,
													"h": 72,
													"x": 50,
													"y": 3,
													"text": "",
													"xAttr": 3,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 0,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"hasChildren": true,
													"isUIImage": true,
													"isUIElement": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"fillColor": "White",
														"textColor": "Black",
														"fontSize": 24,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 4,
														"default_bg": "apps/gameui-demos/demo1/images/tab_1.png"
													}
												}
											]
										},
										{
											"type": "ui-radiobox",
											"name": "ui-radiobox",
											"w": 200,
											"h": 78,
											"x": 229,
											"y": 8,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 2,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 2,
											"roundRadius": 5,
											"value": false,
											"xParam": 0.5350467289719626,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"hasChildren": true,
											"isUIRadioBox": true,
											"isUICheckBox": true,
											"isUIElement": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Orange",
												"fillColor": "#008080",
												"textColor": "#C0C0C0",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var win = this.getWindow();\nvar viewPager = win.findChildByName(\"ui-view-pager\", true);\nviewPager.setCurrent(1);\n",
												"onChanged": "console.log(\"onChanged was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 100,
													"h": 72,
													"x": 50,
													"y": 3,
													"text": "",
													"xAttr": 3,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 0,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"hasChildren": true,
													"isUIImage": true,
													"isUIElement": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"fillColor": "White",
														"textColor": "Black",
														"fontSize": 24,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 4,
														"default_bg": "apps/gameui-demos/demo1/images/tab_2.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-color-tile",
									"name": "ui-color-tile",
									"w": 720,
									"h": 166,
									"x": 0,
									"y": 978,
									"text": "",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"hMargin": 8,
									"vMargin": 8,
									"xAttr": 0,
									"yAttr": 5,
									"widthAttr": 2,
									"heightAttr": 1,
									"roundRadius": 8,
									"isUIButton": false,
									"isUIColorButton": false,
									"isUIColorTile": true,
									"enableAutoScaleFontSize": true,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 0.1451048951048951,
									"hasChildren": true,
									"isUIElement": true,
									"heightScaleMin": 100,
									"heightScaleMax": 500,
									"style": {
										"lineWidth": 2,
										"lineColor": "rgba(0,0,0,0)",
										"fillColor": "rgba(0,0,0,0)",
										"textColor": "Black",
										"fontSize": 36,
										"fontFamily": "serif",
										"textB": true
									},
									"events": {
										"onClick": null,
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 237,
											"h": 93,
											"x": 399,
											"y": 37,
											"text": "返回游戏",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 2,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 1,
											"roundRadius": 8,
											"xParam": 0.5667613636363636,
											"yParam": 1,
											"widthParam": 0.3366477272727273,
											"heightParam": 0.62,
											"hasChildren": true,
											"widthScaleMin": 105,
											"widthScaleMax": 422,
											"heightScaleMin": 38,
											"heightScaleMax": 152,
											"linkTo": "win://_prev_win_",
											"isUIButton": true,
											"isUIColorButton": true,
											"isUIElement": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#7ecce9",
												"textColor": "#f5f5f5",
												"fontSize": 32,
												"fontFamily": "serif",
												"textB": true,
												"activeFillColor": "#FFCC00"
											},
											"events": {
												"onClick": "var retCode = 0;\nthis.closeWindow(retCode);",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											}
										},
										{
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 237,
											"h": 93,
											"x": 90,
											"y": 37,
											"text": "菜单",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 2,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 1,
											"roundRadius": 8,
											"xParam": 0.1278409090909091,
											"yParam": 1,
											"widthParam": 0.3366477272727273,
											"heightParam": 0.62,
											"hasChildren": true,
											"widthScaleMin": 105,
											"widthScaleMax": 422,
											"heightScaleMin": 38,
											"heightScaleMax": 152,
											"linkTo": "win://win-dlg-confirm",
											"isUIButton": true,
											"isUIColorButton": true,
											"isUIElement": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#cb0447",
												"textColor": "#f5f5f5",
												"fontSize": 32,
												"fontFamily": "serif",
												"textB": true,
												"activeFillColor": "#FFCC00"
											},
											"events": {
												"onClick": "var me = this;\nthis.openWindow(\"win-dlg-confirm\", \n    function (retCode) {if(retCode) {me.closeWindow();}});",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											}
										},
										{
											"type": "ui-color-bar",
											"name": "ui-color-bar",
											"w": 704,
											"h": 16,
											"x": 8,
											"y": 8,
											"text": "",
											"xAttr": 0,
											"yAttr": 4,
											"widthAttr": 2,
											"heightAttr": 0,
											"barPosition": -1,
											"barDierction": 0,
											"position": 0,
											"strColors": "Gray,Gray",
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIColorBar": true,
											"isUIElement": true,
											"hasChildren": true,
											"barDirection": 0,
											"isUIButton": false,
											"style": {
												"lineWidth": 6,
												"lineColor": "#008080",
												"fillColor": "#C0C0C0",
												"textColor": "Blue",
												"fontSize": 24,
												"fontFamily": "serif",
												"enableGradient": true
											},
											"events": {
												"onClick": null
											},
											"images": {
												"display": 2
											}
										}
									]
								}
							]
						},
						{
							"type": "ui-dialog",
							"name": "win-dlg-confirm",
							"w": 720,
							"h": 1144,
							"x": 0,
							"y": 0,
							"text": "",
							"opacity": 0.8,
							"hMargin": 8,
							"vMargin": 8,
							"xAttr": 3,
							"yAttr": 3,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "scale",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"hasChildren": true,
							"heightScaleMin": 300,
							"heightScaleMax": 800,
							"sUIPopupWindow": true,
							"isUIDialog": true,
							"isUIWindow": true,
							"isUIElement": true,
							"isUIPopupWindow": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "#f5f5f5",
								"textColor": "Black",
								"fontSize": 24,
								"fontFamily": "serif"
							},
							"events": {
								"onClick": null,
								"onLoad": null,
								"onUnload": null,
								"onOpen": "console.log(\"onOpen was triggered\")",
								"onBeforeOpen": null,
								"onClose": "console.log(\"onClose was triggered\")",
								"onSwitchToBack": null,
								"onSwitchToFront": null,
								"onGesture": "console.log(\"onGesture was triggered\")",
								"onKeyDown": null,
								"onKeyUp": null
							},
							"images": {
								"display": 2
							},
							"children": [
								{
									"type": "ui-color-tile",
									"name": "ui-color-tile",
									"w": 704,
									"h": 296,
									"x": 8,
									"y": 424,
									"text": "",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"hMargin": 8,
									"vMargin": 8,
									"xAttr": 0,
									"yAttr": 3,
									"widthAttr": 2,
									"heightAttr": 1,
									"roundRadius": 0,
									"isUIButton": false,
									"isUIColorButton": false,
									"isUIColorTile": true,
									"enableAutoScaleFontSize": true,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 0.2624113475177305,
									"hasChildren": true,
									"heightScaleMin": 215,
									"heightScaleMax": 862,
									"isUIElement": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "rgba(0,0,0,0)",
										"fillColor": "White",
										"textColor": "Black",
										"fontSize": 36,
										"fontFamily": "serif",
										"textB": true
									},
									"events": {
										"onClick": null,
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-color-tile",
											"name": "ui-color-tile",
											"w": 688,
											"h": 256,
											"x": 8,
											"y": 20,
											"text": "Are you sure back to main menu?",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 8,
											"vMargin": 8,
											"xAttr": 0,
											"yAttr": 3,
											"widthAttr": 2,
											"heightAttr": 1,
											"roundRadius": 0,
											"isUIButton": false,
											"isUIColorButton": false,
											"isUIColorTile": true,
											"enableAutoScaleFontSize": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 0.9142857142857143,
											"hasChildren": true,
											"heightScaleMin": 60,
											"heightScaleMax": 800,
											"isUIElement": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#FFCC33",
												"textColor": "#f5f5f5",
												"fontSize": 28,
												"fontFamily": "serif",
												"textB": true
											},
											"events": {
												"onClick": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											}
										}
									]
								},
								{
									"type": "ui-color-button",
									"name": "ui-color-button",
									"w": 231,
									"h": 100,
									"x": 407,
									"y": 808,
									"text": "No",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"hMargin": 8,
									"vMargin": 8,
									"xAttr": 2,
									"yAttr": 2,
									"widthAttr": 1,
									"heightAttr": 1,
									"roundRadius": 8,
									"xParam": 0.578125,
									"yParam": 0.7163120567375887,
									"widthParam": 0.328125,
									"heightParam": 0.08865248226950355,
									"hasChildren": true,
									"widthScaleMin": 105,
									"widthScaleMax": 422,
									"heightScaleMin": 38,
									"heightScaleMax": 152,
									"isUIButton": true,
									"isUIColorButton": true,
									"isUIElement": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "#40749d",
										"fillColor": "#7ecce9",
										"textColor": "#f5f5f5",
										"fontSize": 32,
										"fontFamily": "serif",
										"textB": true,
										"activeFillColor": "#FFCC00"
									},
									"events": {
										"onClick": "var retCode = 0;\nthis.closeWindow(retCode);",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 2
									}
								},
								{
									"type": "ui-color-button",
									"name": "ui-color-button",
									"w": 231,
									"h": 100,
									"x": 104,
									"y": 811,
									"text": "Yes",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"hMargin": 8,
									"vMargin": 8,
									"xAttr": 2,
									"yAttr": 2,
									"widthAttr": 1,
									"heightAttr": 1,
									"roundRadius": 8,
									"xParam": 0.14772727272727273,
									"yParam": 0.7189716312056738,
									"widthParam": 0.328125,
									"heightParam": 0.08865248226950355,
									"hasChildren": true,
									"widthScaleMin": 105,
									"widthScaleMax": 422,
									"heightScaleMin": 38,
									"heightScaleMax": 152,
									"linkTo": "win://_prev_win_",
									"isUIButton": true,
									"isUIColorButton": true,
									"isUIElement": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "#40749d",
										"fillColor": "#cb0447",
										"textColor": "#f5f5f5",
										"fontSize": 32,
										"fontFamily": "serif",
										"textB": true,
										"activeFillColor": "#FFCC00"
									},
									"events": {
										"onClick": "var retCode = 1;\nthis.closeWindow(retCode);",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 2
									}
								}
							]
						},
						{
							"type": "ui-dialog",
							"name": "win-images",
							"w": 720,
							"h": 636,
							"x": 0,
							"y": 254,
							"text": "",
							"xAttr": 3,
							"yAttr": 3,
							"widthAttr": 2,
							"heightAttr": 0,
							"animHint": "scale",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUIDialog": true,
							"isUIPopupWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 24,
								"fontFamily": "serif"
							},
							"events": {
								"onClick": null,
								"onLoad": null,
								"onUnload": null,
								"onOpen": "\nvar grid = this.findChildByName(\"ui-grid\", true);\n\ngrid.highlightChild = function(child) {\n    var config1 = {};\n\n\tconfig1.rotationFrom = -0.05;\n\tconfig1.rotationTo = 0.05;\n\tconfig1.frequency = 1;\n\n\tvar config2 = {};\n\n\tconfig2.scaleFrom =  0.95;\n\tconfig2.scaleTo = 1.1;\n\n\tconfig2.opacityFrom =  0.5;\n\tconfig2.opacityTo = 1.0;\n\tconfig2.frequency = 4;\n\n\tfor(var i = 0; i < this.children.length; i++) {\n\t\tvar image = this.children[i];\n\n\t\tif(image === child) {\n\t\t\timage.setHighlightConfig(config2);\n\t\t}\n\t\telse {\n\t\t\timage.setHighlightConfig(config1);\n\t\t}\n\t}\n}\ngrid.highlightChild(grid.children[0]);",
								"onBeforeOpen": null,
								"onClose": "console.log(\"onClose was triggered\")",
								"onSwitchToBack": null,
								"onSwitchToFront": null,
								"onGesture": "console.log(\"onGesture was triggered\")",
								"onKeyDown": null,
								"onKeyUp": null
							},
							"images": {
								"display": 2
							},
							"children": [
								{
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 85,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 40,
									"hMax": 200,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "white",
										"textColor": "Black",
										"fontSize": 24,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")"
									},
									"images": {
										"display": 2,
										"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_bg_3.png"
									},
									"children": [
										{
											"type": "ui-label",
											"name": "ui-label",
											"w": 606,
											"h": 73,
											"x": 57,
											"y": 6,
											"text": "Please Choose...",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "rgba(0,0,0,0)",
												"textColor": "#f5f5f5",
												"fontSize": 36,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": null,
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 85,
											"x": 0,
											"y": 0,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 4,
											"yAttr": 0,
											"widthAttr": 1,
											"heightAttr": 2,
											"wMin": 50,
											"hMin": 50,
											"enableAutoScaleFontSize": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.1375,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"widthScaleMin": 50,
											"widthScaleMax": 200,
											"linkTo": "win://_home_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "#E0E0E0",
												"fontSize": 32,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true,
												"fillColor": {
													"x0": 0,
													"y0": 0,
													"x1": 0,
													"y1": -1,
													"data": [
														{
															"o": 0,
															"c": "#90d290"
														},
														{
															"o": 0.25,
															"c": "#76c176"
														},
														{
															"o": 0.5,
															"c": "#58ae58"
														},
														{
															"o": 0.75,
															"c": "#3c9c3c"
														},
														{
															"o": 1,
															"c": "#1d891d"
														}
													]
												}
											},
											"events": {
												"onClick": "var retCode = 0;\nthis.closeWindow(retCode);",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 80,
													"h": 75,
													"x": 10,
													"y": 5,
													"text": "",
													"xAttr": 3,
													"yAttr": 3,
													"widthAttr": 1,
													"heightAttr": 1,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 0,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 0.8080808080808081,
													"heightParam": 0.8823529411764706,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"widthScaleMin": 44,
													"widthScaleMax": 176,
													"heightScaleMin": 42,
													"heightScaleMax": 170,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"textColor": "Black",
														"fontSize": 24,
														"fontFamily": "serif",
														"enableGradient": true,
														"fillColor": {
															"x0": 0,
															"y0": 0,
															"x1": 0,
															"y1": -1,
															"data": [
																{
																	"o": 0,
																	"c": "#90d290"
																},
																{
																	"o": 0.25,
																	"c": "#76c176"
																},
																{
																	"o": 0.5,
																	"c": "#58ae58"
																},
																{
																	"o": 0.75,
																	"c": "#3c9c3c"
																},
																{
																	"o": 1,
																	"c": "#1d891d"
																}
															]
														}
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_cancel.png"
													}
												}
											]
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 113,
											"h": 85,
											"x": 607,
											"y": 0,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 5,
											"yAttr": 0,
											"widthAttr": 1,
											"heightAttr": 2,
											"wMin": 50,
											"hMin": 50,
											"enableAutoScaleFontSize": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.15694444444444444,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"widthScaleMin": 50,
											"widthScaleMax": 200,
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "#E0E0E0",
												"fontSize": 32,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true,
												"fillColor": {
													"x0": 0,
													"y0": 0,
													"x1": 0,
													"y1": -1,
													"data": [
														{
															"o": 0,
															"c": "#90d290"
														},
														{
															"o": 0.25,
															"c": "#76c176"
														},
														{
															"o": 0.5,
															"c": "#58ae58"
														},
														{
															"o": 0.75,
															"c": "#3c9c3c"
														},
														{
															"o": 1,
															"c": "#1d891d"
														}
													]
												}
											},
											"events": {
												"onClick": "var retCode = 0;\nthis.closeWindow(retCode);",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 89,
													"h": 75,
													"x": 12,
													"y": 5,
													"text": "",
													"xAttr": 3,
													"yAttr": 3,
													"widthAttr": 1,
													"heightAttr": 1,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 0,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 0.7876106194690266,
													"heightParam": 0.8823529411764706,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"widthScaleMin": 44,
													"widthScaleMax": 176,
													"heightScaleMin": 42,
													"heightScaleMax": 170,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"textColor": "Black",
														"fontSize": 24,
														"fontFamily": "serif",
														"enableGradient": true,
														"fillColor": {
															"x0": 0,
															"y0": 0,
															"x1": 0,
															"y1": -1,
															"data": [
																{
																	"o": 0,
																	"c": "#90d290"
																},
																{
																	"o": 0.25,
																	"c": "#76c176"
																},
																{
																	"o": 0.5,
																	"c": "#58ae58"
																},
																{
																	"o": 0.75,
																	"c": "#3c9c3c"
																},
																{
																	"o": 1,
																	"c": "#1d891d"
																}
															]
														}
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_done.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-grid",
									"name": "ui-grid",
									"w": 720,
									"h": 551,
									"x": 0,
									"y": 85,
									"text": "",
									"hMargin": 30,
									"vMargin": 30,
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 3,
									"spacer": 20,
									"offset": 0,
									"wMin": 160,
									"wMax": 2000,
									"hMin": 160,
									"hMax": 2000,
									"itemSize": 150,
									"itemWidth": 3,
									"itemHeight": 3,
									"itemWidthType": 1,
									"itemHeightType": 1,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIGrid": true,
									"isUIElement": true,
									"hasChildren": true,
									"cols": 3,
									"rows": 3,
									"isUILayout": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "White",
										"textColor": "Blue",
										"fontSize": 24,
										"fontFamily": "serif"
									},
									"events": {
										"onClick": null,
										"onChildDragged": null,
										"onChildDragging": null,
										"onInit": null
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-image",
											"name": "ui-image",
											"w": 200,
											"h": 143,
											"x": 30,
											"y": 30,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"clickable": 4,
											"clickedStyleParam": 2,
											"clickedStyleType": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIImage": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "White",
												"textColor": "Black",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent();\ngrid.highlightChild(this);\n",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 4,
												"default_bg": "apps/gameui-demos/demo1/images/1.png"
											}
										},
										{
											"type": "ui-image",
											"name": "ui-image",
											"w": 200,
											"h": 143,
											"x": 250,
											"y": 30,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"clickable": 4,
											"clickedStyleParam": 2,
											"clickedStyleType": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIImage": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "White",
												"textColor": "Black",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent();\ngrid.highlightChild(this);\n",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 4,
												"default_bg": "apps/gameui-demos/demo1/images/2.png"
											}
										},
										{
											"type": "ui-image",
											"name": "ui-image",
											"w": 200,
											"h": 143,
											"x": 470,
											"y": 30,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"clickable": 4,
											"clickedStyleParam": 2,
											"clickedStyleType": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIImage": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "White",
												"textColor": "Black",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent();\ngrid.highlightChild(this);\n",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 4,
												"default_bg": "apps/gameui-demos/demo1/images/3.png"
											}
										},
										{
											"type": "ui-image",
											"name": "ui-image",
											"w": 200,
											"h": 143,
											"x": 30,
											"y": 193,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"clickable": 4,
											"clickedStyleParam": 2,
											"clickedStyleType": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIImage": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "White",
												"textColor": "Black",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent();\ngrid.highlightChild(this);\n",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 4,
												"default_bg": "apps/gameui-demos/demo1/images/4.png"
											}
										},
										{
											"type": "ui-image",
											"name": "ui-image",
											"w": 200,
											"h": 143,
											"x": 250,
											"y": 193,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"clickable": 4,
											"clickedStyleParam": 2,
											"clickedStyleType": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIImage": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "White",
												"textColor": "Black",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent();\ngrid.highlightChild(this);\n",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 4,
												"default_bg": "apps/gameui-demos/demo1/images/5.png"
											}
										},
										{
											"type": "ui-image",
											"name": "ui-image",
											"w": 200,
											"h": 143,
											"x": 470,
											"y": 193,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"clickable": 4,
											"clickedStyleParam": 2,
											"clickedStyleType": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIImage": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "White",
												"textColor": "Black",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent();\ngrid.highlightChild(this);\n",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 4,
												"default_bg": "apps/gameui-demos/demo1/images/6.png"
											}
										},
										{
											"type": "ui-image",
											"name": "ui-image",
											"w": 200,
											"h": 143,
											"x": 30,
											"y": 356,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"clickable": 4,
											"clickedStyleParam": 2,
											"clickedStyleType": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIImage": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "White",
												"textColor": "Black",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent();\ngrid.highlightChild(this);\n",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 4,
												"default_bg": "apps/gameui-demos/demo1/images/1.png"
											}
										},
										{
											"type": "ui-image",
											"name": "ui-image",
											"w": 200,
											"h": 143,
											"x": 250,
											"y": 356,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"clickable": 4,
											"clickedStyleParam": 2,
											"clickedStyleType": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIImage": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "White",
												"textColor": "Black",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent();\ngrid.highlightChild(this);\n",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 4,
												"default_bg": "apps/gameui-demos/demo1/images/2.png"
											}
										},
										{
											"type": "ui-image",
											"name": "ui-image",
											"w": 200,
											"h": 143,
											"x": 470,
											"y": 356,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"clickable": 4,
											"clickedStyleParam": 2,
											"clickedStyleType": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIImage": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "White",
												"textColor": "Black",
												"fontSize": 24,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent();\ngrid.highlightChild(this);\n",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 4,
												"default_bg": "apps/gameui-demos/demo1/images/3.png"
											}
										}
									]
								}
							]
						}
					]
				},
				{
					"type": "ui-menu-bar",
					"name": "ui-menu-bar",
					"w": 720,
					"h": 96,
					"x": 0,
					"y": 1184,
					"text": "",
					"xAttr": 0,
					"yAttr": 0,
					"widthAttr": 2,
					"heightAttr": 0,
					"xParam": 1,
					"yParam": 1,
					"widthParam": 1,
					"heightParam": 1,
					"hasChildren": true,
					"hideSelectMark": true,
					"isUIStatusBar": true,
					"isUIElement": true,
					"style": {
						"lineWidth": 2,
						"lineColor": "Orange",
						"fillColor": "White",
						"textColor": "Blue",
						"fontSize": 24,
						"fontFamily": "serif"
					},
					"events": {
						"onClick": "console.log(\"onClick was triggered\")"
					},
					"images": {
						"display": 3,
						"default_bg": "drawapp8/images/theme/default/android/menu_bar.png"
					},
					"children": [
						{
							"type": "ui-button",
							"name": "ui-button",
							"w": 143,
							"h": 60,
							"x": 0,
							"y": 18,
							"text": "",
							"hMargin": 5,
							"vMargin": 5,
							"xAttr": 4,
							"yAttr": 3,
							"widthAttr": 1,
							"heightAttr": 1,
							"wMin": 50,
							"hMin": 50,
							"enableAutoScaleFontSize": true,
							"hideSelectMark": true,
							"xParam": 1,
							"yParam": 1,
							"widthParam": 0.1986111111111111,
							"heightParam": 0.625,
							"hasChildren": true,
							"isUIButton": true,
							"isUIElement": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Red",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 34,
								"fontFamily": "serif"
							},
							"events": {
								"onClick": "var device = this.getDevice();\nif(device) {\n    var wm = device.getWindowManager();\n    if(wm) {\n        wm.closeCurrentWindow(null);\n    }\n}",
								"onOnUpdateTransform": null
							},
							"images": {
								"display": 0,
								"focused_bg": "drawapp8/images/theme/default/android/menu_bar_return.png",
								"active_bg": "drawapp8/images/theme/default/android/menu_bar_return_active.png",
								"normal_bg": "drawapp8/images/theme/default/android/menu_bar_return.png",
								"disable_bg": "drawapp8/images/theme/default/android/menu_bar_return.png"
							}
						},
						{
							"type": "ui-button",
							"name": "ui-button",
							"w": 143,
							"h": 60,
							"x": 289,
							"y": 18,
							"text": "",
							"hMargin": 5,
							"vMargin": 5,
							"xAttr": 3,
							"yAttr": 3,
							"widthAttr": 1,
							"heightAttr": 1,
							"wMin": 50,
							"hMin": 50,
							"enableAutoScaleFontSize": true,
							"hideSelectMark": true,
							"xParam": 1,
							"yParam": 1,
							"widthParam": 0.1986111111111111,
							"heightParam": 0.625,
							"hasChildren": true,
							"isUIButton": true,
							"isUIElement": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Red",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 34,
								"fontFamily": "serif"
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
								"onOnUpdateTransform": null
							},
							"images": {
								"display": 0,
								"focused_bg": "drawapp8/images/theme/default/android/menu_bar_home.png",
								"active_bg": "drawapp8/images/theme/default/android/menu_bar_home.png",
								"normal_bg": "drawapp8/images/theme/default/android/menu_bar_home.png",
								"disable_bg": "drawapp8/images/theme/default/android/menu_bar_home.png"
							}
						},
						{
							"type": "ui-button",
							"name": "ui-button",
							"w": 143,
							"h": 57,
							"x": 577,
							"y": 20,
							"text": "",
							"hMargin": 5,
							"vMargin": 5,
							"xAttr": 5,
							"yAttr": 3,
							"widthAttr": 1,
							"heightAttr": 1,
							"wMin": 50,
							"hMin": 50,
							"enableAutoScaleFontSize": true,
							"hideSelectMark": true,
							"xParam": 1,
							"yParam": 1,
							"widthParam": 0.1986111111111111,
							"heightParam": 0.59375,
							"hasChildren": true,
							"isUIButton": true,
							"isUIElement": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Red",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 34,
								"fontFamily": "serif"
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
								"onOnUpdateTransform": null
							},
							"images": {
								"display": 0,
								"focused_bg": "drawapp8/images/theme/default/android/menu_bar_apps.png",
								"active_bg": "drawapp8/images/theme/default/android/menu_bar_apps.png",
								"normal_bg": "drawapp8/images/theme/default/android/menu_bar_apps.png",
								"disable_bg": "drawapp8/images/theme/default/android/menu_bar_apps.png"
							}
						}
					]
				}
			]
		},
		{
			"type": "ui-button",
			"name": "button-prev",
			"w": 180,
			"h": 54,
			"x": 74,
			"y": 209,
			"text": "前一窗口",
			"vTextAlign": "middle",
			"hTextAlign": "center",
			"hMargin": 5,
			"vMargin": 5,
			"xAttr": 0,
			"yAttr": 0,
			"widthAttr": 0,
			"heightAttr": 0,
			"wMin": 50,
			"hMin": 50,
			"enableAutoScaleFontSize": true,
			"xParam": 1,
			"yParam": 1,
			"widthParam": 1,
			"heightParam": 1,
			"fixedX": 65,
			"fixedY": 179,
			"hasChildren": true,
			"isUIButton": true,
			"isUIElement": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Black",
				"fontSize": 16,
				"fontFamily": "serif"
			},
			"events": {
				"onClick": "console.log(\"onClick was triggered\")",
				"onOnUpdateTransform": null
			},
			"images": {
				"display": 2,
				"focused_bg": "drawapp8/images/design_button_focused.9.png",
				"active_bg": "drawapp8/images/design_button_active.9.png",
				"normal_bg": "drawapp8/images/design_button_normal.9.png",
				"disable_bg": "drawapp8/images/design_button_normal.9.png"
			}
		},
		{
			"type": "ui-button",
			"name": "button-next",
			"w": 180,
			"h": 54,
			"x": 254,
			"y": 209,
			"text": "下一窗口",
			"vTextAlign": "middle",
			"hTextAlign": "center",
			"hMargin": 5,
			"vMargin": 5,
			"xAttr": 0,
			"yAttr": 0,
			"widthAttr": 0,
			"heightAttr": 0,
			"wMin": 50,
			"hMin": 50,
			"enableAutoScaleFontSize": true,
			"xParam": 1,
			"yParam": 1,
			"widthParam": 1,
			"heightParam": 1,
			"fixedX": 278,
			"fixedY": 179,
			"hasChildren": true,
			"isUIButton": true,
			"isUIElement": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Black",
				"fontSize": 16,
				"fontFamily": "serif"
			},
			"events": {
				"onClick": "console.log(\"onClick was triggered\")",
				"onOnUpdateTransform": null
			},
			"images": {
				"display": 2,
				"focused_bg": "drawapp8/images/design_button_focused.9.png",
				"active_bg": "drawapp8/images/design_button_active.9.png",
				"normal_bg": "drawapp8/images/design_button_normal.9.png",
				"disable_bg": "drawapp8/images/design_button_normal.9.png"
			}
		},
		{
			"type": "ui-button",
			"name": "button-direction",
			"w": 180,
			"h": 54,
			"x": 434,
			"y": 209,
			"text": "横屏",
			"vTextAlign": "middle",
			"hTextAlign": "center",
			"hMargin": 5,
			"vMargin": 5,
			"xAttr": 0,
			"yAttr": 0,
			"widthAttr": 0,
			"heightAttr": 0,
			"wMin": 50,
			"hMin": 50,
			"enableAutoScaleFontSize": true,
			"xParam": 1,
			"yParam": 1,
			"widthParam": 1,
			"heightParam": 1,
			"fixedX": 278,
			"fixedY": 179,
			"hasChildren": true,
			"isUIButton": true,
			"isUIElement": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Black",
				"fontSize": 16,
				"fontFamily": "serif"
			},
			"events": {
				"onClick": "console.log(\"onClick was triggered\")",
				"onOnUpdateTransform": null
			},
			"images": {
				"display": 2,
				"focused_bg": "drawapp8/images/design_button_focused.9.png",
				"active_bg": "drawapp8/images/design_button_active.9.png",
				"normal_bg": "drawapp8/images/design_button_normal.9.png",
				"disable_bg": "drawapp8/images/design_button_normal.9.png"
			}
		},
		{
			"type": "ui-button",
			"name": "button-status",
			"w": 360,
			"h": 40,
			"x": 254,
			"y": 178,
			"text": "main-win(1/1)",
			"vTextAlign": "middle",
			"hTextAlign": "center",
			"hMargin": 5,
			"vMargin": 5,
			"xAttr": 0,
			"yAttr": 0,
			"widthAttr": 0,
			"heightAttr": 0,
			"wMin": 50,
			"hMin": 50,
			"enableAutoScaleFontSize": true,
			"xParam": 1,
			"yParam": 1,
			"widthParam": 1,
			"heightParam": 1,
			"fixedX": 225,
			"fixedY": 148,
			"hasChildren": true,
			"isUIButton": true,
			"isUIElement": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Orange",
				"fontSize": 18,
				"fontFamily": "serif"
			},
			"events": {
				"onClick": "console.log(\"onClick was triggered\")",
				"onOnUpdateTransform": null
			},
			"images": {
				"display": 2
			}
		},
		{
			"type": "ui-button",
			"name": "button-preview",
			"w": 180,
			"h": 54,
			"x": 614,
			"y": 209,
			"text": "预览",
			"vTextAlign": "middle",
			"hTextAlign": "center",
			"hMargin": 5,
			"vMargin": 5,
			"xAttr": 0,
			"yAttr": 0,
			"widthAttr": 0,
			"heightAttr": 0,
			"wMin": 50,
			"hMin": 50,
			"enableAutoScaleFontSize": true,
			"xParam": 1,
			"yParam": 1,
			"widthParam": 1,
			"heightParam": 1,
			"isPreview": false,
			"fixedX": 491.66666666666663,
			"fixedY": 179,
			"hasChildren": true,
			"isUIButton": true,
			"isUIElement": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Black",
				"fontSize": 16,
				"fontFamily": "serif"
			},
			"events": {
				"onClick": "console.log(\"onClick was triggered\")",
				"onOnUpdateTransform": null
			},
			"images": {
				"display": 2,
				"focused_bg": "drawapp8/images/design_button_focused.9.png",
				"active_bg": "drawapp8/images/design_button_active.9.png",
				"normal_bg": "drawapp8/images/design_button_normal.9.png",
				"disable_bg": "drawapp8/images/design_button_normal.9.png"
			}
		}
	],
	"fileList": [
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xhdpi/button_blue.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/button_blue.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/mdpi/button_blue.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/button_blue.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/hdpi/button_blue.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/button_blue.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xxhdpi/button_blue.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/button_blue.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xhdpi/button_blue_active.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/button_blue_active.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/mdpi/button_blue_active.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/button_blue_active.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/hdpi/button_blue_active.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/button_blue_active.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xxhdpi/button_blue_active.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/button_blue_active.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xhdpi/button_red.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/button_red.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/mdpi/button_red.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/button_red.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/hdpi/button_red.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/button_red.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xxhdpi/button_red.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/button_red.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xhdpi/button_red_active.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/button_red_active.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/mdpi/button_red_active.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/button_red_active.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/hdpi/button_red_active.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/button_red_active.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xxhdpi/button_red_active.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/button_red_active.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xhdpi/btn_2.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/btn_2.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/mdpi/btn_2.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/btn_2.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/hdpi/btn_2.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/btn_2.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xxhdpi/btn_2.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/btn_2.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xhdpi/btn_2_pressed.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/btn_2_pressed.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/mdpi/btn_2_pressed.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/btn_2_pressed.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/hdpi/btn_2_pressed.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/btn_2_pressed.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xxhdpi/btn_2_pressed.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/btn_2_pressed.9.png"
		},
		{
			"weburl": "http://www.drawapp8.net/apps/gameui-demos/demo1/images/bg_1.png",
			"fileurl": "apps/gameui-demos/demo1/images/bg_1.png"
		},
		{
			"weburl": "http://www.drawapp8.net/apps/gameui-demos/demo1/images/bg_2.png",
			"fileurl": "apps/gameui-demos/demo1/images/bg_2.png"
		},
		{
			"weburl": "http://www.drawapp8.net/apps/gameui-demos/demo1/images/bg_3.png",
			"fileurl": "apps/gameui-demos/demo1/images/bg_3.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/theme/default/android/scrollbar.png",
			"fileurl": "drawapp8/images/theme/default/android/scrollbar.png"
		},
		{
			"weburl": "http://www.drawapp8.net/apps/gameui-demos/demo1/images/task_left_1.png",
			"fileurl": "apps/gameui-demos/demo1/images/task_left_1.png"
		},
		{
			"weburl": "http://www.drawapp8.net/apps/gameui-demos/demo1/images/task_right.png",
			"fileurl": "apps/gameui-demos/demo1/images/task_right.png"
		},
		{
			"weburl": "http://www.drawapp8.net/apps/gameui-demos/demo1/images/bonus.png",
			"fileurl": "apps/gameui-demos/demo1/images/bonus.png"
		},
		{
			"weburl": "http://www.drawapp8.net/apps/gameui-demos/demo1/images/tab_1.png",
			"fileurl": "apps/gameui-demos/demo1/images/tab_1.png"
		},
		{
			"weburl": "http://www.drawapp8.net/apps/gameui-demos/demo1/images/tab_2.png",
			"fileurl": "apps/gameui-demos/demo1/images/tab_2.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xhdpi/action_bar_bg_3.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/action_bar_bg_3.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/mdpi/action_bar_bg_3.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/action_bar_bg_3.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/hdpi/action_bar_bg_3.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/action_bar_bg_3.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xxhdpi/action_bar_bg_3.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/action_bar_bg_3.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xhdpi/action_bar_cancel.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/action_bar_cancel.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/mdpi/action_bar_cancel.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/action_bar_cancel.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/hdpi/action_bar_cancel.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/action_bar_cancel.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xxhdpi/action_bar_cancel.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/action_bar_cancel.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xhdpi/action_bar_done.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/action_bar_done.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/mdpi/action_bar_done.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/action_bar_done.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/hdpi/action_bar_done.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/action_bar_done.png"
		},
		{
			"weburl": "http://www.drawapp8.net/drawapp8/images/common/icons/xxhdpi/action_bar_done.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/action_bar_done.png"
		},
		{
			"weburl": "http://www.drawapp8.net/apps/gameui-demos/demo1/images/1.png",
			"fileurl": "apps/gameui-demos/demo1/images/1.png"
		},
		{
			"weburl": "http://www.drawapp8.net/apps/gameui-demos/demo1/images/2.png",
			"fileurl": "apps/gameui-demos/demo1/images/2.png"
		},
		{
			"weburl": "http://www.drawapp8.net/apps/gameui-demos/demo1/images/3.png",
			"fileurl": "apps/gameui-demos/demo1/images/3.png"
		},
		{
			"weburl": "http://www.drawapp8.net/apps/gameui-demos/demo1/images/4.png",
			"fileurl": "apps/gameui-demos/demo1/images/4.png"
		},
		{
			"weburl": "http://www.drawapp8.net/apps/gameui-demos/demo1/images/5.png",
			"fileurl": "apps/gameui-demos/demo1/images/5.png"
		},
		{
			"weburl": "http://www.drawapp8.net/apps/gameui-demos/demo1/images/6.png",
			"fileurl": "apps/gameui-demos/demo1/images/6.png"
		}
	]
};