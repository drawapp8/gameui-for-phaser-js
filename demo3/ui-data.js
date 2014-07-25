var guiData= {
	"type": "ui-device",
	"name": "android-WXGA720",
	"w": 860,
	"h": 1802,
	"x": 533,
	"y": -172,
	"text": "",
	"xAttr": 0,
	"yAttr": 0,
	"widthAttr": 0,
	"heightAttr": 0,
	"isUIDevice": true,
	"isUIElement": true,
	"hasChildren": true,
	"xParam": 1,
	"yParam": 1,
	"widthParam": 1,
	"heightParam": 1,
	"deviceConfig": "{\"name\":\"android-WXGA720\",\"bg\":\"/drawapp8/images/devices/device_1280x720.png\",\"platform\":\"android\",\"version\":\"4\",\"lcdDensity\":\"xhdpi\",\"width\":860,\"height\":1802,\"screenX\":74,\"screenY\":268,\"screenW\":720,\"screenH\":1280,\"hasMenuBar\":true}",
	"style": {
		"lineWidth": 2,
		"lineColor": "Green",
		"fillColor": "",
		"textColor": "#f5f5f5",
		"fontSize": 24,
		"fontFamily": "serif",
		"enableGradient": true
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
			"fixedY": 265,
			"isUIScreen": true,
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
					"isUIStatusBar": true,
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
						"display": 3,
						"default_bg": "drawapp8/images/theme/default/android/4/status_bar.png"
					}
				},
				{
					"type": "ui-window-manager",
					"name": "window-manager",
					"w": 720,
					"h": 1240,
					"x": 0,
					"y": 40,
					"text": "",
					"xAttr": 0,
					"yAttr": 0,
					"widthAttr": 2,
					"heightAttr": 0,
					"current": 11,
					"showLoadingProgress": true,
					"progressBarBorderColor": "White",
					"progressBarFillColor": "Gold",
					"progressTextColor": "Green",
					"loadingTextColor": "White",
					"loadingBgColor": "Black",
					"xParam": 1,
					"yParam": 1,
					"widthParam": 1,
					"heightParam": 1,
					"isUIWindowManager": true,
					"isUIFrames": true,
					"isUIElement": true,
					"hasChildren": true,
					"showHignlight": true,
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
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"windowType": "main",
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
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
								"onGesture": null,
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
									"h": 109,
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
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")"
									},
									"images": {
										"display": 2,
										"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_bg_1.png"
									},
									"children": [
										{
											"type": "ui-label",
											"name": "ui-label",
											"w": 597,
											"h": 80,
											"x": 62,
											"y": 15,
											"text": "Controls Demos",
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
												"fontSize": 35,
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
									"type": "ui-list-view",
									"name": "ui-list-view",
									"w": 720,
									"h": 1131,
									"x": 0,
									"y": 109,
									"text": "",
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 3,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 100,
									"hMax": 2000,
									"itemHeight": 113,
									"itemHeightVariable": false,
									"offset": 0,
									"scrollBarOpacity": 0,
									"scrollable": "always",
									"updateStatus": 0,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIListView": true,
									"isUIVScrollView": true,
									"isUIScrollView": true,
									"isUIElement": true,
									"hasChildren": true,
									"isUIList": true,
									"isUILayout": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "#f0f0f0",
										"textColor": "Blue",
										"fontSize": 21,
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
											"h": 113,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-image-slide-view",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-image-slide-view\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Image Slide View",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 113,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-vscrollview",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-vscrollview\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 13,
													"y": 21,
													"text": "Scroll View",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 226,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-list",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-list\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 13,
													"y": 21,
													"text": "List",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 339,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-grid-view",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-grid-view\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 13,
													"y": 21,
													"text": "Grid View",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 452,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-button-group",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-button-group\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 13,
													"y": 21,
													"text": "Button Group",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 565,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-progressbar",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-progressbar\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 13,
													"y": 21,
													"text": "ProgressBar",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 678,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-wait-box",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-wait-box\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Wait Box",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 791,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-image",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-image\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Image",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 904,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-mleditor",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-mleditor\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Multi Line Editor",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 1017,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-checkbox",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-checkbox\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "CheckBox",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 1130,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-dialog",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-dialog\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Dialog",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 1243,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-tab-top",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-tab-top\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Tab Pages(Top)",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 1356,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-tab-bottom",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-tab-bottom\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Tab Pages(Bottom)",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 1469,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-listview",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-listview\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "List View",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 1582,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-updatable-listview",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-updatable-listview\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Updatable List View",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 1695,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-simple-html-view",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-simple-html-view\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Simple HTML View",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 1808,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-tips",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-tips\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Tips",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 1921,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-color-buttons",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-color-buttons\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Color Button",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 2034,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-canvas",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-canvas\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Canvas",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 2147,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-selector",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-selector\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Selector",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 2260,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-gauge",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-gauge\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Guage",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 2373,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-led",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-led\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "LED",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 2486,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-chart",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-chart\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Chart",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 2599,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-slide-to-remove",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-slide-to-remove\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Slide To Remvoe",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 2712,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-menu",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-menu\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Menu",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 2825,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-grid",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-grid\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Grid",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 2938,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-image-value",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-image-value\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Image Value",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 3051,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-image-value",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-highlight\", \n\tfunction (retCode) {console.log(\"window closed.\");}, false);",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Highlight",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 3164,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"linkTo": "win://win-input",
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "this.openWindow(\"win-input\", \n\tfunction (retCode) {console.log(\"window closed.\");});",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 540,
													"h": 72,
													"x": 10,
													"y": 21,
													"text": "Input",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
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
						},
						{
							"type": "ui-window",
							"name": "win-image-slide-view",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "#f5f5f5",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif"
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Image Slide View",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-image-slide-view",
									"name": "ui-image-slide-view",
									"w": 719,
									"h": 1037,
									"x": 1,
									"y": 109,
									"text": "",
									"xAttr": 3,
									"yAttr": 6,
									"widthAttr": 1,
									"heightAttr": 1,
									"offset": 0,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 0.9986111111111111,
									"heightParam": 0.8362903225806452,
									"isUIImageSlideView": true,
									"isUIImageView": true,
									"isUIElement": true,
									"hasChildren": true,
									"frameDuration": 2000,
									"currFrame": 1,
									"showIndicator": true,
									"widthScaleMin": 320,
									"widthScaleMax": 1280,
									"heightScaleMin": 505,
									"heightScaleMax": 2022,
									"style": {
										"lineWidth": 2,
										"lineColor": "#3eb000",
										"fillColor": "rgba(0,0,0,0)",
										"textColor": "Blue",
										"fontSize": 13,
										"fontFamily": "serif"
									},
									"events": {
										"onClick": null,
										"onChanged": "console.log(\"Current Frame: \" + value);"
									},
									"images": {
										"display": 2,
										"image_1": "images/demos/intro1.jpg",
										"image_2": "images/demos/intro2.jpg",
										"image_3": "images/demos/intro3.jpg",
										"image_4": "images/demos/intro4.jpg"
									},
									"userImages": "http://gamebuilder.sinaapp.com/images/demos/intro1.jpg\nhttp://gamebuilder.sinaapp.com/images/demos/intro2.jpg\nhttp://gamebuilder.sinaapp.com/images/demos/intro3.jpg\nhttp://gamebuilder.sinaapp.com/images/demos/intro4.jpg\n"
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-vscrollview",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Vertical ScrollView",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-v-scroll-view",
									"name": "ui-v-scroll-view",
									"w": 720,
									"h": 1080,
									"x": 0,
									"y": 109,
									"text": "",
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 1,
									"offset": 0,
									"scrollBarOpacity": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 100,
									"hMax": 2000,
									"scrollable": "always",
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 0.8709677419354839,
									"isUIVScrollView": true,
									"isUIScrollView": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "#f0f0f0",
										"textColor": "Blue",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")"
									},
									"images": {
										"display": 2,
										"scrollBarImg": "drawapp8/images/theme/default/android/scrollbar.png"
									},
									"children": [
										{
											"type": "ui-list",
											"name": "ui-list",
											"w": 720,
											"h": 275,
											"x": 0,
											"y": 4,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 4,
											"vMargin": 4,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 2,
											"heightAttr": 0,
											"wMin": 100,
											"wMax": 1000,
											"hMin": 100,
											"hMax": 1000,
											"itemHeight": 113,
											"itemHeightVariable": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIList": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUILayout": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "Orange",
												"textColor": "Black",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onInit": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-list-item",
													"name": "ui-list-item",
													"w": 712,
													"h": 113,
													"x": 4,
													"y": 4,
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
													"isUIListItem": true,
													"isUIElement": true,
													"hasChildren": true,
													"ANIM_DRAW_LINE": 1,
													"style": {
														"lineWidth": 2,
														"lineColor": "#C8C8C8",
														"fillColor": "#f5f5f5",
														"textColor": "#358de7",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onLongPress": null,
														"onRemoved": null
													},
													"images": {
														"display": 2
													},
													"children": [
														{
															"type": "ui-icon",
															"name": "liste",
															"w": 72,
															"h": 61,
															"x": 640,
															"y": 26,
															"text": "",
															"xAttr": 5,
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
															"isUIImage": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Green",
																"fillColor": "white",
																"textColor": "Black",
																"fontSize": 21,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": "console.log(\"onClick was triggered\")",
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 0,
																"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
															}
														},
														{
															"type": "ui-image",
															"name": "ui-image",
															"w": 78,
															"h": 78,
															"x": 6,
															"y": 18,
															"text": "",
															"xAttr": 0,
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
															"isUIImage": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Green",
																"fillColor": "white",
																"textColor": "Black",
																"fontSize": 21,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": "console.log(\"onClick was triggered\")",
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 3,
																"default_bg": "drawapp8/images/common/message.png"
															}
														},
														{
															"type": "ui-label",
															"name": "ui-label",
															"w": 199,
															"h": 39,
															"x": 105,
															"y": 37,
															"text": "文本",
															"vTextAlign": "middle",
															"hTextAlign": "center",
															"xAttr": 0,
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
																"lineColor": "Green",
																"fillColor": "white",
																"textColor": "Black",
																"fontSize": 21,
																"fontFamily": "serif",
																"enableGradient": true
															},
															"events": {
																"onClick": "console.log(\"onClick was triggered\")",
																"onChanged": null,
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 2,
																"default_bg": "drawapp8/images/transparent.png"
															}
														}
													]
												},
												{
													"type": "ui-list-item",
													"name": "ui-list-item",
													"w": 712,
													"h": 113,
													"x": 4,
													"y": 117,
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
													"isUIListItem": true,
													"isUIElement": true,
													"hasChildren": true,
													"ANIM_DRAW_LINE": 1,
													"style": {
														"lineWidth": 2,
														"lineColor": "#C8C8C8",
														"fillColor": "#f5f5f5",
														"textColor": "#358de7",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onLongPress": null,
														"onRemoved": null
													},
													"images": {
														"display": 2
													},
													"children": [
														{
															"type": "ui-icon",
															"name": "liste",
															"w": 72,
															"h": 61,
															"x": 640,
															"y": 26,
															"text": "",
															"xAttr": 5,
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
															"isUIImage": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Green",
																"fillColor": "white",
																"textColor": "Black",
																"fontSize": 21,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": "console.log(\"onClick was triggered\")",
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 0,
																"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
															}
														},
														{
															"type": "ui-image",
															"name": "ui-image",
															"w": 78,
															"h": 78,
															"x": 6,
															"y": 18,
															"text": "",
															"xAttr": 0,
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
															"isUIImage": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Green",
																"fillColor": "white",
																"textColor": "Black",
																"fontSize": 21,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": "console.log(\"onClick was triggered\")",
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 3,
																"default_bg": "drawapp8/images/common/message.png"
															}
														},
														{
															"type": "ui-label",
															"name": "ui-label",
															"w": 199,
															"h": 39,
															"x": 105,
															"y": 37,
															"text": "文本",
															"vTextAlign": "middle",
															"hTextAlign": "center",
															"xAttr": 0,
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
																"lineColor": "Green",
																"fillColor": "white",
																"textColor": "Black",
																"fontSize": 21,
																"fontFamily": "serif",
																"enableGradient": true
															},
															"events": {
																"onClick": "console.log(\"onClick was triggered\")",
																"onChanged": null,
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 2,
																"default_bg": "drawapp8/images/transparent.png"
															}
														}
													]
												}
											]
										},
										{
											"type": "ui-list",
											"name": "ui-list",
											"w": 720,
											"h": 350,
											"x": 0,
											"y": 279,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 4,
											"vMargin": 4,
											"xAttr": 0,
											"yAttr": 6,
											"widthAttr": 2,
											"heightAttr": 0,
											"wMin": 100,
											"wMax": 1000,
											"hMin": 100,
											"hMax": 1000,
											"itemHeight": 113,
											"itemHeightVariable": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIList": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUILayout": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "Orange",
												"textColor": "Black",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onInit": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-list-item",
													"name": "ui-list-item",
													"w": 712,
													"h": 113,
													"x": 4,
													"y": 4,
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
													"isUIListItem": true,
													"isUIElement": true,
													"hasChildren": true,
													"ANIM_DRAW_LINE": 1,
													"style": {
														"lineWidth": 2,
														"lineColor": "#C8C8C8",
														"fillColor": "#f5f5f5",
														"textColor": "#f5f5f5",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onLongPress": null,
														"onRemoved": null
													},
													"images": {
														"display": 2
													},
													"children": [
														{
															"type": "ui-label",
															"name": "ui-label",
															"w": 382,
															"h": 61,
															"x": 0,
															"y": 26,
															"text": "Auto Update",
															"vTextAlign": "middle",
															"hTextAlign": "center",
															"xAttr": 4,
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
																"lineColor": "Green",
																"fillColor": "white",
																"textColor": "Black",
																"fontSize": 26,
																"fontFamily": "serif",
																"textB": true,
																"enableGradient": true
															},
															"events": {
																"onClick": "console.log(\"onClick was triggered\")",
																"onChanged": null,
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 2,
																"default_bg": "drawapp8/images/transparent.png"
															}
														},
														{
															"type": "ui-switch",
															"name": "ui-switch",
															"w": 153,
															"h": 87,
															"x": 519,
															"y": 13,
															"text": "",
															"xAttr": 1,
															"yAttr": 3,
															"widthAttr": 0,
															"heightAttr": 0,
															"value": true,
															"imageWidth": 412,
															"maskWidth": 153,
															"offsetImage": 153,
															"xParam": 40,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"isUISwitch": true,
															"isUICheckBox": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Orange",
																"fillColor": "White",
																"textColor": "Blue",
																"fontSize": 21,
																"fontFamily": "serif",
																"enableGradient": true
															},
															"events": {
																"onClick": "console.log(\"onClick was triggered\")",
																"onChanged": "console.log(\"onChanged was triggered\")"
															},
															"images": {
																"display": 0,
																"default_bg": "drawapp8/images/theme/default/android/xhdpi/switch.png"
															}
														}
													]
												},
												{
													"type": "ui-list-item",
													"name": "ui-list-item",
													"w": 712,
													"h": 113,
													"x": 4,
													"y": 117,
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
													"isUIListItem": true,
													"isUIElement": true,
													"hasChildren": true,
													"ANIM_DRAW_LINE": 1,
													"style": {
														"lineWidth": 2,
														"lineColor": "#C8C8C8",
														"fillColor": "#f5f5f5",
														"textColor": "#f5f5f5",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
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
															"w": 78,
															"h": 78,
															"x": 6,
															"y": 18,
															"text": "",
															"xAttr": 0,
															"yAttr": 3,
															"widthAttr": 0,
															"heightAttr": 0,
															"clickable": false,
															"clickedStyleParam": 0.8,
															"clickedStyleType": 2,
															"imageRotation": 0,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"isUIImage": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Green",
																"fillColor": "white",
																"textColor": "Black",
																"fontSize": 21,
																"fontFamily": "serif",
																"enableGradient": true
															},
															"events": {
																"onClick": "console.log(\"onClick was triggered\")",
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 0,
																"default_bg": "drawapp8/images/theme/default/android/mute.png"
															}
														},
														{
															"type": "ui-slider",
															"name": "ui-slider",
															"w": 494,
															"h": 87,
															"x": 109,
															"y": 13,
															"text": "",
															"xAttr": 3,
															"yAttr": 3,
															"widthAttr": 1,
															"heightAttr": 0,
															"value": 0.3878718535469108,
															"interactive": true,
															"wMin": 60,
															"hMin": 40,
															"hMax": 45,
															"drawSize": 45,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 0.6938202247191011,
															"heightParam": 1,
															"isUIProgressBar": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Green",
																"fillColor": "white",
																"textColor": "Black",
																"fontSize": 21,
																"fontFamily": "serif",
																"enableGradient": true
															},
															"events": {
																"onClick": "console.log(\"onClick was triggered\")",
																"onChanged": "console.log(\"onChanged was triggered\")",
																"onChanging": null
															},
															"images": {
																"display": 2,
																"default_bg": "drawapp8/images/theme/default/android/xhdpi/slider_bg.9.png",
																"normal_fg": "drawapp8/images/theme/default/android/xhdpi/slider_fg.9.png"
															},
															"children": [
																{
																	"type": "ui-icon",
																	"name": "ui-icon",
																	"w": 87,
																	"h": 87,
																	"x": 668,
																	"y": 0,
																	"text": "",
																	"xAttr": 0,
																	"yAttr": 3,
																	"widthAttr": 0,
																	"heightAttr": 0,
																	"clickable": false,
																	"clickedStyleParam": 0.8,
																	"clickedStyleType": 2,
																	"wMin": 45,
																	"wMax": 45,
																	"hMin": 20.57142857142857,
																	"hMax": 45,
																	"imageRotation": 0,
																	"xParam": 1,
																	"yParam": 1,
																	"widthParam": 1,
																	"heightParam": 1,
																	"isUIImage": true,
																	"isUIElement": true,
																	"hasChildren": true,
																	"style": {
																		"lineWidth": 2,
																		"lineColor": "Green",
																		"fillColor": "white",
																		"textColor": "Black",
																		"fontSize": 21,
																		"fontFamily": "serif",
																		"enableGradient": true
																	},
																	"events": {
																		"onClick": "console.log(\"onClick was triggered\")",
																		"onOnUpdateTransform": null
																	},
																	"images": {
																		"display": 0,
																		"default_bg": "drawapp8/images/theme/default/android/xhdpi/slider_drag.png"
																	}
																}
															]
														},
														{
															"type": "ui-image",
															"name": "ui-image",
															"w": 78,
															"h": 78,
															"x": 628,
															"y": 18,
															"text": "",
															"xAttr": 1,
															"yAttr": 3,
															"widthAttr": 0,
															"heightAttr": 0,
															"clickable": false,
															"clickedStyleParam": 0.8,
															"clickedStyleType": 2,
															"imageRotation": 0,
															"xParam": 6,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"isUIImage": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Green",
																"fillColor": "white",
																"textColor": "Black",
																"fontSize": 21,
																"fontFamily": "serif",
																"enableGradient": true
															},
															"events": {
																"onClick": "console.log(\"onClick was triggered\")",
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 0,
																"default_bg": "drawapp8/images/theme/default/android/sound.png"
															}
														}
													]
												}
											]
										},
										{
											"type": "ui-list",
											"name": "ui-list",
											"w": 720,
											"h": 645,
											"x": 0,
											"y": 605,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 4,
											"vMargin": 4,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 2,
											"heightAttr": 0,
											"wMin": 100,
											"wMax": 1000,
											"hMin": 100,
											"hMax": 1000,
											"itemHeight": 113,
											"itemHeightVariable": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIList": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUILayout": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "Orange",
												"textColor": "Black",
												"fontSize": 21,
												"fontFamily": "serif"
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
													"type": "ui-list-radiobox-item",
													"name": "ui-list-radiobox-item",
													"w": 712,
													"h": 113,
													"x": 4,
													"y": 4,
													"text": "",
													"xAttr": 0,
													"yAttr": 0,
													"widthAttr": 2,
													"heightAttr": 0,
													"isRadio": true,
													"autoAdjustHeight": false,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"value": false,
													"isUIListCheckableItem": true,
													"isUIListItem": true,
													"isUIElement": true,
													"hasChildren": true,
													"ANIM_DRAW_LINE": 1,
													"style": {
														"lineWidth": 2,
														"lineColor": "#C8C8C8",
														"fillColor": "#f5f5f5",
														"textColor": "#358de7",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true
													},
													"events": {
														"onClick": null,
														"onLongPress": null,
														"onRemoved": null,
														"onChanged": "console.log(\"onChanged was triggered\")"
													},
													"images": {
														"display": 2,
														"checked_fg": "drawapp8/images/common/icons/xhdpi/listitem_checked.png",
														"uncheck_fg": "drawapp8/images/common/icons/xhdpi/listitem_unchecked.png"
													},
													"children": [
														{
															"type": "ui-image",
															"name": "ui-image",
															"w": 85,
															"h": 80,
															"x": 21,
															"y": 17,
															"text": "",
															"xAttr": 0,
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
															"isUIImage": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Red",
																"fillColor": "White",
																"textColor": "Black",
																"fontSize": 21,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": null,
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 4,
																"default_bg": "drawapp8/images/theme/default/android/sort_by_time.png"
															}
														},
														{
															"type": "ui-label",
															"name": "ui-label",
															"w": 504,
															"h": 59,
															"x": 113,
															"y": 27,
															"text": "Sort By Time",
															"vTextAlign": "middle",
															"hTextAlign": "center",
															"xAttr": 0,
															"yAttr": 3,
															"widthAttr": 1,
															"heightAttr": 0,
															"autoAdjustHeight": false,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 0.7078651685393258,
															"heightParam": 1,
															"isUILabel": true,
															"isUIElement": true,
															"hasChildren": true,
															"ANIM_OLD_OUT": 1,
															"ANIM_NEW_IN": 3,
															"style": {
																"lineWidth": 2,
																"lineColor": "Red",
																"fillColor": "White",
																"textColor": "Black",
																"fontSize": 30,
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
													"type": "ui-list-radiobox-item",
													"name": "ui-list-radiobox-item",
													"w": 712,
													"h": 113,
													"x": 4,
													"y": 117,
													"text": "",
													"xAttr": 0,
													"yAttr": 0,
													"widthAttr": 2,
													"heightAttr": 0,
													"isRadio": true,
													"autoAdjustHeight": false,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"value": false,
													"isUIListCheckableItem": true,
													"isUIListItem": true,
													"isUIElement": true,
													"hasChildren": true,
													"ANIM_DRAW_LINE": 1,
													"style": {
														"lineWidth": 2,
														"lineColor": "#C8C8C8",
														"fillColor": "#f5f5f5",
														"textColor": "#358de7",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true
													},
													"events": {
														"onClick": null,
														"onLongPress": null,
														"onRemoved": null,
														"onChanged": "console.log(\"onChanged was triggered\")"
													},
													"images": {
														"display": 2,
														"checked_fg": "drawapp8/images/common/icons/xhdpi/listitem_checked.png",
														"uncheck_fg": "drawapp8/images/common/icons/xhdpi/listitem_unchecked.png"
													},
													"children": [
														{
															"type": "ui-image",
															"name": "ui-image",
															"w": 85,
															"h": 80,
															"x": 21,
															"y": 17,
															"text": "",
															"xAttr": 0,
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
															"isUIImage": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Red",
																"fillColor": "White",
																"textColor": "Black",
																"fontSize": 21,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": null,
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 4,
																"default_bg": "drawapp8/images/theme/default/android/sort_by_time.png"
															}
														},
														{
															"type": "ui-label",
															"name": "ui-label",
															"w": 504,
															"h": 59,
															"x": 113,
															"y": 27,
															"text": "Sort By Time",
															"vTextAlign": "middle",
															"hTextAlign": "center",
															"xAttr": 0,
															"yAttr": 3,
															"widthAttr": 1,
															"heightAttr": 0,
															"autoAdjustHeight": false,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 0.7078651685393258,
															"heightParam": 1,
															"isUILabel": true,
															"isUIElement": true,
															"hasChildren": true,
															"ANIM_OLD_OUT": 1,
															"ANIM_NEW_IN": 3,
															"style": {
																"lineWidth": 2,
																"lineColor": "Red",
																"fillColor": "White",
																"textColor": "Black",
																"fontSize": 30,
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
													"type": "ui-list-radiobox-item",
													"name": "ui-list-radiobox-item",
													"w": 712,
													"h": 113,
													"x": 4,
													"y": 230,
													"text": "",
													"xAttr": 0,
													"yAttr": 0,
													"widthAttr": 2,
													"heightAttr": 0,
													"isRadio": true,
													"autoAdjustHeight": false,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"value": true,
													"isUIListCheckableItem": true,
													"isUIListItem": true,
													"isUIElement": true,
													"hasChildren": true,
													"ANIM_DRAW_LINE": 1,
													"style": {
														"lineWidth": 2,
														"lineColor": "#C8C8C8",
														"fillColor": "#f5f5f5",
														"textColor": "#358de7",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true
													},
													"events": {
														"onClick": null,
														"onLongPress": null,
														"onRemoved": null,
														"onChanged": "console.log(\"onChanged was triggered\")"
													},
													"images": {
														"display": 2,
														"checked_fg": "drawapp8/images/common/icons/xhdpi/listitem_checked.png",
														"uncheck_fg": "drawapp8/images/common/icons/xhdpi/listitem_unchecked.png"
													},
													"children": [
														{
															"type": "ui-image",
															"name": "ui-image",
															"w": 85,
															"h": 80,
															"x": 21,
															"y": 17,
															"text": "",
															"xAttr": 0,
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
															"isUIImage": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Red",
																"fillColor": "White",
																"textColor": "Black",
																"fontSize": 21,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": null,
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 4,
																"default_bg": "drawapp8/images/theme/default/android/sort_by_time.png"
															}
														},
														{
															"type": "ui-label",
															"name": "ui-label",
															"w": 504,
															"h": 59,
															"x": 113,
															"y": 27,
															"text": "Sort By Time",
															"vTextAlign": "middle",
															"hTextAlign": "center",
															"xAttr": 0,
															"yAttr": 3,
															"widthAttr": 1,
															"heightAttr": 0,
															"autoAdjustHeight": false,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 0.7078651685393258,
															"heightParam": 1,
															"isUILabel": true,
															"isUIElement": true,
															"hasChildren": true,
															"ANIM_OLD_OUT": 1,
															"ANIM_NEW_IN": 3,
															"style": {
																"lineWidth": 2,
																"lineColor": "Red",
																"fillColor": "White",
																"textColor": "Black",
																"fontSize": 30,
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
							"type": "ui-window",
							"name": "win-list",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "List",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-list",
									"name": "ui-list",
									"w": 720,
									"h": 365,
									"x": 0,
									"y": 188,
									"text": "",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"hMargin": 4,
									"vMargin": 4,
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 1000,
									"hMin": 100,
									"hMax": 1000,
									"itemHeight": 113,
									"itemHeightVariable": false,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIList": true,
									"isUIElement": true,
									"hasChildren": true,
									"isUILayout": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "Orange",
										"textColor": "Black",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")",
										"onInit": null
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 712,
											"h": 113,
											"x": 4,
											"y": 4,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 640,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 10,
													"y": 18,
													"text": "",
													"xAttr": 0,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 199,
													"h": 39,
													"x": 105,
													"y": 37,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 712,
											"h": 113,
											"x": 4,
											"y": 117,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 640,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 199,
													"h": 39,
													"x": 105,
													"y": 37,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 712,
											"h": 113,
											"x": 4,
											"y": 230,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 640,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 199,
													"h": 39,
													"x": 105,
													"y": 37,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										}
									]
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-grid-view",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Grid View",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-grid-view",
									"name": "ui-grid-view",
									"w": 720,
									"h": 1131,
									"x": 0,
									"y": 109,
									"text": "",
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 3,
									"spacer": 0,
									"offset": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 100,
									"hMax": 2000,
									"itemSize": 114,
									"itemWidth": 3,
									"itemHeight": 199,
									"itemWidthType": 1,
									"itemHeightType": 0,
									"scrollBarOpacity": 0,
									"scrollable": "always",
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"cols": 3,
									"rows": 5,
									"isUIGrid": true,
									"isUIGridView": true,
									"isUIVScrollView": true,
									"isUIScrollView": true,
									"isUIElement": true,
									"hasChildren": true,
									"childrenNr": 9,
									"isUILayout": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"textColor": "Blue",
										"fontSize": 21,
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
													"c": "#f4f4f4"
												},
												{
													"o": 0.25,
													"c": "#eeeeee"
												},
												{
													"o": 0.5,
													"c": "#e6e6e6"
												},
												{
													"o": 0.75,
													"c": "#dddddd"
												},
												{
													"o": 1,
													"c": "#d8d8d8"
												}
											]
										}
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")"
									},
									"images": {
										"display": 2,
										"scrollBarImg": "drawapp8/images/theme/default/android/scrollbar.png"
									},
									"children": [
										{
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 240,
											"h": 226,
											"x": 0,
											"y": 0,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#358de7",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
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
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 240,
											"h": 226,
											"x": 240,
											"y": 0,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#3eb000",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
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
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 240,
											"h": 226,
											"x": 480,
											"y": 0,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "Orange",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
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
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 240,
											"h": 226,
											"x": 0,
											"y": 226,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "Orange",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
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
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 240,
											"h": 226,
											"x": 240,
											"y": 226,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#358de7",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
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
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 240,
											"h": 226,
											"x": 480,
											"y": 226,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#3eb000",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
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
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 240,
											"h": 226,
											"x": 0,
											"y": 452,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#358de7",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
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
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 240,
											"h": 226,
											"x": 240,
											"y": 452,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "Orange",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
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
											"type": "ui-color-button",
											"name": "ui-last",
											"w": 240,
											"h": 226,
											"x": 480,
											"y": 452,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 4,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#358de7",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
											},
											"events": {
												"onClick": "var grid = this.getParent();\nif(grid) {\n    var js = grid.children[0].toJson();\n    grid.addChildWithJson(js);\n    grid.relayoutChildren(\"default\");\n}",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "ui-icon",
													"w": 74,
													"h": 80,
													"x": 6,
													"y": 73,
													"text": "",
													"xAttr": 4,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "rgba(0,0,0,0)",
														"textColor": "Black",
														"fontSize": 21,
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
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/add.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 115,
													"h": 59,
													"x": 80,
													"y": 84,
													"text": "Add",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 6,
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
														"textColor": "#C0C0C0",
														"fontSize": 26,
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
														"onClick": "console.log(\"onClick was triggered\")",
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
						},
						{
							"type": "ui-window",
							"name": "win-button-group",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Button Group",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-button-group",
									"name": "ui-button-group",
									"w": 719,
									"h": 109,
									"x": 0,
									"y": 225,
									"text": "",
									"hMargin": 4,
									"vMargin": 4,
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 1000,
									"hMin": 40,
									"hMax": 120,
									"buttonMaxWidth": 200,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIButtonGroup": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "rgba(0,0,0,0)",
										"textColor": "Black",
										"fontSize": 21,
										"fontFamily": "serif"
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")",
										"onInit": null
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 200,
											"h": 101,
											"x": 22,
											"y": 4,
											"text": "1",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"wMin": 50,
											"hMin": 50,
											"enableAutoScaleFontSize": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
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
												"onClick": "console.log(\"onClick was triggered\")",
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
											"w": 200,
											"h": 101,
											"x": 259,
											"y": 4,
											"text": "2",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"wMin": 50,
											"hMin": 50,
											"enableAutoScaleFontSize": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
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
												"onClick": "console.log(\"onClick was triggered\")",
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
											"w": 200,
											"h": 101,
											"x": 496,
											"y": 4,
											"text": "3",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"wMin": 50,
											"hMin": 50,
											"enableAutoScaleFontSize": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"focused_bg": "drawapp8/images/common/icons/xhdpi/button_blue.9.png",
												"active_bg": "drawapp8/images/common/icons/xhdpi/button_blue_active.9.png",
												"normal_bg": "drawapp8/images/common/icons/xhdpi/button_blue.9.png",
												"disable_bg": "drawapp8/images/common/icons/xhdpi/button_blue.9.png"
											}
										}
									]
								},
								{
									"type": "ui-button-group",
									"name": "ui-button-group",
									"w": 399,
									"h": 91,
									"x": 161,
									"y": 334,
									"text": "",
									"hMargin": 6,
									"vMargin": 6,
									"xAttr": 3,
									"yAttr": 6,
									"widthAttr": 1,
									"heightAttr": 1,
									"wMin": 100,
									"wMax": 1000,
									"hMin": 40,
									"hMax": 120,
									"buttonMaxWidth": 200,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 0.5541666666666667,
									"heightParam": 0.07338709677419354,
									"isUIButtonGroup": true,
									"isUIElement": true,
									"hasChildren": true,
									"widthScaleMin": 200,
									"widthScaleMax": 400,
									"heightScaleMin": 60,
									"heightScaleMax": 100,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "white",
										"textColor": "Black",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
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
											"w": 129,
											"h": 79,
											"x": 6,
											"y": 6,
											"text": "small",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 4,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 2,
											"roundRadius": 4,
											"value": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUICheckBox": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUIRadioBox": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "#C0C0C0",
												"fontSize": 21,
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
												"onChanged": "console.log(\"onChanged was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"on_fg": "drawapp8/images/common/icons/xhdpi/btn_left_on.9.png",
												"active_on_bg": "drawapp8/images/common/icons/xhdpi/btn_left_on.9.png",
												"focused_on_bg": "drawapp8/images/common/icons/xhdpi/btn_left_on.9.png",
												"off_fg": "drawapp8/images/common/icons/xhdpi/btn_left_off.9.png",
												"active_off_bg": "drawapp8/images/common/icons/xhdpi/btn_left_off.9.png",
												"focused_off_bg": "drawapp8/images/common/icons/xhdpi/btn_left_off.9.png"
											}
										},
										{
											"type": "ui-radiobox",
											"name": "ui-radiobox",
											"w": 129,
											"h": 79,
											"x": 135,
											"y": 6,
											"text": "medium",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 2,
											"roundRadius": 4,
											"value": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUICheckBox": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUIRadioBox": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "#C0C0C0",
												"fontSize": 21,
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
												"onChanged": "console.log(\"onChanged was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"on_fg": "drawapp8/images/common/icons/xhdpi/btn_mid_on.9.png",
												"active_on_bg": "drawapp8/images/common/icons/xhdpi/btn_mid_on.9.png",
												"focused_on_bg": "drawapp8/images/common/icons/xhdpi/btn_mid_on.9.png",
												"off_fg": "drawapp8/images/common/icons/xhdpi/btn_mid_off.9.png",
												"active_off_bg": "drawapp8/images/common/icons/xhdpi/btn_mid_off.9.png",
												"focused_off_bg": "drawapp8/images/common/icons/xhdpi/btn_mid_off.9.png"
											}
										},
										{
											"type": "ui-radiobox",
											"name": "ui-radiobox",
											"w": 129,
											"h": 79,
											"x": 264,
											"y": 6,
											"text": "large",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 2,
											"roundRadius": 4,
											"value": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUICheckBox": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUIRadioBox": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C0C0C0",
												"textColor": "#C0C0C0",
												"fontSize": 21,
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
												"onChanged": "console.log(\"onChanged was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"on_fg": "drawapp8/images/common/icons/xhdpi/btn_right_on.9.png",
												"active_on_bg": "drawapp8/images/common/icons/xhdpi/btn_right_on.9.png",
												"focused_on_bg": "drawapp8/images/common/icons/xhdpi/btn_right_on.9.png",
												"off_fg": "drawapp8/images/common/icons/xhdpi/btn_right_off.9.png",
												"active_off_bg": "drawapp8/images/common/icons/xhdpi/btn_right_off.9.png",
												"focused_off_bg": "drawapp8/images/common/icons/xhdpi/btn_right_off.9.png"
											}
										}
									]
								},
								{
									"type": "ui-button-group",
									"name": "ui-button-group",
									"w": 399,
									"h": 91,
									"x": 161,
									"y": 425,
									"text": "",
									"hMargin": 6,
									"vMargin": 6,
									"xAttr": 3,
									"yAttr": 6,
									"widthAttr": 1,
									"heightAttr": 1,
									"wMin": 100,
									"wMax": 1000,
									"hMin": 40,
									"hMax": 120,
									"buttonMaxWidth": 200,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 0.5541666666666667,
									"heightParam": 0.07338709677419354,
									"isUIButtonGroup": true,
									"isUIElement": true,
									"hasChildren": true,
									"widthScaleMin": 200,
									"widthScaleMax": 400,
									"heightScaleMin": 60,
									"heightScaleMax": 100,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "white",
										"textColor": "Black",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
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
											"type": "ui-checkbox",
											"name": "ui-checkbox",
											"w": 129,
											"h": 79,
											"x": 6,
											"y": 6,
											"text": "I",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 4,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 2,
											"roundRadius": 4,
											"value": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUICheckBox": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "#C0C0C0",
												"fontSize": 35,
												"fontFamily": "serif",
												"textI": true,
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
												"onChanged": "console.log(\"onChanged was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"on_fg": "drawapp8/images/common/icons/xhdpi/btn_left_on.9.png",
												"active_on_bg": "drawapp8/images/common/icons/xhdpi/btn_left_on.9.png",
												"focused_on_bg": "drawapp8/images/common/icons/xhdpi/btn_left_on.9.png",
												"off_fg": "drawapp8/images/common/icons/xhdpi/btn_left_off.9.png",
												"active_off_bg": "drawapp8/images/common/icons/xhdpi/btn_left_off.9.png",
												"focused_off_bg": "drawapp8/images/common/icons/xhdpi/btn_left_off.9.png"
											}
										},
										{
											"type": "ui-checkbox",
											"name": "ui-checkbox",
											"w": 129,
											"h": 79,
											"x": 135,
											"y": 6,
											"text": "B",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 2,
											"roundRadius": 4,
											"value": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUICheckBox": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "#C0C0C0",
												"fontSize": 35,
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
												"onClick": null,
												"onChanged": "console.log(\"onChanged was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"on_fg": "drawapp8/images/common/icons/xhdpi/btn_mid_on.9.png",
												"active_on_bg": "drawapp8/images/common/icons/xhdpi/btn_mid_on.9.png",
												"focused_on_bg": "drawapp8/images/common/icons/xhdpi/btn_mid_on.9.png",
												"off_fg": "drawapp8/images/common/icons/xhdpi/btn_mid_off.9.png",
												"active_off_bg": "drawapp8/images/common/icons/xhdpi/btn_mid_off.9.png",
												"focused_off_bg": "drawapp8/images/common/icons/xhdpi/btn_mid_off.9.png"
											}
										},
										{
											"type": "ui-checkbox",
											"name": "ui-checkbox",
											"w": 129,
											"h": 79,
											"x": 264,
											"y": 6,
											"text": "U",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 2,
											"roundRadius": 4,
											"value": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUICheckBox": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C0C0C0",
												"textColor": "#C0C0C0",
												"fontSize": 35,
												"fontFamily": "serif",
												"textU": true,
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
												"onChanged": "console.log(\"onChanged was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"on_fg": "drawapp8/images/common/icons/xhdpi/btn_right_on.9.png",
												"active_on_bg": "drawapp8/images/common/icons/xhdpi/btn_right_on.9.png",
												"focused_on_bg": "drawapp8/images/common/icons/xhdpi/btn_right_on.9.png",
												"off_fg": "drawapp8/images/common/icons/xhdpi/btn_right_off.9.png",
												"active_off_bg": "drawapp8/images/common/icons/xhdpi/btn_right_off.9.png",
												"focused_off_bg": "drawapp8/images/common/icons/xhdpi/btn_right_off.9.png"
											}
										}
									]
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-progressbar",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "ProgressBar",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-slider",
									"name": "ui-slider",
									"w": 382,
									"h": 87,
									"x": 169,
									"y": 155,
									"text": "",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"value": 0.5221354166666666,
									"interactive": true,
									"wMin": 60,
									"hMin": 40,
									"hMax": 45,
									"drawSize": 45,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIProgressBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "white",
										"textColor": "Black",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")",
										"onChanged": "console.log(\"onChanged was triggered\")",
										"onChanging": null
									},
									"images": {
										"display": 2,
										"default_bg": "drawapp8/images/theme/default/android/xhdpi/slider_bg.9.png",
										"normal_fg": "drawapp8/images/theme/default/android/xhdpi/slider_fg.9.png"
									},
									"children": [
										{
											"type": "ui-icon",
											"name": "ui-icon",
											"w": 87,
											"h": 87,
											"x": 117,
											"y": 0,
											"text": "",
											"xAttr": 0,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"clickable": false,
											"clickedStyleParam": 0.8,
											"clickedStyleType": 2,
											"wMin": 45,
											"wMax": 45,
											"hMin": 20.57142857142857,
											"hMax": 45,
											"imageRotation": 0,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIImage": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "Black",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 0,
												"default_bg": "drawapp8/images/theme/default/android/xhdpi/slider_drag.png"
											}
										}
									]
								},
								{
									"type": "ui-progressbar",
									"name": "ui-progressbar",
									"w": 380,
									"h": 87,
									"x": 170,
									"y": 297,
									"text": "",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"value": 0.5,
									"interactive": false,
									"wMin": 60,
									"hMin": 40,
									"hMax": 45,
									"drawSize": 45,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIProgressBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "white",
										"textColor": "Black",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")"
									},
									"images": {
										"display": 2,
										"default_bg": "drawapp8/images/theme/default/android/xhdpi/progress_bg.9.png",
										"normal_fg": "drawapp8/images/theme/default/android/xhdpi/progress_fg.9.png"
									}
								},
								{
									"type": "ui-slider",
									"name": "ui-slider",
									"w": 498,
									"h": 87,
									"x": 111,
									"y": 430,
									"text": "",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"value": 0.364,
									"interactive": true,
									"wMin": 100,
									"hMin": 40,
									"hMax": 120,
									"drawSize": 45,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIProgressBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "#358de7",
										"fillColor": "#C0C0C0",
										"textColor": "Black",
										"fontSize": 19,
										"fontFamily": "serif"
									},
									"events": {
										"onClick": null,
										"onChanged": "console.log(\"onChanged was triggered\")",
										"onChanging": null
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-color-tile",
											"name": "ui-color-tile",
											"w": 43,
											"h": 87,
											"x": 143,
											"y": 0,
											"text": "",
											"hMargin": 2,
											"vMargin": 2,
											"xAttr": 0,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 2,
											"isUIButton": false,
											"isUIColorButton": false,
											"isUIColorTile": true,
											"enableAutoScaleFontSize": true,
											"wMin": 22,
											"wMax": 22,
											"hMin": 40,
											"hMax": 45,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Gold",
												"fillColor": "Gold",
												"textColor": "Black",
												"fontSize": 24,
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
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-wait-box",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Wait Box",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-wait-bar",
									"name": "ui-wait-bar",
									"w": 472,
									"h": 87,
									"x": 124,
									"y": 135,
									"text": "",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"offset": 0,
									"running": false,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIWaitBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "White",
										"textColor": "Blue",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")"
									},
									"images": {
										"display": 3,
										"default_bg": "drawapp8/images/theme/default/android/wait_bar.png"
									}
								},
								{
									"type": "ui-wait-box",
									"name": "ui-wait-box",
									"w": 218,
									"h": 137,
									"x": 251,
									"y": 188,
									"text": "",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"offset": 0,
									"running": false,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIWaitBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "White",
										"textColor": "Blue",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")"
									},
									"images": {
										"display": 0,
										"default_bg": "drawapp8/images/theme/default/android/xhdpi/wait_box.png"
									}
								},
								{
									"type": "ui-button",
									"name": "ui-button",
									"w": 171,
									"h": 80,
									"x": 275,
									"y": 393,
									"text": "Start",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 3,
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
									"isUIButton": true,
									"isUIElement": true,
									"hasChildren": true,
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
										"onClick": "var bar = this.getWindow().findChildByName(\"ui-wait-bar\");\nvar box = this.getWindow().findChildByName(\"ui-wait-box\");\nif(bar) {\n    if(bar.isRunning()) {\n        bar.stop()\n        box.stop()\n        this.setText(\"Start\");\n    }\n    else {\n        bar.start();\n        box.start();\n        this.setText(\"Stop\");\n    }\n}\n",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 2,
										"focused_bg": "drawapp8/images/common/icons/xhdpi/button_blue.9.png",
										"active_bg": "drawapp8/images/common/icons/xhdpi/button_blue_active.9.png",
										"normal_bg": "drawapp8/images/common/icons/xhdpi/button_blue.9.png",
										"disable_bg": "drawapp8/images/common/icons/xhdpi/button_blue.9.png"
									}
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-image",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Image",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-icon",
									"name": "ui-icon",
									"w": 30,
									"h": 30,
									"x": 345,
									"y": 170,
									"text": "",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"clickable": false,
									"clickedStyleParam": 0.8,
									"clickedStyleType": 2,
									"imageRotation": 0,
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
										"textColor": "Black",
										"fontSize": 21,
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
										"onClick": "console.log(\"onClick was triggered\")",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 0,
										"default_bg": "drawapp8/images/common/default_icon.png"
									}
								},
								{
									"type": "ui-image",
									"name": "ui-image",
									"w": 199,
									"h": 199,
									"x": 261,
									"y": 266,
									"text": "",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"clickable": false,
									"clickedStyleParam": 0.8,
									"clickedStyleType": 2,
									"imageRotation": 0,
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
										"textColor": "Black",
										"fontSize": 21,
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
										"onClick": "console.log(\"onClick was triggered\")",
										"onOnUpdateTransform": "var scale = this.scale;\nthis.scale = this.pointerDown?1.1:1.0;\n\nif(this.scale != scale) {\n    console.log(scale);\n    this.postRedraw();\n}\n"
									},
									"images": {
										"display": 0,
										"default_bg": "drawapp8/images/common/default_image.png"
									}
								},
								{
									"type": "ui-image",
									"name": "ui-image",
									"w": 199,
									"h": 199,
									"x": 261,
									"y": 463,
									"text": "",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"clickable": true,
									"clickedStyleParam": 0.8,
									"clickedStyleType": 2,
									"imageRotation": 0,
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
										"fillColor": "#006600",
										"textColor": "Black",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 0,
										"default_bg": "drawapp8/images/common/default_image.png"
									}
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-mleditor",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Multi Line Editor",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-mledit",
									"name": "ui-mledit",
									"w": 720,
									"h": 1131,
									"x": 0,
									"y": 109,
									"text": "it is ok",
									"vTextAlign": "top",
									"hTextAlign": "left",
									"hMargin": 10,
									"vMargin": 10,
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 3,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIMLEdit": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Red",
										"textColor": "Black",
										"fontSize": 19,
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
										"onClick": "console.log(\"onClick was triggered\")",
										"onChanged": null,
										"onFocusIn": null,
										"onFocusOut": null
									},
									"images": {
										"display": 2,
										"default_bg": "drawapp8/images/theme/default/android/mledit_bg.9.png",
										"focused_bg": "drawapp8/images/theme/default/android/mledit_bg_focused.9.png"
									}
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-checkbox",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "CheckBox",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-group",
									"name": "ui-group",
									"w": 549,
									"h": 242,
									"x": 86,
									"y": 96,
									"text": "",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 1,
									"heightAttr": 0,
									"roundRadius": 4,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 0.7625,
									"heightParam": 1,
									"wMin": 440,
									"hMin": 111.08571428571429,
									"isUIGroup": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "White",
										"textColor": "Blue",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")",
										"onInit": null
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-radiobox",
											"name": "ui-radiobox",
											"w": 74,
											"h": 94,
											"x": 0,
											"y": 0,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 4,
											"value": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIRadioBox": true,
											"isUICheckBox": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "Black",
												"fontSize": 21,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": "console.log(\"onChanged was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 0,
												"on_fg": "drawapp8/images/theme/default/android/xhdpi/radiobox_on.png",
												"active_on_bg": "drawapp8/images/theme/default/android/xhdpi/radiobox_on_active.png",
												"focused_on_bg": "drawapp8/images/theme/default/android/xhdpi/radiobox_on_focused.png",
												"off_fg": "drawapp8/images/theme/default/android/xhdpi/radiobox_off.png",
												"active_off_bg": "drawapp8/images/theme/default/android/xhdpi/radiobox_off_active.png",
												"focused_off_bg": "drawapp8/images/theme/default/android/xhdpi/radiobox_off_focused.png"
											}
										},
										{
											"type": "ui-label",
											"name": "ui-label",
											"w": 286,
											"h": 70,
											"x": 78,
											"y": 0,
											"text": "By Time",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 0,
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
												"textColor": "Black",
												"fontSize": 30,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-radiobox",
											"name": "ui-radiobox",
											"w": 74,
											"h": 94,
											"x": 0,
											"y": 63,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 4,
											"value": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIRadioBox": true,
											"isUICheckBox": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "Black",
												"fontSize": 21,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": "console.log(\"onChanged was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 0,
												"on_fg": "drawapp8/images/theme/default/android/xhdpi/radiobox_on.png",
												"active_on_bg": "drawapp8/images/theme/default/android/xhdpi/radiobox_on_active.png",
												"focused_on_bg": "drawapp8/images/theme/default/android/xhdpi/radiobox_on_focused.png",
												"off_fg": "drawapp8/images/theme/default/android/xhdpi/radiobox_off.png",
												"active_off_bg": "drawapp8/images/theme/default/android/xhdpi/radiobox_off_active.png",
												"focused_off_bg": "drawapp8/images/theme/default/android/xhdpi/radiobox_off_focused.png"
											}
										},
										{
											"type": "ui-label",
											"name": "ui-label",
											"w": 290,
											"h": 70,
											"x": 74,
											"y": 72,
											"text": "By Type",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 0,
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
												"textColor": "Black",
												"fontSize": 30,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-radiobox",
											"name": "ui-radiobox",
											"w": 74,
											"h": 94,
											"x": 0,
											"y": 140,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 4,
											"value": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIRadioBox": true,
											"isUICheckBox": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "Black",
												"fontSize": 21,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": "console.log(\"onChanged was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 0,
												"on_fg": "drawapp8/images/theme/default/android/xhdpi/radiobox_on.png",
												"active_on_bg": "drawapp8/images/theme/default/android/xhdpi/radiobox_on_active.png",
												"focused_on_bg": "drawapp8/images/theme/default/android/xhdpi/radiobox_on_focused.png",
												"off_fg": "drawapp8/images/theme/default/android/xhdpi/radiobox_off.png",
												"active_off_bg": "drawapp8/images/theme/default/android/xhdpi/radiobox_off_active.png",
												"focused_off_bg": "drawapp8/images/theme/default/android/xhdpi/radiobox_off_focused.png"
											}
										},
										{
											"type": "ui-label",
											"name": "ui-label",
											"w": 286,
											"h": 70,
											"x": 78,
											"y": 161,
											"text": "By Size",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 0,
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
												"textColor": "Black",
												"fontSize": 30,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										}
									]
								},
								{
									"type": "ui-group",
									"name": "ui-group",
									"w": 551,
									"h": 190,
									"x": 85,
									"y": 360,
									"text": "",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 1,
									"heightAttr": 0,
									"roundRadius": 4,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 0.7652777777777777,
									"heightParam": 1,
									"wMin": 218,
									"hMin": 87.31428571428572,
									"isUIGroup": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "White",
										"textColor": "Blue",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")",
										"onInit": null
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-checkbox",
											"name": "ui-checkbox",
											"w": 74,
											"h": 94,
											"x": 0,
											"y": 0,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 4,
											"value": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUICheckBox": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "Black",
												"fontSize": 21,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": "console.log(\"onChanged was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 0,
												"on_fg": "drawapp8/images/theme/default/android/xhdpi/checkbox_on.png",
												"active_on_bg": "drawapp8/images/theme/default/android/xhdpi/checkbox_on_active.png",
												"focused_on_bg": "drawapp8/images/theme/default/android/xhdpi/checkbox_on_focused.png",
												"off_fg": "drawapp8/images/theme/default/android/xhdpi/checkbox_off.png",
												"active_off_bg": "drawapp8/images/theme/default/android/xhdpi/checkbox_off_active.png",
												"focused_off_bg": "drawapp8/images/theme/default/android/xhdpi/checkbox_off_focused.png"
											}
										},
										{
											"type": "ui-label",
											"name": "ui-label",
											"w": 159,
											"h": 59,
											"x": 91,
											"y": 17,
											"text": "Bold",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 0,
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
												"textColor": "Black",
												"fontSize": 30,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-checkbox",
											"name": "ui-checkbox",
											"w": 74,
											"h": 94,
											"x": 0,
											"y": 85,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 4,
											"value": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUICheckBox": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "Black",
												"fontSize": 21,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": "console.log(\"onChanged was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 0,
												"on_fg": "drawapp8/images/theme/default/android/xhdpi/checkbox_on.png",
												"active_on_bg": "drawapp8/images/theme/default/android/xhdpi/checkbox_on_active.png",
												"focused_on_bg": "drawapp8/images/theme/default/android/xhdpi/checkbox_on_focused.png",
												"off_fg": "drawapp8/images/theme/default/android/xhdpi/checkbox_off.png",
												"active_off_bg": "drawapp8/images/theme/default/android/xhdpi/checkbox_off_active.png",
												"focused_off_bg": "drawapp8/images/theme/default/android/xhdpi/checkbox_off_focused.png"
											}
										},
										{
											"type": "ui-label",
											"name": "ui-label",
											"w": 159,
											"h": 59,
											"x": 91,
											"y": 102,
											"text": "Italic",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 0,
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
												"textColor": "Black",
												"fontSize": 30,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										}
									]
								},
								{
									"type": "ui-switch",
									"name": "ui-switch",
									"w": 175,
									"h": 87,
									"x": 216,
									"y": 579,
									"text": "",
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"value": true,
									"imageWidth": 412,
									"maskWidth": 153,
									"offsetImage": 153,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUISwitch": true,
									"isUICheckBox": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "White",
										"textColor": "Blue",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")",
										"onChanged": "console.log(\"onChanged was triggered\")"
									},
									"images": {
										"display": 0,
										"default_bg": "drawapp8/images/theme/default/android/xhdpi/switch.png"
									}
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-dialog",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Dialog",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-button",
									"name": "ui-button",
									"w": 171,
									"h": 80,
									"x": 275,
									"y": 182,
									"text": "Dialog1",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 3,
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
									"isUIButton": true,
									"isUIElement": true,
									"hasChildren": true,
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
										"onClick": "this.openWindow(\"dialog1\", \n\tfunction (retCode) {console.log(\"window closed.\");}, false);",
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
									"w": 171,
									"h": 80,
									"x": 275,
									"y": 349,
									"text": "Dialog2",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 3,
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
									"isUIButton": true,
									"isUIElement": true,
									"hasChildren": true,
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
										"onClick": "this.openWindow(\"dialog2\", \n\tfunction (retCode) {console.log(\"window closed.\");}, false);",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 2,
										"focused_bg": "drawapp8/images/common/icons/xhdpi/button_blue.9.png",
										"active_bg": "drawapp8/images/common/icons/xhdpi/button_blue_active.9.png",
										"normal_bg": "drawapp8/images/common/icons/xhdpi/button_blue.9.png",
										"disable_bg": "drawapp8/images/common/icons/xhdpi/button_blue.9.png"
									}
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-tab-top",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Tab(Top)",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-page-indicator-normal",
									"name": "ui-page-indicator-normal",
									"w": 720,
									"h": 100,
									"x": 0,
									"y": 109,
									"text": "",
									"hMargin": 4,
									"vMargin": 4,
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 0,
									"offset": 0,
									"scrollBarOpacity": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 40,
									"hMax": 2000,
									"scrollable": "always",
									"imagePosition": "top",
									"alwaysOnTop": false,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIPageIndicatorNormal": true,
									"isUIPageIndicator": true,
									"isUIElement": true,
									"hasChildren": true,
									"strItemImages": "drawapp8/images/common/icons/xhdpi/like_red.png\ndrawapp8/images/common/icons/xhdpi/like_green.png\ndrawapp8/images/common/icons/xhdpi/like_blue.png",
									"strItemImagesOfCurrent": "drawapp8/images/common/icons/xhdpi/like_red_active.png\ndrawapp8/images/common/icons/xhdpi/like_green_active.png\ndrawapp8/images/common/icons/xhdpi/like_blue_active.png",
									"strItemTexts": "red\ngreen\nblue",
									"enableAnimatePage": false,
									"isUIHScrollView": true,
									"isUIScrollView": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "#C0C0C0",
										"textColor": "Black",
										"fontSize": 26,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": null
									},
									"images": {
										"display": 3,
										"item_bg_normal": "drawapp8/images/common/icons/xhdpi/tab_item_1_bg_normal.png",
										"item_bg_active": "drawapp8/images/common/icons/xhdpi/tab_item_1_bg_active.png",
										"item_bg_current_active": "drawapp8/images/common/icons/xhdpi/tab_item_1_bg_current_active.png",
										"item_bg_current": "drawapp8/images/common/icons/xhdpi/tab_item_1_bg_current_normal.png",
										"item-images-0": "drawapp8/images/common/icons/xhdpi/like_red.png",
										"item-images-1": "drawapp8/images/common/icons/xhdpi/like_green.png",
										"item-images-2": "drawapp8/images/common/icons/xhdpi/like_blue.png",
										"current-item-images-0": "drawapp8/images/common/icons/xhdpi/like_red_active.png",
										"current-item-images-1": "drawapp8/images/common/icons/xhdpi/like_green_active.png",
										"current-item-images-2": "drawapp8/images/common/icons/xhdpi/like_blue_active.png"
									}
								},
								{
									"type": "ui-view-pager",
									"name": "ui-view-pager",
									"w": 720,
									"h": 1031,
									"x": 0,
									"y": 209,
									"text": "",
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 3,
									"current": 2,
									"showIndicator": false,
									"isUIViewPager": true,
									"isUIPageManager": true,
									"isUIFrames": true,
									"isUIElement": true,
									"hasChildren": true,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"heightScaleMin": 505,
									"heightScaleMax": 2022,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "#efefef",
										"textColor": "Blue",
										"fontSize": 21,
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
											"h": 1031,
											"x": 0,
											"y": 0,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 2,
											"heightAttr": 2,
											"isUIPage": true,
											"isUIElement": true,
											"hasChildren": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "trans",
												"fillColor": "White",
												"textColor": "Blue",
												"fontSize": 21,
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
													"w": 195,
													"h": 76,
													"x": 263,
													"y": 94,
													"text": "page 1",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 3,
													"yAttr": 0,
													"widthAttr": 1,
													"heightAttr": 0,
													"autoAdjustHeight": false,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 0.2708333333333333,
													"heightParam": 1,
													"isUILabel": true,
													"isUIElement": true,
													"hasChildren": true,
													"widthScaleMin": 80,
													"widthScaleMax": 320,
													"ANIM_OLD_OUT": 1,
													"ANIM_NEW_IN": 3,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"textColor": "Black",
														"fontSize": 35,
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
											"type": "ui-page",
											"name": "ui-page",
											"w": 720,
											"h": 1031,
											"x": 0,
											"y": 0,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 2,
											"heightAttr": 2,
											"isUIPage": true,
											"isUIElement": true,
											"hasChildren": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "Orange",
												"fillColor": "White",
												"textColor": "Blue",
												"fontSize": 21,
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
													"w": 195,
													"h": 76,
													"x": 263,
													"y": 94,
													"text": "page 2",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 3,
													"yAttr": 0,
													"widthAttr": 1,
													"heightAttr": 0,
													"autoAdjustHeight": false,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 0.2708333333333333,
													"heightParam": 1,
													"isUILabel": true,
													"isUIElement": true,
													"hasChildren": true,
													"widthScaleMin": 80,
													"widthScaleMax": 320,
													"ANIM_OLD_OUT": 1,
													"ANIM_NEW_IN": 3,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"textColor": "Black",
														"fontSize": 35,
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
											"type": "ui-page",
											"name": "ui-page",
											"w": 720,
											"h": 1031,
											"x": 0,
											"y": 0,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 2,
											"heightAttr": 2,
											"isUIPage": true,
											"isUIElement": true,
											"hasChildren": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "trans",
												"fillColor": "White",
												"textColor": "Blue",
												"fontSize": 21,
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
													"w": 195,
													"h": 76,
													"x": 263,
													"y": 94,
													"text": "page 3",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 3,
													"yAttr": 0,
													"widthAttr": 1,
													"heightAttr": 0,
													"autoAdjustHeight": false,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 0.2708333333333333,
													"heightParam": 1,
													"isUILabel": true,
													"isUIElement": true,
													"hasChildren": true,
													"widthScaleMin": 80,
													"widthScaleMax": 320,
													"ANIM_OLD_OUT": 1,
													"ANIM_NEW_IN": 3,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"textColor": "Black",
														"fontSize": 35,
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
						},
						{
							"type": "ui-window",
							"name": "win-tab-bottom",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Tab(Bottom)",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
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
									"h": 1031,
									"x": 0,
									"y": 109,
									"text": "",
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 3,
									"current": 2,
									"showIndicator": false,
									"isUIViewPager": true,
									"isUIPageManager": true,
									"isUIFrames": true,
									"isUIElement": true,
									"hasChildren": true,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"heightScaleMin": 505,
									"heightScaleMax": 2022,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "#efefef",
										"textColor": "Blue",
										"fontSize": 21,
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
											"h": 1031,
											"x": 0,
											"y": 0,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 2,
											"heightAttr": 2,
											"isUIPage": true,
											"isUIElement": true,
											"hasChildren": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "trans",
												"fillColor": "White",
												"textColor": "Blue",
												"fontSize": 21,
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
													"w": 195,
													"h": 76,
													"x": 263,
													"y": 94,
													"text": "page 1",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 3,
													"yAttr": 0,
													"widthAttr": 1,
													"heightAttr": 0,
													"autoAdjustHeight": false,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 0.2708333333333333,
													"heightParam": 1,
													"isUILabel": true,
													"isUIElement": true,
													"hasChildren": true,
													"widthScaleMin": 80,
													"widthScaleMax": 320,
													"ANIM_OLD_OUT": 1,
													"ANIM_NEW_IN": 3,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"textColor": "Black",
														"fontSize": 35,
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
											"type": "ui-page",
											"name": "ui-page",
											"w": 720,
											"h": 1031,
											"x": 0,
											"y": 0,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 2,
											"heightAttr": 2,
											"isUIPage": true,
											"isUIElement": true,
											"hasChildren": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "Orange",
												"fillColor": "White",
												"textColor": "Blue",
												"fontSize": 21,
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
													"w": 195,
													"h": 76,
													"x": 263,
													"y": 94,
													"text": "page 2",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 3,
													"yAttr": 0,
													"widthAttr": 1,
													"heightAttr": 0,
													"autoAdjustHeight": false,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 0.2708333333333333,
													"heightParam": 1,
													"isUILabel": true,
													"isUIElement": true,
													"hasChildren": true,
													"widthScaleMin": 80,
													"widthScaleMax": 320,
													"ANIM_OLD_OUT": 1,
													"ANIM_NEW_IN": 3,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"textColor": "Black",
														"fontSize": 35,
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
											"type": "ui-page",
											"name": "ui-page",
											"w": 720,
											"h": 1031,
											"x": 0,
											"y": 0,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 2,
											"heightAttr": 2,
											"isUIPage": true,
											"isUIElement": true,
											"hasChildren": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "trans",
												"fillColor": "White",
												"textColor": "Blue",
												"fontSize": 21,
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
													"w": 195,
													"h": 76,
													"x": 263,
													"y": 94,
													"text": "page 3",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 3,
													"yAttr": 0,
													"widthAttr": 1,
													"heightAttr": 0,
													"autoAdjustHeight": false,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 0.2708333333333333,
													"heightParam": 1,
													"isUILabel": true,
													"isUIElement": true,
													"hasChildren": true,
													"widthScaleMin": 80,
													"widthScaleMax": 320,
													"ANIM_OLD_OUT": 1,
													"ANIM_NEW_IN": 3,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"textColor": "Black",
														"fontSize": 35,
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
									"type": "ui-page-indicator-normal",
									"name": "ui-page-indicator-normal",
									"w": 720,
									"h": 100,
									"x": 0,
									"y": 1140,
									"text": "",
									"hMargin": 4,
									"vMargin": 4,
									"xAttr": 0,
									"yAttr": 5,
									"widthAttr": 2,
									"heightAttr": 0,
									"offset": 0,
									"scrollBarOpacity": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 40,
									"hMax": 2000,
									"scrollable": "always",
									"imagePosition": "top",
									"alwaysOnTop": false,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIPageIndicatorNormal": true,
									"isUIPageIndicator": true,
									"isUIElement": true,
									"hasChildren": true,
									"strItemImages": "drawapp8/images/common/icons/xhdpi/like_red.png\ndrawapp8/images/common/icons/xhdpi/like_green.png\ndrawapp8/images/common/icons/xhdpi/like_blue.png",
									"strItemImagesOfCurrent": "drawapp8/images/common/icons/xhdpi/like_red_active.png\ndrawapp8/images/common/icons/xhdpi/like_green_active.png\ndrawapp8/images/common/icons/xhdpi/like_blue_active.png",
									"strItemTexts": "red\ngreen\nblue",
									"enableAnimatePage": false,
									"isUIHScrollView": true,
									"isUIScrollView": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "#C0C0C0",
										"textColor": "Black",
										"fontSize": 26,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": null
									},
									"images": {
										"display": 3,
										"item_bg_normal": "drawapp8/images/common/icons/xhdpi/tab_item_2_bg_normal.png",
										"item_bg_active": "drawapp8/images/common/icons/xhdpi/tab_item_2_bg_active.png",
										"item_bg_current_active": "drawapp8/images/common/icons/xhdpi/tab_item_2_bg_current_active.png",
										"item_bg_current": "drawapp8/images/common/icons/xhdpi/tab_item_2_bg_current_normal.png",
										"item-images-0": "drawapp8/images/common/icons/xhdpi/like_red.png",
										"item-images-1": "drawapp8/images/common/icons/xhdpi/like_green.png",
										"item-images-2": "drawapp8/images/common/icons/xhdpi/like_blue.png",
										"current-item-images-0": "drawapp8/images/common/icons/xhdpi/like_red_active.png",
										"current-item-images-1": "drawapp8/images/common/icons/xhdpi/like_green_active.png",
										"current-item-images-2": "drawapp8/images/common/icons/xhdpi/like_blue_active.png"
									}
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-listview",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "List View",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-list-view",
									"name": "ui-list-view",
									"w": 720,
									"h": 1131,
									"x": 0,
									"y": 109,
									"text": "",
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 3,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 100,
									"hMax": 2000,
									"itemHeight": 113,
									"itemHeightVariable": false,
									"offset": 0,
									"scrollBarOpacity": 0,
									"scrollable": "always",
									"updateStatus": 0,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIListView": true,
									"isUIVScrollView": true,
									"isUIScrollView": true,
									"isUIElement": true,
									"hasChildren": true,
									"isUIList": true,
									"childrenNr": 13,
									"isUILayout": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "#f0f0f0",
										"textColor": "Blue",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableShadow": true,
										"enableGradient": true,
										"shadow": {
											"x": 0,
											"y": 0,
											"blur": 8,
											"color": "Black"
										}
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")",
										"onUpdateData": "console.log(\"onUpdateData was triggered\")"
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
											"h": 113,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 122,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 113,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 122,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 226,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 122,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 339,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 122,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 452,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 122,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 565,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 122,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 678,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 122,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 791,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 122,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 904,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 122,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 1017,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 122,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 1130,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 122,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 1243,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 122,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 1356,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 122,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										}
									]
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-updatable-listview",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Pull To Refress",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-list-view",
									"name": "ui-list-view",
									"w": 720,
									"h": 1010,
									"x": 0,
									"y": 109,
									"text": "",
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 100,
									"hMax": 2000,
									"itemHeight": 113,
									"itemHeightVariable": false,
									"offset": 0,
									"scrollBarOpacity": 0,
									"scrollable": "always",
									"updateStatus": 0,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIListView": true,
									"isUIVScrollView": true,
									"isUIScrollView": true,
									"isUIElement": true,
									"hasChildren": true,
									"isUIList": true,
									"childrenNr": 10,
									"isUILayout": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "#C8C8C8",
										"fillColor": "#f5f5f5",
										"textColor": "#358de7",
										"fontSize": 21,
										"fontFamily": "serif"
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")",
										"onUpdateData": "console.log(\"onUpdateData was triggered\")"
									},
									"images": {
										"display": 2,
										"scrollBarImg": "drawapp8/images/theme/default/android/scrollbar.png"
									},
									"children": [
										{
											"type": "ui-list-item",
											"name": "ui-list-item-update-tips",
											"w": 720,
											"h": 113,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#f5f5f5",
												"fillColor": "White",
												"textColor": "#f5f5f5",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
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
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 3.141592653589793,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/theme/default/android/update.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label-tips",
													"w": 479,
													"h": 56,
													"x": 105,
													"y": 0,
													"text": "松开可以刷新",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
													"yAttr": 4,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "#C0C0C0",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label-update-time-tips",
													"w": 177,
													"h": 54,
													"x": 102,
													"y": 59,
													"text": "最后更新于:",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
													"yAttr": 5,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "#C0C0C0",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label-update-time",
													"w": 325,
													"h": 52,
													"x": 306,
													"y": 61,
													"text": "今天 8:43",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
													"yAttr": 5,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "#C0C0C0",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item-update-status",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 113,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#f5f5f5",
												"fillColor": "White",
												"textColor": "#f5f5f5",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-label",
													"name": "ui-label-loading",
													"w": 450,
													"h": 56,
													"x": 111,
													"y": 29,
													"text": "加载中...",
													"vTextAlign": "middle",
													"hTextAlign": "left",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "#C0C0C0",
														"fontSize": 21,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												},
												{
													"type": "ui-wait-box",
													"name": "ui-wait-box",
													"w": 94,
													"h": 102,
													"x": 0,
													"y": 6,
													"text": "",
													"xAttr": 4,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"offset": 0,
													"running": false,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIWaitBar": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Orange",
														"fillColor": "White",
														"textColor": "Blue",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")"
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/theme/default/android/xhdpi/wait_box.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 226,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 120,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 339,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 120,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 452,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 120,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 565,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 120,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										},
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 678,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 120,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 791,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 122,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 904,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 120,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 1017,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-icon",
													"name": "liste",
													"w": 72,
													"h": 61,
													"x": 648,
													"y": 26,
													"text": "",
													"xAttr": 5,
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
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"default_bg": "drawapp8/images/common/icons/xhdpi/arrow.png"
													}
												},
												{
													"type": "ui-image",
													"name": "ui-image",
													"w": 78,
													"h": 78,
													"x": 6,
													"y": 18,
													"text": "",
													"xAttr": 0,
													"yAttr": 3,
													"widthAttr": 0,
													"heightAttr": 0,
													"clickable": false,
													"clickedStyleParam": 0.8,
													"clickedStyleType": 2,
													"imageRotation": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIImage": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 3,
														"default_bg": "drawapp8/images/common/message.png"
													}
												},
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 120,
													"y": 29,
													"text": "文本",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
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
						},
						{
							"type": "ui-window",
							"name": "win-simple-html-view",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Simple HTML View",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-simple-html",
									"name": "ui-simple-html",
									"w": 720,
									"h": 1131,
									"x": 0,
									"y": 109,
									"text": "<div class=\"mainContent sep10\"><p><img src=\"/images/demos/1.jpg\" alt=\"\"><br>在今年三星、HTC、诺基亚等大牌云集的 CES 大会上，作为一个二线手机厂商，华为算是抢足了风头。Ascend Mate、Ascend D2、Ascend W1 三连发显示了华为智能机的实力。作为一家在美国名不见经传的公司，华为两年前就号称要在三年内跻身全球五大手机厂商之列，2013 是最后一年。而国外科技网站 CNET 作者 Jessica Dolcourt 认为，在这一年里华为的确有望在美实现突破。</p><p>Dolcourt 早在去年 8 月就认为，华为在美国市场的主要任务是推出更优秀的智能机。但之前华为智能机在美国市场却一直走的是低端低价策略，其最好的智能机一直没在美国上市，导致华为手机对于美国民众的吸引力不足。直到去年 2 月，华为在 MWC 大会上推出了性能强大的 Ascend D Quad。去年 5 月华为面向全球推出的 Ascend P1 也不错，这表明华为向正确的方向又迈出了一步。</p><p>而在这次的 CES 大会上，华为推出的三款智能机则算是真正有特色。巨无霸 Ascend Mate 搭载 6.1 英寸超大高清屏，Android 4.1 系统，四核处理器，4050mAh 的电池刷新了智能手机的电池容量记录。Ascend D2 搭载 5 英寸显示屏和 1300 万像素摄像头，这种分辨率的摄像头在华为算是首创。华为首款 WP8 手机 Ascend W1 同样采用了最新配置，外观设计也很漂亮。</p>",
									"hMargin": 8,
									"vMargin": 8,
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 3,
									"offset": 0,
									"scrollBarOpacity": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 100,
									"hMax": 2000,
									"scrollable": "always",
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"scrollRange": 1509,
									"isUISimpleHTML": true,
									"isUIVScrollView": true,
									"isUIScrollView": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "#E8E8E8",
										"textColor": "Black",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")"
									},
									"images": {
										"display": 2,
										"default_bg": "drawapp8/images/transparent.png",
										"scrollBarImg": "drawapp8/images/theme/default/android/scrollbar.png"
									}
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-tips",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Tips",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-tips",
									"name": "ui-tips",
									"w": 341,
									"h": 212,
									"x": 379,
									"y": 137,
									"text": "",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"hMargin": 13,
									"vMargin": 13,
									"xAttr": 5,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"roundRadius": 6,
									"clickable": false,
									"pointerDirection": 2,
									"pointerOffset": 0.23470105382633175,
									"wMin": 80,
									"hMin": 80,
									"autoAdjustHeight": true,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUITips": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"textColor": "Blue",
										"fontSize": 21,
										"enableShadow": true,
										"fontFamily": "serif",
										"enableGradient": true,
										"shadow": {
											"x": 0,
											"y": 0,
											"blur": 8,
											"color": "Black"
										},
										"fillColor": {
											"x0": 0,
											"y0": 0,
											"x1": 0,
											"y1": -1,
											"data": [
												{
													"o": 0,
													"c": "#a0d1f7"
												},
												{
													"o": 0.25,
													"c": "#89c4f1"
												},
												{
													"o": 0.5,
													"c": "#6db3ea"
												},
												{
													"o": 0.75,
													"c": "#52a4e4"
												},
												{
													"o": 1,
													"c": "#3a95dd"
												}
											]
										}
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")"
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-label",
											"name": "ui-label",
											"w": 315,
											"h": 70,
											"x": 13,
											"y": 15,
											"text": "Put Your Tips At Here.",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 2,
											"heightAttr": 1,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 0.3763440860215054,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"heightScaleMin": 69,
											"heightScaleMax": 276,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "#358de7",
												"textColor": "Black",
												"fontSize": 17,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 140,
											"h": 87,
											"x": 150,
											"y": 107,
											"text": "",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 6,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUIButton": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Black",
												"fillColor": "#FFCC33",
												"textColor": "Black",
												"fontSize": 21,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											},
											"children": [
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 91,
													"h": 45,
													"x": 25,
													"y": 21,
													"text": "Close",
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
														"textColor": "Black",
														"fontSize": 21,
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
														"onClick": "console.log(\"onClick was triggered\")",
														"onChanged": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/transparent.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-tips",
									"name": "ui-tips",
									"w": 345,
									"h": 177,
									"x": 85,
									"y": 382,
									"text": "",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"hMargin": 13,
									"vMargin": 13,
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"roundRadius": 6,
									"clickable": true,
									"pointerDirection": 1,
									"pointerOffset": 0.1589021307331165,
									"wMin": 80,
									"hMin": 61.714285714285715,
									"autoAdjustHeight": true,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUITips": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"textColor": "Blue",
										"fontSize": 21,
										"enableShadow": true,
										"fontFamily": "serif",
										"enableGradient": true,
										"shadow": {
											"x": 0,
											"y": 0,
											"blur": 8,
											"color": "Black"
										},
										"fillColor": {
											"x0": 0,
											"y0": 0,
											"x1": 0,
											"y1": -1,
											"data": [
												{
													"o": 0,
													"c": "#a0d1f7"
												},
												{
													"o": 0.25,
													"c": "#89c4f1"
												},
												{
													"o": 0.5,
													"c": "#6db3ea"
												},
												{
													"o": 0.75,
													"c": "#52a4e4"
												},
												{
													"o": 1,
													"c": "#3a95dd"
												}
											]
										}
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")"
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-label",
											"name": "ui-label",
											"w": 319,
											"h": 99,
											"x": 13,
											"y": 13,
											"text": "  Hello",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 2,
											"heightAttr": 1,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 0.6556291390728477,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"heightScaleMin": 69,
											"heightScaleMax": 276,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "#358de7",
												"textColor": "Black",
												"fontSize": 17,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										}
									]
								},
								{
									"type": "ui-image",
									"name": "ui-image",
									"w": 70,
									"h": 70,
									"x": 15,
									"y": 380,
									"text": "",
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"clickable": false,
									"clickedStyleParam": 0.8,
									"clickedStyleType": 2,
									"imageRotation": 0,
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
										"textColor": "Black",
										"fontSize": 21,
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
										"onClick": "console.log(\"onClick was triggered\")",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 0,
										"default_bg": "drawapp8/images/girl.png"
									}
								},
								{
									"type": "ui-image",
									"name": "ui-image",
									"w": 70,
									"h": 70,
									"x": 409,
									"y": 542,
									"text": "",
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"clickable": false,
									"clickedStyleParam": 0.8,
									"clickedStyleType": 2,
									"imageRotation": 0,
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
										"textColor": "Black",
										"fontSize": 21,
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
										"onClick": "console.log(\"onClick was triggered\")",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 0,
										"default_bg": "drawapp8/images/girl.png"
									}
								},
								{
									"type": "ui-tips",
									"name": "ui-tips",
									"w": 345,
									"h": 179,
									"x": 375,
									"y": 527,
									"text": "",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"hMargin": 13,
									"vMargin": 13,
									"xAttr": 5,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"roundRadius": 6,
									"clickable": true,
									"pointerDirection": 2,
									"pointerOffset": 0.23589743589743564,
									"wMin": 80,
									"hMin": 61.714285714285715,
									"autoAdjustHeight": true,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUITips": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "#C0C0C0",
										"fillColor": "#F8F8F8",
										"textColor": "Blue",
										"fontSize": 21,
										"enableShadow": true,
										"fontFamily": "serif",
										"enableGradient": true,
										"shadow": {
											"x": 0,
											"y": 0,
											"blur": 8,
											"color": "Black"
										}
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")"
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-label",
											"name": "ui-label",
											"w": 319,
											"h": 101,
											"x": 13,
											"y": 15,
											"text": "  Hello",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 2,
											"heightAttr": 1,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 0.6601307189542484,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"heightScaleMin": 69,
											"heightScaleMax": 276,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "#358de7",
												"textColor": "Black",
												"fontSize": 17,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										}
									]
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-color-buttons",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Color Button",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-color-button",
									"name": "ui-color-button",
									"w": 102,
									"h": 102,
									"x": 618,
									"y": 231,
									"text": "",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 5,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"roundRadius": 798,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIColorButton": true,
									"isUIElement": true,
									"hasChildren": true,
									"isUIButton": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Black",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
										"fontFamily": "serif",
										"textB": true,
										"activeFillColor": "#F5F5F5"
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
									"type": "ui-color-button",
									"name": "ui-color-button",
									"w": 102,
									"h": 102,
									"x": 309,
									"y": 229,
									"text": "",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"roundRadius": 6,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIColorButton": true,
									"isUIElement": true,
									"hasChildren": true,
									"isUIButton": true,
									"bgRotation": 0.7853981633974483,
									"style": {
										"lineWidth": 2,
										"lineColor": "Black",
										"fillColor": "Orange",
										"textColor": "Black",
										"fontSize": 21,
										"fontFamily": "serif",
										"textB": true,
										"activeFillColor": "#F5F5F5"
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
									"type": "ui-color-button",
									"name": "ui-color-button",
									"w": 102,
									"h": 102,
									"x": 0,
									"y": 231,
									"text": "",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 4,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"roundRadius": 6,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIColorButton": true,
									"isUIElement": true,
									"hasChildren": true,
									"isUIButton": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Black",
										"fillColor": "#3eb000",
										"textColor": "Black",
										"fontSize": 21,
										"fontFamily": "serif",
										"textB": true,
										"enableGradient": true,
										"activeFillColor": "#F5F5F5"
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 2
									}
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-canvas",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Canvas",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-canvas",
									"name": "ui-canvas",
									"w": 720,
									"h": 1131,
									"x": 0,
									"y": 109,
									"text": "",
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 3,
									"refreshInterval": 1000,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUICanvas": true,
									"isUIElement": true,
									"hasChildren": true,
									"count": 39,
									"style": {
										"lineWidth": 2,
										"lineColor": "Red",
										"fillColor": "Orange",
										"textColor": "Orange",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")",
										"onPaint": "var context = canvas2dCtx;\nvar s = 100; \nvar dx = (this.w-s)/2; \nvar dy = (this.h-s)/2; \n\nvar dig = Math.PI / 15 * 11;\ncontext.beginPath();\ncontext.fillStyle = \"rgb(100, 255, 255)\";\ncontext.strokeStyle = \"rgb(0, 0, 100)\";\nfor(var i = 0; i < 30; i++)\n{\n    var x = Math.sin(i * dig);\n\tvar y = Math.cos(i * dig);\n\tcontext.lineTo(dx + x * s, dy + y * s);\n}\ncontext.closePath();\ncontext.fill();\ncontext.stroke();",
										"onTimer": "console.log(\"onTimer was triggered\")",
										"onPointerDown": "console.log(\"onPointerDown was triggered\")",
										"onPointerMove": "console.log(\"onPointerMove was triggered\")",
										"onPointerUp": "console.log(\"onPointerUp was triggered\")",
										"onKeyDown": "console.log(\"onKeyDown was triggered\")",
										"onKeyUp": "console.log(\"onKeyUp was triggered\")",
										"onLongPress": null,
										"onDoubleClick": null
									},
									"images": {
										"display": 2
									}
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-scrollable-button-group",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Scrollable Button Group",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-h-scroll-view",
									"name": "ui-h-scroll-view",
									"w": 720,
									"h": 185,
									"x": 0,
									"y": 201,
									"text": "",
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 2,
									"heightAttr": 0,
									"offset": 0,
									"scrollBarOpacity": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 85.02857142857142,
									"hMax": 2000,
									"scrollable": "always",
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIHScrollView": true,
									"isUIScrollView": true,
									"isUIElement": true,
									"hasChildren": true,
									"isPositionLocked": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "#f0f0f0",
										"textColor": "Blue",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")"
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 109,
											"h": 100,
											"x": 10,
											"y": 43,
											"text": "1",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 2,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"wMin": 50,
											"hMin": 46.628571428571426,
											"enableAutoScaleFontSize": true,
											"xParam": 0.013888888888888888,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "#E0E0E0",
												"fontSize": 26,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"focused_bg": "drawapp8/images/theme/default/android/button_focused.9.png",
												"active_bg": "drawapp8/images/theme/default/android/button_active.9.png",
												"normal_bg": "drawapp8/images/theme/default/android/button_normal.9.png",
												"disable_bg": "drawapp8/images/theme/default/android/button_disable.9.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 109,
											"h": 100,
											"x": 192,
											"y": 43,
											"text": "2",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 2,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"wMin": 50,
											"hMin": 46.628571428571426,
											"enableAutoScaleFontSize": true,
											"xParam": 0.26666666666666666,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "#E0E0E0",
												"fontSize": 26,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"focused_bg": "drawapp8/images/theme/default/android/button_focused.9.png",
												"active_bg": "drawapp8/images/theme/default/android/button_active.9.png",
												"normal_bg": "drawapp8/images/theme/default/android/button_normal.9.png",
												"disable_bg": "drawapp8/images/theme/default/android/button_disable.9.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 109,
											"h": 100,
											"x": 374,
											"y": 43,
											"text": "3",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 2,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"wMin": 50,
											"hMin": 46.628571428571426,
											"enableAutoScaleFontSize": true,
											"xParam": 0.5194444444444445,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "#E0E0E0",
												"fontSize": 26,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"focused_bg": "drawapp8/images/theme/default/android/button_focused.9.png",
												"active_bg": "drawapp8/images/theme/default/android/button_active.9.png",
												"normal_bg": "drawapp8/images/theme/default/android/button_normal.9.png",
												"disable_bg": "drawapp8/images/theme/default/android/button_disable.9.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 109,
											"h": 100,
											"x": 556,
											"y": 43,
											"text": "4",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 2,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"wMin": 50,
											"hMin": 46.628571428571426,
											"enableAutoScaleFontSize": true,
											"xParam": 0.7722222222222223,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "#E0E0E0",
												"fontSize": 26,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"focused_bg": "drawapp8/images/theme/default/android/button_focused.9.png",
												"active_bg": "drawapp8/images/theme/default/android/button_active.9.png",
												"normal_bg": "drawapp8/images/theme/default/android/button_normal.9.png",
												"disable_bg": "drawapp8/images/theme/default/android/button_disable.9.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 109,
											"h": 100,
											"x": 747,
											"y": 43,
											"text": "5",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 2,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"wMin": 50,
											"hMin": 46.628571428571426,
											"enableAutoScaleFontSize": true,
											"xParam": 1.0375,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "#E0E0E0",
												"fontSize": 26,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"focused_bg": "drawapp8/images/theme/default/android/button_focused.9.png",
												"active_bg": "drawapp8/images/theme/default/android/button_active.9.png",
												"normal_bg": "drawapp8/images/theme/default/android/button_normal.9.png",
												"disable_bg": "drawapp8/images/theme/default/android/button_disable.9.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 109,
											"h": 100,
											"x": 936,
											"y": 43,
											"text": "6",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 2,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"wMin": 50,
											"hMin": 46.628571428571426,
											"enableAutoScaleFontSize": true,
											"xParam": 1.3,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "#E0E0E0",
												"fontSize": 26,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"focused_bg": "drawapp8/images/theme/default/android/button_focused.9.png",
												"active_bg": "drawapp8/images/theme/default/android/button_active.9.png",
												"normal_bg": "drawapp8/images/theme/default/android/button_normal.9.png",
												"disable_bg": "drawapp8/images/theme/default/android/button_disable.9.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 109,
											"h": 100,
											"x": 1116,
											"y": 43,
											"text": "7",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 2,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"wMin": 50,
											"hMin": 46.628571428571426,
											"enableAutoScaleFontSize": true,
											"xParam": 1.55,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"textColor": "#E0E0E0",
												"fontSize": 26,
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
												"onClick": "console.log(\"onClick was triggered\")",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"focused_bg": "drawapp8/images/theme/default/android/button_focused.9.png",
												"active_bg": "drawapp8/images/theme/default/android/button_active.9.png",
												"normal_bg": "drawapp8/images/theme/default/android/button_normal.9.png",
												"disable_bg": "drawapp8/images/theme/default/android/button_disable.9.png"
											}
										}
									]
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-selector",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Selecter",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-select",
									"name": "ui-select",
									"w": 214,
									"h": 306,
									"x": 253,
									"y": 109,
									"text": "2000\n2001\n2002\n2003\n2004\n2005\n2006\n2007\n2008\n2009\n2010\n2011\n2012\n2013\n2014",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"offset": 0,
									"visibleItems": 5,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUISelect": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "#66aa00",
										"textColor": "#383838",
										"fontSize": 36,
										"fontFamily": "serif",
										"textB": true
									},
									"events": {
										"onClick": null,
										"onInit": null,
										"onChanged": null
									},
									"images": {
										"display": 3,
										"default_bg": "drawapp8/images/common/icons/xhdpi/spinning_wheel_bg_center.png"
									}
								},
								{
									"type": "ui-select",
									"name": "ui-select",
									"w": 159,
									"h": 172,
									"x": 281,
									"y": 485,
									"text": "2000\n2001\n2002\n2003\n2004\n2005\n2006\n2007\n2008\n2009\n2010\n2011\n2012\n2013\n2014",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"offset": 0,
									"visibleItems": 3,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUISelect": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "#7ecce9",
										"fillColor": "#66aa00",
										"textColor": "#383838",
										"fontSize": 34,
										"fontFamily": "serif",
										"textB": true
									},
									"events": {
										"onClick": null,
										"onInit": null,
										"onChanged": null
									},
									"images": {
										"display": 3
									}
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-gauge",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Guage",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-gauge",
									"name": "ui-gauge",
									"w": 398,
									"h": 398,
									"x": 161,
									"y": 109,
									"text": "",
									"xAttr": 3,
									"yAttr": 6,
									"widthAttr": 0,
									"heightAttr": 0,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIGauge": true,
									"isUIElement": true,
									"hasChildren": true,
									"wMin": 100,
									"wMax": 1000,
									"hMin": 100,
									"hMax": 1000,
									"whRadio": 1,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "White",
										"textColor": "Blue",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": null,
										"onInit": "var clockElement = this;\nvar firstTime = true;\nfunction showCurrentTime() {\n    var now = new Date();\n\n\tvar hour = clockElement.findChildByName(\"ui-gauge-pointer-hour\", true);\n\tvar minute = clockElement.findChildByName(\"ui-gauge-pointer-minute\", true);\n\tvar seconds = clockElement.findChildByName(\"ui-gauge-pointer-seconds\", true);\n\n\tif(firstTime) {\n\t\tif(hour) {\t\n\t\t\thour.animateSetValue(now.getHours()%12 + now.getMinutes()/60);\n\t\t}\n\t\tif(minute) {\n\t\t\tminute.animateSetValue(now.getMinutes());\n\t\t}\n\t\tif(seconds) {\n\t\t\tseconds.animateSetValue(now.getSeconds());\n\t\t}\n\n\t\tfirstTime = false;\n\t}\n\telse {\n\t\tif(hour) {\t\n\t\t\thour.setValue(now.getHours()%12 + now.getMinutes()/60);\n\t\t}\n\t\tif(minute) {\n\t\t\tminute.setValue(now.getMinutes());\n\t\t}\n\t\tif(seconds) {\n\t\t\tseconds.setValue(now.getSeconds());\n\t\t}\n\t}\n\n\tif(clockElement.isVisible()) {\n\t\tsetTimeout(showCurrentTime, seconds ? 1000 : 60000);\n\t}\n\n\tclockElement.postRedraw();\n\n\treturn;\n}\n\nshowCurrentTime();\n"
									},
									"images": {
										"display": 0,
										"default_bg": "drawapp8/images/common/images/clockgoog_dial.png"
									},
									"children": [
										{
											"type": "ui-gauge-pointer",
											"name": "ui-gauge-pointer-hour",
											"w": 100,
											"h": 100,
											"x": 149,
											"y": 149,
											"text": "",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"value": 0,
											"minAngle": 0,
											"maxAngle": 360,
											"minValue": 0,
											"maxValue": 12,
											"wMin": 100,
											"wMax": 100,
											"hMin": 100,
											"hMax": 100,
											"whRadio": 1,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"angle": 0,
											"axesY": 0.9,
											"isUIGaugePointer": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Orange",
												"fillColor": "Blue",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
											},
											"events": {
												"onClick": null
											},
											"images": {
												"display": 2,
												"image": "drawapp8/images/common/images/clockgoog_hour.png"
											}
										},
										{
											"type": "ui-gauge-pointer",
											"name": "ui-gauge-pointer-minute",
											"w": 70,
											"h": 70,
											"x": 164,
											"y": 164,
											"text": "",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"value": 0,
											"minAngle": 0,
											"maxAngle": 360,
											"minValue": 0,
											"maxValue": 60,
											"wMin": 70,
											"wMax": 70,
											"hMin": 70,
											"hMax": 70,
											"whRadio": 1,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"angle": 90,
											"axesY": 0.9,
											"isUIGaugePointer": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Orange",
												"fillColor": "Blue",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
											},
											"events": {
												"onClick": null
											},
											"images": {
												"display": 2,
												"image": "drawapp8/images/common/images/clockgoog_minute.png"
											}
										},
										{
											"type": "ui-gauge-pointer",
											"name": "ui-gauge-pointer-seconds",
											"w": 39,
											"h": 39,
											"x": 180,
											"y": 180,
											"text": "",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"value": 0,
											"minAngle": 0,
											"maxAngle": 360,
											"minValue": 0,
											"maxValue": 60,
											"wMin": 40,
											"wMax": 40,
											"hMin": 18.285714285714285,
											"hMax": 40,
											"whRadio": 1,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"angle": 90,
											"axesY": 0.9,
											"isUIGaugePointer": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Orange",
												"fillColor": "Blue",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
											},
											"events": {
												"onClick": null
											},
											"images": {
												"display": 2,
												"image": "drawapp8/images/common/images/clockgoog_seconds.png"
											}
										}
									]
								},
								{
									"type": "ui-gauge",
									"name": "ui-gauge",
									"w": 398,
									"h": 398,
									"x": 161,
									"y": 507,
									"text": "",
									"xAttr": 3,
									"yAttr": 6,
									"widthAttr": 0,
									"heightAttr": 0,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIGauge": true,
									"isUIElement": true,
									"hasChildren": true,
									"wMin": 100,
									"wMax": 1000,
									"hMin": 100,
									"hMax": 1000,
									"whRadio": 1,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "White",
										"textColor": "Blue",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": null,
										"onInit": "var pointer = this.findChildByName(\"ui-gauge-pointer-compass\", true);\npointer.animateSetValue(0);\n\n"
									},
									"images": {
										"display": 0,
										"default_bg": "drawapp8/images/common/images/compass_bg.png"
									},
									"children": [
										{
											"type": "ui-gauge-pointer",
											"name": "ui-gauge-pointer-compass",
											"w": 70,
											"h": 70,
											"x": 164,
											"y": 164,
											"text": "",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"value": 90,
											"minAngle": 0,
											"maxAngle": 360,
											"minValue": 0,
											"maxValue": 360,
											"wMin": 70,
											"wMax": 70,
											"hMin": 32,
											"hMax": 70,
											"whRadio": 1,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"angle": 90,
											"axesY": 0.9,
											"isUIGaugePointer": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Orange",
												"fillColor": "Blue",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "serif",
												"enableGradient": true
											},
											"events": {
												"onClick": null
											},
											"images": {
												"display": 0,
												"image": "drawapp8/images/common/images/compass_pointer.png"
											}
										}
									]
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-led",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "LED Digits",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-led-digits",
									"name": "ui-led-digits",
									"w": 387,
									"h": 129,
									"x": 167,
									"y": 304,
									"text": "12:00",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUILedDigits": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "#C0C0C0",
										"fillColor": "#F8F8F8",
										"textColor": "#3eb000",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": null
									},
									"images": {
										"display": 2
									}
								},
								{
									"type": "ui-led-digits",
									"name": "ui-led-digits",
									"w": 387,
									"h": 129,
									"x": 167,
									"y": 115,
									"text": "12:00",
									"xAttr": 3,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUILedDigits": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Black",
										"fillColor": "Black",
										"textColor": "#3eb000",
										"fontSize": 21,
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
						},
						{
							"type": "ui-window",
							"name": "win-player-controls",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Player Control",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-v-collapsable",
									"name": "ui-v-collapsable",
									"isUIVCollapsable": true,
									"w": 720,
									"h": 179,
									"x": 0,
									"y": 1061,
									"text": "",
									"xAttr": 0,
									"yAttr": 5,
									"widthAttr": 2,
									"heightAttr": 0,
									"vLayout": true,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUICollapsable": true,
									"isUILayout": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "White",
										"textColor": "Blue",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableShadow": true,
										"shadow": {
											"x": 0,
											"y": 0,
											"blur": 20,
											"color": "Black"
										}
									},
									"events": {
										"onClick": null,
										"onInit": "var me = this;\nvar win = this.getWindow();\nvar player = getMusicPlayer();\n\nvar progressBar = this.getWindow().findChildByName(\"ui-slider\", true);\nvar playButton = this.getWindow().findChildByName(\"ui-button-play\", true);\nvar totalTime = this.getWindow().findChildByName(\"ui-label-total-time\", true);\nvar ellapsedTime = this.getWindow().findChildByName(\"ui-label-ellapsed-time\", true);\n\nfunction updateUI(eventName, eventTime) {\n    if(me.isVisible()) {\n        var duration = Math.floor(player.getDuration());\n\t\tvar ellapsed = Math.floor(player.getEllapsedTime());\n\n\t\tif(isNaN(duration)) {\n\t\t\tduration = 0;\n\t\t}\n\n\t\tif(isNaN(ellapsed)) {\n\t\t\tellapsed = 0;\n\t\t}\n\n\t\tif(duration && !progressBar.pointerDown) {\n\t\t\tprogressBar.setValue(ellapsed*100/duration, true);\n\t\t}\n\n\t\ttotalTime.setText(Math.floor(duration/60) + \":\" + duration%60);\n\t\tellapsedTime.setText(Math.floor(ellapsed/60) + \":\" + ellapsed%60);\n\t\t\n\t\tif(eventName == \"state-changed\") {\n\t\t\tvar src = null;\n\t\t\tvar types = [C_SHAPE_IMAGE_NORMAL, C_SHAPE_IMAGE_FOCUSED, C_SHAPE_IMAGE_ACTIVE, C_SHAPE_IMAGE_DISABLE];\n\t\t\tfor(var i = 0; i < types.length; i++) {\n\t\t\t    var type = types[i];\n\t\t\t    src = playButton.getImageSrcByType(type);\n\t\t\t\tif(player.isPlaying()) {\n\t\t\t\t\tsrc = src.replace(/_pause_/, \"_play_\");\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tsrc = src.replace(/_play_/, \"_pause_\");\t\t\n\t\t\t\t}\n\n\t\t\t\tplayButton.setImage(type, src);\n\t\t\t}\n\t\t}\n\n\t\tif(win.onPlayerUpdateUI) {\n\t\t\twin.onPlayerUpdateUI();\n\t\t}\n\n\t\twin.postRedraw();\n\t}\n\n\treturn;\n}\n\nplayer.setEventListener(updateUI);\n\n"
									},
									"images": {
										"display": 2
									},
									"children": [
										{
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 78,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "Black",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": null,
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2,
												"focused_bg": "drawapp8/images/common/icons/xhdpi/bg_gray.png",
												"active_bg": "drawapp8/images/common/icons/xhdpi/bg_gray.png",
												"normal_bg": "drawapp8/images/common/icons/xhdpi/bg_gray.png",
												"disable_bg": "drawapp8/images/common/icons/xhdpi/bg_gray.png"
											},
											"children": [
												{
													"type": "ui-label",
													"name": "ui-label-ellapsed-time",
													"w": 83,
													"h": 41,
													"x": 0,
													"y": 19,
													"text": "0:0",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 4,
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
														"fillColor": "White",
														"textColor": "White",
														"fontSize": 19,
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
													"type": "ui-slider",
													"name": "ui-slider",
													"w": 554,
													"h": 78,
													"x": 83,
													"y": 0,
													"text": "",
													"xAttr": 6,
													"yAttr": 3,
													"widthAttr": 3,
													"heightAttr": 0,
													"value": 0,
													"interactive": true,
													"wMin": 60,
													"hMin": 40,
													"hMax": 45,
													"drawSize": 45,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIProgressBar": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null,
														"onChanged": "getMusicPlayer().seekTo(value * 100);",
														"onChanging": null
													},
													"images": {
														"display": 2,
														"default_bg": "drawapp8/images/theme/default/android/xhdpi/slider_bg.9.png",
														"normal_fg": "drawapp8/images/theme/default/android/xhdpi/slider_fg.9.png"
													},
													"children": [
														{
															"type": "ui-icon",
															"name": "ui-icon",
															"w": 78,
															"h": 78,
															"x": 0,
															"y": 0,
															"text": "",
															"xAttr": 0,
															"yAttr": 3,
															"widthAttr": 0,
															"heightAttr": 0,
															"clickable": false,
															"clickedStyleParam": 0.8,
															"clickedStyleType": 2,
															"wMin": 45,
															"wMax": 45,
															"hMin": 20.57142857142857,
															"hMax": 45,
															"imageRotation": 0,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"isUIImage": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Green",
																"fillColor": "white",
																"textColor": "Black",
																"fontSize": 21,
																"fontFamily": "serif"
															},
															"events": {
																"onClick": null,
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 0,
																"default_bg": "drawapp8/images/theme/default/android/xhdpi/slider_drag.png"
															}
														}
													]
												},
												{
													"type": "ui-label",
													"name": "ui-label-total-time",
													"w": 83,
													"h": 41,
													"x": 637,
													"y": 19,
													"text": "2:39",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 5,
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
														"fillColor": "White",
														"textColor": "White",
														"fontSize": 19,
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 98,
											"x": 0,
											"y": 78,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 2,
											"heightAttr": 0,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "Black",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": null,
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2,
												"focused_bg": "drawapp8/images/common/icons/xhdpi/bg_dark.png",
												"active_bg": "drawapp8/images/common/icons/xhdpi/bg_dark.png",
												"normal_bg": "drawapp8/images/common/icons/xhdpi/bg_dark.png",
												"disable_bg": "drawapp8/images/common/icons/xhdpi/bg_dark.png"
											},
											"children": [
												{
													"type": "ui-h-layout",
													"name": "ui-h-layout",
													"w": 323,
													"h": 98,
													"x": 199,
													"y": 0,
													"text": "",
													"xAttr": 3,
													"yAttr": 0,
													"widthAttr": 0,
													"heightAttr": 2,
													"vLayout": false,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUILayout": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Orange",
														"fillColor": "#358de7",
														"textColor": "Blue",
														"fontSize": 21,
														"fontFamily": "serif"
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
															"type": "ui-button",
															"name": "ui-button",
															"w": 107,
															"h": 98,
															"x": 0,
															"y": 0,
															"text": "",
															"vTextAlign": "middle",
															"hTextAlign": "center",
															"xAttr": 0,
															"yAttr": 0,
															"widthAttr": 0,
															"heightAttr": 2,
															"wMin": 50,
															"hMin": 50,
															"enableAutoScaleFontSize": true,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"isUIButton": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Red",
																"fillColor": "White",
																"textColor": "#E0E0E0",
																"fontSize": 26,
																"fontFamily": "serif",
																"textB": true
															},
															"events": {
																"onClick": "getMusicPlayer().prev(true);",
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 0,
																"focused_bg": "drawapp8/images/common/icons/xhdpi/player_prev_normal.png",
																"active_bg": "drawapp8/images/common/icons/xhdpi/player_prev_pressed.png",
																"normal_bg": "drawapp8/images/common/icons/xhdpi/player_prev_normal.png",
																"disable_bg": "drawapp8/images/common/icons/xhdpi/player_prev_normal.png"
															}
														},
														{
															"type": "ui-button",
															"name": "ui-button-play",
															"w": 107,
															"h": 98,
															"x": 107,
															"y": 0,
															"text": "",
															"vTextAlign": "middle",
															"hTextAlign": "center",
															"xAttr": 0,
															"yAttr": 0,
															"widthAttr": 0,
															"heightAttr": 2,
															"wMin": 50,
															"hMin": 50,
															"enableAutoScaleFontSize": true,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"isUIButton": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Red",
																"fillColor": "White",
																"textColor": "#E0E0E0",
																"fontSize": 26,
																"fontFamily": "serif",
																"textB": true
															},
															"events": {
																"onClick": "getMusicPlayer().playOrPause();",
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 0,
																"focused_bg": "drawapp8/images/common/icons/xhdpi/player_play_normal.png",
																"active_bg": "drawapp8/images/common/icons/xhdpi/player_play_pressed.png",
																"normal_bg": "drawapp8/images/common/icons/xhdpi/player_play_normal.png",
																"disable_bg": "drawapp8/images/common/icons/xhdpi/player_play_normal.png"
															}
														},
														{
															"type": "ui-button",
															"name": "ui-button",
															"w": 107,
															"h": 98,
															"x": 214,
															"y": 0,
															"text": "",
															"vTextAlign": "middle",
															"hTextAlign": "center",
															"xAttr": 0,
															"yAttr": 0,
															"widthAttr": 0,
															"heightAttr": 2,
															"wMin": 50,
															"hMin": 50,
															"enableAutoScaleFontSize": true,
															"xParam": 1,
															"yParam": 1,
															"widthParam": 1,
															"heightParam": 1,
															"isUIButton": true,
															"isUIElement": true,
															"hasChildren": true,
															"style": {
																"lineWidth": 2,
																"lineColor": "Red",
																"fillColor": "White",
																"textColor": "#E0E0E0",
																"fontSize": 26,
																"fontFamily": "serif",
																"textB": true
															},
															"events": {
																"onClick": "getMusicPlayer().next(true);",
																"onOnUpdateTransform": null
															},
															"images": {
																"display": 0,
																"focused_bg": "drawapp8/images/common/icons/xhdpi/player_next_normal.png",
																"active_bg": "drawapp8/images/common/icons/xhdpi/player_next_pressed.png",
																"normal_bg": "drawapp8/images/common/icons/xhdpi/player_next_normal.png",
																"disable_bg": "drawapp8/images/common/icons/xhdpi/player_next_normal.png"
															}
														}
													]
												},
												{
													"type": "ui-button",
													"name": "ui-button",
													"w": 107,
													"h": 98,
													"x": 0,
													"y": 0,
													"text": "",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 4,
													"yAttr": 0,
													"widthAttr": 0,
													"heightAttr": 2,
													"wMin": 50,
													"hMin": 50,
													"enableAutoScaleFontSize": true,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIButton": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"fillColor": "White",
														"textColor": "#E0E0E0",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true
													},
													"events": {
														"onClick": "this.getParent(\"ui-v-collapsable\").collapseOrExpand(\"first\");",
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"focused_bg": "drawapp8/images/common/icons/xhdpi/player_more_normal.png",
														"active_bg": "drawapp8/images/common/icons/xhdpi/player_more_pressed.png",
														"normal_bg": "drawapp8/images/common/icons/xhdpi/player_more_normal.png",
														"disable_bg": "drawapp8/images/common/icons/xhdpi/player_more_normal.png"
													}
												},
												{
													"type": "ui-button",
													"name": "ui-button",
													"w": 107,
													"h": 98,
													"x": 613,
													"y": 0,
													"text": "",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 5,
													"yAttr": 0,
													"widthAttr": 0,
													"heightAttr": 2,
													"wMin": 50,
													"hMin": 50,
													"enableAutoScaleFontSize": true,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIButton": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Red",
														"fillColor": "White",
														"textColor": "#E0E0E0",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true
													},
													"events": {
														"onClick": null,
														"onOnUpdateTransform": null
													},
													"images": {
														"display": 0,
														"focused_bg": "drawapp8/images/common/icons/xhdpi/tab_setting_normal.png",
														"active_bg": "drawapp8/images/common/icons/xhdpi/tab_setting_pressed.png",
														"normal_bg": "drawapp8/images/common/icons/xhdpi/tab_setting_normal.png",
														"disable_bg": "drawapp8/images/common/icons/xhdpi/tab_setting_normal.png"
													}
												}
											]
										}
									]
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-chart",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Chart",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-group",
									"name": "ui-group-pice-chart",
									"w": 720,
									"h": 748,
									"x": 0,
									"y": 109,
									"text": "",
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 0,
									"roundRadius": 4,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"wMin": 600,
									"hMin": 279,
									"isUIGroup": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "White",
										"textColor": "Blue",
										"fontSize": 21,
										"fontFamily": "serif"
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
											"type": "ui-doughnut-chart",
											"name": "ui-doughnut-chart",
											"w": 428,
											"h": 580,
											"x": 0,
											"y": 84,
											"text": "",
											"xAttr": 4,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 1,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.5944444444444444,
											"heightParam": 0.7754010695187166,
											"widthScaleMin": 100,
											"widthScaleMax": 800,
											"heightScaleMin": 100,
											"heightScaleMax": 800,
											"isUIPieChart": true,
											"isUIChart": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Orange",
												"fillColor": "White",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": null
											},
											"images": {
												"display": 0
											}
										},
										{
											"type": "ui-chart-legend",
											"name": "ui-chart-legend",
											"isUIChartLegend": true,
											"w": 259,
											"h": 185,
											"x": 428,
											"y": 282,
											"text": "",
											"hMargin": 4,
											"vMargin": 4,
											"xAttr": 6,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"spacer": 0,
											"offset": 0,
											"wMin": 110,
											"wMax": 2000,
											"hMin": 85.94285714285714,
											"hMax": 2000,
											"itemSize": 100,
											"itemWidth": 1,
											"itemHeight": 48,
											"itemWidthType": 1,
											"itemHeightType": 0,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.3597222222222222,
											"heightParam": 1,
											"cols": 1,
											"rows": 3,
											"widthScaleMin": 100,
											"widthScaleMax": 708,
											"isUIGrid": true,
											"isUIElement": true,
											"hasChildren": true,
											"heightScaleMin": 134,
											"heightScaleMax": 538,
											"isUILayout": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Orange",
												"fillColor": "White",
												"textColor": "Blue",
												"fontSize": 21,
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
													"type": "ui-chart-legend-item",
													"name": "ui-chart-legend-item",
													"w": 251,
													"h": 59,
													"x": 4,
													"y": 4,
													"text": "First",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
													"yAttr": 0,
													"widthAttr": 0,
													"heightAttr": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIChartLegendItem": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Orange",
														"fillColor": "#dcdcdc",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null
													},
													"images": {
														"display": 2
													}
												},
												{
													"type": "ui-chart-legend-item",
													"name": "ui-chart-legend-item",
													"w": 251,
													"h": 59,
													"x": 4,
													"y": 63,
													"text": "Second",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
													"yAttr": 0,
													"widthAttr": 0,
													"heightAttr": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIChartLegendItem": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Orange",
														"fillColor": "#ee6d05",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null
													},
													"images": {
														"display": 2
													}
												},
												{
													"type": "ui-chart-legend-item",
													"name": "ui-chart-legend-item",
													"w": 251,
													"h": 59,
													"x": 4,
													"y": 122,
													"text": "Third",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
													"yAttr": 0,
													"widthAttr": 0,
													"heightAttr": 0,
													"xParam": 1,
													"yParam": 1,
													"widthParam": 1,
													"heightParam": 1,
													"isUIChartLegendItem": true,
													"isUIElement": true,
													"hasChildren": true,
													"style": {
														"lineWidth": 2,
														"lineColor": "Orange",
														"fillColor": "#7ecce9",
														"textColor": "Black",
														"fontSize": 21,
														"fontFamily": "serif"
													},
													"events": {
														"onClick": null
													},
													"images": {
														"display": 2
													}
												}
											]
										},
										{
											"type": "ui-label",
											"name": "ui-label-title",
											"w": 361,
											"h": 56,
											"x": 180,
											"y": 0,
											"text": "Title",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 4,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.5013888888888889,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"widthScaleMin": 160,
											"widthScaleMax": 642,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "White",
												"textColor": "Black",
												"fontSize": 30,
												"fontFamily": "serif",
												"textB": true
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
							"type": "ui-window",
							"name": "win-slide-to-remove",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Slide To Remove",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-list-view",
									"name": "ui-list-view",
									"w": 720,
									"h": 1131,
									"x": 0,
									"y": 109,
									"text": "",
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 3,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 100,
									"hMax": 2000,
									"itemHeight": 113,
									"itemHeightVariable": false,
									"offset": 0,
									"scrollBarOpacity": 0,
									"scrollable": "always",
									"updateStatus": 0,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIListView": true,
									"isUIVScrollView": true,
									"isUIScrollView": true,
									"isUIElement": true,
									"hasChildren": true,
									"isUIList": true,
									"isUILayout": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "#f0f0f0",
										"textColor": "Blue",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableShadow": true,
										"enableGradient": true,
										"shadow": {
											"x": 0,
											"y": 0,
											"blur": 8,
											"color": "Black"
										}
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")",
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
											"h": 113,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"slideToRemove": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2,
												"delete_item": "drawapp8/images/common/icons/xhdpi/list_delete_item.png"
											},
											"children": [
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 105,
													"y": 29,
													"text": "Slide To Remove This Item",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "#888888",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 113,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"slideToRemove": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2,
												"delete_item": "drawapp8/images/common/icons/xhdpi/list_delete_item.png"
											},
											"children": [
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 105,
													"y": 29,
													"text": "Slide To Remove This Item",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "#888888",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 226,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"slideToRemove": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2,
												"delete_item": "drawapp8/images/common/icons/xhdpi/list_delete_item.png"
											},
											"children": [
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 105,
													"y": 29,
													"text": "Slide To Remove This Item",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "#888888",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 720,
											"h": 113,
											"x": 0,
											"y": 339,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"slideToRemove": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#C8C8C8",
												"fillColor": "#f5f5f5",
												"textColor": "#358de7",
												"fontSize": 21,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onLongPress": null,
												"onRemoved": null
											},
											"images": {
												"display": 2,
												"delete_item": "drawapp8/images/common/icons/xhdpi/list_delete_item.png"
											},
											"children": [
												{
													"type": "ui-label",
													"name": "ui-label",
													"w": 450,
													"h": 56,
													"x": 105,
													"y": 29,
													"text": "Slide To Remove This Item",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 0,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "#888888",
														"fontSize": 26,
														"fontFamily": "serif",
														"textB": true,
														"enableGradient": true
													},
													"events": {
														"onClick": "console.log(\"onClick was triggered\")",
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
						},
						{
							"type": "ui-window",
							"name": "win-menu",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Menu",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-button",
									"name": "ui-button",
									"w": 96,
									"h": 96,
									"x": 624,
									"y": 100,
									"text": "",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 5,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"wMin": 50,
									"hMin": 44.8,
									"enableAutoScaleFontSize": true,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIButton": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Red",
										"fillColor": "White",
										"textColor": "#E0E0E0",
										"fontSize": 26,
										"fontFamily": "serif",
										"textB": true,
										"enableGradient": true
									},
									"events": {
										"onClick": "var menu = this.getWindow().findChildByType(\"ui-menu\");\nif(menu) {\n    menu.show(this);\n}",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 0,
										"focused_bg": "drawapp8/images/common/icons/xhdpi/btn_more1.png",
										"active_bg": "drawapp8/images/common/icons/xhdpi/btn_more1_ative.png",
										"normal_bg": "drawapp8/images/common/icons/xhdpi/btn_more1.png",
										"disable_bg": "drawapp8/images/common/icons/xhdpi/btn_more1.png"
									}
								},
								{
									"type": "ui-menu",
									"name": "ui-menu",
									"w": 331,
									"h": 325,
									"x": 341,
									"y": 253,
									"text": "",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"hMargin": 10,
									"vMargin": 10,
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 1,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 1000,
									"hMin": 100,
									"hMax": 1000,
									"itemHeight": 89,
									"itemHeightVariable": false,
									"alwaysOnTop": true,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 0.4597222222222222,
									"heightParam": 1,
									"widthScaleMin": 282,
									"widthScaleMax": 1280,
									"isUIMenu": true,
									"isUIList": true,
									"isUIElement": true,
									"hasChildren": true,
									"isUILayout": true,
									"arrowPosition": 0,
									"roundRadius": 0,
									"style": {
										"lineWidth": 2,
										"lineColor": "#dcdcdc",
										"fillColor": "#666666",
										"textColor": "#efefef",
										"fontSize": 21,
										"fontFamily": "serif"
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 311,
											"h": 101,
											"x": 10,
											"y": 10,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#888888",
												"fillColor": "#383838",
												"textColor": "#40749d",
												"fontSize": 21,
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
													"type": "ui-label",
													"name": "ui-label",
													"w": 311,
													"h": 59,
													"x": 0,
													"y": 21,
													"text": "Red",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 3,
													"yAttr": 3,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Red",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 311,
											"h": 101,
											"x": 10,
											"y": 111,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#888888",
												"fillColor": "#383838",
												"textColor": "#40749d",
												"fontSize": 21,
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
													"type": "ui-label",
													"name": "ui-label",
													"w": 311,
													"h": 59,
													"x": 0,
													"y": 21,
													"text": "Blue",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 3,
													"yAttr": 3,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "Blue",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
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
											"type": "ui-list-item",
											"name": "ui-list-item",
											"w": 311,
											"h": 101,
											"x": 10,
											"y": 213,
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
											"isUIListItem": true,
											"isUIElement": true,
											"hasChildren": true,
											"ANIM_DRAW_LINE": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "#383838",
												"fillColor": "#383838",
												"textColor": "#40749d",
												"fontSize": 21,
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
													"type": "ui-label",
													"name": "ui-label",
													"w": 311,
													"h": 59,
													"x": 0,
													"y": 21,
													"text": "Green",
													"vTextAlign": "middle",
													"hTextAlign": "center",
													"xAttr": 3,
													"yAttr": 3,
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
														"lineColor": "Green",
														"fillColor": "white",
														"textColor": "#62a200",
														"fontSize": 21,
														"fontFamily": "serif",
														"enableGradient": true
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
						},
						{
							"type": "ui-window",
							"name": "win-grid",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif",
								"enableGradient": true
							},
							"events": {
								"onClick": "console.log(\"onClick was triggered\")",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Editable Grid",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 200,
											"h": 109,
											"x": 520,
											"y": 0,
											"text": "Edit",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 5,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 1,
											"wMin": 50,
											"hMin": 38.857142857142854,
											"enableAutoScaleFontSize": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.2777777777777778,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"widthScaleMin": 50,
											"widthScaleMax": 200,
											"heightScaleMin": 42,
											"heightScaleMax": 170,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "#358de7",
												"textColor": "Orange",
												"fontSize": 26,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getWindow().findChildByName(\"ui-grid\", true);\ngrid.triggerUserEditingMode();\n\nthis.setText(grid.isInUserEditingMode()?\"OK\":\"Edit\");",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 0
											}
										}
									]
								},
								{
									"type": "ui-grid",
									"name": "ui-grid",
									"w": 720,
									"h": 542,
									"x": 0,
									"y": 109,
									"text": "",
									"hMargin": 4,
									"vMargin": 4,
									"xAttr": 0,
									"yAttr": 6,
									"widthAttr": 2,
									"heightAttr": 0,
									"spacer": 4,
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
									"cols": 3,
									"rows": 3,
									"scrollDirection": 0,
									"isUIGrid": true,
									"isUIElement": true,
									"hasChildren": true,
									"isUILayout": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Red",
										"fillColor": "#FF9900",
										"textColor": "Black",
										"fontSize": 21,
										"fontFamily": "serif",
										"enableGradient": true
									},
									"events": {
										"onClick": "console.log(\"onClick was triggered\")",
										"onChildDragged": null,
										"onChildDragging": null,
										"onInit": null
									},
									"images": {
										"display": 2,
										"delete_item": "drawapp8/images/common/icons/xhdpi/grid_delete_item.png"
									},
									"children": [
										{
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 233,
											"h": 174,
											"x": 4,
											"y": 4,
											"text": "1000",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 6,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUIButton": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#7ecce9",
												"textColor": "#f5f5f5",
												"fontSize": 26,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent(\"ui-grid\");\nif(grid.isInUserEditingMode()) {\n    if(point.x > 0.5 * this.w && point.y < 0.5 * this.h)\n\tgrid.removeChild(this);\n\tgrid.relayoutChildren(\"default\");\n}",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											}
										},
										{
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 233,
											"h": 174,
											"x": 241,
											"y": 4,
											"text": "1001",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 6,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUIButton": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#FFCC33",
												"textColor": "#f5f5f5",
												"fontSize": 26,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent(\"ui-grid\");\nif(grid.isInUserEditingMode()) {\n    if(point.x > 0.5 * this.w && point.y < 0.5 * this.h)\n\tgrid.removeChild(this);\n\tgrid.relayoutChildren(\"default\");\n}",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											}
										},
										{
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 233,
											"h": 174,
											"x": 478,
											"y": 4,
											"text": "1002",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 6,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUIButton": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#7ecce9",
												"textColor": "#f5f5f5",
												"fontSize": 26,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent(\"ui-grid\");\nif(grid.isInUserEditingMode()) {\n    if(point.x > 0.5 * this.w && point.y < 0.5 * this.h)\n\tgrid.removeChild(this);\n\tgrid.relayoutChildren(\"default\");\n}",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											}
										},
										{
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 233,
											"h": 174,
											"x": 4,
											"y": 182,
											"text": "1003",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 6,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUIButton": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#FFCC33",
												"textColor": "#f5f5f5",
												"fontSize": 26,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent(\"ui-grid\");\nif(grid.isInUserEditingMode()) {\n    if(point.x > 0.5 * this.w && point.y < 0.5 * this.h)\n\tgrid.removeChild(this);\n\tgrid.relayoutChildren(\"default\");\n}",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											}
										},
										{
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 233,
											"h": 174,
											"x": 241,
											"y": 182,
											"text": "1004",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 6,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUIButton": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#7ecce9",
												"textColor": "#f5f5f5",
												"fontSize": 26,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent(\"ui-grid\");\nif(grid.isInUserEditingMode()) {\n    if(point.x > 0.5 * this.w && point.y < 0.5 * this.h)\n\tgrid.removeChild(this);\n\tgrid.relayoutChildren(\"default\");\n}",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											}
										},
										{
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 233,
											"h": 174,
											"x": 478,
											"y": 182,
											"text": "1005",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 6,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUIButton": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#FFCC33",
												"textColor": "#f5f5f5",
												"fontSize": 26,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent(\"ui-grid\");\nif(grid.isInUserEditingMode()) {\n    if(point.x > 0.5 * this.w && point.y < 0.5 * this.h)\n\tgrid.removeChild(this);\n\tgrid.relayoutChildren(\"default\");\n}",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											}
										},
										{
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 233,
											"h": 174,
											"x": 4,
											"y": 360,
											"text": "1006",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 6,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUIButton": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#7ecce9",
												"textColor": "#f5f5f5",
												"fontSize": 26,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent(\"ui-grid\");\nif(grid.isInUserEditingMode()) {\n    if(point.x > 0.5 * this.w && point.y < 0.5 * this.h)\n\tgrid.removeChild(this);\n\tgrid.relayoutChildren(\"default\");\n}",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											}
										},
										{
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 233,
											"h": 174,
											"x": 241,
											"y": 360,
											"text": "1007",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 6,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUIButton": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#FFCC33",
												"textColor": "#f5f5f5",
												"fontSize": 26,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent(\"ui-grid\");\nif(grid.isInUserEditingMode()) {\n    if(point.x > 0.5 * this.w && point.y < 0.5 * this.h)\n\tgrid.removeChild(this);\n\tgrid.relayoutChildren(\"default\");\n}",
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2
											}
										},
										{
											"type": "ui-color-button",
											"name": "ui-color-button",
											"w": 233,
											"h": 174,
											"x": 478,
											"y": 360,
											"text": "1008",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"hMargin": 6,
											"vMargin": 6,
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"roundRadius": 6,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIColorButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"isUIButton": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "rgba(0,0,0,0)",
												"fillColor": "#7ecce9",
												"textColor": "#f5f5f5",
												"fontSize": 26,
												"fontFamily": "serif"
											},
											"events": {
												"onClick": "var grid = this.getParent(\"ui-grid\");\nif(grid.isInUserEditingMode()) {\n    if(point.x > 0.5 * this.w && point.y < 0.5 * this.h)\n\tgrid.removeChild(this);\n\tgrid.relayoutChildren(\"default\");\n}",
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
							"type": "ui-window",
							"name": "win-image-value",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
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
								"onGesture": null,
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
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Image Value",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-group",
									"name": "ui-group",
									"w": 566,
									"h": 343,
									"x": 77,
									"y": 197,
									"text": "",
									"xAttr": 3,
									"yAttr": 2,
									"widthAttr": 0,
									"heightAttr": 0,
									"roundRadius": 4,
									"xParam": 1,
									"yParam": 0.1588709677419355,
									"widthParam": 1,
									"heightParam": 1,
									"isUIGroup": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "rgba(0,0,0,0)",
										"fillColor": "rgba(0,0,0,0)",
										"textColor": "Blue",
										"fontSize": 21,
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
											"type": "ui-button",
											"name": "ui-button",
											"w": 72,
											"h": 87,
											"x": 0,
											"y": 128,
											"text": "-",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 4,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"wMin": 50,
											"hMin": 40,
											"enableAutoScaleFontSize": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "White",
												"textColor": "#E0E0E0",
												"fontSize": 35,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "var win = this.getWindow();\nvar imageValue = win.findChildByName(\"ui-image-value\", true);\nimageValue.dec();\n",
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
											"type": "ui-button",
											"name": "ui-button",
											"w": 85,
											"h": 87,
											"x": 481,
											"y": 128,
											"text": "+",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 5,
											"yAttr": 3,
											"widthAttr": 0,
											"heightAttr": 0,
											"wMin": 50,
											"hMin": 40,
											"enableAutoScaleFontSize": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"isUIButton": true,
											"isUIElement": true,
											"hasChildren": true,
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "White",
												"textColor": "#E0E0E0",
												"fontSize": 35,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "var win = this.getWindow();\nvar imageValue = win.findChildByName(\"ui-image-value\", true);\nimageValue.inc();\n",
												"onOnUpdateTransform": ""
											},
											"images": {
												"display": 2,
												"focused_bg": "drawapp8/images/common/icons/xhdpi/btn_2.9.png",
												"active_bg": "drawapp8/images/common/icons/xhdpi/btn_2_pressed.9.png",
												"normal_bg": "drawapp8/images/common/icons/xhdpi/btn_2.9.png",
												"disable_bg": "drawapp8/images/common/icons/xhdpi/btn_2.9.png"
											}
										},
										{
											"type": "ui-image-value",
											"name": "ui-image-value",
											"w": 323,
											"h": 107,
											"x": 122,
											"y": 118,
											"text": "",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"clickable": false,
											"clickedStyleParam": 0.8,
											"clickedStyleType": 0,
											"value": 3,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.5706713780918727,
											"heightParam": 1,
											"isUIImageValue": true,
											"isUIImage": true,
											"isUIElement": true,
											"hasChildren": true,
											"widthScaleMin": 165,
											"widthScaleMax": 660,
											"style": {
												"lineWidth": 2,
												"lineColor": "Orange",
												"fillColor": "White",
												"textColor": "Blue",
												"fontSize": 21,
												"fontFamily": "sans"
											},
											"events": {
												"onClick": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 0,
												"default_bg": "drawapp8/images/common/images/volume_3.png",
												"option_image_0": "drawapp8/images/common/images/volume_0.png",
												"option_image_1": "drawapp8/images/common/images/volume_1.png",
												"option_image_2": "drawapp8/images/common/images/volume_2.png",
												"option_image_3": "drawapp8/images/common/images/volume_3.png",
												"option_image_4": "drawapp8/images/common/images/volume_4.png",
												"option_image_5": "drawapp8/images/common/images/volume_5.png",
												"option_image_6": "drawapp8/images/common/images/volume_6.png",
												"option_image_7": "drawapp8/images/common/images/volume_7.png",
												"option_image_8": "drawapp8/images/common/images/volume_8.png",
												"option_image_9": "drawapp8/images/common/images/volume_9.png",
												"option_image_10": "drawapp8/images/common/images/volume_10.png"
											}
										}
									]
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-highlight",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
								"fontFamily": "serif"
							},
							"events": {
								"onClick": null,
								"onLoad": null,
								"onUnload": null,
								"onOpen": "",
								"onBeforeOpen": "var config = {};\nconfig.rotationFrom = -0.2;\nconfig.rotationTo = 0.2;\n\nconfig.scaleFrom =  0.9;\nconfig.scaleTo = 1.1;\n\nconfig.opacityFrom =  0.1;\nconfig.opacityTo = 1.0;\nconfig.frequency = 4;\n\nvar image = this.getWindow().findChildByName(\"ui-image\", true);\nimage.setHighlightConfig(config);",
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
									"type": "ui-toolbar",
									"name": "ui-toolbar",
									"w": 720,
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Highlight",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-image",
									"name": "ui-image",
									"w": 199,
									"h": 199,
									"x": 261,
									"y": 293,
									"text": "",
									"xAttr": 3,
									"yAttr": 2,
									"widthAttr": 0,
									"heightAttr": 0,
									"clickable": false,
									"clickedStyleParam": 0.8,
									"clickedStyleType": 0,
									"xParam": 1,
									"yParam": 0.23629032258064517,
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
										"fontSize": 21,
										"fontFamily": "serif"
									},
									"events": {
										"onClick": null,
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 0,
										"default_bg": "images/drawapp8.png"
									}
								}
							]
						},
						{
							"type": "ui-window",
							"name": "win-input",
							"w": 720,
							"h": 1240,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "default",
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Green",
								"fillColor": "White",
								"textColor": "Black",
								"fontSize": 21,
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
								"onGesture": null,
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
									"h": 109,
									"x": 0,
									"y": 0,
									"text": "",
									"xAttr": 0,
									"yAttr": 4,
									"widthAttr": 2,
									"heightAttr": 0,
									"wMin": 100,
									"wMax": 2000,
									"hMin": 50,
									"hMax": 90,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIToolBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"heightScaleMin": 42,
									"heightScaleMax": 170,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#7ecce9",
										"textColor": "Black",
										"fontSize": 21,
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
											"type": "ui-label",
											"name": "ui-label",
											"w": 475,
											"h": 59,
											"x": 123,
											"y": 25,
											"text": "Input",
											"vTextAlign": "middle",
											"hTextAlign": "center",
											"xAttr": 3,
											"yAttr": 3,
											"widthAttr": 1,
											"heightAttr": 0,
											"autoAdjustHeight": false,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 0.6597222222222222,
											"heightParam": 1,
											"isUILabel": true,
											"isUIElement": true,
											"hasChildren": true,
											"textShadow": true,
											"ANIM_OLD_OUT": 1,
											"ANIM_NEW_IN": 3,
											"style": {
												"lineWidth": 2,
												"lineColor": "Green",
												"fillColor": "white",
												"textColor": "#E0E0E0",
												"fontSize": 26,
												"fontFamily": "serif",
												"textB": true,
												"enableGradient": true
											},
											"events": {
												"onClick": "console.log(\"onClick was triggered\")",
												"onChanged": null,
												"onOnUpdateTransform": null
											},
											"images": {
												"display": 2,
												"default_bg": "drawapp8/images/transparent.png"
											}
										},
										{
											"type": "ui-button",
											"name": "ui-button",
											"w": 99,
											"h": 109,
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
											"linkTo": "win://_prev_win_",
											"style": {
												"lineWidth": 2,
												"lineColor": "Red",
												"fillColor": "Orange",
												"textColor": "#E0E0E0",
												"fontSize": 20,
												"fontFamily": "serif",
												"textB": true
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
													"h": 96,
													"x": 10,
													"y": 7,
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
													"heightParam": 0.8807339449541285,
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
														"fontSize": 21,
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
														"default_bg": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
													}
												}
											]
										}
									]
								},
								{
									"type": "ui-edit",
									"name": "ui-edit",
									"w": 387,
									"h": 78,
									"x": 167,
									"y": 171,
									"text": "",
									"vTextAlign": "middle",
									"hTextAlign": "left",
									"hMargin": 10,
									"xAttr": 3,
									"yAttr": 2,
									"widthAttr": 0,
									"heightAttr": 0,
									"leftMargin": 20,
									"rightMargin": 12,
									"wMin": 60,
									"wMax": 1000,
									"hMin": 30,
									"hMax": 80,
									"inputType": "text",
									"xParam": 1,
									"yParam": 0.13790322580645162,
									"widthParam": 1,
									"heightParam": 1,
									"isUIEdit": true,
									"isUIElement": true,
									"hasChildren": true,
									"inputTips": "Your Name",
									"style": {
										"lineWidth": 2,
										"lineColor": "Red",
										"fillColor": "White",
										"textColor": "Black",
										"fontSize": 21,
										"fontFamily": "serif"
									},
									"events": {
										"onClick": null,
										"onChanged": "console.log(\"onChanged was triggered\")",
										"onChanging": null,
										"onFocusIn": null,
										"onFocusOut": null
									},
									"images": {
										"display": 2,
										"default_bg": "drawapp8/images/theme/default/android/xhdpi/edit_bg.9.png"
									}
								},
								{
									"type": "ui-edit",
									"name": "ui-edit",
									"w": 406,
									"h": 87,
									"x": 157,
									"y": 381,
									"text": "",
									"vTextAlign": "middle",
									"hTextAlign": "left",
									"hMargin": 10,
									"xAttr": 3,
									"yAttr": 2,
									"widthAttr": 0,
									"heightAttr": 0,
									"leftMargin": 10,
									"rightMargin": 12,
									"wMin": 60,
									"wMax": 1000,
									"hMin": 30,
									"hMax": 80,
									"inputType": "number",
									"xParam": 1,
									"yParam": 0.307258064516129,
									"widthParam": 1,
									"heightParam": 1,
									"isUIEdit": true,
									"isUIElement": true,
									"hasChildren": true,
									"inputTips": "Your Age",
									"style": {
										"lineWidth": 2,
										"lineColor": "Red",
										"fillColor": "White",
										"textColor": "Black",
										"fontSize": 21,
										"fontFamily": "serif"
									},
									"events": {
										"onClick": null,
										"onChanged": "console.log(\"onChanged was triggered\")",
										"onChanging": null,
										"onFocusIn": null,
										"onFocusOut": null
									},
									"images": {
										"display": 2,
										"default_bg": "drawapp8/images/theme/default/android/xhdpi/line_edit_bg.9.png",
										"focused_bg": "drawapp8/images/theme/default/android/xhdpi/line_edit_bg_focused.9.png"
									}
								}
							]
						},
						{
							"type": "ui-dialog",
							"name": "dialog1",
							"w": 720,
							"h": 400,
							"x": 0,
							"y": 420,
							"text": "",
							"hMargin": 8,
							"vMargin": 8,
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
								"fillColor": "white",
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
								"display": 3,
								"default_bg": "drawapp8/images/theme/default/android/dialog.9.png"
							},
							"children": [
								{
									"type": "ui-label",
									"name": "ui-label",
									"w": 704,
									"h": 40,
									"x": 8,
									"y": 130,
									"text": "Are sure quit without save?",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 3,
									"yAttr": 2,
									"widthAttr": 2,
									"heightAttr": 0,
									"xParam": 1,
									"yParam": 0.3385416666666667,
									"widthParam": 1,
									"heightParam": 1,
									"autoAdjustHeight": false,
									"isUILabel": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "white",
										"textColor": "#F8F8F8",
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
									"type": "ui-button",
									"name": "ui-button",
									"w": 204,
									"h": 67,
									"x": 106,
									"y": 278,
									"text": "Yes",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 2,
									"yAttr": 2,
									"widthAttr": 1,
									"heightAttr": 0,
									"wMin": 50,
									"hMin": 50,
									"enableAutoScaleFontSize": true,
									"xParam": 0.15056818181818182,
									"yParam": 0.7239583333333334,
									"widthParam": 0.2897727272727273,
									"heightParam": 1,
									"isUIButton": true,
									"isUIElement": true,
									"hasChildren": true,
									"widthScaleMin": 88,
									"widthScaleMax": 352,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "white",
										"textColor": "#F8F8F8",
										"fontSize": 32,
										"fontFamily": "serif"
									},
									"events": {
										"onClick": "var retCode = 0;\nthis.closeWindow(retCode);",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 2,
										"focused_bg": "drawapp8/images/theme/default/android/button_focused.9.png",
										"active_bg": "drawapp8/images/theme/default/android/button_active.9.png",
										"normal_bg": "drawapp8/images/theme/default/android/button_normal.9.png",
										"disable_bg": "drawapp8/images/theme/default/android/button_disable.9.png"
									}
								},
								{
									"type": "ui-button",
									"name": "ui-button",
									"w": 204,
									"h": 67,
									"x": 407,
									"y": 274,
									"text": "No",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 2,
									"yAttr": 2,
									"widthAttr": 1,
									"heightAttr": 0,
									"wMin": 50,
									"hMin": 50,
									"enableAutoScaleFontSize": true,
									"xParam": 0.578125,
									"yParam": 0.7135416666666666,
									"widthParam": 0.2897727272727273,
									"heightParam": 1,
									"isUIButton": true,
									"isUIElement": true,
									"hasChildren": true,
									"widthScaleMin": 88,
									"widthScaleMax": 352,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "white",
										"textColor": "#F8F8F8",
										"fontSize": 32,
										"fontFamily": "serif"
									},
									"events": {
										"onClick": "var retCode = 0;\nthis.closeWindow(retCode);",
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 2,
										"focused_bg": "drawapp8/images/theme/default/android/button_focused.9.png",
										"active_bg": "drawapp8/images/theme/default/android/button_active.9.png",
										"normal_bg": "drawapp8/images/theme/default/android/button_normal.9.png",
										"disable_bg": "drawapp8/images/theme/default/android/button_disable.9.png"
									}
								}
							]
						},
						{
							"type": "ui-dialog",
							"name": "dialog2",
							"w": 720,
							"h": 400,
							"x": 0,
							"y": 420,
							"text": "",
							"hMargin": 8,
							"vMargin": 8,
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
								"fillColor": "white",
								"textColor": "Black",
								"fontSize": 24,
								"fontFamily": "serif",
								"enableGradient": true
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
								"display": 2,
								"default_bg": "drawapp8/images/common/icons/dialog_bg_light.9.png"
							},
							"children": [
								{
									"type": "ui-label",
									"name": "ui-label",
									"w": 704,
									"h": 40,
									"x": 8,
									"y": 130,
									"text": "Are sure quit without save?",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 3,
									"yAttr": 2,
									"widthAttr": 2,
									"heightAttr": 0,
									"autoAdjustHeight": false,
									"xParam": 1,
									"yParam": 0.3385416666666667,
									"widthParam": 1,
									"heightParam": 1,
									"isUILabel": true,
									"isUIElement": true,
									"hasChildren": true,
									"ANIM_OLD_OUT": 1,
									"ANIM_NEW_IN": 3,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "white",
										"textColor": "#212121",
										"fontSize": 24,
										"fontFamily": "serif",
										"enableGradient": true
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
									"w": 211,
									"h": 80,
									"x": 95,
									"y": 256,
									"text": "Yes",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 2,
									"yAttr": 2,
									"widthAttr": 1,
									"heightAttr": 0,
									"wMin": 50,
									"hMin": 50,
									"enableAutoScaleFontSize": true,
									"xParam": 0.13494318181818182,
									"yParam": 0.6666666666666666,
									"widthParam": 0.2997159090909091,
									"heightParam": 1,
									"isUIButton": true,
									"isUIElement": true,
									"hasChildren": true,
									"widthScaleMin": 88,
									"widthScaleMax": 352,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#dcdcdc",
										"textColor": "#383838",
										"fontSize": 32,
										"fontFamily": "serif"
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
									"type": "ui-button",
									"name": "ui-button",
									"w": 211,
									"h": 80,
									"x": 412,
									"y": 256,
									"text": "No",
									"vTextAlign": "middle",
									"hTextAlign": "center",
									"xAttr": 2,
									"yAttr": 2,
									"widthAttr": 1,
									"heightAttr": 0,
									"wMin": 50,
									"hMin": 50,
									"enableAutoScaleFontSize": true,
									"xParam": 0.5852272727272727,
									"yParam": 0.6666666666666666,
									"widthParam": 0.2997159090909091,
									"heightParam": 1,
									"isUIButton": true,
									"isUIElement": true,
									"hasChildren": true,
									"widthScaleMin": 88,
									"widthScaleMax": 352,
									"style": {
										"lineWidth": 2,
										"lineColor": "Green",
										"fillColor": "#dcdcdc",
										"textColor": "#383838",
										"fontSize": 32,
										"fontFamily": "serif"
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
									"type": "ui-color-bar",
									"name": "ui-color-bar",
									"w": 570,
									"h": 64,
									"x": 75,
									"y": 213,
									"text": "",
									"xAttr": 3,
									"yAttr": 2,
									"widthAttr": 1,
									"heightAttr": 0,
									"barPosition": 0,
									"barDierction": 0,
									"position": 0,
									"strColors": "#cccccc,#cccccc,#f5f5f5,#f5f5f5",
									"xParam": 1,
									"yParam": 0.5546875,
									"widthParam": 0.8096590909090909,
									"heightParam": 1,
									"isUIColorBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"isUIButton": false,
									"widthScaleMin": 252,
									"widthScaleMax": 1010,
									"style": {
										"lineWidth": 2,
										"lineColor": "#dcdcdc",
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
								},
								{
									"type": "ui-color-bar",
									"name": "ui-color-bar",
									"w": 87,
									"h": 93,
									"x": 317,
									"y": 268,
									"text": "",
									"xAttr": 3,
									"yAttr": 2,
									"widthAttr": 0,
									"heightAttr": 0,
									"barPosition": 0,
									"barDierction": 0,
									"position": 0,
									"strColors": "#cccccc,#cccccc,#f5f5f5,#f5f5f5",
									"xParam": 1,
									"yParam": 0.6979166666666666,
									"widthParam": 1,
									"heightParam": 1,
									"isUIColorBar": true,
									"isUIElement": true,
									"hasChildren": true,
									"isUIButton": false,
									"barDirection": 1,
									"style": {
										"lineWidth": 2,
										"lineColor": "#dcdcdc",
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
			"fixedY": 206,
			"isUIButton": true,
			"isUIElement": true,
			"hasChildren": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Black",
				"fontSize": 16,
				"fontFamily": "serif",
				"enableGradient": true
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
			"fixedX": 278.3333333333333,
			"fixedY": 206,
			"isUIButton": true,
			"isUIElement": true,
			"hasChildren": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Black",
				"fontSize": 16,
				"fontFamily": "serif",
				"enableGradient": true
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
			"text": "main-win(1/32)",
			"vTextAlign": "middle",
			"hTextAlign": "center",
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
			"fixedY": 175,
			"isUIButton": true,
			"isUIElement": true,
			"hasChildren": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Orange",
				"fontSize": 18,
				"fontFamily": "serif",
				"enableGradient": true
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
			"fixedY": 206,
			"isUIButton": true,
			"isUIElement": true,
			"hasChildren": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Black",
				"fontSize": 16,
				"fontFamily": "serif",
				"enableGradient": true
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
			"fixedX": 278.3333333333333,
			"fixedY": 206,
			"isUIButton": true,
			"isUIElement": true,
			"hasChildren": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Black",
				"fontSize": 16,
				"fontFamily": "serif",
				"enableGradient": true
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
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/action_bar_bg_1.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/action_bar_bg_1.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/action_bar_bg_1.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/action_bar_bg_1.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/action_bar_bg_1.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/action_bar_bg_1.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/action_bar_bg_1.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/action_bar_bg_1.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/scrollbar.png",
			"fileurl": "drawapp8/images/theme/default/android/scrollbar.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/arrow.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/arrow.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/arrow.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/arrow.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/arrow.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/arrow.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/arrow.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/arrow.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/transparent.png",
			"fileurl": "drawapp8/images/transparent.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/action_bar_back.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/action_bar_back.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/action_bar_back.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/action_bar_back.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/action_bar_back.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/action_bar_back.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/action_bar_back.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/action_bar_back.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/images/demos/intro1.jpg",
			"fileurl": "images/demos/intro1.jpg"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/images/demos/intro2.jpg",
			"fileurl": "images/demos/intro2.jpg"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/images/demos/intro3.jpg",
			"fileurl": "images/demos/intro3.jpg"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/images/demos/intro4.jpg",
			"fileurl": "images/demos/intro4.jpg"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/message.png",
			"fileurl": "drawapp8/images/common/message.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/switch.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/switch.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/switch.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/switch.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/switch.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/switch.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/switch.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/switch.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mute.png",
			"fileurl": "drawapp8/images/theme/default/android/mute.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/slider_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/slider_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/slider_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/slider_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/slider_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/slider_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/slider_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/slider_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/slider_fg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/slider_fg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/slider_fg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/slider_fg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/slider_fg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/slider_fg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/slider_fg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/slider_fg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/slider_drag.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/slider_drag.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/slider_drag.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/slider_drag.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/slider_drag.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/slider_drag.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/slider_drag.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/slider_drag.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/sound.png",
			"fileurl": "drawapp8/images/theme/default/android/sound.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/listitem_checked.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/listitem_checked.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/listitem_checked.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/listitem_checked.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/listitem_checked.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/listitem_checked.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/listitem_checked.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/listitem_checked.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/listitem_unchecked.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/listitem_unchecked.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/listitem_unchecked.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/listitem_unchecked.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/listitem_unchecked.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/listitem_unchecked.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/listitem_unchecked.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/listitem_unchecked.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/sort_by_time.png",
			"fileurl": "drawapp8/images/theme/default/android/sort_by_time.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/add.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/add.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/add.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/add.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/add.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/add.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/add.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/add.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/button_blue.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/button_blue.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/button_blue.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/button_blue.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/button_blue.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/button_blue.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/button_blue.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/button_blue.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/button_blue_active.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/button_blue_active.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/button_blue_active.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/button_blue_active.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/button_blue_active.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/button_blue_active.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/button_blue_active.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/button_blue_active.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/btn_left_on.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/btn_left_on.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/btn_left_on.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/btn_left_on.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/btn_left_on.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/btn_left_on.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/btn_left_on.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/btn_left_on.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/btn_left_off.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/btn_left_off.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/btn_left_off.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/btn_left_off.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/btn_left_off.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/btn_left_off.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/btn_left_off.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/btn_left_off.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/btn_mid_on.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/btn_mid_on.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/btn_mid_on.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/btn_mid_on.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/btn_mid_on.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/btn_mid_on.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/btn_mid_on.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/btn_mid_on.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/btn_mid_off.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/btn_mid_off.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/btn_mid_off.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/btn_mid_off.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/btn_mid_off.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/btn_mid_off.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/btn_mid_off.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/btn_mid_off.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/btn_right_on.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/btn_right_on.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/btn_right_on.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/btn_right_on.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/btn_right_on.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/btn_right_on.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/btn_right_on.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/btn_right_on.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/btn_right_off.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/btn_right_off.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/btn_right_off.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/btn_right_off.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/btn_right_off.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/btn_right_off.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/btn_right_off.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/btn_right_off.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/progress_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/progress_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/progress_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/progress_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/progress_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/progress_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/progress_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/progress_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/progress_fg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/progress_fg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/progress_fg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/progress_fg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/progress_fg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/progress_fg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/progress_fg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/progress_fg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/wait_bar.png",
			"fileurl": "drawapp8/images/theme/default/android/wait_bar.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/wait_box.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/wait_box.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/wait_box.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/wait_box.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/wait_box.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/wait_box.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/wait_box.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/wait_box.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/default_icon.png",
			"fileurl": "drawapp8/images/common/default_icon.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/default_image.png",
			"fileurl": "drawapp8/images/common/default_image.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mledit_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/mledit_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mledit_bg_focused.9.png",
			"fileurl": "drawapp8/images/theme/default/android/mledit_bg_focused.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/radiobox_on.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/radiobox_on.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/radiobox_on.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/radiobox_on.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/radiobox_on.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/radiobox_on.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/radiobox_on.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/radiobox_on.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/radiobox_on_active.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/radiobox_on_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/radiobox_on_active.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/radiobox_on_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/radiobox_on_active.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/radiobox_on_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/radiobox_on_active.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/radiobox_on_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/radiobox_on_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/radiobox_on_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/radiobox_on_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/radiobox_on_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/radiobox_on_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/radiobox_on_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/radiobox_on_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/radiobox_on_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/radiobox_off.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/radiobox_off.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/radiobox_off.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/radiobox_off.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/radiobox_off.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/radiobox_off.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/radiobox_off.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/radiobox_off.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/radiobox_off_active.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/radiobox_off_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/radiobox_off_active.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/radiobox_off_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/radiobox_off_active.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/radiobox_off_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/radiobox_off_active.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/radiobox_off_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/radiobox_off_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/radiobox_off_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/radiobox_off_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/radiobox_off_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/radiobox_off_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/radiobox_off_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/radiobox_off_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/radiobox_off_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/checkbox_on.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/checkbox_on.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/checkbox_on.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/checkbox_on.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/checkbox_on.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/checkbox_on.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/checkbox_on.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/checkbox_on.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/checkbox_on_active.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/checkbox_on_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/checkbox_on_active.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/checkbox_on_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/checkbox_on_active.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/checkbox_on_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/checkbox_on_active.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/checkbox_on_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/checkbox_on_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/checkbox_on_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/checkbox_on_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/checkbox_on_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/checkbox_on_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/checkbox_on_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/checkbox_on_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/checkbox_on_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/checkbox_off.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/checkbox_off.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/checkbox_off.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/checkbox_off.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/checkbox_off.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/checkbox_off.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/checkbox_off.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/checkbox_off.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/checkbox_off_active.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/checkbox_off_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/checkbox_off_active.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/checkbox_off_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/checkbox_off_active.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/checkbox_off_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/checkbox_off_active.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/checkbox_off_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/checkbox_off_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/checkbox_off_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/checkbox_off_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/checkbox_off_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/checkbox_off_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/checkbox_off_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/checkbox_off_focused.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/checkbox_off_focused.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/tab_item_1_bg_normal.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/tab_item_1_bg_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/tab_item_1_bg_normal.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/tab_item_1_bg_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/tab_item_1_bg_normal.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/tab_item_1_bg_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/tab_item_1_bg_normal.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/tab_item_1_bg_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/tab_item_1_bg_active.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/tab_item_1_bg_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/tab_item_1_bg_active.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/tab_item_1_bg_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/tab_item_1_bg_active.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/tab_item_1_bg_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/tab_item_1_bg_active.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/tab_item_1_bg_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/tab_item_1_bg_current_active.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/tab_item_1_bg_current_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/tab_item_1_bg_current_active.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/tab_item_1_bg_current_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/tab_item_1_bg_current_active.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/tab_item_1_bg_current_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/tab_item_1_bg_current_active.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/tab_item_1_bg_current_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/tab_item_1_bg_current_normal.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/tab_item_1_bg_current_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/tab_item_1_bg_current_normal.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/tab_item_1_bg_current_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/tab_item_1_bg_current_normal.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/tab_item_1_bg_current_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/tab_item_1_bg_current_normal.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/tab_item_1_bg_current_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/like_red.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/like_red.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/like_red.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/like_red.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/like_red.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/like_red.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/like_red.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/like_red.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/like_green.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/like_green.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/like_green.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/like_green.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/like_green.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/like_green.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/like_green.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/like_green.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/like_blue.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/like_blue.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/like_blue.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/like_blue.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/like_blue.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/like_blue.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/like_blue.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/like_blue.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/like_red_active.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/like_red_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/like_red_active.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/like_red_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/like_red_active.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/like_red_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/like_red_active.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/like_red_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/like_green_active.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/like_green_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/like_green_active.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/like_green_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/like_green_active.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/like_green_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/like_green_active.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/like_green_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/like_blue_active.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/like_blue_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/like_blue_active.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/like_blue_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/like_blue_active.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/like_blue_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/like_blue_active.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/like_blue_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/tab_item_2_bg_normal.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/tab_item_2_bg_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/tab_item_2_bg_normal.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/tab_item_2_bg_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/tab_item_2_bg_normal.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/tab_item_2_bg_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/tab_item_2_bg_normal.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/tab_item_2_bg_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/tab_item_2_bg_active.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/tab_item_2_bg_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/tab_item_2_bg_active.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/tab_item_2_bg_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/tab_item_2_bg_active.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/tab_item_2_bg_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/tab_item_2_bg_active.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/tab_item_2_bg_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/tab_item_2_bg_current_active.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/tab_item_2_bg_current_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/tab_item_2_bg_current_active.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/tab_item_2_bg_current_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/tab_item_2_bg_current_active.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/tab_item_2_bg_current_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/tab_item_2_bg_current_active.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/tab_item_2_bg_current_active.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/tab_item_2_bg_current_normal.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/tab_item_2_bg_current_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/tab_item_2_bg_current_normal.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/tab_item_2_bg_current_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/tab_item_2_bg_current_normal.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/tab_item_2_bg_current_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/tab_item_2_bg_current_normal.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/tab_item_2_bg_current_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/update.png",
			"fileurl": "drawapp8/images/theme/default/android/update.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/girl.png",
			"fileurl": "drawapp8/images/girl.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/button_focused.9.png",
			"fileurl": "drawapp8/images/theme/default/android/button_focused.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/button_active.9.png",
			"fileurl": "drawapp8/images/theme/default/android/button_active.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/button_normal.9.png",
			"fileurl": "drawapp8/images/theme/default/android/button_normal.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/button_disable.9.png",
			"fileurl": "drawapp8/images/theme/default/android/button_disable.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/spinning_wheel_bg_center.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/spinning_wheel_bg_center.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/spinning_wheel_bg_center.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/spinning_wheel_bg_center.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/spinning_wheel_bg_center.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/spinning_wheel_bg_center.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/spinning_wheel_bg_center.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/spinning_wheel_bg_center.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/clockgoog_dial.png",
			"fileurl": "drawapp8/images/common/images/clockgoog_dial.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/clockgoog_hour.png",
			"fileurl": "drawapp8/images/common/images/clockgoog_hour.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/clockgoog_minute.png",
			"fileurl": "drawapp8/images/common/images/clockgoog_minute.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/clockgoog_seconds.png",
			"fileurl": "drawapp8/images/common/images/clockgoog_seconds.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/compass_bg.png",
			"fileurl": "drawapp8/images/common/images/compass_bg.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/compass_pointer.png",
			"fileurl": "drawapp8/images/common/images/compass_pointer.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/bg_gray.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/bg_gray.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/bg_gray.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/bg_gray.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/bg_gray.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/bg_gray.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/bg_gray.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/bg_gray.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/bg_dark.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/bg_dark.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/bg_dark.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/bg_dark.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/bg_dark.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/bg_dark.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/bg_dark.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/bg_dark.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/player_prev_normal.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/player_prev_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/player_prev_normal.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/player_prev_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/player_prev_normal.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/player_prev_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/player_prev_normal.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/player_prev_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/player_prev_pressed.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/player_prev_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/player_prev_pressed.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/player_prev_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/player_prev_pressed.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/player_prev_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/player_prev_pressed.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/player_prev_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/player_play_normal.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/player_play_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/player_play_normal.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/player_play_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/player_play_normal.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/player_play_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/player_play_normal.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/player_play_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/player_play_pressed.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/player_play_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/player_play_pressed.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/player_play_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/player_play_pressed.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/player_play_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/player_play_pressed.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/player_play_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/player_next_normal.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/player_next_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/player_next_normal.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/player_next_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/player_next_normal.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/player_next_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/player_next_normal.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/player_next_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/player_next_pressed.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/player_next_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/player_next_pressed.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/player_next_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/player_next_pressed.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/player_next_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/player_next_pressed.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/player_next_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/player_more_normal.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/player_more_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/player_more_normal.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/player_more_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/player_more_normal.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/player_more_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/player_more_normal.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/player_more_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/player_more_pressed.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/player_more_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/player_more_pressed.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/player_more_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/player_more_pressed.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/player_more_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/player_more_pressed.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/player_more_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/tab_setting_normal.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/tab_setting_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/tab_setting_normal.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/tab_setting_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/tab_setting_normal.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/tab_setting_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/tab_setting_normal.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/tab_setting_normal.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/tab_setting_pressed.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/tab_setting_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/tab_setting_pressed.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/tab_setting_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/tab_setting_pressed.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/tab_setting_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/tab_setting_pressed.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/tab_setting_pressed.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/list_delete_item.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/list_delete_item.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/list_delete_item.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/list_delete_item.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/list_delete_item.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/list_delete_item.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/list_delete_item.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/list_delete_item.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/btn_more1.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/btn_more1.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/btn_more1.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/btn_more1.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/btn_more1.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/btn_more1.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/btn_more1.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/btn_more1.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/btn_more1_ative.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/btn_more1_ative.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/btn_more1_ative.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/btn_more1_ative.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/btn_more1_ative.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/btn_more1_ative.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/btn_more1_ative.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/btn_more1_ative.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/grid_delete_item.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/grid_delete_item.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/grid_delete_item.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/grid_delete_item.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/grid_delete_item.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/grid_delete_item.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/grid_delete_item.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/grid_delete_item.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/button_red.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/button_red.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/button_red.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/button_red.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/button_red.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/button_red.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/button_red.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/button_red.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/button_red_active.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/button_red_active.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/button_red_active.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/button_red_active.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/button_red_active.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/button_red_active.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/button_red_active.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/button_red_active.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/btn_2.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/btn_2.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/btn_2.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/btn_2.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/btn_2.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/btn_2.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/btn_2.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/btn_2.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xhdpi/btn_2_pressed.9.png",
			"fileurl": "drawapp8/images/common/icons/xhdpi/btn_2_pressed.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/mdpi/btn_2_pressed.9.png",
			"fileurl": "drawapp8/images/common/icons/mdpi/btn_2_pressed.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/hdpi/btn_2_pressed.9.png",
			"fileurl": "drawapp8/images/common/icons/hdpi/btn_2_pressed.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/xxhdpi/btn_2_pressed.9.png",
			"fileurl": "drawapp8/images/common/icons/xxhdpi/btn_2_pressed.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/volume_3.png",
			"fileurl": "drawapp8/images/common/images/volume_3.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/volume_0.png",
			"fileurl": "drawapp8/images/common/images/volume_0.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/volume_1.png",
			"fileurl": "drawapp8/images/common/images/volume_1.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/volume_2.png",
			"fileurl": "drawapp8/images/common/images/volume_2.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/volume_4.png",
			"fileurl": "drawapp8/images/common/images/volume_4.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/volume_5.png",
			"fileurl": "drawapp8/images/common/images/volume_5.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/volume_6.png",
			"fileurl": "drawapp8/images/common/images/volume_6.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/volume_7.png",
			"fileurl": "drawapp8/images/common/images/volume_7.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/volume_8.png",
			"fileurl": "drawapp8/images/common/images/volume_8.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/volume_9.png",
			"fileurl": "drawapp8/images/common/images/volume_9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/images/volume_10.png",
			"fileurl": "drawapp8/images/common/images/volume_10.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/images/drawapp8.png",
			"fileurl": "images/drawapp8.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/edit_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/edit_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/edit_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/edit_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/edit_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/edit_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/edit_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/edit_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/line_edit_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/line_edit_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/line_edit_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/line_edit_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/line_edit_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/line_edit_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/line_edit_bg.9.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/line_edit_bg.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xhdpi/line_edit_bg_focused.9.png",
			"fileurl": "drawapp8/images/theme/default/android/xhdpi/line_edit_bg_focused.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/mdpi/line_edit_bg_focused.9.png",
			"fileurl": "drawapp8/images/theme/default/android/mdpi/line_edit_bg_focused.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/hdpi/line_edit_bg_focused.9.png",
			"fileurl": "drawapp8/images/theme/default/android/hdpi/line_edit_bg_focused.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/xxhdpi/line_edit_bg_focused.9.png",
			"fileurl": "drawapp8/images/theme/default/android/xxhdpi/line_edit_bg_focused.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/theme/default/android/dialog.9.png",
			"fileurl": "drawapp8/images/theme/default/android/dialog.9.png"
		},
		{
			"weburl": "http://gamebuilder.sinaapp.com/drawapp8/images/common/icons/dialog_bg_light.9.png",
			"fileurl": "drawapp8/images/common/icons/dialog_bg_light.9.png"
		}
	]
};