
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/skins/BoardItemSkin.exml'] = window.BoardItemSkin = (function (_super) {
	__extends(BoardItemSkin, _super);
	function BoardItemSkin() {
		_super.call(this);
		this.skinParts = ["icon"];
		
		this.height = 64;
		this.width = 64;
		this.elementsContent = [this.icon_i()];
	}
	var _proto = BoardItemSkin.prototype;

	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.height = 64;
		t.source = "1_png";
		t.width = 64;
		t.x = 32;
		t.y = 32;
		return t;
	};
	return BoardItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GameSkin.exml'] = window.GameSkin = (function (_super) {
	__extends(GameSkin, _super);
	function GameSkin() {
		_super.call(this);
		this.skinParts = ["currentLevelLabel","currentScoreLabel","timeLimitLabel","rect","group"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.currentLevelLabel_i(),this.currentScoreLabel_i(),this.timeLimitLabel_i(),this.rect_i(),this.group_i()];
		
		eui.Binding.$bindProperties(this, ["rect"],[0],this.group,"mask");
	}
	var _proto = GameSkin.prototype;

	_proto.currentLevelLabel_i = function () {
		var t = new eui.Label();
		this.currentLevelLabel = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "当前关卡：1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = -403;
		t.width = 576;
		return t;
	};
	_proto.currentScoreLabel_i = function () {
		var t = new eui.Label();
		this.currentScoreLabel = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "当前积分：0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = -363;
		t.width = 576;
		return t;
	};
	_proto.timeLimitLabel_i = function () {
		var t = new eui.Label();
		this.timeLimitLabel = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "05:00";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = -323;
		t.width = 576;
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.enabled = false;
		t.height = 576;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 600;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 576;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 576;
		return t;
	};
	return GameSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ProgressBarSkin.exml'] = window.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.elementsContent = [this._Image1_i(),this.track_i(),this.thumb_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "loading_track_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Rect();
		this.track = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "loading_thumb_pb_png";
		t.percentWidth = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/skins/LoadingSkin.exml'] = window.LoadingSkin = (function (_super) {
	__extends(LoadingSkin, _super);
	function LoadingSkin() {
		_super.call(this);
		this.skinParts = ["progressLabel","progressBar"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LoadingSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 50;
		t.left = 50;
		t.right = 50;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.progressLabel_i(),this.progressBar_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.progressLabel_i = function () {
		var t = new eui.Label();
		this.progressLabel = t;
		t.size = 24;
		t.text = "0%";
		t.textColor = 0x000000;
		return t;
	};
	_proto.progressBar_i = function () {
		var t = new eui.ProgressBar();
		this.progressBar = t;
		t.skinName = "ProgressBarSkin";
		t.percentWidth = 100;
		return t;
	};
	return LoadingSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StartButtonSkin.exml'] = window.StartButtonSkin = (function (_super) {
	__extends(StartButtonSkin, _super);
	function StartButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("labelDisplay","textColor",0xFFFFFF)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","login_startbtn_down_png"),
					new eui.SetProperty("labelDisplay","textColor",0xCCCCCC)
				])
		];
	}
	var _proto = StartButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "login_startbtn_up_png";
		t.width = 200;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.size = 28;
		t.verticalCenter = 0;
		return t;
	};
	return StartButtonSkin;
})(eui.Skin);generateEUI.paths['resource/skins/LoginSkin.exml'] = window.LoginSkin = (function (_super) {
	__extends(LoginSkin, _super);
	function LoginSkin() {
		_super.call(this);
		this.skinParts = ["versionLabel","currentLevelLabel","resetButton","startButton"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.versionLabel_i(),this.currentLevelLabel_i(),this.resetButton_i(),this.startButton_i()];
	}
	var _proto = LoginSkin.prototype;

	_proto.versionLabel_i = function () {
		var t = new eui.Label();
		this.versionLabel = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "v1.0.0";
		t.textColor = 0x000000;
		t.verticalCenter = -60;
		return t;
	};
	_proto.currentLevelLabel_i = function () {
		var t = new eui.Label();
		this.currentLevelLabel = t;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "当前关卡：level";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.resetButton_i = function () {
		var t = new eui.Button();
		this.resetButton = t;
		t.horizontalCenter = 0;
		t.label = "重置";
		t.skinName = "StartButtonSkin";
		t.verticalCenter = 80;
		t.visible = true;
		t.x = 230;
		t.y = 628;
		return t;
	};
	_proto.startButton_i = function () {
		var t = new eui.Button();
		this.startButton = t;
		t.horizontalCenter = 0;
		t.label = "开始游戏";
		t.skinName = "StartButtonSkin";
		t.verticalCenter = 80;
		t.visible = true;
		return t;
	};
	return LoginSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ResultSkin.exml'] = window.ResultSkin = (function (_super) {
	__extends(ResultSkin, _super);
	function ResultSkin() {
		_super.call(this);
		this.skinParts = ["resultLabel","exitButton","restartButton","nextButton"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.resultLabel_i(),this.exitButton_i(),this.restartButton_i(),this.nextButton_i()];
	}
	var _proto = ResultSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.resultLabel_i = function () {
		var t = new eui.Label();
		this.resultLabel = t;
		t.horizontalCenter = 0;
		t.text = "恭喜您通关第1关";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = -60;
		return t;
	};
	_proto.exitButton_i = function () {
		var t = new eui.Button();
		this.exitButton = t;
		t.horizontalCenter = 0;
		t.label = "退出";
		t.skinName = "StartButtonSkin";
		t.verticalCenter = 20;
		t.visible = true;
		t.x = 259;
		t.y = 568;
		return t;
	};
	_proto.restartButton_i = function () {
		var t = new eui.Button();
		this.restartButton = t;
		t.horizontalCenter = 0;
		t.label = "重新开始";
		t.skinName = "StartButtonSkin";
		t.verticalCenter = 20;
		t.visible = true;
		t.x = 259;
		t.y = 568;
		return t;
	};
	_proto.nextButton_i = function () {
		var t = new eui.Button();
		this.nextButton = t;
		t.horizontalCenter = 0;
		t.label = "下一关";
		t.skinName = "StartButtonSkin";
		t.verticalCenter = 20;
		t.visible = true;
		return t;
	};
	return ResultSkin;
})(eui.Skin);