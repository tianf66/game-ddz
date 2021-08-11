window.skins=window.skins||{};
window.ddz=window.ddz||{};
window.pk=window.pk||{};
window.two=window.two||{};
window.bj=window.bj||{};
                __extends=this&&this.__extends||function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonScale2Skin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","two_pk.Card":"resource/skins/games/pk/Card.exml","two.bj.Stand":"resource/skins/games/bj/StandSkin.exml","two.bj.CardHeap":"resource/skins/games/bj/CardHeapSkin.exml","two.bj.ManorStand":"resource/skins/games/bj/ManorStandSkin.exml","two.RoomSelectView":"resource/skins/RoomSelectViewSkin.exml","two.MatchingView":"resource/skins/MatchingViewSkin.exml","two.RoomSelectItem":"resource/eui_skins/RoomSelectItemSkin.exml","two.AudiencePanel":"resource/skins/AudiencePanelSkin.exml","two.CardsLeftPanel":"resource/skins/CardsLeftPanelSkin.exml","two.bj.WinTip":"resource/skins/games/bj/WinTipSkin.exml","two.ClockPanel":"resource/skins/room/ClockPanelSkin.exml","two.ddz.ExitConfirm":"resource/skins/games/ddz/ExitConfirmSkin.exml","two.MatchingTable":"resource/eui_skins/MatchingTableSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonScale2Skin.exml'] = window.ButtonScale2Skin = (function (_super) {
	__extends(ButtonScale2Skin, _super);
	function ButtonScale2Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay"];
		
		this.elementsContent = [this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("iconDisplay","scaleX",1.1),
					new eui.SetProperty("iconDisplay","scaleY",1.1),
					new eui.SetProperty("iconDisplay","horizontalCenter",0),
					new eui.SetProperty("iconDisplay","verticalCenter",0)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButtonScale2Skin.prototype;

	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.source = "hall_json.btn_green_1_png";
		t.verticalCenter = 0;
		return t;
	};
	return ButtonScale2Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonScaleSkin.exml'] = window.ButtonScaleSkin = (function (_super) {
	__extends(ButtonScaleSkin, _super);
	function ButtonScaleSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplay"];
		
		this.elementsContent = [this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("iconDisplay","scaleX",1.1),
					new eui.SetProperty("iconDisplay","scaleY",1.1),
					new eui.SetProperty("iconDisplay","horizontalCenter",0),
					new eui.SetProperty("iconDisplay","verticalCenter",0)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("iconDisplay","alpha",0.5)
				])
		];
	}
	var _proto = ButtonScaleSkin.prototype;

	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.source = "hall_json.btn_green_1_png";
		t.verticalCenter = 0;
		return t;
	};
	return ButtonScaleSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 78;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 275;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Group1","scaleX",1.1),
					new eui.SetProperty("_Group1","scaleY",1.1)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","btn_bg_3_png")
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.anchorOffsetX = 124.5;
		t.anchorOffsetY = 35;
		t.height = 70;
		t.width = 249;
		t.x = 137.5;
		t.y = 39;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "btn_green_02_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBox3Skin.exml'] = window.CheckBox3Skin = (function (_super) {
	__extends(CheckBox3Skin, _super);
	function CheckBox3Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.elementsContent = [this._Group1_i(),this._Rect1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","visible",false)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7),
					new eui.SetProperty("_Image1","visible",false)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5),
					new eui.SetProperty("_Image1","visible",false)
				])
			,
			new eui.State ("upAndSelected",
				[
				])
			,
			new eui.State ("downAndSelected",
				[
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","visible",false)
				])
		];
	}
	var _proto = CheckBox3Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "weixin_check_png";
		t.x = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 63;
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return CheckBox3Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image2","visible",false)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","alpha",0.7),
					new eui.SetProperty("_Image2","visible",false)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","option_check2_2_png"),
					new eui.SetProperty("_Image2","alpha",0.5),
					new eui.SetProperty("_Image2","visible",false),
					new eui.SetProperty("labelDisplay","textColor",0x2878cb)
				])
			,
			new eui.State ("upAndSelected",
				[
				])
			,
			new eui.State ("downAndSelected",
				[
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","option_check2_2_png"),
					new eui.SetProperty("_Image2","visible",false),
					new eui.SetProperty("labelDisplay","textColor",0x2878cb)
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "option_check2_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "option_check2_3_png";
		t.x = 0;
		t.y = -19;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 30;
		t.text = "asfasdf";
		t.textAlign = "left";
		t.textColor = 0x6f4e27;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 44;
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ComboSelectedItemSkin.exml'] = window.ComboSelectedItemSkin = (function (_super) {
	__extends(ComboSelectedItemSkin, _super);
	function ComboSelectedItemSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ComboSelectedItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_quanbukuang_png";
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 26;
		t.size = 18;
		t.textAlign = "center";
		t.textColor = 0xEAC681;
		t.verticalAlign = "middle";
		t.width = 103;
		t.x = 3;
		t.y = 8;
		return t;
	};
	return ComboSelectedItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ComboBoxSkin.exml'] = window.ComboBoxSkin = (function (_super) {
	__extends(ComboBoxSkin, _super);
	function ComboBoxSkin() {
		_super.call(this);
		this.skinParts = ["list","scroller","select","btn_up","btn_down"];
		
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = ComboBoxSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.scroller_i(),this._Group1_i()];
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 0;
		t.maxHeight = 300;
		t.right = 1;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.y = 43;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = ComboChooseItemSkin;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.select_i(),this.btn_up_i(),this.btn_down_i()];
		return t;
	};
	_proto.select_i = function () {
		var t = new two.ComboSelectedItem();
		this.select = t;
		t.skinName = "ComboSelectedItemSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_up_i = function () {
		var t = new eui.Button();
		this.btn_up = t;
		t.height = 33;
		t.icon = "btn_x_png";
		t.label = "";
		t.skinName = "ButtonScaleSkin";
		t.width = 34;
		t.x = 97;
		t.y = 5;
		return t;
	};
	_proto.btn_down_i = function () {
		var t = new eui.Button();
		this.btn_down = t;
		t.height = 33;
		t.icon = "btn_x_png";
		t.label = "";
		t.skinName = "ButtonScaleSkin";
		t.width = 34;
		t.x = 97;
		t.y = 5;
		return t;
	};
	return ComboBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ComboChooseItemSkin.exml'] = window.ComboChooseItemSkin = (function (_super) {
	__extends(ComboChooseItemSkin, _super);
	function ComboChooseItemSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 42;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("labelDisplay","textColor",0xeac681)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.label"],[0],this.labelDisplay,"text");
	}
	var _proto = ComboChooseItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_quanbukuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.height = 26;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xcbb79d;
		t.verticalAlign = "middle";
		t.width = 123;
		t.x = 7;
		t.y = 8;
		return t;
	};
	return ComboChooseItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","trackHighlight","thumb"];
		
		this.height = 56;
		this.minHeight = 8;
		this.minWidth = 20;
		this.width = 309;
		this.elementsContent = [this._Image1_i(),this.track_i(),this.trackHighlight_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar_bg_png";
		t.width = 308;
		t.x = 0.2;
		t.y = 10;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.source = "bar_cover_png";
		t.width = 301;
		t.x = 3.9;
		t.y = 12.9;
		return t;
	};
	_proto.trackHighlight_i = function () {
		var t = new eui.Image();
		this.trackHighlight = t;
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(9,3,389,22);
		t.source = "bar_cover_png";
		t.width = 301;
		t.x = 3.9;
		t.y = 13.4;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Group();
		this.thumb = t;
		t.height = 0;
		t.width = 0;
		t.x = 7;
		t.y = 30;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar_dice_png";
		t.x = -30;
		t.y = -32;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_quanbukuang_png";
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Tahoma";
		t.height = 26;
		t.size = 18;
		t.textAlign = "center";
		t.textColor = 0xeac681;
		t.verticalAlign = "middle";
		t.width = 122;
		t.x = 8;
		t.y = 8;
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoadingBarSkin.exml'] = window.LoadingBarSkin = (function (_super) {
	__extends(LoadingBarSkin, _super);
	function LoadingBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = LoadingBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bar_bg_png";
		t.y = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "bar_cover_png";
		t.x = 3;
		t.y = 4;
		return t;
	};
	return LoadingBarSkin;
})(eui.Skin);generateEUI.paths['resource/skins/CircleHeadSkin.exml'] = window.CircleHeadSkin = (function (_super) {
	__extends(CircleHeadSkin, _super);
	function CircleHeadSkin() {
		_super.call(this);
		this.skinParts = ["head","gp"];
		
		this.elementsContent = [this.gp_i()];
	}
	var _proto = CircleHeadSkin.prototype;

	_proto.gp_i = function () {
		var t = new eui.Group();
		this.gp = t;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.width = 78;
		t.elementsContent = [this._Image1_i(),this.head_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.source = "tx_bg_png";
		t.width = 78;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "tx_png";
		t.width = 62;
		t.x = 8;
		t.y = 8;
		return t;
	};
	return CircleHeadSkin;
})(eui.Skin);generateEUI.paths['resource/skins/games/ButtonPinkSkin.exml'] = window.ButtonPinkSkin = (function (_super) {
	__extends(ButtonPinkSkin, _super);
	function ButtonPinkSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 88;
		this.width = 252;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("labelDisplay","scaleX",1),
					new eui.SetProperty("labelDisplay","scaleY",1)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Group1","scaleX",1.05),
					new eui.SetProperty("_Group1","scaleY",1.05)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("labelDisplay","scaleX",1),
					new eui.SetProperty("labelDisplay","scaleY",1)
				])
		];
	}
	var _proto = ButtonPinkSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.source = "btn_brown_03_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.horizontalCenter = 1;
		t.size = 24;
		t.stroke = 1;
		t.text = "加入";
		t.textColor = 0xffffff;
		t.verticalCenter = -5;
		t.x = 36;
		t.y = 13;
		return t;
	};
	return ButtonPinkSkin;
})(eui.Skin);generateEUI.paths['resource/skins/games/ddz/HeadUI.exml'] = window.ddz.HeadUISkin = (function (_super) {
	__extends(HeadUISkin, _super);
	function HeadUISkin() {
		_super.call(this);
		this.skinParts = ["headIcon","nameTxt","scoreTxt","icon","icon_lord","offlineIcon","zhuanIcon","flag_trust","flag_owner","btn_kick"];
		
		this.height = 138;
		this.width = 98;
		this.elementsContent = [this._Group1_i()];
		this.scoreTxt_i();
		
		this.flag_trust_i();
		
		this.states = [
			new eui.State ("l",
				[
					new eui.AddItems("scoreTxt","_Group1",2,"icon"),
					new eui.AddItems("flag_trust","_Group1",2,"flag_owner"),
					new eui.SetProperty("icon","source","ddz_dizhu_png"),
					new eui.SetProperty("icon","x",-3)
				])
			,
			new eui.State ("r",
				[
					new eui.AddItems("scoreTxt","_Group1",2,"icon"),
					new eui.AddItems("flag_trust","_Group1",2,"flag_owner"),
					new eui.SetProperty("icon","scaleX",-0.8),
					new eui.SetProperty("icon","x",98),
					new eui.SetProperty("icon_lord","x",0),
					new eui.SetProperty("flag_trust","x",0.5),
					new eui.SetProperty("flag_trust","y",35.16)
				])
			,
			new eui.State ("b",
				[
					new eui.SetProperty("nameTxt","y",110),
					new eui.SetProperty("nameTxt","x",-7),
					new eui.SetProperty("icon","x",-3)
				])
		];
	}
	var _proto = HeadUISkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.width = 117;
		t.elementsContent = [this.headIcon_i(),this.nameTxt_i(),this.icon_i(),this.icon_lord_i(),this.offlineIcon_i(),this.zhuanIcon_i(),this.flag_owner_i(),this.btn_kick_i()];
		return t;
	};
	_proto.headIcon_i = function () {
		var t = new two.CircleHead();
		this.headIcon = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CircleHeadSkin";
		t.x = 8;
		t.y = 5;
		return t;
	};
	_proto.nameTxt_i = function () {
		var t = new eui.Label();
		this.nameTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -8;
		t.size = 20;
		t.text = "adfasf";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.y = 84.2;
		return t;
	};
	_proto.scoreTxt_i = function () {
		var t = new eui.Label();
		this.scoreTxt = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.text = "213134";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 69;
		t.x = 16;
		t.y = 116;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "ddz_dizhu_png";
		t.x = -3;
		t.y = -7;
		return t;
	};
	_proto.icon_lord_i = function () {
		var t = new eui.Image();
		this.icon_lord = t;
		t.source = "lord_icon_png";
		t.x = 66;
		t.y = -18;
		return t;
	};
	_proto.offlineIcon_i = function () {
		var t = new eui.Image();
		this.offlineIcon = t;
		t.source = "room_offline_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuanIcon_i = function () {
		var t = new eui.Image();
		this.zhuanIcon = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "room_host_png";
		t.visible = false;
		t.x = 61.5;
		t.y = 68.5;
		return t;
	};
	_proto.flag_trust_i = function () {
		var t = new eui.Image();
		this.flag_trust = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.84;
		t.source = "other_trusteeship_png";
		t.width = 31;
		t.x = 63;
		t.y = 32;
		return t;
	};
	_proto.flag_owner_i = function () {
		var t = new eui.Label();
		this.flag_owner = t;
		t.text = "房主";
		t.x = -12;
		t.y = 2;
		return t;
	};
	_proto.btn_kick_i = function () {
		var t = new eui.Button();
		this.btn_kick = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.icon = "btn_brown_01_png";
		t.label = "踢出";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ButtonPinkSkin";
		t.width = 190;
		t.x = -1;
		t.y = 38.6;
		return t;
	};
	return HeadUISkin;
})(eui.Skin);generateEUI.paths['resource/skins/games/ddz/PlayersLayer.exml'] = window.ddz.PlayersLayerSkin = (function (_super) {
	__extends(PlayersLayerSkin, _super);
	function PlayersLayerSkin() {
		_super.call(this);
		this.skinParts = ["end0","end1","end2","head0","start0","head1","start1","head2","start2","ready0","ready1","ready2","readyGp","playerGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.playerGroup_i()];
	}
	var _proto = PlayersLayerSkin.prototype;

	_proto.playerGroup_i = function () {
		var t = new eui.Group();
		this.playerGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.elementsContent = [this.end0_i(),this.end1_i(),this.end2_i(),this.start0_i(),this.start1_i(),this.start2_i(),this.readyGp_i()];
		return t;
	};
	_proto.end0_i = function () {
		var t = new eui.Group();
		this.end0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 9;
		t.height = 138;
		t.touchThrough = true;
		t.width = 108;
		t.x = 0;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.end1_i = function () {
		var t = new eui.Group();
		this.end1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 158;
		t.right = 0;
		t.touchThrough = true;
		t.verticalCenter = -62;
		t.width = 108;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.end2_i = function () {
		var t = new eui.Group();
		this.end2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 158;
		t.touchThrough = true;
		t.verticalCenter = -62;
		t.width = 108;
		t.x = 0;
		t.layout = this._HorizontalLayout3_i();
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.start0_i = function () {
		var t = new eui.Group();
		this.start0 = t;
		t.bottom = 9;
		t.width = 107;
		t.x = 0;
		t.elementsContent = [this.head0_i()];
		return t;
	};
	_proto.head0_i = function () {
		var t = new two.ddz.HeadUI();
		this.head0 = t;
		t.currentState = "b";
		t.skinName = "ddz.HeadUISkin";
		return t;
	};
	_proto.start1_i = function () {
		var t = new eui.Group();
		this.start1 = t;
		t.currentState = "r";
		t.right = 0;
		t.verticalCenter = -72;
		t.width = 107;
		t.elementsContent = [this.head1_i()];
		return t;
	};
	_proto.head1_i = function () {
		var t = new two.ddz.HeadUI();
		this.head1 = t;
		t.currentState = "r";
		t.skinName = "ddz.HeadUISkin";
		return t;
	};
	_proto.start2_i = function () {
		var t = new eui.Group();
		this.start2 = t;
		t.verticalCenter = -72;
		t.width = 107;
		t.x = 0;
		t.elementsContent = [this.head2_i()];
		return t;
	};
	_proto.head2_i = function () {
		var t = new two.ddz.HeadUI();
		this.head2 = t;
		t.skinName = "ddz.HeadUISkin";
		return t;
	};
	_proto.readyGp_i = function () {
		var t = new eui.Group();
		this.readyGp = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		t.elementsContent = [this.ready0_i(),this.ready1_i(),this.ready2_i()];
		return t;
	};
	_proto.ready0_i = function () {
		var t = new eui.Image();
		this.ready0 = t;
		t.bottom = 77;
		t.source = "room_ready_png";
		t.x = 147;
		return t;
	};
	_proto.ready1_i = function () {
		var t = new eui.Image();
		this.ready1 = t;
		t.right = 149;
		t.source = "room_ready_png";
		t.verticalCenter = -107;
		return t;
	};
	_proto.ready2_i = function () {
		var t = new eui.Image();
		this.ready2 = t;
		t.source = "room_ready_png";
		t.verticalCenter = -106;
		t.x = 147;
		return t;
	};
	return PlayersLayerSkin;
})(eui.Skin);generateEUI.paths['resource/skins/games/pk/Card.exml'] = window.pk.CardSkin = (function (_super) {
	__extends(CardSkin, _super);
	function CardSkin() {
		_super.call(this);
		this.skinParts = ["numIcon","bIcon","sIcon","number","tingIcon","flag_lv"];
		
		this.currentState = "back";
		this.height = 196;
		this.width = 143;
		this.elementsContent = [this._Image1_i(),this.flag_lv_i()];
		this.number_i();
		
		this.tingIcon_i();
		
		this.states = [
			new eui.State ("number",
				[
					new eui.AddItems("number","",2,"flag_lv"),
					new eui.AddItems("tingIcon","",2,"flag_lv"),
					new eui.SetProperty("bIcon","x",34),
					new eui.SetProperty("bIcon","y",91),
					new eui.SetProperty("sIcon","y",60.06)
				])
			,
			new eui.State ("back",
				[
					new eui.SetProperty("_Image1","source","back_L_png"),
					new eui.SetProperty("bIcon","x",34),
					new eui.SetProperty("bIcon","y",91),
					new eui.SetProperty("sIcon","y",60.06)
				])
			,
			new eui.State ("hua",
				[
					new eui.AddItems("number","",2,"flag_lv"),
					new eui.AddItems("tingIcon","",2,"flag_lv"),
					new eui.SetProperty("numIcon","source","card_num_r13_png"),
					new eui.SetProperty("bIcon","x",0),
					new eui.SetProperty("bIcon","y",0),
					new eui.SetProperty("bIcon","source","hong_11_hua_png"),
					new eui.SetProperty("sIcon","y",60.06),
					new eui.SetProperty("sIcon","source","hongtao_L_png")
				])
			,
			new eui.State ("king",
				[
					new eui.AddItems("number","",2,"flag_lv"),
					new eui.AddItems("tingIcon","",2,"flag_lv"),
					new eui.SetProperty("numIcon","x",0),
					new eui.SetProperty("numIcon","source","card_king_big_png"),
					new eui.SetProperty("numIcon","horizontalCenter",-52),
					new eui.SetProperty("bIcon","x",1),
					new eui.SetProperty("bIcon","y",1),
					new eui.SetProperty("bIcon","source","king_big_png"),
					new eui.SetProperty("sIcon","y",60.06),
					new eui.SetProperty("sIcon","visible",false)
				])
			,
			new eui.State ("number_s",
				[
					new eui.AddItems("number","",2,"flag_lv"),
					new eui.AddItems("tingIcon","",2,"flag_lv"),
					new eui.SetProperty("bIcon","x",34),
					new eui.SetProperty("bIcon","y",73),
					new eui.SetProperty("sIcon","horizontalCenter",6),
					new eui.SetProperty("sIcon","width",36),
					new eui.SetProperty("sIcon","height",36),
					new eui.SetProperty("sIcon","verticalCenter",-64),
					new eui.SetProperty("number","width",143),
					new eui.SetProperty("number","x",0),
					new eui.SetProperty("number","height",196),
					new eui.SetProperty("number","y",0)
				])
			,
			new eui.State ("hua_s",
				[
					new eui.AddItems("number","",2,"flag_lv"),
					new eui.AddItems("tingIcon","",2,"flag_lv"),
					new eui.SetProperty("numIcon","source","card_num_r13_png"),
					new eui.SetProperty("bIcon","source","hong_11_hua_png"),
					new eui.SetProperty("bIcon","anchorOffsetX",0),
					new eui.SetProperty("bIcon","width",117),
					new eui.SetProperty("bIcon","anchorOffsetY",0),
					new eui.SetProperty("bIcon","height",134),
					new eui.SetProperty("bIcon","right",4),
					new eui.SetProperty("bIcon","bottom",3),
					new eui.SetProperty("sIcon","source","hongtao_L_png"),
					new eui.SetProperty("sIcon","horizontalCenter",6),
					new eui.SetProperty("sIcon","verticalCenter",-64),
					new eui.SetProperty("sIcon","width",36),
					new eui.SetProperty("sIcon","height",36),
					new eui.SetProperty("number","width",143),
					new eui.SetProperty("number","x",0),
					new eui.SetProperty("number","height",196),
					new eui.SetProperty("number","y",0)
				])
			,
			new eui.State ("king_s",
				[
					new eui.AddItems("number","",2,"flag_lv"),
					new eui.AddItems("tingIcon","",2,"flag_lv"),
					new eui.SetProperty("numIcon","x",0),
					new eui.SetProperty("numIcon","source","card_king_big_png"),
					new eui.SetProperty("numIcon","horizontalCenter",-52),
					new eui.SetProperty("bIcon","x",1),
					new eui.SetProperty("bIcon","y",1),
					new eui.SetProperty("bIcon","source","king_big_png"),
					new eui.SetProperty("sIcon","y",60.06),
					new eui.SetProperty("sIcon","visible",false)
				])
		];
	}
	var _proto = CardSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "face_L_png";
		return t;
	};
	_proto.number_i = function () {
		var t = new eui.Group();
		this.number = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.numIcon_i(),this.bIcon_i(),this.sIcon_i()];
		return t;
	};
	_proto.numIcon_i = function () {
		var t = new eui.Image();
		this.numIcon = t;
		t.horizontalCenter = -39.5;
		t.source = "card_num_b1_png";
		t.y = 12.5;
		return t;
	};
	_proto.bIcon_i = function () {
		var t = new eui.Image();
		this.bIcon = t;
		t.source = "heitao_L_png";
		return t;
	};
	_proto.sIcon_i = function () {
		var t = new eui.Image();
		this.sIcon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35.94;
		t.horizontalCenter = -40;
		t.source = "heitao_L_png";
		t.width = 36.3;
		return t;
	};
	_proto.tingIcon_i = function () {
		var t = new eui.Image();
		this.tingIcon = t;
		t.rotation = 268.99;
		t.source = "suggest_card_mark_png";
		t.visible = false;
		t.x = 2.5;
		t.y = 33.5;
		return t;
	};
	_proto.flag_lv_i = function () {
		var t = new eui.Image();
		this.flag_lv = t;
		t.source = "face_card_lv_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return CardSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/Wifi.exml'] = window.two.WifiSkin = (function (_super) {
	__extends(WifiSkin, _super);
	function WifiSkin() {
		_super.call(this);
		this.skinParts = ["icon"];
		
		this.elementsContent = [this.icon_i()];
	}
	var _proto = WifiSkin.prototype;

	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "ui_wifi4_png";
		return t;
	};
	return WifiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MatchingTableSkin.exml'] = window.ddz.MatchingTableSkin = (function (_super) {
	__extends(MatchingTableSkin, _super);
	function MatchingTableSkin() {
		_super.call(this);
		this.skinParts = ["bg","playerLayer","txt_score","cancelBtn","txt_msg","goldTxt"];
		
		this.height = 640;
		this.width = 1280;
		this.elementsContent = [this.bg_i(),this.playerLayer_i(),this._Group3_i(),this._Group4_i(),this.txt_msg_i(),this._Group5_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4002"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4001"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.35"],[0],this.txt_msg,"text");
	}
	var _proto = MatchingTableSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = -2;
		t.right = 2;
		t.scale9Grid = new egret.Rectangle(0,0,1386,81);
		t.source = "bg_table_jpg";
		t.top = 0;
		return t;
	};
	_proto.playerLayer_i = function () {
		var t = new two.ddz.PlayersMatchLayer();
		this.playerLayer = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.skinName = "ddz.PlayersLayerSkin";
		t.top = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.elementsContent = [this._OtherStand1_i(),this._OtherStand2_i(),this._Group2_i()];
		return t;
	};
	_proto._OtherStand1_i = function () {
		var t = new two_pk.OtherStand();
		t.direction = "r";
		t.height = 59;
		t.right = 32;
		t.verticalCenter = -189.5;
		t.width = 51;
		t.elementsContent = [this._Card1_i(),this._BitmapLabel1_i(),this._CardList1_i()];
		return t;
	};
	_proto._Card1_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.skinName = "pk.CardSkin";
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "Font_Continuous_fnt";
		t.horizontalCenter = 1.5;
		t.letterSpacing = -6;
		t.text = "0";
		t.y = 13.27;
		return t;
	};
	_proto._CardList1_i = function () {
		var t = new two_pk.CardList();
		t.right = 75;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.verticalCenter = 1;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = -82;
		t.orientation = "rows";
		t.requestedColumnCount = 10;
		t.verticalGap = -32;
		return t;
	};
	_proto._OtherStand2_i = function () {
		var t = new two_pk.OtherStand();
		t.direction = "r";
		t.height = 59;
		t.left = 27;
		t.verticalCenter = -185.5;
		t.width = 51;
		t.elementsContent = [this._Card2_i(),this._BitmapLabel2_i(),this._CardList2_i()];
		return t;
	};
	_proto._Card2_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.skinName = "pk.CardSkin";
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "Font_Continuous_fnt";
		t.horizontalCenter = 0.5;
		t.letterSpacing = -6;
		t.text = "0";
		t.y = 13.27;
		return t;
	};
	_proto._CardList2_i = function () {
		var t = new two_pk.CardList();
		t.right = 75;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.verticalCenter = 1;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = -82;
		t.orientation = "rows";
		t.requestedColumnCount = 10;
		t.verticalGap = -32;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.width = 452;
		t.y = 84;
		t.elementsContent = [this._Group1_i(),this._Image1_i(),this._BitmapLabel3_i(),this.txt_score_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 106;
		t.y = 0;
		t.elementsContent = [this._Card3_i(),this._Card4_i(),this._Card5_i()];
		return t;
	};
	_proto._Card3_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "pk.CardSkin";
		t.x = 0;
		t.y = 10;
		return t;
	};
	_proto._Card4_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "pk.CardSkin";
		t.x = 86;
		t.y = 10;
		return t;
	};
	_proto._Card5_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "pk.CardSkin";
		t.x = 171.51;
		t.y = 10;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 108.82;
		t.source = "round_chipaiBg_png";
		t.width = 451.12;
		t.x = 0;
		t.y = 4.18;
		return t;
	};
	_proto._BitmapLabel3_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "Font_Continuous_fnt";
		t.horizontalCenter = 180;
		t.letterSpacing = -6;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "1";
		t.y = 63.44;
		return t;
	};
	_proto.txt_score_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_score = t;
		t.font = "Font_Continuous_fnt";
		t.horizontalCenter = -167.5;
		t.letterSpacing = -6;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "1";
		t.y = 63.44;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 173;
		t.y = 24;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.horizontalCenter = -172.5;
		t.textAlign = "center";
		t.y = 24;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image2_i(),this._CardsLeftPanel1_i(),this._Button1_i(),this._ChatButton1_i(),this.cancelBtn_i(),this._SettingButton1_i(),this._Wifi1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(375,0,169,77);
		t.source = "bg_navigation_3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._CardsLeftPanel1_i = function () {
		var t = new two.CardsLeftPanel();
		t.right = 13;
		t.width = 310;
		t.x = 957;
		t.y = 8;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.height = 55.57;
		t.icon = "btn_trusteeship_png";
		t.label = "Button";
		t.right = 89;
		t.width = 54;
		t.x = 1137;
		t.y = 12.5;
		return t;
	};
	_proto._ChatButton1_i = function () {
		var t = new two.ChatButton();
		t.delay = 3;
		t.height = 65.75;
		t.icon = "btn_chat_png";
		t.label = "";
		t.right = 18;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "ButtonScaleSkin";
		t.width = 73.89;
		t.x = 1202;
		t.y = 14.7;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Button();
		this.cancelBtn = t;
		t.height = 58.5;
		t.icon = "btn_back_png";
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "ButtonScaleSkin";
		t.width = 59.83;
		t.x = 20;
		t.y = 15;
		return t;
	};
	_proto._SettingButton1_i = function () {
		var t = new two.SettingButton();
		t.icon = "btn_setting2_png";
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "ButtonScaleSkin";
		t.x = 99.5;
		t.y = 13;
		return t;
	};
	_proto._Wifi1_i = function () {
		var t = new two.Wifi();
		t.fileName = "ui_wifi";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.skinName = "two.WifiSkin";
		t.x = 177.25;
		t.y = 23;
		return t;
	};
	_proto.txt_msg_i = function () {
		var t = new eui.Label();
		this.txt_msg = t;
		t.height = 215;
		t.horizontalCenter = -2;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 418;
		t.y = 164;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 111;
		t.y = 583.35;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.goldTxt_i(),this._RuleButton1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "bg_k_png";
		t.width = 195.5;
		t.x = 17.25;
		t.y = 14;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "icon_jb_png";
		t.x = 10;
		t.y = 15.75;
		return t;
	};
	_proto.goldTxt_i = function () {
		var t = new eui.Label();
		this.goldTxt = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "234234";
		t.textAlign = "center";
		t.textColor = 0xEAC681;
		t.width = 124;
		t.x = 43;
		t.y = 29.75;
		return t;
	};
	_proto._RuleButton1_i = function () {
		var t = new two.RuleButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.icon = "btn_ts_png";
		t.label = "";
		t.skinName = "ButtonScale2Skin";
		t.width = 62;
		t.x = 200;
		t.y = 12.5;
		return t;
	};
	return MatchingTableSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "确定";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bar_bg_png";
		t.y = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "bar_cover_png";
		t.x = 4;
		t.y = 3.5;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "disabled";
		this.height = 43;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image2","visible",false)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","alpha",0.7),
					new eui.SetProperty("_Image2","visible",false)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","option_check1_2_png"),
					new eui.SetProperty("_Image2","alpha",0.5),
					new eui.SetProperty("_Image2","visible",false),
					new eui.SetProperty("labelDisplay","textColor",0x2878cb)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("labelDisplay","textColor",0xed5b07)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("labelDisplay","textColor",0xed5b07)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","option_check1_2_png"),
					new eui.SetProperty("_Image2","visible",false),
					new eui.SetProperty("labelDisplay","textColor",0x2878cb)
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "option_check1_1_png";
		t.verticalCenter = 0;
		t.x = 2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "option_check1_3_png";
		t.verticalCenter = 0.5;
		t.x = 5.2;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 30;
		t.text = "asfasdf";
		t.textAlign = "center";
		t.textColor = 0x6f4e27;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.x = 40;
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 20;
		this.minWidth = 20;
	}
	var _proto = ScrollerSkin.prototype;

	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TabSkin.exml'] = window.TabSkinSkin = (function (_super) {
	__extends(TabSkinSkin, _super);
	function TabSkinSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","y",0),
					new eui.SetStateProperty(this, ["hostComponent.data.up"],[0],this._Image2,"source"),
					new eui.SetProperty("_Image2","y",2.67)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","chat_emoji_on_png"),
					new eui.SetStateProperty(this, ["hostComponent.data.down"],[0],this._Image2,"source"),
					new eui.SetProperty("_Image2","y",-0.67)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.up"],[0],this._Image2,"source");
	}
	var _proto = TabSkinSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.scaleX = 0.9;
		t.scaleY = 1;
		t.source = "chat_emoji_off_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		return t;
	};
	return TabSkinSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "bg_scroller_bar_png";
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "bar_scroller_bar_png";
		t.width = 8;
		t.y = 6;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","labelDisplay","thumb2","thumb"];
		
		this.height = 432;
		this.minHeight = 30;
		this.minWidth = 25;
		this.width = 152;
		this.elementsContent = [this.track_i(),this.thumb2_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.source = "bg_slider_1_png";
		t.x = 30;
		t.y = 47.5;
		return t;
	};
	_proto.thumb2_i = function () {
		var t = new eui.Group();
		this.thumb2 = t;
		t.anchorOffsetX = 78;
		t.anchorOffsetY = 17.5;
		t.height = 35;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 156;
		t.x = 76;
		t.y = 62.5;
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar_slider_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = -44;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "$1000";
		t.textAlign = "center";
		t.textColor = 0xEAC681;
		t.touchEnabled = false;
		t.width = 142;
		t.y = -35;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Group();
		this.thumb = t;
		t.anchorOffsetX = 78;
		t.anchorOffsetY = 17.5;
		t.height = 35;
		t.width = 156;
		t.x = 76;
		t.y = 62.5;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "ui_arrow_2_png";
		t.x = 22;
		t.y = 1;
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/AudiencePanelSkin.exml'] = window.AudiencePanelSkin = (function (_super) {
	__extends(AudiencePanelSkin, _super);
	function AudiencePanelSkin() {
		_super.call(this);
		this.skinParts = ["gp_heads","gp_pots","txt_count"];
		
		this.elementsContent = [this._Group1_i(),this.txt_count_i()];
	}
	var _proto = AudiencePanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = -1;
		t.y = 0;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this.gp_heads_i(),this.gp_pots_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.gp_heads_i = function () {
		var t = new eui.Group();
		this.gp_heads = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._CircleHead1_i(),this._CircleHead2_i(),this._CircleHead3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -52;
		return t;
	};
	_proto._CircleHead1_i = function () {
		var t = new two.CircleHead();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._CircleHead2_i = function () {
		var t = new two.CircleHead();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 99;
		t.y = 0;
		return t;
	};
	_proto._CircleHead3_i = function () {
		var t = new two.CircleHead();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 198;
		t.y = 0;
		return t;
	};
	_proto.gp_pots_i = function () {
		var t = new eui.Group();
		this.gp_pots = t;
		t.x = 297;
		t.y = 56;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -4;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 1;
		t.source = "managePoker_dot_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 1;
		t.source = "managePoker_dot_png";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 1;
		t.source = "managePoker_dot_png";
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.txt_count_i = function () {
		var t = new eui.Label();
		this.txt_count = t;
		t.size = 16;
		t.text = "asdfasd";
		t.textAlign = "left";
		t.textColor = 0xcbb79d;
		t.x = 8;
		t.y = 40;
		return t;
	};
	return AudiencePanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/CardsLeftPanelSkin.exml'] = window.CardsLeftPanelSkin = (function (_super) {
	__extends(CardsLeftPanelSkin, _super);
	function CardsLeftPanelSkin() {
		_super.call(this);
		this.skinParts = ["btn_cards","gp_counts","gp_lefts"];
		
		this.elementsContent = [this.btn_cards_i(),this.gp_lefts_i()];
	}
	var _proto = CardsLeftPanelSkin.prototype;

	_proto.btn_cards_i = function () {
		var t = new eui.Button();
		this.btn_cards = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64.54;
		t.icon = "btn_count_png";
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ButtonScaleSkin";
		t.width = 66;
		t.x = 102;
		t.y = 0;
		return t;
	};
	_proto.gp_lefts_i = function () {
		var t = new eui.Group();
		this.gp_lefts = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 0;
		t.y = 73;
		t.elementsContent = [this._Image1_i(),this.gp_counts_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "count_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gp_counts_i = function () {
		var t = new eui.Group();
		this.gp_counts = t;
		t.x = 22;
		t.y = 40.5;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 23;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 90;
		t.y = 90;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 110;
		t.y = 110;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 120;
		t.y = 120;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 130;
		t.y = 130;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.text = "4";
		t.textColor = 0x210909;
		t.x = 140;
		t.y = 140;
		return t;
	};
	return CardsLeftPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/CheckBoxQuanSkin.exml'] = window.bj.CheckBoxQuanSkin = (function (_super) {
	__extends(CheckBoxQuanSkin, _super);
	function CheckBoxQuanSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.elementsContent = [this._Group1_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","_Group1",0,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","_Group1",0,"")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("_Image1","_Group1",0,"")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.AddItems("_Image2","_Group1",2,"labelDisplay")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.AddItems("_Image2","_Group1",2,"labelDisplay")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.AddItems("_Image2","_Group1",2,"labelDisplay")
				])
		];
	}
	var _proto = CheckBoxQuanSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.elementsContent = [this.labelDisplay_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "ui_check_u_1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "ui_check_d_1_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 16;
		t.text = "asfasdf";
		t.textAlign = "left";
		t.textColor = 0xd7beed;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 18.5;
		return t;
	};
	return CheckBoxQuanSkin;
})(eui.Skin);generateEUI.paths['resource/skins/games/ButtonGreenSkin.exml'] = window.ButtonGreenSkin = (function (_super) {
	__extends(ButtonGreenSkin, _super);
	function ButtonGreenSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Group1","scaleX",1.05),
					new eui.SetProperty("_Group1","scaleY",1.05)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButtonGreenSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.source = "btn_brown_02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 1;
		t.size = 24;
		t.stroke = 1;
		t.text = "加入";
		t.textColor = 0xffffff;
		t.verticalCenter = -5;
		t.x = 36;
		t.y = 13;
		return t;
	};
	return ButtonGreenSkin;
})(eui.Skin);generateEUI.paths['resource/skins/games/ButtonIconSkin.exml'] = window.ButtonIconSkin = (function (_super) {
	__extends(ButtonIconSkin, _super);
	function ButtonIconSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 88;
		this.width = 252;
		this.elementsContent = [this._Group2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("labelDisplay","scaleX",1),
					new eui.SetProperty("labelDisplay","scaleY",1)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Group2","scaleX",1.05),
					new eui.SetProperty("_Group2","scaleY",1.05)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("labelDisplay","scaleX",1),
					new eui.SetProperty("labelDisplay","scaleY",1)
				])
		];
	}
	var _proto = ButtonIconSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "btn_brown_03_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.verticalCenter = -5.5;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 22;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.source = "ui_shipin_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.size = 24;
		t.stroke = 1;
		t.text = "加入";
		t.textColor = 0xffffff;
		t.x = 3;
		t.y = 5;
		return t;
	};
	return ButtonIconSkin;
})(eui.Skin);generateEUI.paths['resource/skins/games/ddz/ButtonDDZSkin.exml'] = window.ButtonDDZSkin = (function (_super) {
	__extends(ButtonDDZSkin, _super);
	function ButtonDDZSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","btn_y_2_png"),
					new eui.SetProperty("_Group1","scaleX",1.05),
					new eui.SetProperty("_Group1","scaleY",1.05)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","btn_y_3_png")
				])
		];
	}
	var _proto = ButtonDDZSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.source = "btn_y_1_png";
		t.width = 146;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.stroke = 1;
		t.strokeColor = 0x56351d;
		t.text = "dfsfs";
		t.verticalCenter = -4.5;
		return t;
	};
	return ButtonDDZSkin;
})(eui.Skin);generateEUI.paths['resource/skins/games/ddz/ConfirmPanel.exml'] = window.ddz.ConfirmPanelSkin = (function (_super) {
	__extends(ConfirmPanelSkin, _super);
	function ConfirmPanelSkin() {
		_super.call(this);
		this.skinParts = ["noBtn","oneBtn","twoBtn","threeBtn","guoBtn","tishiBtn","chuBtn","btnsGp","btn_ming"];
		
		this.width = 660;
		this.elementsContent = [this.btnsGp_i(),this.btn_ming_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4010"],[0],this.noBtn,"label");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4011"],[0],this.oneBtn,"label");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4012"],[0],this.twoBtn,"label");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4013"],[0],this.threeBtn,"label");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4004"],[0],this.guoBtn,"label");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4005"],[0],this.tishiBtn,"label");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4006"],[0],this.chuBtn,"label");
	}
	var _proto = ConfirmPanelSkin.prototype;

	_proto.btnsGp_i = function () {
		var t = new eui.Group();
		this.btnsGp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.y = 1;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 69;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.noBtn_i(),this.oneBtn_i(),this.twoBtn_i(),this.threeBtn_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "bottom";
		return t;
	};
	_proto.noBtn_i = function () {
		var t = new eui.Button();
		this.noBtn = t;
		t.anchorOffsetX = 0;
		t.height = 69;
		t.icon = "Game_Btn_PayOff_png";
		t.skinName = "ButtonDDZSkin";
		t.width = 161;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.oneBtn_i = function () {
		var t = new eui.Button();
		this.oneBtn = t;
		t.anchorOffsetX = 0;
		t.height = 69;
		t.icon = "Game_Btn_PayOff_png";
		t.skinName = "ButtonDDZSkin";
		t.width = 161;
		t.x = 116;
		t.y = 0;
		return t;
	};
	_proto.twoBtn_i = function () {
		var t = new eui.Button();
		this.twoBtn = t;
		t.anchorOffsetX = 0;
		t.height = 69;
		t.icon = "Game_Btn_Tribute_png";
		t.skinName = "ButtonDDZSkin";
		t.width = 161;
		t.x = 335;
		t.y = 0;
		return t;
	};
	_proto.threeBtn_i = function () {
		var t = new eui.Button();
		this.threeBtn = t;
		t.anchorOffsetX = 0;
		t.height = 69;
		t.icon = "Game_Btn_Tribute_png";
		t.skinName = "ButtonDDZSkin";
		t.width = 161;
		t.x = 449;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 69;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.y = 0;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.guoBtn_i(),this.tishiBtn_i(),this.chuBtn_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 30;
		t.verticalAlign = "bottom";
		return t;
	};
	_proto.guoBtn_i = function () {
		var t = new eui.Button();
		this.guoBtn = t;
		t.anchorOffsetX = 0;
		t.height = 69;
		t.icon = "Game_Btn_Tribute_png";
		t.skinName = "ButtonDDZSkin";
		t.width = 161;
		t.x = 149;
		t.y = 100;
		return t;
	};
	_proto.tishiBtn_i = function () {
		var t = new eui.Button();
		this.tishiBtn = t;
		t.anchorOffsetX = 0;
		t.height = 69;
		t.icon = "Game_Btn_Tribute_png";
		t.skinName = "ButtonDDZSkin";
		t.width = 161;
		t.x = 159;
		t.y = 110;
		return t;
	};
	_proto.chuBtn_i = function () {
		var t = new eui.Button();
		this.chuBtn = t;
		t.anchorOffsetX = 0;
		t.height = 69;
		t.icon = "Game_Btn_Tribute_png";
		t.skinName = "ButtonDDZSkin";
		t.width = 161;
		t.x = 169;
		t.y = 120;
		return t;
	};
	_proto.btn_ming_i = function () {
		var t = new eui.Button();
		this.btn_ming = t;
		t.anchorOffsetX = 0;
		t.height = 69;
		t.horizontalCenter = 236;
		t.icon = "Game_Btn_Tribute_png";
		t.label = "明牌x5";
		t.skinName = "ButtonDDZSkin";
		t.width = 161;
		t.y = 134;
		return t;
	};
	return ConfirmPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/BoxBg.exml'] = window.two.BoxBgSkin = (function (_super) {
	__extends(BoxBgSkin, _super);
	function BoxBgSkin() {
		_super.call(this);
		this.skinParts = ["titleIcon"];
		
		this.elementsContent = [this._Image1_i(),this.titleIcon_i()];
	}
	var _proto = BoxBgSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(56,111,495,259);
		t.source = "bg_box_1_png";
		t.top = 0;
		return t;
	};
	_proto.titleIcon_i = function () {
		var t = new eui.Label();
		this.titleIcon = t;
		t.horizontalCenter = 1;
		t.size = 32;
		t.text = "提示";
		t.textColor = 0xeac681;
		t.y = 26;
		return t;
	};
	return BoxBgSkin;
})(eui.Skin);generateEUI.paths['resource/skins/games/ddz/ExitConfirmSkin.exml'] = window.ExitConfirmSkin = (function (_super) {
	__extends(ExitConfirmSkin, _super);
	function ExitConfirmSkin() {
		_super.call(this);
		this.skinParts = ["cancelBtn","okBtn"];
		
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4005"],[0],this._BoxBg1,"title");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.77"],[0],this.cancelBtn,"label");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.78"],[0],this.okBtn,"label");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.76"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.75"],[0],this._Label2,"text");
	}
	var _proto = ExitConfirmSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._BoxBg1_i(),this._Group1_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._BoxBg1_i = function () {
		var t = new two.BoxBg();
		this._BoxBg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 325;
		t.skinName = "two.BoxBgSkin";
		t.width = 482;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 328.99;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.cancelBtn_i(),this.okBtn_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Button();
		this.cancelBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.icon = "btn_orange_02_png";
		t.skinName = "ButtonPinkSkin";
		t.width = 189;
		t.x = 0;
		t.y = -14;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.icon = "btn_brown_01_png";
		t.skinName = "ButtonPinkSkin";
		t.width = 190;
		t.x = 349;
		t.y = -14;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87;
		t.lineSpacing = 6;
		t.size = 20;
		t.textColor = 0xbc6127;
		t.verticalAlign = "middle";
		t.width = 347;
		t.x = 62.5;
		t.y = 211;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87;
		t.lineSpacing = 6;
		t.size = 24;
		t.textColor = 0xbc6127;
		t.verticalAlign = "middle";
		t.width = 347;
		t.x = 62.5;
		t.y = 97;
		return t;
	};
	return ExitConfirmSkin;
})(eui.Skin);generateEUI.paths['resource/skins/games/ddz/Result.exml'] = window.ddz.ResultSkin = (function (_super) {
	__extends(ResultSkin, _super);
	function ResultSkin() {
		_super.call(this);
		this.skinParts = ["name0Txt","name1Txt","name2Txt","score0Label","score1Label","score2Label","score0Txt","score1Txt","score2Txt","backBtn","btn_video","okBtn","myScore","flag_result"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group2_i()];
		this.states = [
			new eui.State ("win",
				[
				])
			,
			new eui.State ("fail",
				[
					new eui.SetProperty("_Image3","source","Role_Boy_L_png")
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4015"],[0],this.score0Label,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4015"],[0],this.score1Label,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4015"],[0],this.score2Label,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.71"],[0],this.backBtn,"label");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.82"],[0],this.btn_video,"label");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.68"],[0],this.okBtn,"label");
	}
	var _proto = ResultSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.verticalCenter = -26;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.name0Txt_i(),this.name1Txt_i(),this.name2Txt_i(),this.score0Label_i(),this.score1Label_i(),this.score2Label_i(),this.score0Txt_i(),this.score1Txt_i(),this.score2Txt_i(),this._Group1_i(),this.myScore_i(),this.flag_result_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 197;
		t.scale9Grid = new egret.Rectangle(151,5,911,5);
		t.source = "Result_BG_png";
		t.x = 0;
		t.y = 322;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "Victory_PlayerBG_png";
		t.x = 515;
		t.y = 26;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.source = "Role_Boy_png";
		t.x = 489.5;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "Victory_Light3_png";
		t.x = 304;
		t.y = 51.5;
		return t;
	};
	_proto.name0Txt_i = function () {
		var t = new eui.Label();
		this.name0Txt = t;
		t.size = 24;
		t.text = "MI~177";
		t.textColor = 0xffce3d;
		t.x = 451;
		t.y = 360.5;
		return t;
	};
	_proto.name1Txt_i = function () {
		var t = new eui.Label();
		this.name1Txt = t;
		t.size = 24;
		t.text = "MI~177";
		t.textColor = 0xffffff;
		t.x = 451;
		t.y = 409.5;
		return t;
	};
	_proto.name2Txt_i = function () {
		var t = new eui.Label();
		this.name2Txt = t;
		t.size = 24;
		t.text = "MI~177";
		t.textColor = 0xffffff;
		t.x = 451;
		t.y = 463;
		return t;
	};
	_proto.score0Label_i = function () {
		var t = new eui.Label();
		this.score0Label = t;
		t.size = 24;
		t.textColor = 0xFFCE3D;
		t.x = 667;
		t.y = 361.5;
		return t;
	};
	_proto.score1Label_i = function () {
		var t = new eui.Label();
		this.score1Label = t;
		t.size = 24;
		t.textColor = 0xffffff;
		t.x = 667;
		t.y = 409.5;
		return t;
	};
	_proto.score2Label_i = function () {
		var t = new eui.Label();
		this.score2Label = t;
		t.size = 24;
		t.textColor = 0xffffff;
		t.x = 667;
		t.y = 463;
		return t;
	};
	_proto.score0Txt_i = function () {
		var t = new eui.Label();
		this.score0Txt = t;
		t.size = 24;
		t.text = "+200";
		t.textColor = 0xFFCE3D;
		t.x = 739;
		t.y = 360.5;
		return t;
	};
	_proto.score1Txt_i = function () {
		var t = new eui.Label();
		this.score1Txt = t;
		t.size = 24;
		t.text = "+200";
		t.textColor = 0xFFFFFF;
		t.x = 739;
		t.y = 408.5;
		return t;
	};
	_proto.score2Txt_i = function () {
		var t = new eui.Label();
		this.score2Txt = t;
		t.size = 24;
		t.text = "+200";
		t.textColor = 0xFFFFFF;
		t.x = 739;
		t.y = 462;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 529;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.backBtn_i(),this.btn_video_i(),this.okBtn_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 22;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.height = 88;
		t.icon = "btn_orange_03_png";
		t.skinName = "ButtonPinkSkin";
		t.width = 252;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_video_i = function () {
		var t = new eui.Button();
		this.btn_video = t;
		t.height = 88;
		t.icon = "ui_shipin_png";
		t.skinName = "ButtonIconSkin";
		t.width = 252;
		t.x = 548;
		t.y = 0;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.height = 88;
		t.icon = "btn_brown_03_png";
		t.skinName = "ButtonPinkSkin";
		t.width = 252;
		t.x = 278;
		t.y = 0;
		return t;
	};
	_proto.myScore_i = function () {
		var t = new eui.BitmapLabel();
		this.myScore = t;
		t.font = "Font_ResultScore_fnt";
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.text = "-300";
		t.x = 739;
		t.y = 347.1;
		return t;
	};
	_proto.flag_result_i = function () {
		var t = new eui.Image();
		this.flag_result = t;
		t.horizontalCenter = 0;
		t.source = "text_lord_win_png";
		t.y = 230;
		return t;
	};
	return ResultSkin;
})(eui.Skin);generateEUI.paths['resource/skins/games/ddz/SettleItem.exml'] = window.ddz.SettleItemSkin = (function (_super) {
	__extends(SettleItemSkin, _super);
	function SettleItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.width = 261;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._HeadIcon1_i(),this._Image2_i(),this._BitmapLabel1_i(),this._BitmapLabel2_i(),this._Image3_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.userName"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ['ID ' ,"hostComponent.data.userID"],[1],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.firstNum", '次'],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.flower", '个'],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.winNum", '赢' ,"hostComponent.data.failNum", '输'],[0,2],this._Label5,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.src"],[0],this._HeadIcon1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.failscore"],[0],this._BitmapLabel1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.winscore"],[0],this._BitmapLabel2,"text");
	}
	var _proto = SettleItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -13;
		t.height = 454;
		t.scale9Grid = new egret.Rectangle(85,47,102,48);
		t.source = "round_cell_png";
		t.width = 264;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.textAlign = "center";
		t.textColor = 0x7b4a2f;
		t.verticalAlign = "middle";
		t.width = 250;
		t.x = 6;
		t.y = 132;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.anchorOffsetX = 0;
		t.textAlign = "center";
		t.textColor = 0x7b4a2f;
		t.verticalAlign = "middle";
		t.width = 235;
		t.x = 11.5;
		t.y = 171;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.textAlign = "right";
		t.textColor = 0x7b4a2f;
		t.verticalAlign = "middle";
		t.width = 70;
		t.x = 161;
		t.y = 224;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.textAlign = "right";
		t.textColor = 0x7b4a2f;
		t.verticalAlign = "middle";
		t.width = 70;
		t.x = 161;
		t.y = 266;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.textAlign = "right";
		t.textColor = 0x7b4a2f;
		t.verticalAlign = "middle";
		t.width = 108;
		t.x = 123;
		t.y = 307.4;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "头游";
		t.textColor = 0x7b4a2f;
		t.x = 31;
		t.y = 224;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "同花顺";
		t.textColor = 0x7b4a2f;
		t.x = 31;
		t.y = 266;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "胜负局";
		t.textColor = 0x7b4a2f;
		t.x = 31;
		t.y = 307.4;
		return t;
	};
	_proto._HeadIcon1_i = function () {
		var t = new two.HeadIcon();
		this._HeadIcon1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 99;
		t.x = 82.5;
		t.y = 23;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "head_frame_png";
		t.x = 73.5;
		t.y = 19;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_number_8_fnt";
		t.horizontalCenter = 19.5;
		t.y = 362;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_number_7_fnt";
		t.horizontalCenter = 19.5;
		t.y = 362;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "zcj_png";
		t.x = 18;
		t.y = 336;
		return t;
	};
	return SettleItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/ReplayPanel.exml'] = window.ReplayPanelSkin = (function (_super) {
	__extends(ReplayPanelSkin, _super);
	function ReplayPanelSkin() {
		_super.call(this);
		this.skinParts = ["refreshBtn","slowBtn","playBtn","pauseBtn","accBtn","nextBtn"];
		
		this.elementsContent = [this.refreshBtn_i(),this.slowBtn_i(),this._Group1_i(),this.accBtn_i(),this.nextBtn_i()];
	}
	var _proto = ReplayPanelSkin.prototype;

	_proto.refreshBtn_i = function () {
		var t = new eui.Button();
		this.refreshBtn = t;
		t.height = 80;
		t.icon = "replay_refresh_png";
		t.label = "";
		t.skinName = "ButtonScaleSkin";
		t.width = 80;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.slowBtn_i = function () {
		var t = new eui.Button();
		this.slowBtn = t;
		t.height = 80;
		t.icon = "replay_slow_png";
		t.label = "";
		t.skinName = "ButtonScaleSkin";
		t.width = 80;
		t.x = 88;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 175;
		t.y = 0;
		t.elementsContent = [this.playBtn_i(),this.pauseBtn_i()];
		return t;
	};
	_proto.playBtn_i = function () {
		var t = new eui.Button();
		this.playBtn = t;
		t.height = 80;
		t.icon = "replay_play_png";
		t.label = "";
		t.skinName = "ButtonScaleSkin";
		t.width = 80;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pauseBtn_i = function () {
		var t = new eui.Button();
		this.pauseBtn = t;
		t.height = 80;
		t.icon = "replay_pause_png";
		t.label = "";
		t.skinName = "ButtonScaleSkin";
		t.width = 80;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.accBtn_i = function () {
		var t = new eui.Button();
		this.accBtn = t;
		t.height = 80;
		t.icon = "replay_fast_png";
		t.label = "";
		t.skinName = "ButtonScaleSkin";
		t.width = 80;
		t.x = 263;
		t.y = 0;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Button();
		this.nextBtn = t;
		t.height = 80;
		t.icon = "replay_next_png";
		t.label = "";
		t.skinName = "ButtonScaleSkin";
		t.width = 80;
		t.x = 350;
		t.y = 0;
		return t;
	};
	return ReplayPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/games/ddz/Table.exml'] = window.ddz.TableSkin = (function (_super) {
	__extends(TableSkin, _super);
	var TableSkin$Skin1 = 	(function (_super) {
		__extends(TableSkin$Skin1, _super);
		function TableSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_chongxinlipai_2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_chongxinlipai_3_png")
					])
			];
		}
		var _proto = TableSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_chongxinlipai_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TableSkin$Skin1;
	})(eui.Skin);

	var TableSkin$Skin2 = 	(function (_super) {
		__extends(TableSkin$Skin2, _super);
		function TableSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_lichengyilie_2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_lichengyilie_3_png")
					])
			];
		}
		var _proto = TableSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_lichengyilie_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TableSkin$Skin2;
	})(eui.Skin);

	function TableSkin() {
		_super.call(this);
		this.skinParts = ["bg","playerLayer","rStand","lStand","lLay","bLay","rLay","bStand","confirm","diGp","doubleTxt","txt_score","roomTxt","juTxt","cardGroup","btn_trust","chatBtn","settingBtn0","resumeBtn","tidyBtn","goldTxt","gp_less","btn_cancel_trust","gp_trusting","replayPanel"];
		
		this.height = 640;
		this.width = 1280;
		this.elementsContent = [this.bg_i(),this.playerLayer_i(),this.cardGroup_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this.gp_less_i(),this.gp_trusting_i(),this.replayPanel_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4002"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4001"],[0],this._Label2,"text");
	}
	var _proto = TableSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = -2;
		t.right = 2;
		t.scale9Grid = new egret.Rectangle(0,0,1386,81);
		t.source = "bg_table_jpg";
		t.top = 0;
		return t;
	};
	_proto.playerLayer_i = function () {
		var t = new two.ddz.PlayersLayer();
		this.playerLayer = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.skinName = "ddz.PlayersLayerSkin";
		t.top = 0;
		return t;
	};
	_proto.cardGroup_i = function () {
		var t = new eui.Group();
		this.cardGroup = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.elementsContent = [this.rStand_i(),this.lStand_i(),this.lLay_i(),this.bLay_i(),this.rLay_i(),this.bStand_i(),this.confirm_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto.rStand_i = function () {
		var t = new two_pk.OtherStand();
		this.rStand = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.direction = "r";
		t.height = 59;
		t.right = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -189.5;
		t.width = 51;
		t.elementsContent = [this._Card1_i(),this._BitmapLabel1_i(),this._CardList1_i()];
		return t;
	};
	_proto._Card1_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.skinName = "pk.CardSkin";
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "Font_Continuous_fnt";
		t.horizontalCenter = 1.5;
		t.letterSpacing = -6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0";
		t.y = 13.27;
		return t;
	};
	_proto._CardList1_i = function () {
		var t = new two_pk.CardList();
		t.right = 75;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.verticalCenter = 1;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._Card2_i(),this._Card3_i(),this._Card4_i(),this._Card5_i(),this._Card6_i(),this._Card7_i(),this._Card8_i(),this._Card9_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = -82;
		t.orientation = "rows";
		t.requestedColumnCount = 10;
		t.verticalGap = -32;
		return t;
	};
	_proto._Card2_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Card3_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._Card4_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto._Card5_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card6_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto._Card7_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 130;
		t.y = 130;
		return t;
	};
	_proto._Card8_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 140;
		t.y = 140;
		return t;
	};
	_proto._Card9_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 150;
		t.y = 150;
		return t;
	};
	_proto.lStand_i = function () {
		var t = new two_pk.OtherStand();
		this.lStand = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.direction = "r";
		t.height = 59;
		t.left = 27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -185.5;
		t.width = 51;
		t.elementsContent = [this._Card10_i(),this._BitmapLabel2_i(),this._CardList2_i()];
		return t;
	};
	_proto._Card10_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.skinName = "pk.CardSkin";
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "Font_Continuous_fnt";
		t.horizontalCenter = 0.5;
		t.letterSpacing = -6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0";
		t.y = 13.27;
		return t;
	};
	_proto._CardList2_i = function () {
		var t = new two_pk.CardList();
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.verticalCenter = -0.5;
		t.x = 69;
		t.layout = this._TileLayout2_i();
		t.elementsContent = [this._Card11_i(),this._Card12_i(),this._Card13_i(),this._Card14_i(),this._Card15_i(),this._Card16_i(),this._Card17_i(),this._Card18_i(),this._Card19_i(),this._Card20_i(),this._Card21_i(),this._Card22_i(),this._Card23_i(),this._Card24_i(),this._Card25_i(),this._Card26_i(),this._Card27_i(),this._Card28_i(),this._Card29_i(),this._Card30_i()];
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = -82;
		t.orientation = "rows";
		t.requestedColumnCount = 10;
		t.verticalGap = -32;
		return t;
	};
	_proto._Card11_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Card12_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Card13_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._Card14_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto._Card15_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto._Card16_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card17_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card18_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card19_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card20_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card21_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card22_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card23_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card24_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card25_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card26_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card27_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card28_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card29_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Card30_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.skinName = "pk.CardSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.lLay_i = function () {
		var t = new two_pk.Lay();
		this.lLay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 177;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.verticalCenter = -72.5;
		return t;
	};
	_proto.bLay_i = function () {
		var t = new two_pk.Lay();
		this.bLay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 258;
		t.horizontalCenter = -6.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		return t;
	};
	_proto.rLay_i = function () {
		var t = new two_pk.Lay();
		this.rLay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 178;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.verticalCenter = -72.5;
		return t;
	};
	_proto.bStand_i = function () {
		var t = new two_pk.HorizontalStand();
		this.bStand = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 59;
		t.height = 108;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1100;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.55;
		t.y = 0;
		t.elementsContent = [this._Card31_i()];
		return t;
	};
	_proto._Card31_i = function () {
		var t = new two_pk.Card();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "pk.CardSkin";
		return t;
	};
	_proto.confirm_i = function () {
		var t = new two.ddz.ConfirmPanel();
		this.confirm = t;
		t.horizontalCenter = 0;
		t.skinName = "ddz.ConfirmPanelSkin";
		t.touchEnabled = false;
		t.verticalCenter = 16.5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.width = 452;
		t.y = 84;
		t.elementsContent = [this.diGp_i(),this._Image1_i(),this.doubleTxt_i(),this.txt_score_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto.diGp_i = function () {
		var t = new eui.Group();
		this.diGp = t;
		t.x = 106;
		t.y = 0;
		t.elementsContent = [this._Card32_i(),this._Card33_i(),this._Card34_i()];
		return t;
	};
	_proto._Card32_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "pk.CardSkin";
		t.x = 0;
		t.y = 10;
		return t;
	};
	_proto._Card33_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "pk.CardSkin";
		t.x = 86;
		t.y = 10;
		return t;
	};
	_proto._Card34_i = function () {
		var t = new two_pk.Card();
		t.card = 0;
		t.currentState = "back";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "pk.CardSkin";
		t.x = 171.51;
		t.y = 10;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108.82;
		t.source = "round_chipaiBg_png";
		t.width = 451.12;
		t.x = 0;
		t.y = 4.18;
		return t;
	};
	_proto.doubleTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.doubleTxt = t;
		t.font = "Font_Continuous_fnt";
		t.horizontalCenter = 180;
		t.letterSpacing = -6;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "99";
		t.y = 63.44;
		return t;
	};
	_proto.txt_score_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_score = t;
		t.font = "Font_Continuous_fnt";
		t.horizontalCenter = -167.5;
		t.letterSpacing = -6;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "1";
		t.y = 63.44;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 173;
		t.y = 24;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -172.5;
		t.textAlign = "center";
		t.y = 24;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 87;
		t.y = 13;
		t.elementsContent = [this.roomTxt_i(),this._Label3_i(),this._Label4_i(),this.juTxt_i()];
		return t;
	};
	_proto.roomTxt_i = function () {
		var t = new eui.Label();
		this.roomTxt = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.text = "房间号00000";
		t.textAlign = "center";
		t.textColor = 0xefefef;
		t.verticalAlign = "middle";
		t.width = 200.67;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "第";
		t.visible = false;
		t.x = 36;
		t.y = 23.55;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "局";
		t.visible = false;
		t.x = 141.12;
		t.y = 25.55;
		return t;
	};
	_proto.juTxt_i = function () {
		var t = new eui.Label();
		this.juTxt = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.text = "99/99";
		t.textAlign = "center";
		t.textColor = 0xEFA31A;
		t.visible = false;
		t.width = 76;
		t.x = 66;
		t.y = 25.55;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image2_i(),this._CardsLeftPanel1_i(),this.btn_trust_i(),this.chatBtn_i(),this._ExitRoomButton1_i(),this.settingBtn0_i(),this._Wifi1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(375,0,169,77);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_navigation_3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._CardsLeftPanel1_i = function () {
		var t = new two.CardsLeftPanel();
		t.right = 13;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 310;
		t.x = 957;
		t.y = 8;
		return t;
	};
	_proto.btn_trust_i = function () {
		var t = new eui.Button();
		this.btn_trust = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55.57;
		t.icon = "btn_trusteeship_png";
		t.label = "Button";
		t.right = 89;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 54;
		t.x = 1137;
		t.y = 12.5;
		return t;
	};
	_proto.chatBtn_i = function () {
		var t = new two.ChatButton();
		this.chatBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.delay = 3;
		t.height = 65.75;
		t.icon = "btn_chat_png";
		t.label = "";
		t.right = 18;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "ButtonScaleSkin";
		t.width = 73.89;
		t.x = 1202;
		t.y = 14.7;
		return t;
	};
	_proto._ExitRoomButton1_i = function () {
		var t = new two.ddz.ExitRoomButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58.5;
		t.icon = "btn_back_png";
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "ButtonScaleSkin";
		t.width = 59.83;
		t.x = 20;
		t.y = 15;
		return t;
	};
	_proto.settingBtn0_i = function () {
		var t = new two.SettingButton();
		this.settingBtn0 = t;
		t.anchorOffsetX = 0;
		t.icon = "btn_setting2_png";
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "ButtonScaleSkin";
		t.x = 99.5;
		t.y = 13;
		return t;
	};
	_proto._Wifi1_i = function () {
		var t = new two.Wifi();
		t.fileName = "ui_wifi";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.skinName = "two.WifiSkin";
		t.x = 177.25;
		t.y = 23;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.right = 44;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.visible = false;
		t.y = 590;
		t.elementsContent = [this.resumeBtn_i(),this.tidyBtn_i()];
		return t;
	};
	_proto.resumeBtn_i = function () {
		var t = new eui.Button();
		this.resumeBtn = t;
		t.anchorOffsetX = 0;
		t.icon = "chongxinlipai_3_png";
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = TableSkin$Skin1;
		return t;
	};
	_proto.tidyBtn_i = function () {
		var t = new eui.Button();
		this.tidyBtn = t;
		t.anchorOffsetX = 0;
		t.icon = "lichengyilie_2_png";
		t.label = "";
		t.x = 110;
		t.skinName = TableSkin$Skin2;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 111;
		t.y = 583.35;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.goldTxt_i(),this._RuleButton1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "bg_k_png";
		t.width = 195.5;
		t.x = 17.25;
		t.y = 14;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "icon_jb_png";
		t.x = 10;
		t.y = 15.75;
		return t;
	};
	_proto.goldTxt_i = function () {
		var t = new eui.Label();
		this.goldTxt = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "234234";
		t.textAlign = "center";
		t.textColor = 0xEAC681;
		t.width = 124;
		t.x = 43;
		t.y = 29.75;
		return t;
	};
	_proto._RuleButton1_i = function () {
		var t = new two.RuleButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.icon = "btn_ts_png";
		t.label = "";
		t.skinName = "ButtonScale2Skin";
		t.width = 62;
		t.x = 200;
		t.y = 12.5;
		return t;
	};
	_proto.gp_less_i = function () {
		var t = new eui.Group();
		this.gp_less = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 504;
		t.elementsContent = [this._Image5_i(),this._Label5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "laba_di_png";
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "没有更大的牌";
		t.y = 9;
		return t;
	};
	_proto.gp_trusting_i = function () {
		var t = new eui.Group();
		this.gp_trusting = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.visible = false;
		t.elementsContent = [this._Image6_i(),this.btn_cancel_trust_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.alpha = 0.2;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "cell_b1_png";
		t.top = 0;
		return t;
	};
	_proto.btn_cancel_trust_i = function () {
		var t = new eui.Button();
		this.btn_cancel_trust = t;
		t.height = 166;
		t.horizontalCenter = 0;
		t.icon = "btn_cancel_trusteeship_png";
		t.label = "Button";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 208;
		t.x = 585;
		t.y = 417.35;
		return t;
	};
	_proto.replayPanel_i = function () {
		var t = new two.ReplayPanel();
		this.replayPanel = t;
		t.alpha = 0.6;
		t.horizontalCenter = 0;
		t.skinName = "ReplayPanelSkin";
		t.verticalCenter = -100;
		t.visible = false;
		return t;
	};
	return TableSkin;
})(eui.Skin);generateEUI.paths['resource/skins/MatchingViewSkin.exml'] = window.MatchingViewSkin = (function (_super) {
	__extends(MatchingViewSkin, _super);
	function MatchingViewSkin() {
		_super.call(this);
		this.skinParts = ["txt_msg","cancelBtn"];
		
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.lang.33"],[0],this._BoxBg1,"title");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.35"],[0],this.txt_msg,"text");
	}
	var _proto = MatchingViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._BoxBg1_i(),this.txt_msg_i(),this.cancelBtn_i()];
		return t;
	};
	_proto._BoxBg1_i = function () {
		var t = new two.BoxBg();
		this._BoxBg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "two.BoxBgSkin";
		t.width = 496;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_msg_i = function () {
		var t = new eui.Label();
		this.txt_msg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 215;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x7f6636;
		t.verticalAlign = "middle";
		t.width = 418;
		t.x = 36.5;
		t.y = 117.5;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Button();
		this.cancelBtn = t;
		t.height = 56;
		t.icon = "btn_gb_png";
		t.label = "";
		t.skinName = "ButtonScaleSkin";
		t.width = 56;
		t.x = 427.5;
		t.y = 17.5;
		return t;
	};
	return MatchingViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/TimePanel.exml'] = window.TimePanelSkin = (function (_super) {
	__extends(TimePanelSkin, _super);
	function TimePanelSkin() {
		_super.call(this);
		this.skinParts = ["timeTxt"];
		
		this.elementsContent = [this.timeTxt_i()];
	}
	var _proto = TimePanelSkin.prototype;

	_proto.timeTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.timeTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "font_number_1_fnt";
		t.height = 33;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "23";
		t.verticalCenter = 0;
		t.width = 38;
		return t;
	};
	return TimePanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/room/ClockPanelSkin.exml'] = window.ClockPanelSkin = (function (_super) {
	__extends(ClockPanelSkin, _super);
	function ClockPanelSkin() {
		_super.call(this);
		this.skinParts = ["time"];
		
		this.height = 71;
		this.elementsContent = [this._Image1_i(),this.time_i()];
	}
	var _proto = ClockPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "icon_time_png";
		t.x = 0;
		t.y = -89;
		return t;
	};
	_proto.time_i = function () {
		var t = new two.TimePanel();
		this.time = t;
		t.horizontalCenter = 0;
		t.skinName = "TimePanelSkin";
		t.y = 15;
		return t;
	};
	return ClockPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/room/RoomTip.exml'] = window.two.RoomTipSkin = (function (_super) {
	__extends(RoomTipSkin, _super);
	function RoomTipSkin() {
		_super.call(this);
		this.skinParts = ["roomTxt","timeTxt"];
		
		this.elementsContent = [this._Image1_i(),this.roomTxt_i(),this._Image2_i(),this.timeTxt_i(),this._Image3_i(),this._Wifi1_i()];
	}
	var _proto = RoomTipSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "room_topbg_png";
		t.width = 578;
		return t;
	};
	_proto.roomTxt_i = function () {
		var t = new eui.Label();
		this.roomTxt = t;
		t.anchorOffsetX = 0;
		t.text = "房间号 000000";
		t.textAlign = "center";
		t.textColor = 0x7b4a2f;
		t.verticalAlign = "middle";
		t.width = 201.55;
		t.x = 24.01;
		t.y = 21;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "fengefu_png";
		t.width = -59;
		t.x = 237.25;
		t.y = 26;
		return t;
	};
	_proto.timeTxt_i = function () {
		var t = new eui.Label();
		this.timeTxt = t;
		t.anchorOffsetX = 0;
		t.text = "2017-10-22 26:49";
		t.textAlign = "center";
		t.textColor = 0x7B4A2F;
		t.verticalAlign = "middle";
		t.width = 256.55;
		t.x = 243.51;
		t.y = 21;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "fengefu_png";
		t.width = -59;
		t.x = 502.75;
		t.y = 26;
		return t;
	};
	_proto._Wifi1_i = function () {
		var t = new two.Wifi();
		t.skinName = "WifiSkin";
		t.x = 518.89;
		t.y = 18;
		return t;
	};
	return RoomTipSkin;
})(eui.Skin);generateEUI.paths['resource/skins/RoomSelectItemSkin.exml'] = window.RoomSelectItemSkin = (function (_super) {
	__extends(RoomSelectItemSkin, _super);
	function RoomSelectItemSkin() {
		_super.call(this);
		this.skinParts = ["di_icon","flag_icon","txt_score","txt_tip"];
		
		this.height = 411;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 296;
		this.elementsContent = [this._Group2_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Group2","scaleX",0.95),
					new eui.SetProperty("_Group2","scaleY",0.95)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4001"],[0],this._Label1,"text");
	}
	var _proto = RoomSelectItemSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.height = 411;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.di_icon_i(),this.flag_icon_i(),this._Image1_i(),this._Group1_i(),this.txt_tip_i()];
		return t;
	};
	_proto.di_icon_i = function () {
		var t = new eui.Image();
		this.di_icon = t;
		t.bottom = 0;
		t.source = "bg_card_1_png";
		t.x = 0;
		return t;
	};
	_proto.flag_icon_i = function () {
		var t = new eui.Image();
		this.flag_icon = t;
		t.source = "font_room_1_png";
		t.x = 86;
		t.y = 321;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ui_shadow_png";
		t.x = 52.5;
		t.y = 259.1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 266.6;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i(),this.txt_score_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.stroke = 1;
		t.textAlign = "right";
		t.textColor = 0xF7EFE6;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_score_i = function () {
		var t = new eui.Label();
		this.txt_score = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.stroke = 1;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xf7efe6;
		t.x = 129.5;
		t.y = 0;
		return t;
	};
	_proto.txt_tip_i = function () {
		var t = new eui.Label();
		this.txt_tip = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "1k~100k";
		t.textColor = 0x4c2e0c;
		t.y = 298.1;
		return t;
	};
	return RoomSelectItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/UserInfo.exml'] = window.UserInfoSkin = (function (_super) {
	__extends(UserInfoSkin, _super);
	function UserInfoSkin() {
		_super.call(this);
		this.skinParts = ["nameTxt","idTxt","goldTxt","headIcon","rect","desBtn","settingBtn1"];
		
		this.height = 140;
		this.elementsContent = [this._Image1_i(),this.nameTxt_i(),this.idTxt_i(),this._Group1_i(),this._Group2_i(),this.desBtn_i(),this.settingBtn1_i()];
	}
	var _proto = UserInfoSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(711,0,209,400);
		t.source = "bg_navigation_png";
		return t;
	};
	_proto.nameTxt_i = function () {
		var t = new eui.Label();
		this.nameTxt = t;
		t.anchorOffsetX = 0;
		t.size = 26;
		t.text = "asdfasd";
		t.textAlign = "left";
		t.textColor = 0xeac681;
		t.width = 98;
		t.x = 112;
		t.y = 33.5;
		return t;
	};
	_proto.idTxt_i = function () {
		var t = new eui.Label();
		this.idTxt = t;
		t.size = 18;
		t.text = "id:sadf";
		t.textAlign = "left";
		t.textColor = 0xaaa191;
		t.visible = false;
		t.x = 333;
		t.y = 7;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 222;
		t.y = 11;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.goldTxt_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "bg_k_png";
		t.width = 192;
		t.x = 16;
		t.y = 9;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "icon_jb_png";
		t.x = 8;
		t.y = 11;
		return t;
	};
	_proto.goldTxt_i = function () {
		var t = new eui.Label();
		this.goldTxt = t;
		t.anchorOffsetX = 0;
		t.size = 26;
		t.text = "234234";
		t.textAlign = "left";
		t.textColor = 0xeac681;
		t.width = 124;
		t.x = 68;
		t.y = 24.5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 78;
		t.x = 20;
		t.y = 9;
		t.elementsContent = [this.headIcon_i(),this.rect_i()];
		return t;
	};
	_proto.headIcon_i = function () {
		var t = new two.CircleHead();
		this.headIcon = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CircleHeadSkin";
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillAlpha = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.desBtn_i = function () {
		var t = new two.RuleButton();
		this.desBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.icon = "btn_ts_png";
		t.label = "";
		t.right = 154;
		t.skinName = "ButtonScale2Skin";
		t.width = 62;
		t.y = 5.5;
		return t;
	};
	_proto.settingBtn1_i = function () {
		var t = new two.SettingButton();
		this.settingBtn1 = t;
		t.anchorOffsetX = 0;
		t.height = 64;
		t.icon = "hall_setting_png";
		t.label = "";
		t.right = 16;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "ButtonScaleSkin";
		t.width = 57;
		t.y = 31.4;
		return t;
	};
	return UserInfoSkin;
})(eui.Skin);generateEUI.paths['resource/skins/RoomSelectViewSkin.exml'] = window.RoomSelectViewSkin = (function (_super) {
	__extends(RoomSelectViewSkin, _super);
	function RoomSelectViewSkin() {
		_super.call(this);
		this.skinParts = ["list"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this._UserBannerPanel1_i(),this.list_i()];
	}
	var _proto = RoomSelectViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_hall_jpg";
		t.top = 0;
		return t;
	};
	_proto._UserBannerPanel1_i = function () {
		var t = new two.UserBannerPanel();
		t.left = 0;
		t.right = 0;
		t.skinName = "UserInfoSkin";
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.horizontalCenter = 0;
		t.itemRenderer = two.RoomSelectItem;
		t.itemRendererSkinName = RoomSelectItemSkin;
		t.y = 161;
		t.layout = this._HorizontalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 16;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.d = "null";
		return t;
	};
	return RoomSelectViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/Chat.exml'] = window.ChatSkin = (function (_super) {
	__extends(ChatSkin, _super);
	var ChatSkin$Skin3 = 	(function (_super) {
		__extends(ChatSkin$Skin3, _super);
		function ChatSkin$Skin3() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","chat_common_on_u_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ChatSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "chat_common_off_u_png";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "chat_biaoqing_png";
			t.verticalCenter = 0;
			return t;
		};
		return ChatSkin$Skin3;
	})(eui.Skin);

	var ChatSkin$Skin4 = 	(function (_super) {
		__extends(ChatSkin$Skin4, _super);
		function ChatSkin$Skin4() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","chat_common_on_d_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ChatSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "chat_common_off_d_png";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "chat_liaotian_png";
			t.verticalCenter = 0;
			return t;
		};
		return ChatSkin$Skin4;
	})(eui.Skin);

	function ChatSkin() {
		_super.call(this);
		this.skinParts = ["tab","eAC","iconList","yAC","langList","input","sendBtn","vs"];
		
		this.elementsContent = [this._Group4_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.lang.80"],[0],this.input,"prompt");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.79"],[0],this.sendBtn,"label");
	}
	var _proto = ChatSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.bottom = 70;
		t.left = 0;
		t.elementsContent = [this._Image1_i(),this.tab_i(),this.vs_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "chat_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tab_i = function () {
		var t = new two.TabGroup();
		this.tab = t;
		t.x = 5;
		t.y = 7;
		t.elementsContent = [this._ToggleButton1_i(),this._ToggleButton2_i()];
		return t;
	};
	_proto._ToggleButton1_i = function () {
		var t = new eui.ToggleButton();
		t.label = "";
		t.selected = true;
		t.x = 0;
		t.y = 0;
		t.skinName = ChatSkin$Skin3;
		return t;
	};
	_proto._ToggleButton2_i = function () {
		var t = new eui.ToggleButton();
		t.label = "";
		t.x = 0;
		t.y = 103;
		t.skinName = ChatSkin$Skin4;
		return t;
	};
	_proto.vs_i = function () {
		var t = new eui.ViewStack();
		this.vs = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 224;
		t.selectedIndex = 0;
		t.width = 282;
		t.x = 46;
		t.y = 2;
		t.elementsContent = [this._Group1_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.name = "Group";
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Scroller1_i()];
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.top = 0;
		t.viewport = this.iconList_i();
		return t;
	};
	_proto.iconList_i = function () {
		var t = new eui.List();
		this.iconList = t;
		t.anchorOffsetX = 0;
		t.itemRendererSkinName = ChatIconItemSkin;
		t.useVirtualLayout = true;
		t.width = 769.33;
		t.x = 1.33;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this.eAC_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "contentJustify";
		t.horizontalGap = 4;
		t.orientation = "rows";
		t.paddingBottom = 10;
		t.paddingLeft = 10;
		t.paddingRight = 10;
		t.paddingTop = 10;
		t.requestedColumnCount = 5;
		t.verticalGap = 24;
		return t;
	};
	_proto.eAC_i = function () {
		var t = new eui.ArrayCollection();
		this.eAC = t;
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i(),this._Object10_i(),this._Object11_i(),this._Object12_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.src = "E101_png";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.src = "E101_png";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.src = "E101_png";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.src = "E101_png";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.src = "E101_png";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.src = "E101_png";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.src = "E101_png";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.src = "E101_png";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.src = "E101_png";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.src = "E101_png";
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.src = "E101_png";
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.src = "E101_png";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.name = "Group";
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Scroller2_i(),this._Group2_i()];
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.bottom = 47;
		t.left = 0;
		t.right = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.top = 0;
		t.viewport = this.langList_i();
		return t;
	};
	_proto.langList_i = function () {
		var t = new eui.List();
		this.langList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 280;
		t.itemRendererSkinName = ChatItemSkin;
		t.width = 572;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this.yAC_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "justify";
		return t;
	};
	_proto.yAC_i = function () {
		var t = new eui.ArrayCollection();
		this.yAC = t;
		t.source = [this._Object13_i(),this._Object14_i(),this._Object15_i(),this._Object16_i()];
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		t.label = "asdfasdf";
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		t.label = "adf";
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		t.label = "asdf";
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		t.label = "asdfasdf";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.left = 0;
		t.right = 0;
		t.y = 181;
		t.elementsContent = [this.input_i(),this.sendBtn_i()];
		return t;
	};
	_proto.input_i = function () {
		var t = new eui.EditableText();
		this.input = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.multiline = false;
		t.promptColor = 0x8c8585;
		t.size = 20;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 7;
		t.y = 9;
		return t;
	};
	_proto.sendBtn_i = function () {
		var t = new eui.Button();
		this.sendBtn = t;
		t.anchorOffsetX = 0;
		t.height = 69;
		t.icon = "Game_Btn_Tribute_png";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ButtonDDZSkin";
		t.width = 154;
		t.x = 186;
		t.y = 0;
		return t;
	};
	return ChatSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/ChatIconItem.exml'] = window.ChatIconItemSkin = (function (_super) {
	__extends(ChatIconItemSkin, _super);
	function ChatIconItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 50;
		this.width = 50;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("","width",80),
					new eui.SetProperty("","height",80)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.src"],[0],this._Image1,"source");
	}
	var _proto = ChatIconItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return ChatIconItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/ChatItem.exml'] = window.ChatItemSkin = (function (_super) {
	__extends(ChatItemSkin, _super);
	function ChatItemSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 545;
		this.elementsContent = [this.labelDisplay_i(),this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.label"],[0],this.labelDisplay,"text");
	}
	var _proto = ChatItemSkin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.bottom = 4;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 18;
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.top = 4;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "chat_line_png";
		t.y = 52;
		return t;
	};
	return ChatItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/ChatTip.exml'] = window.ChatTipSkin = (function (_super) {
	__extends(ChatTipSkin, _super);
	function ChatTipSkin() {
		_super.call(this);
		this.skinParts = ["icon_emoji","tipBg","txt_tip","tipGp"];
		
		this.elementsContent = [this.icon_emoji_i(),this.tipGp_i()];
		this.states = [
			new eui.State ("left",
				[
					new eui.SetProperty("txt_tip","size",24)
				])
			,
			new eui.State ("right",
				[
					new eui.SetProperty("tipBg","scaleX",-1)
				])
		];
	}
	var _proto = ChatTipSkin.prototype;

	_proto.icon_emoji_i = function () {
		var t = new eui.Image();
		this.icon_emoji = t;
		t.source = "E101_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tipGp_i = function () {
		var t = new eui.Group();
		this.tipGp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.maxWidth = 300;
		t.elementsContent = [this.tipBg_i(),this.txt_tip_i()];
		return t;
	};
	_proto.tipBg_i = function () {
		var t = new eui.Image();
		this.tipBg = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(31,28,12,17);
		t.source = "room_bubble1_png";
		t.top = 0;
		return t;
	};
	_proto.txt_tip_i = function () {
		var t = new eui.Label();
		this.txt_tip = t;
		t.bottom = 32;
		t.left = 22;
		t.right = 21;
		t.size = 24;
		t.text = "Laasdfasdfasfasfbel";
		t.top = 23;
		t.verticalAlign = "middle";
		t.y = 0;
		return t;
	};
	return ChatTipSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/Confirm.exml'] = window.ConfirmSkin = (function (_super) {
	__extends(ConfirmSkin, _super);
	function ConfirmSkin() {
		_super.call(this);
		this.skinParts = ["cancelBtn","okBtn","messageTxt","closeBtn"];
		
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.lang.4005"],[0],this._BoxBg1,"title");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.74"],[0],this.cancelBtn,"label");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.81"],[0],this.okBtn,"label");
	}
	var _proto = ConfirmSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._BoxBg1_i(),this._Group1_i(),this.messageTxt_i(),this.closeBtn_i()];
		return t;
	};
	_proto._BoxBg1_i = function () {
		var t = new two.BoxBg();
		this._BoxBg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 325;
		t.skinName = "two.BoxBgSkin";
		t.width = 482;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 328.99;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.cancelBtn_i(),this.okBtn_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Button();
		this.cancelBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.icon = "btn_orange_03_png";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "ButtonPinkSkin";
		t.width = 252;
		t.x = 0;
		t.y = -14;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.icon = "ui_shipin_png";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "ButtonIconSkin";
		t.width = 252;
		t.x = 349;
		t.y = -14;
		return t;
	};
	_proto.messageTxt_i = function () {
		var t = new eui.Label();
		this.messageTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 215;
		t.size = 20;
		t.text = "匹配中，请稍候";
		t.textAlign = "center";
		t.textColor = 0xbc6127;
		t.verticalAlign = "middle";
		t.width = 418;
		t.x = 32.5;
		t.y = 91.5;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.height = 56;
		t.icon = "btn_gb_png";
		t.label = "";
		t.skinName = "ButtonScaleSkin";
		t.width = 56;
		t.x = 411;
		t.y = 13.5;
		return t;
	};
	return ConfirmSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/DirectionPanel.exml'] = window.two.DirectionPanelSkin = (function (_super) {
	__extends(DirectionPanelSkin, _super);
	function DirectionPanelSkin() {
		_super.call(this);
		this.skinParts = ["directGp2","time"];
		
		this.elementsContent = [this._Group1_i(),this.time_i()];
	}
	var _proto = DirectionPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.rotation = 180;
		t.x = 114;
		t.y = 114;
		t.elementsContent = [this._Image1_i(),this.directGp2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "room_center_png";
		t.x = 4.01;
		t.y = 4.01;
		return t;
	};
	_proto.directGp2_i = function () {
		var t = new eui.Group();
		this.directGp2 = t;
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 53.75;
		t.height = 114;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 59.01;
		t.y = 57.76;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "room_ceast2_png";
		t.x = 0.86;
		t.y = 0.86;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.rotation = 0;
		t.source = "room_csouth2_png";
		t.x = 1.99;
		t.y = -0.14;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 7;
		t.horizontalCenter = -2;
		t.rotation = 0;
		t.source = "room_cwest2_png";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.right = 6;
		t.rotation = 0;
		t.source = "room_cnorth2_png";
		t.verticalCenter = -3;
		return t;
	};
	_proto.time_i = function () {
		var t = new two.TimePanel();
		this.time = t;
		t.horizontalCenter = -1;
		t.skinName = "TimePanelSkin";
		t.y = 41;
		return t;
	};
	return DirectionPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/ErrorTip.exml'] = window.ErrorTipSkin = (function (_super) {
	__extends(ErrorTipSkin, _super);
	function ErrorTipSkin() {
		_super.call(this);
		this.skinParts = ["messageTxt"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ErrorTipSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.messageTxt_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = -20;
		t.right = -20;
		t.source = "laba_di_png";
		t.top = 0;
		return t;
	};
	_proto.messageTxt_i = function () {
		var t = new eui.Label();
		this.messageTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 9;
		t.left = 9;
		t.maxWidth = 600;
		t.right = 12;
		t.stroke = 1;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.top = 10;
		t.verticalAlign = "middle";
		return t;
	};
	return ErrorTipSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/Hall.exml'] = window.HallSkin = (function (_super) {
	__extends(HallSkin, _super);
	function HallSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._RoomSelectView1_i()];
	}
	var _proto = HallSkin.prototype;

	_proto._RoomSelectView1_i = function () {
		var t = new two.RoomSelectView();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.skinName = "RoomSelectViewSkin";
		t.top = 0;
		return t;
	};
	return HallSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/Loader.exml'] = window.two.LoaderSkin = (function (_super) {
	__extends(LoaderSkin, _super);
	var LoaderSkin$Skin5 = 	(function (_super) {
		__extends(LoaderSkin$Skin5, _super);
		function LoaderSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["thumb"];
			
			this.minHeight = 18;
			this.minWidth = 30;
			this.elementsContent = [this._Image1_i(),this.thumb_i()];
		}
		var _proto = LoaderSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "bar_bg_png";
			t.y = 0;
			return t;
		};
		_proto.thumb_i = function () {
			var t = new eui.Image();
			this.thumb = t;
			t.source = "bar_cover_png";
			t.x = 4;
			t.y = 3.5;
			return t;
		};
		return LoaderSkin$Skin5;
	})(eui.Skin);

	function LoaderSkin() {
		_super.call(this);
		this.skinParts = ["bar","txt","thumb"];
		
		this.width = 1280;
		this.elementsContent = [this.bar_i(),this.txt_i(),this.thumb_i()];
	}
	var _proto = LoaderSkin.prototype;

	_proto.bar_i = function () {
		var t = new eui.ProgressBar();
		this.bar = t;
		t.skinName = "skins.ProgressBarSkin";
		t.value = 0;
		t.verticalCenter = 243;
		t.x = 461;
		t.skinName = LoaderSkin$Skin5;
		return t;
	};
	_proto.txt_i = function () {
		var t = new eui.Label();
		this.txt = t;
		t.anchorOffsetX = 0;
		t.size = 46;
		t.text = "正在更新游戏资源 0%";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 170;
		t.width = 551.09;
		t.x = 394;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "bar_dice_png";
		t.verticalCenter = 243;
		t.x = 435.82;
		return t;
	};
	return LoaderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/Loading.exml'] = window.LoadingUISkin = (function (_super) {
	__extends(LoadingUISkin, _super);
	var LoadingUISkin$Skin6 = 	(function (_super) {
		__extends(LoadingUISkin$Skin6, _super);
		function LoadingUISkin$Skin6() {
			_super.call(this);
			this.skinParts = ["thumb"];
			
			this.minHeight = 18;
			this.minWidth = 30;
			this.elementsContent = [this._Image1_i(),this.thumb_i()];
		}
		var _proto = LoadingUISkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "bar_bg_png";
			t.y = 0;
			return t;
		};
		_proto.thumb_i = function () {
			var t = new eui.Image();
			this.thumb = t;
			t.source = "bar_cover_png";
			t.x = 4;
			t.y = 3.5;
			return t;
		};
		return LoadingUISkin$Skin6;
	})(eui.Skin);

	function LoadingUISkin() {
		_super.call(this);
		this.skinParts = ["txt","bar","thumb"];
		
		this.height = 640;
		this.elementsContent = [this._Image1_i(),this.txt_i(),this._Group1_i()];
	}
	var _proto = LoadingUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_hall_jpg";
		t.top = 0;
		return t;
	};
	_proto.txt_i = function () {
		var t = new eui.Label();
		this.txt = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -0.5;
		t.size = 30;
		t.text = "正在更新游戏资源 0%";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 551.09;
		t.y = 367;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 54;
		t.horizontalCenter = -1;
		t.width = 416;
		t.y = 405;
		t.elementsContent = [this.bar_i(),this.thumb_i()];
		return t;
	};
	_proto.bar_i = function () {
		var t = new eui.ProgressBar();
		this.bar = t;
		t.height = 36;
		t.skinName = "skins.ProgressBarSkin";
		t.value = 0;
		t.width = 416;
		t.x = 0;
		t.y = 0;
		t.skinName = LoadingUISkin$Skin6;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 32;
		t.source = "bar_dice_png";
		t.x = 2;
		t.y = 22;
		return t;
	};
	return LoadingUISkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/LoginView.exml'] = window.LoginViewSkin = (function (_super) {
	__extends(LoginViewSkin, _super);
	function LoginViewSkin() {
		_super.call(this);
		this.skinParts = ["weixinBtn","rect"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this.weixinBtn_i(),this.rect_i()];
	}
	var _proto = LoginViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_hall_jpg";
		t.top = 0;
		return t;
	};
	_proto.weixinBtn_i = function () {
		var t = new eui.Button();
		this.weixinBtn = t;
		t.height = 127;
		t.horizontalCenter = 0;
		t.icon = "login_btn_wx_png";
		t.label = "";
		t.skinName = "ButtonScaleSkin";
		t.verticalCenter = 83.5;
		t.width = 415;
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 54;
		t.horizontalCenter = 17.5;
		t.verticalCenter = 229;
		t.visible = false;
		t.width = 205;
		return t;
	};
	return LoginViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/MessageTip.exml'] = window.MessageTipSkin = (function (_super) {
	__extends(MessageTipSkin, _super);
	function MessageTipSkin() {
		_super.call(this);
		this.skinParts = ["noticeTxt","noticeGp"];
		
		this.elementsContent = [this._Image1_i(),this.noticeGp_i()];
	}
	var _proto = MessageTipSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hall_marque_png";
		return t;
	};
	_proto.noticeGp_i = function () {
		var t = new eui.Group();
		this.noticeGp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.horizontalCenter = 0;
		t.width = 590;
		t.y = 0;
		t.elementsContent = [this.noticeTxt_i()];
		return t;
	};
	_proto.noticeTxt_i = function () {
		var t = new eui.Label();
		this.noticeTxt = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Label";
		t.y = 13;
		return t;
	};
	return MessageTipSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/NameView.exml'] = window.NameViewSkin = (function (_super) {
	__extends(NameViewSkin, _super);
	function NameViewSkin() {
		_super.call(this);
		this.skinParts = ["inputTxt","okBtn"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = NameViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.inputTxt_i(),this.okBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 286.86;
		t.scale9Grid = new egret.Rectangle(79,86,136,124);
		t.source = "box_bg_min_png";
		t.width = 580.28;
		return t;
	};
	_proto.inputTxt_i = function () {
		var t = new eui.EditableText();
		this.inputTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.border = true;
		t.height = 103;
		t.prompt = "请输入用户名";
		t.size = 40;
		t.text = "";
		t.textColor = 0x612e0d;
		t.width = 411;
		t.x = 85;
		t.y = 59.43;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.anchorOffsetX = 0;
		t.label = "确定";
		t.skinName = "skins.ButtonSkin";
		t.x = 153;
		t.y = 173;
		return t;
	};
	return NameViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/ReconnectingView.exml'] = window.ReconnectingViewSkin = (function (_super) {
	__extends(ReconnectingViewSkin, _super);
	function ReconnectingViewSkin() {
		_super.call(this);
		this.skinParts = ["textTxt"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group1_i()];
		this.textTxt_i();
		
		this._Label1_i();
		
		this._Label2_i();
		
		this.states = [
			new eui.State ("timer",
				[
					new eui.AddItems("textTxt","_Group1",1,""),
					new eui.AddItems("_Label2","_Group1",1,"")
				])
			,
			new eui.State ("error",
				[
					new eui.AddItems("_Label1","_Group1",1,""),
					new eui.SetProperty("textTxt","text","网络连接失败，请检查您的网络设置"),
					new eui.SetProperty("textTxt","horizontalCenter",0),
					new eui.SetProperty("textTxt","verticalCenter",0),
					new eui.SetProperty("_Group1","anchorOffsetX",0),
					new eui.SetProperty("_Group1","width",610.61),
					new eui.SetProperty("_Group1","x",288.03),
					new eui.SetProperty("_Group1","y",216.67)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.lang.49"],[0],this.textTxt,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.48"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.lang.47"],[0],this._Label2,"text");
	}
	var _proto = ReconnectingViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 509.09;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 198.48;
		t.horizontalCenter = 0;
		t.source = "laba_di_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.textTxt_i = function () {
		var t = new eui.Label();
		this.textTxt = t;
		t.horizontalCenter = 0.4550000000000125;
		t.y = 106;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0.4550000000000125;
		t.verticalCenter = 3;
		t.y = 113;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.horizontalCenter = 0.4550000000000125;
		t.size = 40;
		t.textColor = 0xf9d189;
		t.y = 21.18;
		return t;
	};
	return ReconnectingViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/ReloadingView.exml'] = window.ReloadingViewSkin = (function (_super) {
	__extends(ReloadingViewSkin, _super);
	function ReloadingViewSkin() {
		_super.call(this);
		this.skinParts = ["txt","loadingIcon"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ReloadingViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.txt_i(),this.loadingIcon_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 285.86;
		t.scale9Grid = new egret.Rectangle(78,85,134,118);
		t.source = "box_bg_min_png";
		t.width = 574.28;
		t.y = 1.57;
		return t;
	};
	_proto.txt_i = function () {
		var t = new eui.Label();
		this.txt = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "努力连接中，请稍后";
		t.textAlign = "center";
		t.textColor = 0x7f440a;
		t.verticalAlign = "middle";
		t.width = 367.09;
		t.x = 110.13;
		t.y = 76;
		return t;
	};
	_proto.loadingIcon_i = function () {
		var t = new eui.Image();
		this.loadingIcon = t;
		t.anchorOffsetX = 37;
		t.anchorOffsetY = 40;
		t.source = "loading_2_png";
		t.x = 293.68;
		t.y = 184.5;
		return t;
	};
	return ReloadingViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/RuleDesItem.exml'] = window.RuleDesItemSkin = (function (_super) {
	__extends(RuleDesItemSkin, _super);
	function RuleDesItemSkin() {
		_super.call(this);
		this.skinParts = ["txt"];
		
		this.elementsContent = [this.txt_i()];
	}
	var _proto = RuleDesItemSkin.prototype;

	_proto.txt_i = function () {
		var t = new eui.Label();
		this.txt = t;
		t.bottom = 0;
		t.left = 0;
		t.lineSpacing = 6;
		t.right = 0;
		t.size = 16;
		t.text = "Label";
		t.textColor = 0xcbb79d;
		t.top = 0;
		return t;
	};
	return RuleDesItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/RulePanel.exml'] = window.two.RulePanelSkin = (function (_super) {
	__extends(RulePanelSkin, _super);
	function RulePanelSkin() {
		_super.call(this);
		this.skinParts = ["ruleGp","ruleScroller","closeBtn"];
		
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.lang.27"],[0],this._Label1,"text");
	}
	var _proto = RulePanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.ruleScroller_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 460;
		t.scale9Grid = new egret.Rectangle(78,140,472,217);
		t.source = "bg_box_1_png";
		t.width = 795;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 1;
		t.size = 32;
		t.textColor = 0xeac681;
		t.y = 24;
		return t;
	};
	_proto.ruleScroller_i = function () {
		var t = new eui.Scroller();
		this.ruleScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 356;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 771;
		t.x = 11;
		t.y = 83.08;
		t.viewport = this.ruleGp_i();
		return t;
	};
	_proto.ruleGp_i = function () {
		var t = new two.RuleDesGroup();
		this.ruleGp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 607.91;
		t.width = 790;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "justify";
		t.paddingBottom = 10;
		t.paddingLeft = 10;
		t.paddingRight = 10;
		t.paddingTop = 10;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.icon = "btn_gb_png";
		t.label = "";
		t.right = 13;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ButtonScaleSkin";
		t.top = 12;
		t.width = 56;
		t.x = 1143;
		t.y = -27;
		return t;
	};
	return RulePanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/Setting.exml'] = window.SettingSkin = (function (_super) {
	__extends(SettingSkin, _super);
	var SettingSkin$Skin7 = 	(function (_super) {
		__extends(SettingSkin$Skin7, _super);
		function SettingSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","musicNormal_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","musicDisable_png")
					])
			];
		}
		var _proto = SettingSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "musicDisable_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SettingSkin$Skin7;
	})(eui.Skin);

	var SettingSkin$Skin8 = 	(function (_super) {
		__extends(SettingSkin$Skin8, _super);
		function SettingSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","effectNormal_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","effectDisable_png")
					])
			];
		}
		var _proto = SettingSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "effectDisable_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SettingSkin$Skin8;
	})(eui.Skin);

	function SettingSkin() {
		_super.call(this);
		this.skinParts = ["okBtn","dismissBtn","exitBtn","musicBtn","musicSlider","soundSlider","soundBtn"];
		
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.lang.66"],[0],this._BoxBg1,"title");
	}
	var _proto = SettingSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._BoxBg1_i(),this.okBtn_i(),this._Group1_i(),this._Image1_i(),this.musicBtn_i(),this.musicSlider_i(),this._Image2_i(),this.soundSlider_i(),this.soundBtn_i()];
		return t;
	};
	_proto._BoxBg1_i = function () {
		var t = new two.BoxBg();
		this._BoxBg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 428;
		t.skinName = "two.BoxBgSkin";
		t.width = 632;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.height = 56;
		t.icon = "btn_gb_png";
		t.label = "";
		t.right = 13;
		t.skinName = "ButtonScaleSkin";
		t.width = 56;
		t.y = 15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 237;
		t.y = 347.15;
		t.elementsContent = [this.dismissBtn_i(),this.exitBtn_i()];
		return t;
	};
	_proto.dismissBtn_i = function () {
		var t = new eui.Button();
		this.dismissBtn = t;
		t.label = "申请解散房间";
		t.skinName = "skins.ButtonSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.exitBtn_i = function () {
		var t = new eui.Button();
		this.exitBtn = t;
		t.label = "退出登录";
		t.skinName = "skins.ButtonSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "setting_music_png";
		t.x = 53.37;
		t.y = 162.63;
		return t;
	};
	_proto.musicBtn_i = function () {
		var t = new eui.ToggleButton();
		this.musicBtn = t;
		t.label = "";
		t.x = 510.03;
		t.y = 139;
		t.skinName = SettingSkin$Skin7;
		return t;
	};
	_proto.musicSlider_i = function () {
		var t = new eui.HSlider();
		this.musicSlider = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.maximum = 100;
		t.value = 10;
		t.x = 176.03;
		t.y = 152.63;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "setting_effect_png";
		t.x = 53.37;
		t.y = 298.35;
		return t;
	};
	_proto.soundSlider_i = function () {
		var t = new eui.HSlider();
		this.soundSlider = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.maximum = 100;
		t.value = 10;
		t.x = 176.03;
		t.y = 289.35;
		return t;
	};
	_proto.soundBtn_i = function () {
		var t = new eui.ToggleButton();
		this.soundBtn = t;
		t.label = "";
		t.x = 510.03;
		t.y = 280.04;
		t.skinName = SettingSkin$Skin8;
		return t;
	};
	return SettingSkin;
})(eui.Skin);
var __reflect=this&&this.__reflect||function(t,e,o){t.__class__=e,o?o.push(e):o=[e],t.__types__=t.__types__?o.concat(t.__types__):o},__extends=this&&this.__extends||function(t,e){function o(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);o.prototype=e.prototype,t.prototype=new o},two;!function(t){var e=function(){function t(){}return t.prototype.execute=function(t){},t.prototype.destroy=function(){},t.prototype.execEnd=function(){one.monitor.emit("onExecNext",null)},t}();t.BaseCommand=e,__reflect(e.prototype,"two.BaseCommand",["two.ICommand"]);var o=function(){function t(){this.cmds={}}return t.prototype.execute=function(t,e){this.cmds[t]||console.log(t,e),this.cmds[t].execute(e)},t.prototype.addCommand=function(t,e){this.cmds[t]=e},t.prototype.destroy=function(){for(var t in this.cmds)this.cmds[t].destroy()},t.prototype.clear=function(){for(var t in this.cmds)this.cmds[t].destroy();this.cmds={}},t}();t.CommandManager=o,__reflect(o.prototype,"two.CommandManager"),t.cmdManager=new o}(two||(two={}));var two;!function(t){var e;!function(t){var e=function(){function t(){}return t.getMethodList=function(){return[{min:100,score:15,join:10,mgid:1},{min:500,score:60,join:50,mgid:2},{min:1e3,score:150,join:100,mgid:3}]},t.getMyUser=function(){var t=egret.localStorage.getItem("DDZ_DJ_User");if(t)return JSON.parse(t);var e={uid:"1",name:"游客"+one.randomInt(111111,999999),sex:2,pic:"",cash:1e3};return egret.localStorage.setItem("DDZ_DJ_User",JSON.stringify(e)),e},t.getRoomInfo=function(){var t=egret.localStorage.getItem("DDZ_DJ_RoomInfo");return t?JSON.parse(t):null},t.saveRoomInfo=function(t){egret.localStorage.setItem("DDZ_DJ_RoomInfo",JSON.stringify(t))},t.saveData=function(t){var e=this.getMyUser();e.cash=t,egret.localStorage.setItem("DDZ_DJ_User",JSON.stringify(e))},t.saveOtherData=function(t,e){o[parseInt(t)-1001][4]=e,egret.localStorage.setItem("DDZ_DJ_User_others",JSON.stringify(o))},t.prototype.getUsers=function(){if(null==this.usersData){var e=egret.localStorage.getItem("DDZ_DJ_User_others");e?o=JSON.parse(e):egret.localStorage.setItem("DDZ_DJ_User_others",JSON.stringify(o)),this.usersData=[];for(var n=0;n<o.length;n++)this.usersData.push({uid:o[n][0]+"",name:o[n][1]+"",sex:parseInt(o[n][2]+""),pic:o[n][3]+"",cash:parseInt(o[n][4]+"")})}var i=one.randomInts(0,this.usersData.length-1,2),r=this.usersData[i[0]];r.cash<5e3&&(r.cash=one.randomInt(5e3,2e4));var s=this.usersData[i[1]];s.cash<5e3&&(s.cash=one.randomInt(5e3,2e4));var a=[t.getMyUser(),r,s];return a},t.prototype.getUserData=function(t,e){var o={cash:t.cash,failNum:0,index:e,ip:"",isLeave:!1,isQuit:!1,name:t.name,pic:t.pic,score:-1,sex:1,uid:t.uid,winNum:0,mingpai:0,isJoinNewGame:0,trusteeship:0,isMatch:!0};return o},t.prototype.getMatchRoom=function(t){var e=this.getUsers(),o=10,n=[this.getUserData(e[0],0),this.getUserData(e[1],1),this.getUserData(e[2],2)],i=one.randomInt(0,10)<5?0:one.randomInt(1,2),r={rid:657699,mgid:t,roomType:2,memberInfo:n,firstUidIdx:i,currentUidIdx:i,userPaiData:[{index:0,pais:[],cash:100},{index:1,pais:[],cash:100},{index:2,pais:[],cash:100}],outPaiData:[],score:-1,"double":1,bottomCards:[],status:0,cdTime:o,owner:null};return r},t.prototype.getFetchCards=function(){var t=[1,2,3,4,5,6,7,8,9,10,11,12,13,21,22,23,24,25,26,27,28,29,30,31,32,33,41,42,43,44,45,46,47,48,49,50,51,52,53,61,62,63,64,65,66,67,68,69,70,71,72,73,116,117];one.shuffleArray(t);var e=[];return e.push(t.splice(0,17)),e.push(t.splice(0,17)),e.push(t.splice(0,17)),e.push(t),e},t}();t.SingleServerUtils=e,__reflect(e.prototype,"two.ddz.SingleServerUtils");var o=[[1001,"IFPB791",2,"","13164.00"],[1002,"DanielTorresSua",2,"/avatar/1002/20190416133316_3UqOls","72.00"],[1003,"Maracaiboso",2,"/avatar/1003/20190416133317_2QT4iE","10451.00"],[1004,"maury317",2,"/avatar/1004/20190416133318_5Uv7QC","4.00"],[1005,"DanHerreraSLD",2,"/avatar/1005/20190416133318_cyWMOA","391.00"],[1006,"EmyAnn_",2,"/avatar/1006/20190416133319_Adi2xc","224.00"],[1007,"hotlinxgrl",2,"/avatar/1007/20190416133319_YH4uIf","532.00"],[1008,"nairobi_matriar",2,"/avatar/1008/20190416133319_6uyAyT","10353.00"],[1009,"armardn_gabs",2,"/avatar/1009/20190416133321_5uPijw","10111.00"],[1010,"jiminfancy",2,"/avatar/1010/20190416133322_rMHTwA","8572.00"],[1011,"Karly_Coniet",2,"/avatar/1011/20190416133322_SlXiav","819108.00"],[1012,"Facupaschetta1",2,"/avatar/1012/20190416133322_XQIzu5","18621.00"],[1013,"purpiola",2,"/avatar/1013/20190416133323_b1xNWz","859.00"],[1014,"ZahirParra",2,"/avatar/1014/20190416133323_m6Ckna","7997.00"],[1015,"LittlePeggy__",2,"/avatar/1015/20190416133323_7Sk7B2","110140.00"],[1016,"cordy28",2,"/avatar/1016/20190416133324_RnnUr4","91.00"],[1017,"Miguelforastero",2,"/avatar/1017/20190416133324_iZmtnt","0.00"],[1018,"1946CAPITALINA",2,"/avatar/1018/20190416133325_Srsoks","229.00"],[1019,"Itsdavidgonz",2,"/avatar/1019/20190416133325_TXSIrd","637.00"],[1020,"Manuelsitoou",2,"/avatar/1020/20190416133325_SCTAKG","890.00"],[1021,"rolsovitch",2,"/avatar/1021/20190416133326_Ry7XHM","0.00"],[1022,"LilSquare_",2,"/avatar/1022/20190416133326_IUQOpA","19887.00"],[1023,"lumonaldi28",2,"/avatar/1023/20190416133326_hfla2S","50527.00"],[1024,"AR9722",2,"/avatar/1024/20190416133327_ahOof3","277520.00"],[1025,"valeeahre__",2,"/avatar/1025/20190416133327_2Nqnfr","11329.00"],[1026,"p4nzerschreck",2,"/avatar/1026/20190416133327_98EW0u","20.00"],[1027,"winterdowney",2,"/avatar/1027/20190416133328_rPzhbv","79.00"],[1028,"Mishelgu21",2,"/avatar/1028/20190416133328_0VlslI","10867.00"],[1029,"suarezftmaure",2,"/avatar/1029/20190416133328_CnNBdh","9130.00"],[1030,"cndixpelotud0",2,"/avatar/1030/20190416133329_7z9BEk","10128.00"],[1031,"rosupportmillie",2,"/avatar/1031/20190416133329_ZbQWsh","9661.00"],[1032,"Fiamy6",2,"/avatar/1032/20190416133330_BpSkEq","10545.00"],[1033,"William54535348",2,"/avatar/1033/20190416133330_I08FbZ","611.00"],[1034,"ChicaDeJeans",2,"/avatar/1034/20190416133330_GcEbKE","466.00"],[1035,"InseparableJB",2,"/avatar/1035/20190416133331_KTEx31","340.00"],[1036,"xFusionPothala",2,"/avatar/1036/20190416133331_tRpwFi","263.00"],[1037,"squarexkovacs",2,"/avatar/1037/20190416133331_hU6pnb","617.00"],[1038,"J___oordi",2,"/avatar/1038/20190416133332_bp0jtk","547.00"],[1039,"cringemaann",2,"/avatar/1039/20190416133332_CtB6WC","839.00"],[1040,"aihyug",2,"/avatar/1040/20190416133332_kPVTy8","10171.00"],[1041,"sofiaboldrinii",2,"/avatar/1041/20190416133333_Zm2377","10070.00"],[1042,"zully_magaly",2,"/avatar/1042/20190416133333_qGUhNp","11217.00"],[1043,"alonewave",2,"/avatar/1043/20190416133333_DSKq4h","10613.00"],[1044,"NovaVsz",2,"/avatar/1044/20190416133334_bmFEbB","723.00"],[1045,"definexlarrie",2,"/avatar/1045/20190416133334_SCym1f","1016.00"],[1046,"inemei",2,"/avatar/1046/20190416133335_h9dfcK","11023.00"],[1047,"Natabonora",2,"/avatar/1047/20190416133335_Cplv5t","11671.00"],[1048,"Sarajua2",2,"/avatar/1048/20190416133336_Cdyycz","11040.00"],[1049,"sofiasalinasr",2,"/avatar/1049/20190416133336_RlVZon","10032.00"],[1050,"keilaszxo",2,"/avatar/1050/20190416133336_5yuNUr","329.00"],[1051,"FR52062982",2,"/avatar/1051/20190416133337_dKEMHK","11275.00"],[1052,"secret_jhong",2,"/avatar/1052/20190416133337_siuyNL","415.00"],[1053,"MIRAVOSCHE27",2,"/avatar/1053/20190416133337_INbW45","987.00"],[1054,"chiaronga",2,"/avatar/1054/20190416133338_EAHWud","8710.00"],[1055,"Feels_Rush",2,"/avatar/1055/20190416133338_k8t2R8","785.00"],[1056,"ecmhx",2,"/avatar/1056/20190416133338_oUqa73","12817.00"],[1057,"JulioLarrainGon",2,"/avatar/1057/20190416133339_kmdWkd","676.00"],[1058,"anmapas_",2,"/avatar/1058/20190416133339_8nZib4","10364.00"],[1059,"ValeAguiera",2,"/avatar/1059/20190416133340_YuTwdy","11272.00"],[1060,"HUMORyCHlSTES",2,"/avatar/1060/20190416133340_FNhAhP","10016.00"],[1061,"ElGuason417",2,"/avatar/1061/20190416133340_SavtGO","10876.00"],[1062,"SezartGP",2,"/avatar/1062/20190416133341_Ac8oM8","10546.00"],[1063,"ElizPe",2,"/avatar/1063/20190416133341_hs0Ikh","11716.00"],[1064,"CamilaBentosela",2,"/avatar/1064/20190416133342_iUzOiZ","83.00"],[1065,"marivigato",2,"/avatar/1065/20190416133342_JPSSt7","439.00"],[1066,"rub3l4ng3lpeola",2,"/avatar/1066/20190416133342_uUt9CC","304.00"],[1067,"luci_luquez",2,"/avatar/1067/20190416133343_1o0Zx8","385.00"],[1068,"tylerrpetero",2,"/avatar/1068/20190416133343_zsZvUm","637.00"],[1069,"flormistro",2,"/avatar/1069/20190416133343_XQXHVv","1068.00"],[1070,"Nadin186",2,"/avatar/1070/20190416133344_FBeImh","599.00"],[1071,"KimMicheelle",2,"/avatar/1071/20190416133344_3GiETU","4.00"],[1072,"elsatr57",2,"/avatar/1072/20190416133344_1bgbQV","11012.00"],[1073,"Samantha_Mtz",2,"/avatar/1073/20190416133345_ttp6iw","10716.00"],[1074,"groundfuxixi",2,"/avatar/1074/20190416133345_kUXzaQ","11000.00"],[1075,"_ValeSoto_",2,"/avatar/1075/20190416133345_MJBbtr","241.00"],[1076,"BargasNayu",2,"/avatar/1076/20190416133346_IQuPLj","10085.00"],[1077,"danger_killjoys",2,"/avatar/1077/20190416133346_GPPDy1","11739.00"],[1078,"milenesah",2,"/avatar/1078/20190416133346_fapGLE","483.00"],[1079,"AgrettiAdriel",2,"/avatar/1079/20190416133347_lBQveT","9991.00"],[1080,"adrisabella2012",2,"/avatar/1080/20190416133348_mIB5xX","392.00"],[1081,"Lexca_feh1",2,"/avatar/1081/20190416133348_Iq5aCJ","380.00"],[1082,"mAgenta_____",2,"/avatar/1082/20190416133349_xZ7TOv","12113.00"],[1083,"SUPERKAR025",2,"/avatar/1083/20190416133349_D7nPkr","122.00"],[1084,"tamarakapitula",2,"/avatar/1084/20190416133349_KXHhcT","828.00"],[1085,"Ch7654_",2,"/avatar/1085/20190416133350_JIjvMA","10843.00"],[1086,"vantebyeol",2,"/avatar/1086/20190416133350_UeJhFa","11136.00"],[1087,"Macaaaaaaaarena",2,"/avatar/1087/20190416133351_JGkeZ8","211.00"],[1088,"WINWlSM",2,"/avatar/1088/20190416133351_u8ajdX","507.00"],[1089,"sebaAIDS",2,"/avatar/1089/20190416133351_u2z3W4","10572.00"],[1090,"andrea_tamargo",2,"/avatar/1090/20190416133352_08IhAJ","10350.00"],[1091,"xmfstxr",2,"/avatar/1091/20190416133352_IqHHpt","10377.00"],[1092,"nacchanlegs",2,"/avatar/1092/20190416133353_lzyeYA","10440.00"],[1093,"Enzo_Julian_",2,"/avatar/1093/20190416133353_VbTXaf","147.00"],[1094,"InaCarpp",2,"/avatar/1094/20190416133353_8H5fE5","360.00"],[1095,"capamachos",2,"/avatar/1095/20190416133354_9Mi86M","10347.00"],[1096,"belettapaula",2,"/avatar/1096/20190416133354_E1LLuS","10645.00"],[1097,"bazwitch",2,"/avatar/1097/20190416133354_RtSeBq","689.00"],[1098,"beyxndwxrds",2,"/avatar/1098/20190416133355_JiOF7Y","190.00"],[1099,"Juan__Pab",2,"/avatar/1099/20190416133355_qpNCnf","475.00"],[1100,"LuisAcostaMtz1",2,"/avatar/1100/20190416133356_RIVKSv","640.00"]]}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(e){function o(o){var i=e.tableVO.getRealSeatByIndex(o);switch(i){case 0:return{stand:n.bStand,lay:n.bLay,dic:t.Direction.BOTTOM};case 1:return{stand:n.rStand,lay:n.rLay,dic:t.Direction.RIGHT};case 2:return{stand:n.lStand,lay:n.lLay,dic:t.Direction.LEFT}}}var n;e.getStandByIndex=o;var i=function(o){function i(){return o.call(this,"ddz.TableSkin")||this}return __extends(i,o),i.prototype.initDiPool=function(){for(var t=e.tableVO.diPool,o=0;o<t.length&&3>o;o++)this.diGp.getChildAt(o).card=t[o]},i.prototype.showDiPool=function(){for(var o=e.tableVO.diPool,n=0;n<o.length&&3>n;n++)this.showCard(o[n],this.diGp.getChildAt(n));this.txt_score.text=t.Play_joinRoomProxy.getInstance().getCurrentMethod().score+""},i.prototype.showCard=function(t,e){return e.card>0?void(e.card=t):void egret.Tween.get(e).to({scaleX:0},200).call(function(){e.card=t},this).to({scaleX:.5},200)},i.prototype.getCardStr=function(t){switch(t){case 1:case 14:return"A";case 11:return"J";case 12:return"Q";case 13:return"K";default:return t+""}},i.prototype.created=function(){o.prototype.created.call(this),this.clock=new t.ClockPanel,this.clock.horizontalCenter=0,n=this,one.monitor.on("gameStart",this.gameStarted,this),one.monitor.on("gameEnd",this.gameEnd,this),one.monitor.on("playingLeftTime",this.onPlayingLeftTime,this),this.roundCtr=new t.RoundCtr(this.numTxt,this.juTxt),this.roomTxt&&(this.roomTxt.text="房间号 "+e.tableVO.roomID),this.goldTxt.text=t.formatCash(e.tableVO.users[e.tableVO.ownPos].cash),this.manager=new e.Manager,this.manager.init(),this.goldTxt.text=t.formatCash(e.tableVO.users[e.tableVO.ownPos].cash),this.txt_score.text=t.Play_joinRoomProxy.getInstance().getCurrentMethod().score+""},i.prototype.removed=function(){o.prototype.removed.call(this),one.monitor.off("gameStart",this.gameStarted,this),one.monitor.off("gameEnd",this.gameEnd,this),one.monitor.off("playingLeftTime",this.onPlayingLeftTime,this),n=null,this.manager.destroy(),this.roundCtr.destroy(),this.roundCtr=null,this.manager=null},i.prototype.onPlayingLeftTime=function(o){if(o.leftSecond<=0)return void t.removeSelf(this.clock);this.clock.setEndTime(o.leftSecond);var n=e.tableVO.getRealSeatByIndex(o.index);1==n?(this.rLay.setIcon(this.clock),this.clock.scaleX=this.clock.scaleY=1/this.rLay.scaleX):2==n?(this.lLay.setIcon(this.clock),this.clock.scaleX=this.clock.scaleY=1/this.lLay.scaleX):(this.clock.scaleX=this.clock.scaleY=1,this.confirm.addClock(this.clock))},i.prototype.gameStarted=function(){this.goldTxt.text=t.formatCash(e.tableVO.users[e.tableVO.ownPos].cash),this.txt_score.text=t.Play_joinRoomProxy.getInstance().getCurrentMethod().score+""},i.prototype.gameEnd=function(){this.goldTxt.text=t.formatCash(e.tableVO.users[e.tableVO.ownPos].cash),this.txt_score.text=t.Play_joinRoomProxy.getInstance().getCurrentMethod().score+"",this.doubleTxt.text="1";for(var o=0;3>o;o++)this.diGp.getChildAt(o).card=0},i}(t.BaseLangComponent);e.BaseTable=i,__reflect(i.prototype,"two.ddz.BaseTable")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(){function o(t){this.routes={},this.pomelo=t}return o.prototype.getRealMessage=function(t,o){var n=e.getSecret();if(o.time=n.time,o.token=n.md5,o.target=t,one.getCookie("QnmAuth")){for(var i=["o","p","b","d","t","v","a","u","i","w"],r="",s=one.getOption("userId"),a=0;a<s.length;a++)r+=i[s[a]];for(var c=Math.floor(Date.now()/1e3),h=c.toString(),l="",a=0;a<h.length;a++)l+=i[h[a]];r+="_"+l,o.checkStr=r,o.appId=one.getOption("appId")}else if(one.getOption("userId")){for(var i=["o","p","b","d","t","v","a","u","i","w"],r="",s=one.getOption("userId"),a=0;a<s.length;a++)r+=i[s[a]];for(var c=Math.floor(Date.now()/1e3),h=c.toString(),l="",a=0;a<h.length;a++)l+=i[h[a]];r+="_"+l,o.checkStr=r,o.appId=one.getOption("appId")}return one.getOption("state")&&(o.mobile=e.getMobileID(),o.state=one.getOption("state"),o.sign=one.getOption("sign")),o},o.prototype.sendData=function(o,n,i,r){var s=this;if(i=!1,null==this.routes[o]&&(this.routes[o]=[]),this.routes[o].push(r),!(this.routes[o].length>=2)){n=this.getRealMessage(o,n);var a,c=0,h=!1,l=function(e){h||(h=!0,egret.clearTimeout(a),t.conUtils.addMessage("respondData route "+o+" "+JSON.stringify(e)),s.dealRespond(o,e))},u=function(){t.conUtils.addMessage("sendData route "+o+" "+JSON.stringify(n)),a=egret.setTimeout(function(){t.conUtils.addMessage("respondData route "+o+" timeout"),c++,c>=1?(h=!0,e.socketProxy.reConnect(function(){c=0,h=!1,i&&u()}),i||s.dealRespond(o,{code:9999})):u()},s,5e3),!n.userId,s.pomelo.request(o,n,l)};u()}},o.prototype.dealRespond=function(t,o){if(e.dealErrorCode(o.code,o.msg),this.routes[t]){for(var n=[],i=0;i<this.routes[t].length;i++){var r=this.routes[t][i];r&&n.push(r)}delete this.routes[t];for(var i=0;i<n.length;i++){var r=n[i];r&&r(o)}}},o.prototype.clear=function(){this.routes={}},o}();e.PomeloSend=o,__reflect(o.prototype,"two.net.PomeloSend")}(e=t.net||(t.net={}))}(two||(two={}));var two;!function(t){var e=function(){function e(){this.playList=[],this.playCallList=[]}return e.prototype.createRoom=function(e,o){var n=this;t.net.pomeloProxy.sendData("play/createRoom",e,!1,function(t){n.onEnterRoome(t,o)})},e.prototype.joinRoom=function(e,o){var n=this;t.net.pomeloProxy.sendData("play/joinRoom",e,!1,function(t){n.onEnterRoome(t,o)})},e.prototype.onEnterRoome=function(e,o){1005==e.code?t.userVO.clearRoom():200==e.code&&(t.tableVO.tableData=e.data,t.tableVO.tableData.rid=e.data.rid,t.tableVO.tableData.gid=e.data.gid,t.userVO.userInfo.rid=e.data.rid,t.userVO.userInfo.gid=e.data.gid),o&&o(e)},e.prototype.quitRoom=function(e){t.net.pomeloProxy.sendData("play/quit",{rid:t.tableVO.tableData.rid},!1,function(o){null!=o.rid&&(t.userVO.userInfo.rid=o.rid),e(o)})},e.prototype.dismissRoom=function(e){t.net.pomeloProxy.sendData("play/disbandRoom",{rid:t.tableVO.tableData.rid},!1,function(t){e(t)})},e.prototype.applyDismissRoom=function(e){t.net.pomeloProxy.sendData("play/disbandRoom",{rid:t.tableVO.tableData.rid},!1,function(t){e(t)})},e.prototype.answerDisband=function(e,o){t.net.pomeloProxy.sendData("play/answerDisband",{type:e,rid:t.userVO.userInfo.rid},!0,o)},e.prototype.chat=function(e,o){one.monitor.emit("onLocalRoomChat",{message:e,fromIdx:t.tableVO.tableData.index}),t.Play_chatProxy.getInstance().send({message:e,rid:t.tableVO.tableData.rid})},e.prototype.play=function(e,o){if(void 0===o&&(o=!0),t.currentPageType!=t.SceneType.REPLAY&&(t.conUtils.addMessage("play1  "+JSON.stringify(e)+" "+t.tableVO.currentStep+" "+t.tableVO.maxStep+" "+t.tableVO.dealStep+" "+t.tableVO.currentStep+" "+JSON.stringify(this.playList)),!(t.tableVO.currentStep<t.tableVO.maxStep||t.tableVO.dealStep==t.tableVO.currentStep))){if(t.tableVO.dealStep=t.tableVO.currentStep,o){var n={step:t.tableVO.maxStep+1,cdTime:15,type:e.type,indexs:[t.tableVO.tableData.index]};switch(e.type){case 2:n.cardIDs=[e.pai,e.cardIdx],one.monitor.emit("onLocalPlay",n);break;case 3:n.cardIDs=[e.pai],one.monitor.emit("onLocalPlay",n);break;case 4:n.cardIDs=[e.pai],one.monitor.emit("onLocalPlay",n);break;case 5:break;case 6:n.cardIDs=[e.pai],one.monitor.emit("onLocalPlay",n)}}e.rid=t.tableVO.tableData.rid,this.addToActions(e,null)}},e.prototype.addToActions=function(e,o){e.playTimes=t.tableVO.tableData.playTimes,this.playList.push(e),this.playCallList.push(o),this.playList.length>1||this.sendAction()},e.prototype.sendAction=function(){var e=this;t.net.pomeloProxy.sendData("play/action",this.playList[0],!1,function(o){if(200==o.code){e.playList.shift();var n=e.playCallList.shift();n&&n(o),e.playList.length>0&&e.sendAction()}else e.playList.length=0,e.playCallList.length=0,t.changePage(t.SceneType.HALL),t.net.socketProxy.reConnect(function(){t.enterRoom({rid:t.userVO.userInfo.rid},null)})})},e.prototype.guo=function(t){this.addToActions(t,null)},e.prototype.sendHttpData=function(e,o,n){t.net.httpSend.sendHttpData(e,o,n)},e}();t.RoomProxy=e,__reflect(e.prototype,"two.RoomProxy")}(two||(two={}));var two;!function(t){var e=function(){function e(){this.needSend=!0,this.proxyType=1,this.needMsg=!1,this.apis=[];var t=egret.getQualifiedClassName(this);this.apiName=t.substring(4,t.length-5)}return e.prototype.responseBefore=function(){},e.prototype.responseAfter=function(){},e.prototype.register=function(t,e){this.requestProxyKey=t,this.requestCode=e},e.prototype.send=function(e,o,n){var i=this;if(this.sendData=e,this.call=o,this.needMsg=n!==!1,this.needSend)if("1"==one.getOption("isSingle")){var r=t.ddz.singleServer.setData(this.apiName,e);one.callLater(function(){i.onResponse(r)},2)}else 1==this.proxyType?t.HttpOperator.Instance().onSendCommonRequest(this.apiName,e,this.onResponse.bind(this)):t.PomeloOperator.Instance().onSendCommonRequest(this.apiName,e,this.onResponse.bind(this));else one.callLater(function(){i.onResponse({code:0,data:{}})},1)},e.prototype.getRequest=function(){return this.sendData},e.prototype.getResponse=function(){return this.proxyData},e.prototype.addRefreshApi=function(t){this.apis.indexOf(t)<0&&this.apis.push(t)},e.prototype.onResponse=function(e){if(200==e.code){this.proxyData=e.data,this.apis=[this.apiName],this.responseBefore();for(var o=this.apis,n=0;n<o.length;n++)t.onRefreshApi(o[n]);this.responseAfter()}else this.needMsg;if(this.call){var i=this.call;this.call=null,i(e)}},e.prototype.saveLocal=function(e,o){egret.localStorage.setItem(t.Storage.getStorageKey(e),JSON.stringify({code:0,msg:"OK",data:o}))},e}();t.BaseProxy=e,__reflect(e.prototype,"two.BaseProxy")}(two||(two={}));var two;!function(t){function e(){t.net.httpSend.clear(),t.net.pomeloProxy.clear(),t.closeAllBoxes(),t.changePage(n.LOGIN)}function o(e,o){var i={rid:e.rid};null!=e.input&&(i.input=e.input),t.net.roomProxy.joinRoom(i,function(e){200==e.code&&t.changePage(n.TABLE),o&&o(e)})}var n=function(){function t(){}return t.HALL="hall",t.TABLE="table",t.REPLAY="replay",t.LOGIN="login",t}();t.SceneType=n,__reflect(n.prototype,"two.SceneType"),t.changeToLogin=e,t.enterRoom=o}(two||(two={}));var two;!function(t){var e;!function(e){function o(){return n}var n;e.getHeads=o;var i=function(o){function i(){var t=o.call(this)||this;return t.headIdxs={},t.endCount=0,t}return __extends(i,o),i.prototype.removed=function(){o.prototype.removed.call(this),n=null;for(var t=this.readyGp.numChildren,e=0;t>e;e++)this["head"+e].cacheAsBitmap=!1;one.monitor.off("gameStart",this.onGameStart,this),one.monitor.off("onUserJoinRoom",this.onJoinRoom,this),this.proxy.destroy()},i.prototype.added=function(){o.prototype.added.call(this)},i.prototype.created=function(){o.prototype.created.call(this);for(var t=this.readyGp.numChildren,i=0;t>i;i++)this["ready"+i].visible=!1,this["head"+i].cacheAsBitmap=!0;this.endCount=0,one.monitor.on("gameStart",this.onGameStart,this);var r={};this.headIdxs=r,n=r;var s={};3==t?(s[3]=[0,1,2],s[2]=[0,1]):4==t&&(s[4]=[0,1,2,3],s[3]=[0,1,3],s[2]=[0,2]),this.totalMember=e.TableVO.Max_Member,this.seats=s[this.totalMember];for(var i=0;i<this.totalMember;i++)r[i]={head:this["head"+this.seats[i]],ready:this["ready"+this.seats[i]],index:this.seats[i]};this.proxy=new e.TablePlayersProxy(r),one.monitor.on("onUserJoinRoom",this.onJoinRoom,this),this.addClick()},i.prototype.reset=function(){this.endCount++;var t=e.TableVO.Max_Member;if(!(this.endCount<t))for(var o=this.seats,n=0;t>n;n++){var i=this["end"+o[n]];if(i){i.removeChildren();var r=this["head"+o[n]];r.x=0,r.y=0,i.addChild(r)}}},i.prototype.onGameStart=function(o){if(this.readyGp.visible=!1,o&&o.isPlaying)for(var n=0;n<this.totalMember;n++)this.reset();else for(var i=e.TableVO.Max_Member,r=this.seats,n=0;i>n;n++){var s=this["end"+r[n]];if(s){var a=this["head"+r[n]],c=a.localToGlobal(0,0);c=t.uiRoot.globalToLocal(c.x,c.y),t.uiRoot.addChild(a),a.x=c.x,a.y=c.y,egret.Tween.removeTweens(a);var h=egret.Tween.get(a).to({x:s.x,y:s.y},200);h.call(this.reset,this)}}},i.prototype.onJoinRoom=function(){e.tableVO.getCurrentMembers()==e.TableVO.Max_Member&&one.monitor.off("onUserJoinRoom",this.onJoinRoom,this)},i.prototype.addClick=function(){e.tableVO.getCurrentMembers()<e.TableVO.Max_Member||one.monitor.off("onUserJoinRoom",this.onJoinRoom,this)},i}(t.BaseComponent);e.PlayersBaesLayer=i,__reflect(i.prototype,"two.ddz.PlayersBaesLayer")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two_pk;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t.cardCount=0,t}return __extends(o,e),o.prototype.created=function(){e.prototype.created.call(this)},o.prototype.clear=function(){this.cardCount=0},Object.defineProperty(o.prototype,"direction",{get:function(){return this._direction},set:function(t){this._direction=t,null!=t&&(this.dic=t)},enumerable:!0,configurable:!0}),o.prototype.refresh=function(){},o.prototype.addOne=function(t,e){void 0===e&&(e=!0),this.cardCount++},o.prototype.removeCardIDs=function(t){this.cardCount-=t.length,this.cardCount<0&&console.error("cards "+t)},o.prototype.addEle=function(t,e){t.addChild(e)},o.prototype.changeToLay=function(e){var o=new t.CardList;o.setDirection(!0,!0),o.setCardIDs(e)},o}(two.BaseGroup);t.BaseStand=e,__reflect(e.prototype,"two_pk.BaseStand")}(two_pk||(two_pk={}));var two;!function(t){var e;!function(e){var o=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return __extends(o,t),o.prototype.setCurrentSeat=function(t,e){},o.prototype.checkDDDConfirm=function(t,o){var n=e.tableVO.ownPos;this.getSeatUI(n).lay.clearAll(),one.monitor.emit(e.ConfirmPanel.ON_COMFIRM,{isNew:o,type:t})},o.prototype.getSeatUI=function(t){return e.getStandByIndex(t)},o.prototype.setThickIdxs=function(t,e){one.monitor.emit("playingLeftTime",{index:e,leftSecond:t})},o}(t.BaseCommand);e.DDZCommand=o,__reflect(o.prototype,"two.ddz.DDZCommand")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(t){var e=function(){function e(){this._isInGaming=!1,this.mgId=0,this.autoId=-1,this.timeId=-1,this.utils=new t.SingleServerUtils}return Object.defineProperty(e.prototype,"isInGaming",{get:function(){return this._isInGaming},set:function(t){this._isInGaming=t},enumerable:!0,configurable:!0}),e.prototype.getInitNumbers=function(t,e){for(var o=[],n=0;e>n;n++)o.push(t);return o},e.prototype.getRoomInfo=function(e){if(!this.isInGaming){var o=t.SingleServerUtils.getRoomInfo();if(!o)return null;for(var n=one.clone(o),i=1;i<n.userPaiData.length;i++)e||0!=n.memberInfo[i].mingpai||(n.userPaiData[i].pais=this.getInitNumbers(0,n.userPaiData[i].pais.length));return e||1!=n.status||(n.bottomCards=[]),n}for(var r=one.clone(this.roomInfo),i=1;i<r.userPaiData.length;i++)e||0!=r.memberInfo[i].mingpai||(r.userPaiData[i].pais=this.getInitNumbers(0,r.userPaiData[i].pais.length));return r},e.prototype.startHistory=function(){switch(this.roomInfo=t.SingleServerUtils.getRoomInfo(),this.mgId=this.roomInfo.mgid,this.isInGaming=!0,this.roomInfo.status){case 0:this.nextOp(2,this.matchRoomOver);break;case 1:this.nextOp(1,this.jiaofenReady);break;case 2:this.nextOp(1,this.dapaiReady,10);break;default:console.log("error setroomInfo")}},e.prototype.chat=function(t,e){var o=this;this.route("onRoomChat",{fromIdx:t,message:e});var n=RES.getRes("chatCfg_json").messages,i=one.langUtils.getLanguageStatement("chat",n[one.randomInt(0,n.length-1)]);one.setTimeout(function(){o.route("onRoomChat",{fromIdx:one.randomInt(1,2),message:JSON.stringify({type:1,message:i})})},1e3*one.randomInt(1,3))},e.prototype.trusteeship=function(t,e){this.roomInfo.memberInfo[t].trusteeship=e,this.route("onRoomTrusteeship",{index:t,isOpen:e})},e.prototype.matchRoom=function(t){this.isInGaming=!0,this.mgId=t;var e=one.randomInt(3,5);this.nextOp(e,this.matchRoomOver)},e.prototype.cancelMatch=function(t){this.stopProgress()},e.prototype.joinNewGame=function(){var t=one.randomInt(3,5);return this.nextOp(t,this.matchRoomOver),this.roomInfo},e.prototype.createRoom=function(t){this.isInGaming=!0,this.mgId=t;var e=one.randomInt(3,5);return this.nextOp(e,this.matchRoomOver),this.roomInfo},e.prototype.matchRoomOver=function(){this.roomInfo=this.utils.getMatchRoom(this.mgId),this.roomInfo.chuCnts=this.getInitNumbers(0,3),this.roomInfo.lastChuIdx=0,this.roomInfo.lastChuCards=[],this.route("onRoomStatus",{status:1,cdTime:10}),this.route("onMatchRoom",this.getRoomInfo(!1)),this.route("onRoomStatus",{status:1,cdTime:10});var t=1;this.nextOp(t,this.faPai)},e.prototype.kick=function(t){this.stopProgress();for(var e=-1,o=0;3>o;o++)if(this.roomInfo.memberInfo[o]&&this.roomInfo.memberInfo[o].uid==t){e=this.roomInfo.memberInfo[o].index;break}e>=0&&this.route("onKickRoom",{index:e})},e.prototype.quit=function(){this.isInGaming=!1,one.clearTimeout(this.autoId),this.stopProgress(),this.roomInfo.memberInfo[0].trusteeship=1,t.SingleServerUtils.saveRoomInfo(this.roomInfo),this.route("onUserCash",{cash:this.roomInfo.memberInfo[0].cash})},e.prototype.mingpai=function(t,e){this.roomInfo.memberInfo[t].mingpai=e;for(var o=0,n=0;3>n;n++)o=Math.max(o,this.roomInfo.memberInfo[n].mingpai);this.route("onPlay",{type:4,index:t,"double":this.roomInfo["double"]*o,mingpai:e})},e.prototype.faPai=function(){var e=[10,50,100][this.mgId-1],o=this.utils.getFetchCards();this.roomInfo.bottomCards=o[3];for(var n=[],i=0;3>i;i++){this.roomInfo.userPaiData[i].pais=o[i];var r=this.roomInfo.memberInfo[i];r.cash-=e,n[i]={index:i,cash:r.cash,pais:0==this.roomInfo.memberInfo[i].mingpai&&0!=i?this.getInitNumbers(0,17):o[i]}}t.SingleServerUtils.saveData(this.roomInfo.memberInfo[0].cash),t.SingleServerUtils.saveOtherData(this.roomInfo.memberInfo[1].uid,this.roomInfo.memberInfo[1].cash),t.SingleServerUtils.saveOtherData(this.roomInfo.memberInfo[2].uid,this.roomInfo.memberInfo[2].cash),this.route("onUserCash",{cash:this.roomInfo.memberInfo[0].cash}),this.route("onPlay",{type:1,userPais:one.clone(n)});var s=3;this.roomInfo.status=1,t.SingleServerUtils.saveRoomInfo(this.roomInfo),this.nextOp(s,this.jiaofenReady)},e.prototype.jiaofenReady=function(){var t=this,e=10,o=e;this.route("onNextAction",{indexs:[this.roomInfo.currentUidIdx],cdTime:e}),this.isRobot(this.roomInfo.currentUidIdx)?this.nextAuto(one.randomInt(3,5),function(){t.jiaofen(t.roomInfo.currentUidIdx,one.randomInt(Math.max(1,t.roomInfo.score+1),3))}):this.roomInfo.memberInfo[0].trusteeship?this.nextOp(2,this.jiaofenOver):this.nextOp(o,this.jiaofenOver)},e.prototype.jiaofen=function(e,o){o=Math.max(0,o),this.stopProgress(),this.route("onRoomReady",{index:e,score:o}),this.roomInfo.memberInfo[e].score=o,t.SingleServerUtils.saveRoomInfo(this.roomInfo),this.jiaofenCheck()},e.prototype.checkHasLord=function(){for(var t=!0,e=0,o=0;3>o;o++){var n=this.roomInfo.memberInfo[o].score;if(3==n)return this.roomInfo.score=3,this.roomInfo.firstUidIdx=o,this.roomInfo.currentUidIdx=o,2;
-1==n?t=!1:n>this.roomInfo.score&&(this.roomInfo.score=n,e=this.roomInfo.memberInfo[o].index)}return t?this.roomInfo.score>0?(this.roomInfo.firstUidIdx=e,this.roomInfo.currentUidIdx=e,2):1:0},e.prototype.jiaofenOver=function(){this.route("onRoomTrusteeship",{index:this.roomInfo.currentUidIdx,isOpen:1}),this.roomInfo.memberInfo[this.roomInfo.currentUidIdx].trusteeship=1,this.jiaofen(this.roomInfo.currentUidIdx,0)},e.prototype.jiaofenCheck=function(){var t=this.checkHasLord();2==t?this.nextOp(.5,this.lookBottomCards):1==t?this.nextOp(1,this.liuju):(this.setToNext(),this.jiaofenReady())},e.prototype.checkHasNoCard=function(){for(var t=0;3>t;t++)if(0==this.roomInfo.userPaiData[t].pais.length)return!0;return!1},e.prototype.liuju=function(){this.route("onNoMaster",{}),this.route("onRoomStatus",{status:0,cdTime:10}),this.nextOp(3,this.matchRoomOver)},e.prototype.lookBottomCards=function(){this.roomInfo.userPaiData[this.roomInfo.firstUidIdx].pais=this.roomInfo.userPaiData[this.roomInfo.firstUidIdx].pais.concat(this.roomInfo.bottomCards),this.route("onBottomCard",{index:this.roomInfo.firstUidIdx,score:this.roomInfo.score,userPais:one.clone(this.roomInfo.bottomCards)}),this.route("onRoomStatus",{status:2,cdTime:10}),this.roomInfo.status=2,this.roomInfo.lastChuIdx=this.roomInfo.firstUidIdx,this.roomInfo.lastChuCards=[],t.SingleServerUtils.saveRoomInfo(this.roomInfo),this.nextOp(1,this.dapaiReady,20)},e.prototype.dapaiReady=function(t){var e=this;if(void 0===t&&(t=10),this.checkHasNoCard()){this.roomInfo.chuCnts[this.roomInfo.firstUidIdx]<=1?this.roomInfo["double"]*=2:0==this.roomInfo.chuCnts[(this.roomInfo.firstUidIdx+1)%3]&&0==this.roomInfo.chuCnts[(this.roomInfo.firstUidIdx+2)%3]&&(this.roomInfo["double"]*=2);var o=1;this.nextOp(o,this.roundOver)}else{var n=t;this.route("onNextAction",{cdTime:n,indexs:[this.roomInfo.currentUidIdx]});var o=n;this.nextOp(o,this.timeoutChu),this.getCurrentMember().trusteeship?this.nextAuto(Math.min(1,o),function(){e.audoSendCards()}):this.isRobot(this.roomInfo.currentUidIdx)&&this.nextAuto(Math.min(one.randomInt(2,4),o),function(){e.audoSendCards()})}},e.prototype.nextAuto=function(t,e){for(var o=this,n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];one.clearTimeout(this.autoId),this.autoId=one.setTimeout(function(){e.apply(o,n)},1e3*t)},e.prototype.chu=function(e,o){if(this.stopProgress(),this.roomInfo.outPaiData.push({index:e,pais:o.concat(),cash:0}),o.length>0){this.roomInfo.chuCnts[e]++,o=o.concat();var n=t.styleUtils.getStyle(o.concat());(n.type==two_pk.ChuType.BOMB||n.type==two_pk.ChuType.MAX_BOMB)&&(this.roomInfo["double"]*=2),this.roomInfo.lastChuIdx=e,this.roomInfo.lastChuCards=o.concat();for(var i=this.roomInfo.userPaiData[e].pais,r=0;r<o.length;r++){var s=i.indexOf(o[r]);s>=0&&i.splice(s,1)}this.route("onPlay",{type:2,userPais:one.clone(o),index:e,cdTime:1})}else this.route("onPlay",{type:3,index:e,cdTime:1});t.SingleServerUtils.saveRoomInfo(this.roomInfo),this.setToNext(),this.dapaiReady()},e.prototype.isAllInArray=function(t,e){for(var o=0;o<t.length;o++)if(e.indexOf(t[o])<0)return!1;return!0},e.prototype.audoSendCards=function(){if(this.roomInfo.lastChuIdx==this.roomInfo.currentUidIdx){for(var e=t.styleUtils.getAllSuggestCards(this.roomInfo.userPaiData[this.roomInfo.currentUidIdx].pais),o=[],n=function(t,e,n,i,r){for(var s=0;s<o.length;s++)if(o[s].type==t&&o[s].count==e&&o[s].length==n)return;o.push({type:t,count:e,length:n,value:i,cards:r})},i=0;i<e.length;i++)if(!(e[i].length<5)){var r=t.styleUtils.getStyle(e[i]);if(n(r.type,r.value.count||0,r.value.length||0,r.value.value,e[i]),!(5==e[i].length&&r.type==two_pk.ChuType.THREE_APP||r.type==two_pk.ChuType.LINE&&r.value.value>=14-e[i].length))return void this.chu(this.roomInfo.currentUidIdx,e[i])}for(var i=0;i<e.length;i++)if(e[i].length<5){var r=t.styleUtils.getStyle(e[i]);n(r.type,r.value.count||0,r.value.length||0,r.value.value,e[i])}o.sort(function(t,e){return t.value<e.value?-1:t.value>e.value?1:t.count<e.count?-1:1});for(var s=[],i=0;i<o.length;i++)if(s=o[i].cards,!(s.indexOf(116)>=0||s.indexOf(117)>=0)){for(var a=!0,c=i+1;c<o.length;c++){var h=o[c].cards;if(this.isAllInArray(s,h)){a=!1;break}}if(a)break}return void this.chu(this.roomInfo.currentUidIdx,s)}if(this.roomInfo.lastChuIdx!=this.roomInfo.firstUidIdx&&this.roomInfo.currentUidIdx!=this.roomInfo.firstUidIdx){var r=t.styleUtils.getStyle(this.roomInfo.lastChuCards);if(!(r.type==two_pk.ChuType.SINGLE&&r.value.value<=10))return void this.chu(this.roomInfo.currentUidIdx,[])}for(var l=t.styleUtils.getSuggestCards(this.roomInfo.userPaiData[this.roomInfo.currentUidIdx].pais,this.roomInfo.lastChuCards),i=0;i<l.length;i++)if(l[i].length==this.roomInfo.lastChuCards.length&&l[i].indexOf(116)<0)return void this.chu(this.roomInfo.currentUidIdx,l[i]);this.chu(this.roomInfo.currentUidIdx,l.length>0?l[0]:[])},e.prototype.timeoutChu=function(){this.route("onRoomTrusteeship",{index:this.roomInfo.currentUidIdx,isOpen:1}),this.roomInfo.memberInfo[this.roomInfo.currentUidIdx].trusteeship=1,this.audoSendCards()},e.prototype.roundOver=function(){this.route("onRoomStatus",{status:0,cdTime:10});for(var e=8,o=[15,60,150][this.mgId-1],n=1,i=0;3>i;i++)n=Math.max(n,this.roomInfo.memberInfo[i].mingpai);for(var r=this.roomInfo.score*n*this.roomInfo["double"]*o,s=!1,i=0;3>i;i++)if(0==this.roomInfo.userPaiData[i].pais.length&&this.roomInfo.memberInfo[i].index==this.roomInfo.firstUidIdx){s=!0;break}var a=this.roomInfo.memberInfo[this.roomInfo.firstUidIdx],c=this.roomInfo.memberInfo[(this.roomInfo.firstUidIdx+1)%3],h=this.roomInfo.memberInfo[(this.roomInfo.firstUidIdx+2)%3],l=0,u=0;if(s)h.cash<r?(u=-h.cash,h.cash=0):(u=-r,h.cash-=r),c.cash<r?(l=-c.cash,c.cash=0):(l=-r,c.cash-=r),a.cash+=-l-u;else{var d=this.roomInfo.memberInfo[this.roomInfo.firstUidIdx];d.cash<2*r?(l=Math.round(d.cash/2),u=d.cash-l):l=u=r,c.cash+=l,h.cash+=u,d.cash+=-l-u}t.SingleServerUtils.saveData(this.roomInfo.memberInfo[0].cash),t.SingleServerUtils.saveOtherData(this.roomInfo.memberInfo[1].uid,this.roomInfo.memberInfo[1].cash),t.SingleServerUtils.saveOtherData(this.roomInfo.memberInfo[2].uid,this.roomInfo.memberInfo[2].cash),this.route("onUserCash",{cash:this.roomInfo.memberInfo[0].cash}),this.route("onGameOver",{winList:[{index:(this.roomInfo.firstUidIdx+1)%3,win:l,score:l},{index:(this.roomInfo.firstUidIdx+2)%3,win:u,score:u}],userPaiData:one.clone(this.roomInfo.userPaiData),cdTime:e}),this.roomInfo.status=0,this.roomInfo.bottomCards=[],this.roomInfo.memberInfo[0].trusteeship=0,this.roomInfo.memberInfo[1].trusteeship=0,this.roomInfo.memberInfo[2].trusteeship=0,this.roomInfo.userPaiData=[{index:0,pais:[],cash:100},{index:1,pais:[],cash:100},{index:2,pais:[],cash:100}],this.roomInfo.outPaiData=[],t.SingleServerUtils.saveRoomInfo(this.roomInfo)},e.prototype.getCurrentMember=function(){return this.roomInfo.memberInfo[this.roomInfo.currentUidIdx]},e.prototype.isRobot=function(t){return 0!=t},e.prototype.isLord=function(t){return this.roomInfo.firstUidIdx==t},e.prototype.setToNext=function(){this.roomInfo.currentUidIdx=(this.roomInfo.currentUidIdx+1)%3},e.prototype.nextOp=function(t,e){for(var o=this,n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];one.clearTimeout(this.timeId),this.timeId=one.setTimeout(function(){e.apply(o,n)},1e3*t)},e.prototype.stopProgress=function(){one.clearTimeout(this.timeId)},e.prototype.route=function(t,e){one.callLater(function(){console.log(t,e),one.monitor.emit(t,e)},1)},e}();t.SingleManager=e,__reflect(e.prototype,"two.ddz.SingleManager")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e=function(){function e(){}return e.prototype.connect=function(e){var o=this;if(null==t.net.serverConfig){var n={appId:one.getOption("appId"),time:Date.now()};one.getCookie("QnmAuth")?n.QnmAuth=one.getCookie("QnmAuth"):one.getOption("userId")||(one.getOption("name")?n.name=one.getOption("name"):t.userVO.getUserName()&&(n.name=t.userVO.getUserName())),t.Game_getServerProxy.getInstance().send({},function(i){if(200==i.code){t.net.serverConfig=i.data,t.userVO.userInfo=i.data.userInfo,one.setOption("userId",i.data.userInfo.uid),n.name&&"apple"==t.net.payType&&(one.setOption("state",i.data.state),one.setOption("sign",i.data.sign));var r=one.getOption("clientVersion");if((null==r||""==r)&&(r="0.1"),i.data.clientVersion!=r){var s=new t.clazzes.confirm(one.langUtils.getStatement(28),!1,!1);t.showBox(s),s.once(t.Confirm.OK,function(){t.changePage(t.SceneType.LOGIN)},o)}else e({code:200})}else window.location.reload(),e({code:1})})}else egret.callLater(function(){e({code:200})},this)},e}();t.Login2Proxy=e,__reflect(e.prototype,"two.Login2Proxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(e){var o=t.call(this)||this;return o.message=e,o.skinName="ErrorTipSkin",o.horizontalCenter=0,o.verticalCenter=0,o}return __extends(e,t),e.prototype.childrenCreated=function(){var e=this;t.prototype.childrenCreated.call(this),this.messageTxt.text=this.message,this.alpha=0,egret.Tween.get(this).to({alpha:1},200).wait(1e3).to({alpha:0},200).call(function(){e.parent.removeChild(e)},this)},e}(eui.Component);t.ErrorTip=e,__reflect(e.prototype,"two.ErrorTip",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){function e(t,e){for(var o=[],n=2;n<arguments.length;n++)o[n-2]=arguments[n];var i=[];i.push(e);for(var r=0;r<o.length;r++)i.push(o[r]);t.text=one.langUtils.getStatement.apply(one.langUtils,i)}function o(t,e){for(var o=[],n=2;n<arguments.length;n++)o[n-2]=arguments[n];var i=[];i.push(e);for(var r=0;r<o.length;r++)i.push(o[r]);t.label=one.langUtils.getStatement.apply(one.langUtils,i)}function n(){}function i(t){if(0==t)return"0";var e=1;return 0>t&&(t=-t,e=-1),1e3>t?t==Math.floor(t)?t*e+"":(t*e).toFixed(1):(t/=1e3,t==Math.floor(t)?t*e+"K":Math.floor(t*e*10)/10+"K")}function r(t){for(var e=t.scaleX,o=t;o.parent&&o.parent.parent;)o=o.parent,e*=o.scaleX;return e}t.setLabelLanguage=e,t.setButtonLanguage=o,t.exitApp=n,t.formatCash=i,t.getGlobalScale=r}(two||(two={}));var two;!function(t){var e;!function(e){function o(){var t=e.serverConfig.secret,o=Date.now(),n=o+t;return{md5:(new md5).hex_md5(n),time:o}}function n(){return egret.Capabilities.runtimeType==egret.RuntimeType.WEB?0:"Android"==egret.Capabilities.os?1:"iOS"==egret.Capabilities.os?2:3}function i(e,o){if(1004==e){var n=new t.clazzes.confirm(one.langUtils.getLanguageStatement("error",e),!0,!1);t.showBox(n),n.once(t.Confirm.OK,function(){t.changePage(t.SceneType.LOGIN)},this)}else if(1005==e)t.userVO.userInfo.rid=0,r||(r=new t.clazzes.confirm(one.langUtils.getLanguageStatement("error",e),!0,!1),r.addEventListener(t.Confirm.OK,function(){t.changePage(t.SceneType.HALL)},this)),t.showBox(r);else if(9998==e);else if(9999==e);else if(222==e);else if(e>=900){var n=new t.clazzes.confirm(one.langUtils.getLanguageStatement("error",e),!1,!1);t.showBox(n)}else if(e>=500){var n=new t.clazzes.confirm(one.langUtils.getLanguageStatement("error",e),!0,!1);t.showBox(n)}else e>200&&t.showTip(one.langUtils.getLanguageStatement("error",e))}e.getSecret=o,e.getMobileID=n,e.roomProxy=new t.RoomProxy,e.loginProxy=new t.Login2Proxy;var r;e.dealErrorCode=i}(e=t.net||(t.net={}))}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(){function o(){var o=this;this.NAME="",this.onDisconnect=function(o){t.conUtils.addMessage("onDisconnect"),t.currentPageType!=t.SceneType.LOGIN&&e.socketProxy.reConnect(null)},this.onClose=function(o){t.conUtils.addMessage("onClose"),t.currentPageType!=t.SceneType.LOGIN&&e.socketProxy.reConnect(null)},this.onIOError=function(e){t.conUtils.addMessage("onIOError")},this.onConnect=function(e){t.conUtils.addMessage("onConnect")},this.isAddListener=!1,this.onChangeGold=function(t){one.monitor.emit("onChangeGold",t)},this.onKick=function(e){o.removeNormalListener(),o.onCalls={},t.closeAllBoxes(!0),t.changePage(t.SceneType.LOGIN);var n=new t.clazzes.confirm(one.langUtils.getStatement(9999),!1,!1);t.showBox(n)},this.onCalls={},this.pomelo=new one.Pomelo,this.NAME="PomeloProxy",this.pomelo.NAME="PomeloProxy",this.pomeloSend=new e.PomeloSend(this.pomelo)}return o.prototype.sendData=function(t,e,o,n){this.pomeloSend.sendData(t,e,o,n)},o.prototype.clear=function(){this.pomeloSend.clear(),this.disconnect()},o.prototype.connect=function(o){this.addNormalListener();var n=this.pomelo,i=(e.serverConfig.serverInfo,{});i.mobile=e.getMobileID(),t.userVO.usePlatInfo()?(i.state=one.getOption("state"),i.sign=one.getOption("sign")):t.userVO.getUserName()&&"apple"==t.net.payType&&(i.state=one.getOption("state"),i.sign=one.getOption("sign")),"1"==one.getOption("debug")&&(i.debug="1"),i=this.pomeloSend.getRealMessage("login",i),delete i.login;var r="";for(var s in i)r+=s+"="+i[s]+"&";r.length>0&&(r=r.substr(0,r.length-1)),t.conUtils.addMessage("pomelo connect start"),"0"==one.getOption("encrypt")?n.type=egret.WebSocket.TYPE_STRING:n.type=egret.WebSocket.TYPE_BINARY,one.callLater(function(){t.LoginProxy.getInstance().send({},function(n){200==n.code&&(t.userVO.userInfo=n.data.userInfo,e.roomChecker.start()),o&&o(n)})},2)},o.prototype.disconnect=function(){this.removeNormalListener(),this.pomelo.disconnect()},o.prototype.addNormalListener=function(){if(this.isAddListener)return void console.error("error addNormalListener");this.isAddListener=!0,this.pomelo.on("disconnect",this.onDisconnect),this.pomelo.on("close",this.onClose),this.pomelo.on("timeout",this.onClose),this.pomelo.on("io-error",this.onIOError),this.pomelo.on("connect",this.onConnect),this.pomelo.on("onChangeGold",this.onChangeGold),this.pomelo.on("onKick",this.onKick);for(var t in this.onCalls)this.pomelo.on(t,this.onCalls[t])},o.prototype.removeNormalListener=function(){this.isAddListener=!1,e.roomChecker.stop(),this.pomelo.off("disconnect",this.onDisconnect),this.pomelo.off("close",this.onClose),this.pomelo.off("timeout",this.onClose),this.pomelo.off("io-error",this.onIOError),this.pomelo.off("connect",this.onConnect),this.pomelo.off("onChangeGold",this.onChangeGold),this.pomelo.off("onKick",this.onKick);for(var t in this.onCalls)this.pomelo.off(t,this.onCalls[t])},o.prototype.on=function(e,o,n){var i=this;if(one.monitor.on(e,o,n),null==this.onCalls[e]&&this.pomelo){var r=function(o){t.conUtils.addMessage("from server push route "+JSON.stringify(o)),i.dispatchRoute(e,o)};this.pomelo.on(e,r),this.onCalls[e]=r}},o.prototype.off=function(t,e,o){one.monitor.off(t,e,o)},o.prototype.dispatchRoute=function(t,e){one.monitor.emit(t,e)},o}();e.PomeloProxy=o,__reflect(o.prototype,"two.net.PomeloProxy"),e.pomeloProxy=new o}(e=t.net||(t.net={}))}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e._frameRate=24,e.passedTime=0,e.lastTime=0,e.$totalFrames=10,e.lastFrame=-1,e.bitmap=new egret.Bitmap,e.addChild(e.bitmap),e.frameIntervalTime=1e3/e._frameRate,e.initTextures(),e.addEventListener(egret.Event.ADDED_TO_STAGE,function(t){t.currentTarget==t.target&&(e.lastTime=egret.getTimer(),egret.startTick(e.advanceTime,e))},e),e.addEventListener(egret.Event.REMOVED_FROM_STAGE,function(t){t.currentTarget==t.target&&egret.stopTick(e.advanceTime,e)},e),e}return __extends(e,t),e.prototype.initTextures=function(){},Object.defineProperty(e.prototype,"frameRate",{get:function(){return this._frameRate},set:function(t){this._frameRate=t,this.frameIntervalTime=1e3/this._frameRate},enumerable:!0,configurable:!0}),e.prototype.play=function(t,e){void 0===e&&(e=0),this.animation=t,this.playTimes=e},e.prototype.advanceTime=function(t){var e=this,o=e.frameIntervalTime,n=t-e.lastTime;e.lastTime=t;var i=e.passedTime+n;e.passedTime=i;var r=Math.floor(i/o),s=r%this.$totalFrames;return this.playTimes>0&&r>=this.$totalFrames*this.playTimes?(egret.stopTick(this.advanceTime,this),this.showFrame(this.$totalFrames-1),this.dispatchEventWith(egret.Event.COMPLETE)):this.showFrame(s),!1},e.prototype.showFrame=function(t){if(this.lastFrame!=t){this.lastFrame=t;var e=this.animation+"_"+t+"_png";this.bitmap.texture=RES.getRes(e)}},e}(egret.DisplayObjectContainer);t.MC=e,__reflect(e.prototype,"two.MC")}(two||(two={}));var two;!function(t){var e;!function(t){var e=function(){function e(){this.isStart=!1,this.tickerCount=0,this.lastStep=0,this.tickerID=-1}return e.prototype.start=function(){this.isStart||(this.isStart=!0,this.roomTicker())},e.prototype.stop=function(){egret.clearTimeout(this.tickerID),this.isStart=!1},e.prototype.roomTicker=function(){if(this.isStart){var e=Date.now();t.pomeloProxy.sendData("heartbeat",{},!1,function(t){one.monitor.emit("onWifiChanged",{delay:Date.now()-e})}),this.next()}},e.prototype.next=function(){var t=this;this.tickerID=egret.setTimeout(function(){t.roomTicker()},this,5e3)},e}();t.RoomChecker=e,__reflect(e.prototype,"two.net.RoomChecker"),t.roomChecker=new e}(e=t.net||(t.net={}))}(two||(two={}));var two;!function(t){function e(e,o){t.clazzes={tip:e,confirm:o}}function o(e){e.percentHeight=100,e.percentWidth=100,t.boxLayer.addChild(e)}function n(e){e.percentHeight=100,e.percentWidth=100,t.boxLayer.addChild(e),e.x=e.width/2,e.y=e.height/2,e.scaleX=e.scaleY=0,e.alpha=0,egret.Tween.get(e).to({x:0,y:0,scaleX:1,scaleY:1,alpha:1},500).call(function(){},this)}function i(e){var o=new t.clazzes.tip(e);t.boxLayer.addChild(o)}t.initBaseView=e,t.showNoActionBox=o,t.showNoActionAnimationBox=n,t.showTip=i}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(){function o(){this.reConnectCount=0,this.isReconnecting=!1,this.reconnectHandlers=[]}return o.prototype.reConnect=function(o){var n=this;console.log("pomelo  reConnect "),o&&this.reconnectHandlers.push(o),t.currentPageType!=t.SceneType.LOGIN&&(this.isReconnecting||(this.isReconnecting=!0,this.reConnectCount++,e.pomeloProxy.disconnect(),one.monitor.emit("onConnectStart",null),console.log("pomelo restart "+this.reConnectCount),e.pomeloProxy.connect(function(t){if(console.log("pomelo end"),200==t.code){one.monitor.emit("onConnectSuccess",null),n.isReconnecting=!1,n.reConnectCount=0;var e=n.reconnectHandlers.concat();n.reconnectHandlers.length=0;for(var o=0;o<e.length;o++)e[o]()}else 9997==t.code?egret.setTimeout(function(){n.isReconnecting=!1,n.reConnect(null)},n,3e3):egret.setTimeout(function(){n.isReconnecting=!1,n.reConnect(null)},n,3e3)})))},o}();e.SocketProxy=o,__reflect(o.prototype,"two.net.SocketProxy"),e.socketProxy=new o}(e=t.net||(t.net={}))}(two||(two={}));var two;!function(t){var e=function(){function t(){}return t.LEFT="l",t.TOP="t",t.RIGHT="r",t.BOTTOM="b",t}();t.Direction=e,__reflect(e.prototype,"two.Direction")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isStart=!1,e.isExecuting=!1,e.cmds=[],e}return __extends(e,t),e.prototype.start=function(){this.isStart=!0,one.monitor.on("onPlayFirst",this.onPlayFirst,this),one.monitor.on("onPlayStep",this.onTrans,this),one.monitor.on("onExecNext",this.onExecNext,this)},e.prototype.stop=function(){this.isStart=!1,one.monitor.off("onPlayFirst",this.onPlayFirst,this),one.monitor.off("onPlayStep",this.onTrans,this),one.monitor.off("onExecNext",this.onExecNext,this)},e.prototype.clear=function(){this.cmds.length=0},e.prototype.onPlayFirst=function(t){this.isStart&&(this.cmds.unshift(t),this.execNextTrans())},e.prototype.addPlayStep=function(t){this.onTrans(t)},e.prototype.onTrans=function(t){this.isStart&&(this.addCmd(t),this.execNextTrans())},e.prototype.onExecNext=function(){this.isStart&&(this.isExecuting=!1,one.monitor.emit("onStepTransEnd",null),this.execNextTrans())},e.prototype.addCmd=function(t){this.cmds.push(t)},e.prototype.execNextTrans=function(){if(!this.isExecuting&&0!=this.cmds.length){this.isExecuting=!0;var t=this.cmds.shift();one.monitor.emit(e.ON_STEP_CHANGED,t)}},e.ON_STEP_CHANGED="onStepChanged",e}(egret.EventDispatcher);t.StepCMDTrans=e,__reflect(e.prototype,"two.StepCMDTrans")}(two||(two={}));var two;!function(t){var e=function(t){function e(){return t.call(this,"ClockPanel")||this}return __extends(e,t),e.prototype.setEndTime=function(t){this.time.setEndTime(t),this.time.start()},e}(t.BaseComponent);t.ClockPanel=e,__reflect(e.prototype,"two.ClockPanel")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this,"LoadingUI")||this;return e.percentHeight=e.percentWidth=100,e}return __extends(e,t),e.prototype.created=function(){t.prototype.created.call(this)},e.prototype.setProgress=function(t,e){this.txt&&(this.txt.text=one.langUtils.getStatement(22,Math.round(t/e*100))),this.bar&&(this.bar.value=100*t/e),this.thumb&&(this.thumb.x=409*t/e)},e.prototype.removed=function(){t.prototype.removed.call(this)},e}(t.BaseComponent);t.LoadingUI=e,__reflect(e.prototype,"two.LoadingUI")}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=e.call(this,"CardsLeftPanel")||this;return t.touchEnabled=!1,t}return __extends(o,e),o.prototype.initCards=function(t){this.cards=t,this.resetView()},o.prototype.created=function(){var o=this;e.prototype.created.call(this),this.gp_lefts.visible=!1,t.addTap(this.btn_cards,function(){return o.gp_lefts.visible||2!=t.ddz.tableVO.isPlaying&&1!=t.ddz.tableVO.isPlaying?void(o.gp_lefts.visible=!1):(o.initCards(t.ddz.tableVO.getNoDropCards()),void(o.gp_lefts.visible=!0))})},o.prototype.added=function(){e.prototype.added.call(this),one.monitor.on(o.INIT,this.onInitCards,this),one.monitor.on(o.REMOVE_CARDS,this.onRemoveCards,this),one.monitor.on(o.CLOSE,this.onClose,this)},o.prototype.removed=function(){e.prototype.removed.call(this),one.monitor.off(o.INIT,this.onInitCards,this),one.monitor.off(o.REMOVE_CARDS,this.onRemoveCards,this),one.monitor.off(o.CLOSE,this.onClose,this)},o.prototype.onClose=function(){this.gp_lefts.visible=!1},o.prototype.onInitCards=function(t){this.cards=t,this.resetView()},o.prototype.onRemoveCards=function(t){if(this.cards){for(var e=0;e<t.length;e++)this.cards[t[e]%20]--;this.resetView()}},o.prototype.resetView=function(){if(this.cards)for(var t=[17,16,2,1,13,12,11,10,9,8,7,6,5,4,3],e=0;e<t.length;e++){var o=this.gp_counts.getChildAt(e);o.text=this.cards[t[e]]+""}},o.INIT="onCardsLeftPanelInit",o.CLOSE="onCardsLeftPanelClose",o.REMOVE_CARDS="onCardsLeftPanelRemoveCards",o}(t.BaseComponent);t.CardsLeftPanel=e,__reflect(e.prototype,"two.CardsLeftPanel")}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(e){function o(){return e.call(this,"ddz.HeadUISkin")||this}return __extends(o,e),o.prototype.created=function(){var o=this;e.prototype.created.call(this),this.offlineIcon.visible=!1,this.zhuanIcon.visible=!1,this.icon.visible=!1,this.icon_lord.visible=!1,this.flag_trust.visible=!1,this.icon.source="",t.addTap(this.btn_kick,function(){t.Play_kickProxy.getInstance().send({rid:t.tableVO.tableData.rid,kickId:o._playerData.uid})})},o.prototype.setOwner=function(e,o){1==o?(this.flag_owner.visible=e==this._playerData.uid,this.btn_kick.visible=t.userVO.userInfo.uid==e&&!this.flag_owner.visible):this.flag_owner.visible=this.btn_kick.visible=!1},o.prototype.setDizhuIcon=function(t,e){this.skin.currentState=this.currentState,this.icon.visible=e,t?(this.icon.source="ddz_dizhu_png",this.icon_lord.visible=!0):(this.icon.source="ddz_nong_png",this.icon_lord.visible=!1)},o.prototype.setTrust=function(t){this.flag_trust.visible=t},Object.defineProperty(o.prototype,"playerData",{get:function(){return this._playerData},set:function(e){this._playerData=e,e?(this.headIcon.source=e.pic,this.scoreTxt.text=t.formatCash(e.cash),this.nameTxt.text=one.cutName(e.name,8)):(this.headIcon.source="",this.scoreTxt.text="",this.nameTxt.text="",this.flag_owner.visible=this.btn_kick.visible=!1)},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"isFirst",{get:function(){return!1},set:function(t){},enumerable:!0,configurable:!0}),o.prototype.online=function(){this.offlineIcon.visible=!1},o.prototype.offline=function(){this.offlineIcon.visible=!0},o}(t.BaseComponent);e.HeadUI=o,__reflect(o.prototype,"two.ddz.HeadUI")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e=function(){function t(){this.megs=[]}return t.prototype.addMessage=function(t){this.megs.push(t),this.megs.length>400&&this.megs.shift()},t.prototype.getMessages=function(){return this.megs},t}();t.ConsoleUtils=e,__reflect(e.prototype,"two.ConsoleUtils"),t.conUtils=new e}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(o){function n(){return o.call(this)||this}return __extends(n,o),n.prototype.added=function(){o.prototype.added.call(this)},n.prototype.created=function(){o.prototype.created.call(this);for(var n={},i=0;i<e.TableVO.Max_Member;i++)n[i]={head:this["head"+i]};t.userVO.userInfo;n[0].head.playerData={cash:t.userVO.userInfo.cash,failNum:0,index:0,ip:"",isLeave:!1,isQuit:!1,name:t.userVO.userInfo.name,pic:t.userVO.userInfo.pic,score:0,sex:t.userVO.userInfo.sex,uid:t.userVO.userInfo.uid,winNum:0,mingpai:0,isJoinNewGame:0,trusteeship:0,isMatch:!1},n[0].head.setOwner("",2),n[1].head.playerData=null,n[2].head.playerData=null},n}(t.BaseComponent);e.PlayersMatchLayer=o,__reflect(o.prototype,"two.ddz.PlayersMatchLayer")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(){function o(){this.dealStep=-1,this.isPlaying=0,this.ownPos=-1,this.firstPos=0,this.CDTime=0,this["double"]=1,this.diPool=[],this.lord=-1,this.score=0,this.isFapai=!1,e.tableVO=two_pk.tableVO=t.tableVO=this}return Object.defineProperty(o.prototype,"tableData",{get:function(){return{rid:this.roomID,seat:this.currentPos,index:this.ownPos,memberNum:3,zhuID:2}},set:function(t){},enumerable:!0,configurable:!0}),o.prototype.init=function(){this.maxStep=-1,this.currentStep=-1,this.dealStep=-1,e.styleUtils.init()},o.prototype.reset=function(){this.score=0,this["double"]=1,this.allOutPai=[],this.diPool=[],this.maxStep=-1,this.currentStep=-1,this.dealStep=-1},o.prototype.setRoomData=function(t){null==t&&console.error(1111),this.mgid=t.mgid,this.roomData=t,this.isFapai=1==t.status||2==t.status,this.init(),this.isPlaying=t.status||0,this.CDTime=t.cdTime||0,2==this.isPlaying?this.lord=t.firstUidIdx:this.lord=-1,this.diPool=t.bottomCards,this["double"]=t["double"],this.score=t.score,this.allOutPai=t.outPaiData||[],this.initUsers(t.memberInfo,t.userPaiData,t.firstUidIdx,t.currentUidIdx,t.rid)},o.prototype.initUsers=function(t,e,o,n,i){this.roomID=i,this.users=[],this.players=[],this.firstPos=o,this.currentPos=n,this.ownPos=-1;for(var r=0;r<t.length;r++)t[r]&&t[r].uid&&this.addUser(t[r],r);for(var r=0;r<e.length;r++)if(e[r]){var s=e[r].index;t[s]&&t[s].uid&&(this.players[e[r].index]=e[r])}},o.prototype.addUser=function(e,o){this.users[o]=e,e.index=o,this.players[o]||(this.players[o]={index:o,pais:[]}),e.uid==t.userVO.userInfo.uid+""&&(this.ownPos=o)},o.prototype.removeUser=function(e){this.users[e]&&this.users[e].uid==t.userVO.userInfo.uid+""&&(this.ownPos=-1),this.users[e]=null,this.players[e]=null},o.prototype.getCurrentMembers=function(){for(var t=0,e=0;e<this.users.length;e++)this.users[e]&&this.users[e].uid&&t++;return t},o.prototype.dealCards=function(t,e){for(var o=0;o<t.length;o++)if(t[o]){var n=t[o].index;this.players[n]=t[o],this.players[n].pais=t[o].pais.concat()}this.currentPos=e,this.isFapai=!0},o.prototype.setNoDrop=function(t){this.setDropCardIDs(t,[])},o.prototype.setDropCardIDs=function(t,e){var o={};o[t]=e,this.allOutPai.push({index:t,pais:e})},o.prototype.getLastIdx=function(){if(0==this.allOutPai.length)return-1;var t=this.allOutPai[this.allOutPai.length-1];return t.index},o.prototype.getLastChuIdx=function(){for(var t=this.allOutPai,e=t.length-1;e>=0;e--){var o=t[e];if(o.pais.length>0)return o.index}return-1},o.prototype.getLastDropCardIDs=function(){for(var t=this.allOutPai,e=t.length-1;e>=0;e--){var o=t[e];if(o.index==this.ownPos)return[];if(o.pais.length>0)return o.pais}return[]},o.prototype.getLastOutCards=function(t){return this.allOutPai[this.allOutPai.length-1-t]?this.allOutPai[this.allOutPai.length-1-t].pais:[]},o.prototype.checkNewRound=function(){for(var t=this.ownPos,e=this.allOutPai,o=e.length-1;o>=0;o--){var n=e[o];if(n.index==t)return!0;if(n.pais.length>0)return!1}return!0},o.prototype.getNextChuIdx=function(t){for(var e=o.Max_Member,n=this.getLastChuIdx(),i=t,r=!1,s=0;e-1>s;s++){i=this.getNextIdx(i);var a=this.getSeatData(i);if(a.length>0)break;i==n&&(r=!0)}return r?this.getNextIdx(n,2):i==n?i:i},o.prototype.getNextIdx=function(e,n){void 0===n&&(n=1);var i=t.getSeatNO(e);return t.getInfoIdx((i+n)%o.Max_Member)},o.prototype.removeCardIDs=function(e,o){if(one.monitor.emit(t.CardsLeftPanel.REMOVE_CARDS,o.concat()),this.players&&this.players[e]&&this.players[e].pais)for(var n=this.players[e].pais,i=o.length-1;i>=0;i--){var r=n.indexOf(o[i]);r>=0?n.splice(r,1):n.splice(0,1)}},o.prototype.getNoDropCards=function(){var t={};t[16]=1,t[17]=1;for(var e=1;14>e;e++)t[e]=4;for(var e=0;e<this.allOutPai.length;e++)for(var o=0;o<this.allOutPai[e].pais.length;o++)t[this.allOutPai[e].pais[o]%20]--;return t},o.prototype.addCardIDs=function(t,e){this.players&&this.players[t]&&this.players[t].pais&&(this.players[t].pais=this.players[t].pais.concat(e))},o.prototype.getSeatData=function(t){return this.players&&this.players[t]&&this.players[t].pais?this.players[t].pais:[]},o.prototype.getRealSeatByIndex=function(t){return(t-e.tableVO.ownPos+o.Max_Member)%o.Max_Member},o.Max_Member=3,o}();e.TableVO=o,__reflect(o.prototype,"two.ddz.TableVO",["two_pk.TableVO","two.ITableVO"])}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(t){t.ActionCode={QuitRoom:"onQuitRoom",onKickRoom:"onKickRoom",JoinRoom:"onJoinRoom",RoomStatus:"onRoomStatus",RoomReady:"onRoomReady",NextAction:"onNextAction",NoMaster:"onNoMaster",OnPlay:"onPlay",BottomCard:"onBottomCard",GameOver:"onGameOver",StartNewGame:"onStartNewGame",DisbandRoom:"onDisbandRoom",RoomTrusteeship:"onRoomTrusteeship",RoomJoinNewGame:"onRoomJoinNewGame"}}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(e){function o(o,n,i){t.Play_actionProxy.getInstance().send({rid:e.tableVO.roomID,type:2,cards:o})}function n(){t.Play_actionProxy.getInstance().send({rid:e.tableVO.roomID,type:3})}function i(o,n){t.Play_readyProxy.getInstance().send({score:o,rid:e.tableVO.roomID},function(t){n(t)})}e.chu=o,e.guo=n,e.transformJiabei=i}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(t){var e=function(){function e(){two_pk.styleUtils=t.styleUtils=this}return e.prototype.init=function(){var t=2;this.chain=new two_pk.StyleChain,this.chain.initStyles(t,[],!1),this.chain.addType(two_pk.ChuType.SINGLE,{count:1,zhuID:t}),this.chain.addType(two_pk.ChuType.SINGLE,{count:2,zhuID:t}),this.chain.addType(two_pk.ChuType.SINGLE,{count:3,zhuID:t}),this.chain.addType(two_pk.ChuType.THREE_APP,{count:1,zhuID:t}),this.chain.addType(two_pk.ChuType.THREE_APP,{count:2,zhuID:t}),this.chain.addType(two_pk.ChuType.FOUR_APP,{count:1,zhuID:t}),this.chain.addType(two_pk.ChuType.FOUR_APP,{count:2,zhuID:t}),this.chain.addType(two_pk.ChuType.LINE,{count:1,minLength:5,maxLength:13}),this.chain.addType(two_pk.ChuType.LINE,{count:2,minLength:3,maxLength:13}),this.chain.addType(two_pk.ChuType.LINE,{count:3,minLength:2,maxLength:13}),this.chain.addType(two_pk.ChuType.THREE_APP_LINE,{count:1,minLength:2,maxLength:13}),this.chain.addType(two_pk.ChuType.THREE_APP_LINE,{count:2,minLength:2,maxLength:13}),this.chain.addType(two_pk.ChuType.BOMB,{zhuID:t,minLength:4,maxLength:4}),this.chain.addType(two_pk.ChuType.MAX_BOMB,{count:2})},e.prototype.getStyle=function(t){return this.chain.getCardStyle(t)},e.prototype.getAllSuggestCards=function(e){var o=[],n=t.styleUtils.getStyle(e);if(n.type!=two_pk.ChuType.NONE)return o.push(e),o;var i=[];i=this.chain.getSuggestCards(e,{type:two_pk.ChuType.SINGLE,value:{value:2,cardID:2,count:1}},!1),i&&(o=o.concat(i)),i=[],i=this.chain.getSuggestCards(e,{type:two_pk.ChuType.SINGLE,value:{value:2,cardID:2,count:2}},!1),i&&(o=o.concat(i)),i=[],i=this.chain.getSuggestCards(e,{type:two_pk.ChuType.THREE_APP,value:{value:2,cardID:2,count:1}},!1),i&&(o=o.concat(i)),i=[],i=this.chain.getSuggestCards(e,{type:two_pk.ChuType.THREE_APP,value:{value:2,cardID:2,count:2}},!1),i&&(o=o.concat(i)),i=[];
for(var r=5;r<e.length;r++){var s=this.chain.getSuggestCards(e,{type:two_pk.ChuType.LINE,value:{value:2,cardID:2,count:1,length:r}},!1);if(!(s.length>0))break;i=s}i&&(o=o.concat(i)),i=[];for(var r=3;r<e.length/2;r++){var s=this.chain.getSuggestCards(e,{type:two_pk.ChuType.LINE,value:{value:2,cardID:2,count:2,length:r}},!1);if(!(s.length>0))break;i=s}i&&(o=o.concat(i)),i=[];for(var r=2;r<e.length/4;r++){var s=this.chain.getSuggestCards(e,{type:two_pk.ChuType.THREE_APP_LINE,value:{value:2,cardID:2,count:1,length:r}},!1);if(!(s.length>0))break;i=s}i&&(o=o.concat(i)),i=[];for(var r=2;r<e.length/5;r++){var s=this.chain.getSuggestCards(e,{type:two_pk.ChuType.THREE_APP_LINE,value:{value:2,cardID:2,count:2,length:r}},!1);if(!(s.length>0))break;i=s}return i&&(o=o.concat(i)),i=[],i=this.chain.getSuggestCards(e,{type:two_pk.ChuType.BOMB,value:{value:2,cardID:2,length:4}},!1),i&&(o=o.concat(i)),o},e.prototype.getSuggestCards=function(t,e){return this.chain.getSuggestCards(t,this.getStyle(e))},e.prototype.sortCardIDs=function(t,e){t.sort(function(t,o){return t%20==1&&e?e?1:-1:o%20==1&&e?e?-1:1:t%20>o%20?1:-1})},e}();t.DDZStyle=e,__reflect(e.prototype,"two.ddz.DDZStyle",["two_pk.IStyleUtils"])}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){function e(e){return t.tableVO&&t.tableVO.tableData&&t.tableVO.tableData.moOrders&&t.tableVO.tableData.moOrders.length>0?t.tableVO.tableData.moOrders.indexOf(e):e}function o(e){var o=t.getSeatNO(t.tableVO.tableData.index),n=t.getSeatNO(e);return(n-o+t.tableVO.tableData.memberNum)%t.tableVO.tableData.memberNum}function n(e){return t.tableVO&&t.tableVO.tableData&&t.tableVO.tableData.moOrders&&null!=t.tableVO.tableData.moOrders[e]?t.tableVO.tableData.moOrders[e]:e}var i=function(){function t(){}return t.prototype.usePlatInfo=function(){return!!(one.getOption("userId")&&one.getOption("state")&&one.getOption("sign"))},t.prototype.getUserName=function(){return this.userName||one.getOption("name")||""},t.prototype.setUserName=function(t){this.userName=t?t.trim():t},t.prototype.clearRoom=function(){this.userInfo.rid=0,this.userInfo.gid=0},t}();t.UserVO=i,__reflect(i.prototype,"two.UserVO"),t.getSeatNO=e,t.getHeadNOByOwn=o,t.getInfoIdx=n,t.userVO=new i}(two||(two={}));var two_pk;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t.isHorizontal=!1,t.isBig=!1,t}return __extends(o,e),o.prototype.setDirection=function(t,e){if(this.isHorizontal=t,this.isBig=e,null==this.layout){var o=void 0;t?(o=new eui.HorizontalLayout,o.gap=null!=this.gap?this.gap:-90):(o=new eui.VerticalLayout,o.gap=null!=this.gap?this.gap:this.isBig?-95:-130),o&&(this.layout=o)}},o.prototype.setGap=function(t){this.gap=t},o.prototype.setCardIDs=function(t){this.removeChildren(),t&&t.length>0&&this.addCardIDs(t)},o.prototype.addCardIDs=function(e){for(var o=0;o<e.length;o++){var n=new t.Card;n.isBig=this.isBig,n.card=e[o]||0,this.addChild(n)}},o.prototype.sort=function(){for(var e=this,o=[],n=[],i=0;i<this.numChildren;i++)n.push(this.getChildAt(i)),o.push(n[i].card);var r=t.styleUtils.getStyle(o);switch(r.type){case t.ChuType.LINE:case t.ChuType.Flower_BOMB:this.sortCardIDs(n,1!=r.value.value),n.reverse();break;case t.ChuType.THREE_APP:var s=(t.getZhuID(),r.value.value);n.sort(function(t,o){var n=t.card%20,i=o.card%20;return n==i?t.card<o.card?-1:1:14==s&&1==n?1:14==s&&1==i?-1:n==s?1:i==s?-1:e.compare(t,o,!0)});break;default:this.sortCardIDs(n,!0)}for(var i=0;i<n.length;i++)this.addChildAt(n[i],0)},o.prototype.sortCardIDs=function(t,e){var o=this;t.sort(function(t,n){return o.compare(t,n,e)})},o.prototype.compare=function(e,o,n){var i=e.card%20,r=o.card%20;if(i==r)return e.card<o.card?-1:1;if(17==i)return 1;if(17==r)return-1;if(16==i)return 1;if(16==r)return-1;var s=t.getZhuID();return i==s?1:r==s?-1:1==i&&n?1:1==r&&n?-1:r>i?-1:1},o.prototype.addCards=function(t){for(var e=0;e<t.length;e++)this.addChild(t[e])},o.prototype.hasCards=function(){return this.numElements>0},o.prototype.getCard=function(t,e){for(var o=0;o<this.numElements;o++){var n=this.getChildAt(o);if(n.card==t){if(e.indexOf(n)>=0)continue;return n}}return null},o.prototype.removeCardID=function(t){for(var e=0;e<this.numElements;e++){var o=this.getChildAt(e);if(o.card==t)return this.removeChildAt(e),o}return null},o.prototype.isSame=function(t){if(t.length!=this.numChildren)return!1;for(var e=[],o=0;o<this.numChildren;o++)e.push(this.getChildAt(o).card);e.sort(function(t,e){return t>e?1:-1});for(var o=0;o<t.length;o++)if(e[o]!=t[o])return!1;return!0},o}(eui.Group);t.CardList=e,__reflect(e.prototype,"two_pk.CardList")}(two_pk||(two_pk={}));var two;!function(t){var e;!function(e){var o=function(o){function n(){var t=o.call(this,"ddz.ConfirmPanelSkin")||this;return t.sugIdx=0,t.mingScore=1,t.cardIDs=[],t}return __extends(n,o),n.prototype.setSuggest=function(){var t=e.tableVO.getLastDropCardIDs();t.length>0?(this.sugIdx=0,this.sugCardIDs=e.styleUtils.getSuggestCards(e.tableVO.getSeatData(e.tableVO.ownPos),t)):this.sugCardIDs=[],one.monitor.emit("onBiggerCards",{isBigger:this.sugCardIDs.length>0}),this.tishiBtn.enabled=this.sugCardIDs.length>0},n.prototype.setNewSuggest=function(){this.sugCardIDs=[],this.sugIdx=0;var t=e.tableVO.getSeatData(e.tableVO.ownPos).concat();this.sugCardIDs=e.styleUtils.getAllSuggestCards(t)},n.prototype.created=function(){var n=this;o.prototype.created.call(this),this.btnsGp.visible=!1,this.btn_ming.visible=!1,this.guoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.guo(),one.monitor.emit("autoCards",[])},this),this.tishiBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.sugCardIDs.length>0?(one.monitor.emit("autoCards",n.sugCardIDs[n.sugIdx]),n.sugIdx=(n.sugIdx+1)%n.sugCardIDs.length):n.guoBtn.visible&&(t.showTip(one.langUtils.getStatement(4014)),one.monitor.emit("autoCards",[]),e.guo())},this),this.chuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.chu(n.cardIDs,n.cardStyle.type,null!=n.cardStyle.value.length?n.cardStyle.value.length:1)},this),this.noBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.setScore(-1)},this),this.oneBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.setScore(1)},this),this.twoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.setScore(2)},this),this.threeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.setScore(3)},this),this.btn_ming.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.btn_ming.enabled=!1,t.Play_actionProxy.getInstance().send({rid:e.tableVO.roomID,type:4,"double":n.mingScore},function(t){n.btn_ming.enabled=!0,200==t.code&&(n.btn_ming.visible=!1)})},this)},n.prototype.setScore=function(t){var o=this;this.noBtn.enabled=!1,this.oneBtn.enabled=!1,this.twoBtn.enabled=!1,this.threeBtn.enabled=!1,e.transformJiabei(t,function(t){o.noBtn.enabled=!0,o.oneBtn.enabled=!0,o.twoBtn.enabled=!0,o.threeBtn.enabled=!0,200==t.code&&o.onClose()})},n.prototype.added=function(){o.prototype.added.call(this),one.monitor.on(n.ON_COMFIRM,this.onConfirm,this),one.monitor.on(n.ON_COMFIRM_CLOSE,this.onClose,this),one.monitor.on(n.ON_CHOOSE_CARDS,this.onChooseCards,this),one.monitor.on(n.ON_CHANGE_MING_SCORE,this.onChangeMingScore,this)},n.prototype.removed=function(){o.prototype.removed.call(this),one.monitor.off(n.ON_COMFIRM,this.onConfirm,this),one.monitor.off(n.ON_COMFIRM_CLOSE,this.onClose,this),one.monitor.off(n.ON_CHOOSE_CARDS,this.onChooseCards,this),one.monitor.off(n.ON_CHANGE_MING_SCORE,this.onChangeMingScore,this)},n.prototype.onChangeMingScore=function(t){this.mingScore=t.score,this.btn_ming.label=one.langUtils.getStatement(4007,this.mingScore),e.tableVO.users[e.tableVO.ownPos].mingpai<=0?this.btn_ming.visible=t.score>0:this.btn_ming.visible=!1},n.prototype.setChuEnabled=function(t){this.chuBtn.enabled=t},n.prototype.onChooseCards=function(t){var e=this.cardIDs;e.length=0;for(var o=0;o<t.cards.length;o++)e.push(t.cards[o].card);this.checkChu(e)},n.prototype.checkChu=function(t){if(0==t.length)this.setChuEnabled(!1);else{var o=e.tableVO.getLastDropCardIDs();this.cardStyle=e.styleUtils.getStyle(t),0==o.length?this.cardStyle.type!=two_pk.ChuType.NONE?this.setChuEnabled(!0):this.setChuEnabled(!1):two_pk.compare(e.styleUtils.getStyle(t),e.styleUtils.getStyle(o))>0?this.setChuEnabled(!0):this.setChuEnabled(!1)}},n.prototype.onClose=function(){this.btnsGp.visible=!1},n.prototype.addClock=function(t){1==e.tableVO.isPlaying?this.noBtn.parent.addChildAt(t,2):this.guoBtn.parent.addChildAt(t,1)},n.prototype.onConfirm=function(t){this.chuBtn.visible=!1,this.tishiBtn.visible=!1,this.guoBtn.visible=!1,this.oneBtn.visible=!1,this.twoBtn.visible=!1,this.threeBtn.visible=!1,this.noBtn.visible=!1,5==t.type?(this.oneBtn.visible=!0,this.twoBtn.visible=!0,this.threeBtn.visible=!0,this.noBtn.visible=!0,this.oneBtn.enabled=e.tableVO.score<1,this.twoBtn.enabled=e.tableVO.score<2,this.threeBtn.enabled=e.tableVO.score<3):(this.chuBtn.visible=!0,this.tishiBtn.visible=!0,this.setChuEnabled(!1),t.isNew?(this.setNewSuggest(),this.guoBtn.includeInLayout=this.guoBtn.visible=!1):(this.guoBtn.visible=!0,this.guoBtn.includeInLayout=this.guoBtn.visible=!0,this.setSuggest()),this.checkChu(this.cardIDs)),this.btnsGp.visible=!0},n.ON_COMFIRM="onConfirm",n.ON_COMFIRM_CLOSE="onConfirmClose",n.ON_CHOOSE_CARDS="onChooseCards",n.ADD_CLOCK="addClock",n.ON_CHANGE_MING_SCORE="onChangeMingScore",n}(t.BaseLangComponent);e.ConfirmPanel=o,__reflect(o.prototype,"two.ddz.ConfirmPanel")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(e){function o(){return e.call(this,"ExitConfirm")||this}return __extends(o,e),o.prototype.created=function(){var o=this;e.prototype.created.call(this),t.addTap(this.okBtn,function(){t.closeBox(o),o.dispatchEvent(new egret.Event(t.Confirm.OK))}),t.addTap(this.cancelBtn,function(){t.closeBox(o)})},o}(t.BaseLangComponent);e.ExitConfirm=o,__reflect(o.prototype,"two.ddz.ExitConfirm")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(o){function n(){return o.call(this)||this}return __extends(n,o),n.prototype.onTap=function(){var o=this,n=new e.ExitConfirm;n.once(t.Confirm.OK,function(){o.enabled=!1,t.Play_quitProxy.getInstance().send({rid:e.tableVO.roomID},function(n){o.enabled=!0,200==n.code&&(1!=e.tableVO.isPlaying&&2!=e.tableVO.isPlaying&&(e.tableVO.roomID=0,t.userVO.userInfo.rid=0),t.changePage(t.SceneType.HALL),t.closeAllBoxes())})},null),t.showBox(n),one.soundManager.playSound("buttonClick",0,1)},n}(t.BaseButton);e.ExitRoomButton=o,__reflect(o.prototype,"two.ddz.ExitRoomButton")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two_pk;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t.isHorizontal=!1,t.isBig=!1,t.chooseCards=[],t.cardWidth=143,t.cardLists=[],t.dic=two.Direction.BOTTOM,t}return __extends(o,e),o.prototype.created=function(){e.prototype.created.call(this),this.cardGroup=this.getChildAt(0),this.cardGroup.removeChildren(),this.chooseCards=[],this.initMy(),one.monitor.on("autoCards",this.onAutoChoose,this)},o.prototype.removed=function(){e.prototype.removed.call(this),one.monitor.off("autoCards",this.onAutoChoose,this),this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCardsMove,this)},o.prototype.onAutoChoose=function(t){this.clearChoose(),t.sort(function(t,e){return t>e?1:-1});for(var e=[],o=t.length-1;o>=0;o--){var n=this.getCardFromCardLists(t[o],e);n&&(e.push(n),this.onChoose(n))}this.emitCards()},o.prototype.initMy=function(){this.cardGroup.touchEnabled=!1,this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBegin,this)},o.prototype.clearMoveListeners=function(){this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCardsMove,this)},o.prototype.onBegin=function(e){this.lastCard=null,this.endCard=null,e.target instanceof t.Card&&(this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCardsMove,this),this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this),this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCardsMove,this),this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this),this.lastTouchDB=e.target,this.onChoose(e.target))},o.prototype.onTouchEnd=function(t){t.currentTarget.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this),this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCardsMove,this)},o.prototype.onCardsMove=function(e){e.stopImmediatePropagation(),e.target!=this.lastTouchDB&&(this.lastTouchDB=e.target,e.target instanceof t.Card&&this.onChoose(e.target))},o.prototype.clearChoose=function(){for(var t=this.chooseCards.length-1;t>=0;t--)this.setChooseCard(this.chooseCards[t],!1);this.chooseCards.length=0,this.lastCard=null,this.endCard=null,this.emitCards()},o.prototype.emitCards=function(){one.monitor.emit("onChooseCards",{cards:this.chooseCards,canTidy:!0})},o.prototype.onChoose=function(t){var e=this.chooseCards.indexOf(t);if(e>=0)if(this.lastCard==t){var o=this.chooseCards.pop();this.setChooseCard(o,!1);var n=this.chooseCards.pop();n&&this.setChooseCard(n,!1),this.lastCard=null,this.endCard=null}else this.chooseCards.splice(e,1),this.setChooseCard(t,!1),this.lastCard=this.endCard,this.endCard=t;else this.lastCard==t?(this.chooseCards.push(this.lastCard),this.chooseCards.push(this.endCard),this.setChooseCard(this.lastCard,!0),this.setChooseCard(this.endCard,!0),this.lastCard=null,this.endCard=null):(this.chooseCards.push(t),this.setChooseCard(t,!0),this.lastCard=this.endCard,this.endCard=t);this.emitCards()},o.prototype.setChooseCard=function(t,e){e?t.top=-50:t.top=0},o.prototype.changeToLay=function(t){this.clearMoveListeners(),this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBegin,this)},o.prototype.checkLayout=function(){var t=two.getStageWith()-180,e=this.cardLists.length,n=e*this.cardWidth+o.MAX_GAP*(e-1),i=o.MAX_GAP+this.cardWidth;n<=t/this.cardGroup.scaleX||(i=Math.floor((t/this.cardGroup.scaleX-e*this.cardWidth)/(e-1))+this.cardWidth),this.cardGroup.removeChildren();for(var r=0;r<this.cardLists.length;r++)this.cardGroup.addChild(this.cardLists[r]),this.cardLists[r].left=r*i,this.cardLists[r].top=0},o.prototype.clear=function(){this.cardGroup.removeChildren(),this.cardLists.length=0,this.chooseCards.length=0,this.lastTouchDB=null,this.lastCard=null,this.endCard=null},o.prototype.removeCardIDs=function(t){for(var e=[],o=t.length-1;o>=0;o--){var n=this.getCardFromCardLists(t[o],e);n&&(e.push(n),t.splice(o,1))}this.removeFromCardList(e),t.length>0&&console.error(t),this.clearChoose(),this.refresh()},o.prototype.getCardFromCardLists=function(t,e){for(var o=0;o<this.cardLists.length;o++)if(t==this.cardLists[o].card&&e.indexOf(this.cardLists[o])<0)return this.cardLists[o];return null},o.prototype.refresh=function(){this.checkLayout()},o.prototype.addOne=function(e){var o=new t.Card;o.card=e,this.addToCardList(o),this.refresh()},o.prototype.addToCardList=function(e){for(var o=0;o<this.cardLists.length;o++){var n=t.compareCardID(this.cardLists[o].card,e.card,!0,t.getZhuID());if(0==n)return void(this.cardLists[o].card>e.card?this.insertCardList(e,o):this.insertCardList(e,o+1));if(0>n)return void this.insertCardList(e,o)}this.insertCardList(e,this.cardLists.length)},o.prototype.insertCardList=function(t,e){this.cardLists.splice(e,0,t)},o.prototype.removeFromCardList=function(t){for(var e=t.length-1;e>=0;e--){var o=t[e];two.removeSelf(o);var n=this.cardLists.indexOf(o);n>=0&&this.cardLists.splice(n,1)}},o.MAX_GAP=2,o}(t.BaseStand);t.HorizontalStand=e,__reflect(e.prototype,"two_pk.HorizontalStand")}(two_pk||(two_pk={}));var two_pk;!function(t){var e=function(e){function o(){var o=e.call(this)||this;return o.cardIDs=[],o.cardList=new t.CardList,o.addChild(o.cardList),o.cardList.setDirection(!0,!0),o.iconGroup=new eui.Group,o.addChild(o.iconGroup),o.iconGroup.horizontalCenter=0,o.iconGroup.verticalCenter=0,o.tipGroup=new eui.Group,o.addChild(o.tipGroup),o.tipGroup.horizontalCenter=0,o.tipGroup.verticalCenter=0,o}return __extends(o,e),o.prototype.setCardIDs=function(t){this.cardIDs=t,this.cardList.setCardIDs(t),this.cardList.sort()},o.prototype.getIdx=function(t){return 100>t?(t%=20,1==t||14==t?14:t):116==t?16:117==t?17:void 0},o.prototype.clearAll=function(){this.cardList.setCardIDs([]),this.iconGroup.removeChildren(),this.tipGroup.removeChildren()},o.prototype.removeTip=function(){this.tipGroup.removeChildren()},o.prototype.addTip=function(t){this.tipGroup.addChild(t)},o.prototype.setIcon=function(t){this.iconGroup.removeChildren(),t&&this.iconGroup.addChild(t)},o}(eui.Group);t.Lay=e,__reflect(e.prototype,"two_pk.Lay")}(two_pk||(two_pk={}));var two;!function(t){var e;!function(e){var o=function(){function o(){this.endTime=0}return o.prototype.destroy=function(){t.cmdManager.clear(),this.stepCMDTrans.clear(),this.stepCMDTrans.stop(),t.net.pomeloProxy.off(e.ActionCode.QuitRoom,this.onQuitRoom,this),t.net.pomeloProxy.off(e.ActionCode.onKickRoom,this.onKickRoom,this),t.net.pomeloProxy.off(e.ActionCode.JoinRoom,this.onJoinRoom,this),t.net.pomeloProxy.off(e.ActionCode.DisbandRoom,this.onDisbandRoom,this),t.net.pomeloProxy.off(e.ActionCode.GameOver,this.onSettle,this),t.net.pomeloProxy.off(e.ActionCode.OnPlay,this.onPlay,this),t.net.pomeloProxy.off(e.ActionCode.RoomReady,this.onRoomReady,this),t.net.pomeloProxy.off(e.ActionCode.NoMaster,this.onNoMaster,this),t.net.pomeloProxy.off(e.ActionCode.StartNewGame,this.onStartNewGame,this),t.net.pomeloProxy.off(e.ActionCode.BottomCard,this.onBottomCard,this),t.net.pomeloProxy.off(e.ActionCode.NextAction,this.onNextAction,this),t.net.pomeloProxy.off(e.ActionCode.RoomStatus,this.onRoomStatus,this),t.net.pomeloProxy.off(e.ActionCode.RoomTrusteeship,this.onRoomTrusteeship,this),t.net.pomeloProxy.off(e.ActionCode.RoomJoinNewGame,this.onRoomJoinNewGame,this),one.monitor.off("onConnectSuccess",this.onReconnect,this),one.monitor.off(t.StepCMDTrans.ON_STEP_CHANGED,this.onStepChange,this)},o.prototype.init=function(){t.cmdManager.clear(),t.cmdManager.addCommand(3,new e.FapaiCommand),t.cmdManager.addCommand(5,new e.JiabeiCommand),t.cmdManager.addCommand(4,new e.ChuCommand),t.cmdManager.addCommand(6,new e.GuoCommand),t.cmdManager.addCommand(2,new e.InitCommand),t.cmdManager.addCommand(10,new e.TurnDiCommand),t.cmdManager.addCommand(14,new e.ConfirmCommand),t.cmdManager.addCommand(21,new e.ClearCommand),t.cmdManager.addCommand(19,new e.ResultCommand),t.cmdManager.addCommand(22,new e.NewRoundCommand),t.cmdManager.addCommand(26,new e.QuitCommand),t.cmdManager.addCommand(27,new e.JoinCommand),this.stepCMDTrans=new t.StepCMDTrans,this.stepCMDTrans.start(),one.monitor.on("onConnectSuccess",this.onReconnect,this),t.net.pomeloProxy.on(e.ActionCode.QuitRoom,this.onQuitRoom,this),t.net.pomeloProxy.on(e.ActionCode.onKickRoom,this.onKickRoom,this),t.net.pomeloProxy.on(e.ActionCode.JoinRoom,this.onJoinRoom,this),t.net.pomeloProxy.on(e.ActionCode.DisbandRoom,this.onDisbandRoom,this),t.net.pomeloProxy.on(e.ActionCode.GameOver,this.onSettle,this),t.net.pomeloProxy.on(e.ActionCode.OnPlay,this.onPlay,this),t.net.pomeloProxy.on(e.ActionCode.RoomReady,this.onRoomReady,this),t.net.pomeloProxy.on(e.ActionCode.NoMaster,this.onNoMaster,this),t.net.pomeloProxy.on(e.ActionCode.StartNewGame,this.onStartNewGame,this),t.net.pomeloProxy.on(e.ActionCode.BottomCard,this.onBottomCard,this),t.net.pomeloProxy.on(e.ActionCode.NextAction,this.onNextAction,this),t.net.pomeloProxy.on(e.ActionCode.RoomStatus,this.onRoomStatus,this),t.net.pomeloProxy.on(e.ActionCode.RoomTrusteeship,this.onRoomTrusteeship,this),t.net.pomeloProxy.on(e.ActionCode.RoomJoinNewGame,this.onRoomJoinNewGame,this),one.monitor.on(t.StepCMDTrans.ON_STEP_CHANGED,this.onStepChange,this),this.setInitCmd(e.tableVO.CDTime)},o.prototype.onBottomCard=function(t){this.stepCMDTrans.addPlayStep({type:10,data:{lord:t.index,score:t.score,cardIDs:t.userPais}})},o.prototype.onStartNewGame=function(t){one.monitor.emit(e.ConfirmPanel.ON_CHANGE_MING_SCORE,{score:0}),this.stepCMDTrans.addPlayStep({type:22,data:t}),this.stepCMDTrans.addPlayStep({type:21,data:{}}),this.stepCMDTrans.addPlayStep({type:2,data:{}})},o.prototype.onReconnect=function(o){var n=this;t.Play_joinRoomProxy.getInstance().send({rid:e.tableVO.roomID},function(o){200==o.code?(n.stepCMDTrans.clear(),n.setInitCmd(e.tableVO.CDTime)):1005==o.code&&(e.tableVO.roomID=0,t.userVO.userInfo.rid=0,t.changePage(t.SceneType.HALL))})},o.prototype.setInitCmd=function(t){if(this.stepCMDTrans.addPlayStep({type:21,data:{}}),this.stepCMDTrans.addPlayStep({type:2,data:{}}),1==e.tableVO.isPlaying||2==e.tableVO.isPlaying){e.tableVO.getLastChuIdx();this.onNextAction({indexs:[e.tableVO.currentPos],cdTime:e.tableVO.CDTime})}},o.prototype.onNextAction=function(t){one.monitor.emit(e.ConfirmPanel.ON_COMFIRM_CLOSE,null);var o=Date.now();this.endTime=o+1e3*t.cdTime,this.stepCMDTrans.addPlayStep({type:14,data:{seat:t.indexs[0],endTime:this.endTime}})},o.prototype.onRoomStatus=function(t){e.tableVO.isPlaying=t.status;var o=Date.now();this.endTime=o+1e3*t.cdTime,1==t.status?(e.tableVO.reset(),one.monitor.emit(e.ConfirmPanel.ON_CHANGE_MING_SCORE,{score:5})):2==t.status?one.monitor.emit(e.ConfirmPanel.ON_CHANGE_MING_SCORE,{score:0}):0==t.status&&one.monitor.emit(e.ConfirmPanel.ON_CHANGE_MING_SCORE,{score:0})},o.prototype.onPlay=function(t){var o=Date.now();switch(this.endTime=o+1e3*t.cdTime,t.type){case 1:this.stepCMDTrans.addPlayStep({type:3,data:{userPais:t.userPais,firstUidIdx:t.firstUidIdx}});break;case 2:t.index==e.tableVO.ownPos&&one.monitor.emit(e.ConfirmPanel.ON_COMFIRM_CLOSE,null),this.stepCMDTrans.addPlayStep({type:4,data:{cardIDs:t.userPais,seat:t.index}});break;case 3:t.index==e.tableVO.ownPos&&one.monitor.emit(e.ConfirmPanel.ON_COMFIRM_CLOSE,null),this.stepCMDTrans.addPlayStep({type:6,data:{seat:t.index}});break;case 4:var n=t.index,i=t.userPais;e.tableVO["double"]=t["double"],e.tableVO.users[n].mingpai=t.mingpai,i&&i.length>0&&(e.tableVO.players[n].pais=i,n!=e.tableVO.ownPos&&e.tableVO.isFapai&&e.getStandByIndex(n).stand.changeToLay(i)),one.monitor.emit("onChangeDouble",{}),one.soundManager.playSound("female_mingpai",0,1),n==e.tableVO.ownPos&&one.monitor.emit(e.ConfirmPanel.ON_CHANGE_MING_SCORE,{score:0})}},o.prototype.onJoinRoom=function(t){this.stepCMDTrans.addPlayStep({type:27,data:{index:t.index,userInfo:t.userInfo}})},o.prototype.onQuitRoom=function(o){var n=e.tableVO.ownPos;return n==o.index?(t.userVO.userInfo.rid=0,t.changePage(t.SceneType.HALL),void t.closeAllBoxes()):void this.stepCMDTrans.addPlayStep({type:26,data:{isOwn:o.index==n,index:o.index}})},o.prototype.onKickRoom=function(o){var n=e.tableVO.ownPos;if(n==o.index){t.userVO.userInfo.rid=0,t.changePage(t.SceneType.HALL),t.closeAllBoxes();var i=new t.clazzes.confirm("你被踢了，请重新选择房间进入",!1,!1);return void t.showBox(i)}this.stepCMDTrans.addPlayStep({type:26,data:{isOwn:o.index==n,index:o.index}})},o.prototype.onDisbandRoom=function(e){if(1==e.disband){t.userVO.userInfo.rid=0,t.changePage(t.SceneType.HALL);var o=new t.clazzes.confirm(one.langUtils.getStatement(60),!1,!1);t.showBox(o)}},o.prototype.onSettle=function(t){var e=Date.now();this.endTime=e+1e3*t.cdTime,t.endTime=this.endTime,this.stepCMDTrans.addPlayStep({type:19,data:t})},o.prototype.onRoomReady=function(t){this.stepCMDTrans.addPlayStep({type:5,data:{seat:t.index,score:t.score}})},o.prototype.onNoMaster=function(o){one.monitor.emit(e.ConfirmPanel.ON_COMFIRM_CLOSE,{}),e.tableVO.ownPos>=0&&(t.showTip(one.langUtils.getStatement(10)),one.monitor.emit(e.ConfirmPanel.ON_CHANGE_MING_SCORE,{score:0}))},o.prototype.onRoomTrusteeship=function(t){one.monitor.emit("onTrusteeship",t)},o.prototype.onRoomJoinNewGame=function(t){e.tableVO.users[t.index].isJoinNewGame=1},o.prototype.onStepChange=function(e){t.cmdManager.execute(e.type,e.data)},o}();e.Manager=o,__reflect(o.prototype,"two.ddz.Manager")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two_pk;!function(t){var e=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.created=function(){t.prototype.created.call(this),this.label=this.getChildAt(1),this.bg_card=this.getChildAt(0),this.cardList=this.getChildAt(2),this.cardList.setCardIDs([]),this.cardList.setDirection(!1,!0)},e.prototype.changeToLay=function(t){this.cardList.setCardIDs(t),this.cardList.sort()},e.prototype.clear=function(){this.cardCount=0,this.label.text=this.cardCount.toString(),this.cardList.setCardIDs([])},e.prototype.addOne=function(e,o){void 0===o&&(o=!0),t.prototype.addOne.call(this,e),this.label.text=this.cardCount.toString(),e>0&&o&&(this.cardList.addCardIDs([e]),this.cardList.sort())},e.prototype.removeCardIDs=function(e){t.prototype.removeCardIDs.call(this,e),this.label.text=this.cardCount.toString();for(var o=0;o<e.length;o++)this.cardList.removeCardID(e[o])},e}(t.BaseStand);t.OtherStand=e,__reflect(e.prototype,"two_pk.OtherStand")}(two_pk||(two_pk={}));var two;!function(t){var e;!function(t){var e=function(e){function o(){return e.call(this)||this}return __extends(o,e),o.prototype.created=function(){e.prototype.created.call(this),one.monitor.on("showDiPool",this.onSetDizhu,this),t.tableVO.lord>0&&this.onSetDizhu()},o.prototype.removed=function(){e.prototype.removed.call(this),one.monitor.off("showDiPool",this.onSetDizhu,this)},o.prototype.onSetDizhu=function(){for(var e=t.TableVO.Max_Member,o=0;e>o;o++)this.headIdxs[o].head.setDizhuIcon((o+t.tableVO.ownPos)%e==t.tableVO.lord,t.tableVO.lord>=0)},o}(t.PlayersBaesLayer);t.PlayersLayer=e,__reflect(e.prototype,"two.ddz.PlayersLayer")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(t){var e=function(e){function o(){return e.call(this)||this}return __extends(o,e),o.prototype.removed=function(){e.prototype.removed.call(this),one.monitor.off("onChangeDouble",this.onChangeDouble,this),one.monitor.off("showDiPool",this.showDiPool,this)},o.prototype.gameStarted=function(){this.cardGroup.visible=!0},o.prototype.created=function(){e.prototype.created.call(this),this.cardGroup.visible=!1,this.doubleTxt.text=t.tableVO["double"]+"",this.resumeBtn.visible=!1,this.tidyBtn.visible=!1,this.playerLayer.visible=!0,this.initDiPool(),one.monitor.on("showDiPool",this.showDiPool,this),one.monitor.on("onChangeDouble",this.onChangeDouble,this),this.bStand.touchChildren=!1,this.bStand.touchEnabled=!1,this.chatBtn.visible=!1,this.confirm.touchChildren=!1,this.confirm.touchEnabled=!1},o.prototype.onChangeDouble=function(){this.doubleTxt.text=t.tableVO["double"]+""},o}(t.BaseTable);t.ReplayTable=e,__reflect(e.prototype,"two.ddz.ReplayTable")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(o){function n(){var t=o.call(this)||this;return t.leftSecond=-1,t.secId=-1,t.mgId=0,t.skinName="ddz.ResultSkin",t}return __extends(n,o),n.prototype.init=function(t,o,n,i,r,s,a){this.userPaiData=o,this.users=n,this.seatTotal=i,this.ownSeatIdx=r,this.lordIdx=s,this.leftSecond=a,this.scores=[];for(var c=0,h=0;h<t.length;h++)this.scores[t[h].index]=t[h].score,c-=t[h].score;for(var h=0;h<e.TableVO.Max_Member;h++)if(null==this.scores[h]){this.scores[h]=c;break}},n.prototype.removed=function(){o.prototype.removed.call(this),egret.clearInterval(this.secId)},n.prototype.joinGame=function(){var o=this;return null==e.tableVO.roomData&&console.error(111),2==e.tableVO.roomData.roomType?(t.userVO.userInfo.rid=0,t.changePage(t.SceneType.HALL),t.closeAllBoxes(),void t.showBox(new t.MatchingTable(this.mgId),void 0,!0)):(this.okBtn.enabled=!1,this.backBtn.enabled=!1,egret.clearInterval(this.secId),void t.Play_joinNewGameProxy.getInstance().send({rid:e.tableVO.roomID},function(n){o.okBtn.enabled=!0,o.backBtn.enabled=!0,200==n.code?(e.tableVO.users[o.ownSeatIdx].isJoinNewGame=1,t.closeBox(o)):(e.tableVO.roomID=0,t.userVO.userInfo.rid=0,t.changePage(t.SceneType.HALL),t.closeBox(o))}))},n.prototype.created=function(){var n=this;o.prototype.created.call(this),this.mgId=e.tableVO.mgid,t.addTap(this.btn_video,function(){n.btn_video.visible=!1,t.VideoAd.show("333",function(e){t.userVO.userInfo.cash+=n.scores[0],t.ddz.SingleServerUtils.saveData(t.userVO.userInfo.cash),t.showTip(one.langUtils.getStatement(83,n.scores[0]))})}),this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.VideoAd.show("333",function(t){n.joinGame()})},this),this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.okBtn.enabled=!1,n.backBtn.enabled=!1,egret.clearInterval(n.secId),t.Play_quitProxy.getInstance().send({rid:e.tableVO.roomID},function(o){n.backBtn.enabled=!0,n.okBtn.enabled=!0,200==o.code?(1!=e.tableVO.isPlaying&&2!=e.tableVO.isPlaying&&(e.tableVO.roomID=0,t.userVO.userInfo.rid=0),t.changePage(t.SceneType.HALL),t.closeAllBoxes()):1005==o.code&&(e.tableVO.roomID=0,t.userVO.userInfo.rid=0,t.changePage(t.SceneType.HALL),t.closeAllBoxes())})},this),this.okBtn.label=""+one.langUtils.getStatement(68);var i=this.scores[this.ownSeatIdx]>0;this.btn_video.visible=i,i?this.ownSeatIdx==this.lordIdx?this.flag_result.source="text_lord_win_png":this.flag_result.source="text_peasant_win_png":this.ownSeatIdx==this.lordIdx?this.flag_result.source="text_lord_lose_png":this.flag_result.source="text_peasant_lose_png",this.currentState=i?"win":"fail";for(var r=e.TableVO.Max_Member,s=0;r>s;s++){var a=s,c=this["name"+s+"Txt"],h=this["score"+s+"Label"],l=this["score"+s+"Txt"];c.text=this.users[s].name;var u=this.scores[a];l.text=u>0?"+"+u:u+"",s==this.ownSeatIdx?(c.textColor=16764477,l.textColor=16764477,l.textColor=16764477,this.myScore.text=l.text,this.myScore.y=l.y+357.1-370.5,l.text="",i?this.myScore.font="Font_ResultScore_fnt":this.myScore.font="Font_ResultScore_Blue_fnt"):(c.textColor=16777215,l.textColor=16777215,h.textColor=16777215)}},n}(t.BaseLangComponent);e.Result=o,__reflect(o.prototype,"two.ddz.Result")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(o){function n(){return o.call(this)||this}return __extends(n,o),n.prototype.initBtns=function(){var o=this;this.resumeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){one.monitor.emit("resumeCards",null)},this),this.tidyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){one.monitor.emit("tidyCards",null)},this),this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP,function(t){t.stageY<o.stage.stageHeight-150&&one.monitor.emit("autoCards",[])},this),t.addTap(this.btn_trust,function(){o.btn_trust.enabled=!1,t.Play_trusteeshipProxy.getInstance().send({isOpen:1,rid:e.tableVO.roomID},function(t){o.btn_trust.enabled=!0})},this),t.addTap(this.btn_cancel_trust,function(){o.btn_cancel_trust.enabled=!1,t.Play_trusteeshipProxy.getInstance().send({isOpen:0,rid:e.tableVO.roomID},function(t){o.btn_cancel_trust.enabled=!0})},this)},n.prototype.tidy=function(t){if(0==t.cards.length&&0==e.tableVO.getSeatData(e.tableVO.ownPos).length)return this.tidyBtn.enabled=!1,void(this.resumeBtn.enabled=!1);if(t.canTidy&&t.cards.length>=4){for(var o=[],n=0;n<t.cards.length;n++)o.push(t.cards[n].card);e.tableVO.getLastDropCardIDs();if(e.styleUtils.getStyle(o).type!=two_pk.ChuType.NONE)return this.tidyBtn.enabled=!0,void(this.resumeBtn.enabled=!1)}this.resumeBtn.enabled=!0,this.tidyBtn.enabled=!1,this.gp_less.visible=!1},n.prototype.removed=function(){o.prototype.removed.call(this),one.monitor.off("onTrusteeship",this.onTrusteeship,this),one.monitor.off("onChangeDouble",this.onChangeDouble,this),one.monitor.off("showDiPool",this.showDiPool,this),one.monitor.off("onBiggerCards",this.onBiggerCards,this),one.monitor.off(e.ConfirmPanel.ON_CHOOSE_CARDS,this.tidy,this)},n.prototype.gameStarted=function(){o.prototype.gameStarted.call(this),this.cardGroup.visible=!0,this.gp_less.visible=!1},n.prototype.created=function(){o.prototype.created.call(this),this.onChangeDouble(),this.resumeBtn.enabled=!1,this.tidyBtn.enabled=!1,this.playerLayer.visible=!0,this.gp_trusting.visible=!1,this.gp_less.visible=!1,this.initBtns(),this.initDiPool(),one.monitor.on("showDiPool",this.showDiPool,this),one.monitor.on("onTrusteeship",this.onTrusteeship,this),one.monitor.on("onChangeDouble",this.onChangeDouble,this),one.monitor.on("onBiggerCards",this.onBiggerCards,this),one.monitor.on(e.ConfirmPanel.ON_CHOOSE_CARDS,this.tidy,this)
},n.prototype.onBiggerCards=function(t){this.gp_less.visible=!t.isBigger},n.prototype.onChangeDouble=function(){this.doubleTxt.text=e.tableVO["double"]*Math.max(1,e.tableVO.score)+""},n.prototype.onTrusteeship=function(t){e.tableVO.users[t.index].trusteeship=t.isOpen,t.index==e.tableVO.ownPos&&(this.gp_trusting.visible=!!t.isOpen,this.bStand.touchChildren=!t.isOpen)},n}(e.BaseTable);e.Table=o,__reflect(o.prototype,"two.ddz.Table")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(){function o(t){var o=this;this.headIdxs={},this.isDestroy=!1,this.chatRunning={},this.onJoinRoom=function(t){o.initHeads()},this.onOffLineRoom=function(t){e.tableVO.users[t.index].isLeave=!0,o.initHeads()},this.onQuitRoom=function(t){o.initHeads()},this.headIdxs=t,this.addListeners(),this.initHeads()}return o.prototype.addListeners=function(){one.monitor.on("onRoomProxyInit",this.initHeads,this),one.monitor.on("onUserJoinRoom",this.onJoinRoom,this),t.net.pomeloProxy.on("onLeaveRoom",this.onOffLineRoom,this),one.monitor.on("onUserQuitRoom",this.onQuitRoom,this),one.monitor.on("onTrusteeship",this.onTrusteeship,this),t.net.pomeloProxy.on("onRoomChat",this.onRoomChat,this),t.net.pomeloProxy.on("onChangeOwner",this.onChangeOwner,this)},o.prototype.destroy=function(){this.isDestroy=!0,one.monitor.off("onRoomProxyInit",this.initHeads,this),one.monitor.off("onUserJoinRoom",this.onJoinRoom,this),t.net.pomeloProxy.off("onLeaveRoom",this.onOffLineRoom,this),one.monitor.off("onUserQuitRoom",this.onQuitRoom,this),one.monitor.off("onTrusteeship",this.onTrusteeship,this),t.net.pomeloProxy.off("onRoomChat",this.onRoomChat,this),t.net.pomeloProxy.off("onChangeOwner",this.onChangeOwner,this)},o.prototype.onRoomChat=function(t){this.ansChat(t)},o.prototype.ansChat=function(t){var e=JSON.parse(t.message);2==e.type?this.showChatTip(e.type,e.message,t.fromIdx,3e3):1==e.type&&this.showChatTip(e.type,e.message,t.fromIdx,3e3)},o.prototype.showChatTip=function(o,n,i,r){var s=this.chatRunning[i];s&&(s.stop(),s.parent&&s.parent.removeChild(s),this.chatRunning[i]=null);var a=new t.ChatTip(o,n,r,i);this.chatRunning[i]=a;var c=this.headIdxs[e.tableVO.getRealSeatByIndex(i)].head;c.parent;if(t.sceneLayer.addChild(a),a.validateNow(),2==o){var h=c.headIcon.localToGlobal(c.headIcon.width/2,c.headIcon.height/2);a.x=h.x-a.width/2,a.y=h.y-a.height/2}else{var h=c.headIcon.localToGlobal(c.headIcon.width/2,0);a.y=h.y-a.height,a.y<5&&(a.y=5),h.x<c.stage.stageWidth-400?(a.currentState="right",a.x=h.x):(a.currentState="left",a.x=h.x-a.width)}},o.prototype.onChangeOwner=function(t){e.tableVO.roomData.owner=t.owner,this.initHeads()},o.prototype.initHeads=function(){for(var t=[],o=0;o<e.TableVO.Max_Member;o++)t.push(o);for(var n=0,o=0;o<e.TableVO.Max_Member;o++){var i=e.tableVO.getRealSeatByIndex(o),r=t.indexOf(i);t.splice(r,1);var s=this.headIdxs[i],a=e.tableVO.users[o];if(null!=a){({uid:a.uid,name:a.name,sex:a.sex,pic:a.pic,ip:a.ip,score:a.score,gold:a.cash,address:""});s.head.playerData=a,s.head.setDizhuIcon(a.index==e.tableVO.lord,e.tableVO.lord>=0),s.head.setTrust(1==a.trusteeship),s.head.setOwner(e.tableVO.roomData.owner,e.tableVO.roomData.roomType),a.isLeave?s.head.offline():(s.head.online(),n++),s.head.visible=!0,s.ready.visible=!a.isLeave&&0!=a.isJoinNewGame,s.head.isFirst=!1}else s.head.playerData=a,s.head.setTrust(!1),s.head.setDizhuIcon(!1,!1),s.ready.visible=!1}for(var o=0;o<t.length;o++){var i=t[o],s=this.headIdxs[i];s.head.playerData=null,s.head.setTrust(!1),s.head.setDizhuIcon(!1,!1),s.ready.visible=!1}var c=e.tableVO.firstPos;this.headIdxs[c].head.isFirst=!0},o.prototype.onTrusteeship=function(t){var o=e.tableVO.getRealSeatByIndex(t.index),n=this.headIdxs[o];n.head.setTrust(1==t.isOpen)},o}();e.TablePlayersProxy=o,__reflect(o.prototype,"two.ddz.TablePlayersProxy")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two_pk;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t.isHorizontal=!1,t.isBig=!1,t.chooseCards=[],t.cardWidth=143,t.otherLists=[],t.bombLists=[],t.cardLists=[],t.dic=two.Direction.BOTTOM,t}return __extends(o,e),o.prototype.created=function(){e.prototype.created.call(this),this.cardGroup=this.getChildAt(0),this.cardGroup.removeChildren(),this.chooseCards=[],this.initMy(),one.monitor.on("autoCards",this.onAutoChoose,this),one.monitor.on("tidyCards",this.zhengli,this),one.monitor.on("resumeCards",this.resumeCards,this),one.monitor.on("onShowGongCards",this.onShowGongCards,this),one.monitor.on("onClearGongCards",this.onClearGongCards,this)},o.prototype.removed=function(){e.prototype.removed.call(this),one.monitor.off("autoCards",this.onAutoChoose,this),one.monitor.off("tidyCards",this.zhengli,this),one.monitor.off("resumeCards",this.resumeCards,this),one.monitor.off("onShowGongCards",this.onShowGongCards,this),one.monitor.off("onClearGongCards",this.onClearGongCards,this),this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCardsMove,this)},o.prototype.onShowGongCards=function(t){for(var e=this.bombLists.concat(this.otherLists,this.cardLists),o=0;o<e.length;o++)for(var n=e[o],i=0;i<n.numChildren;i++){var r=n.getChildAt(i);t.indexOf(r.card)<0&&(r.setColor(0),r.touchEnabled=!1)}},o.prototype.onClearGongCards=function(){for(var t=this.bombLists.concat(this.otherLists,this.cardLists),e=0;e<t.length;e++)for(var o=t[e],n=0;n<o.numChildren;n++){var i=o.getChildAt(n);i.setColor(null),i.touchEnabled=!0}},o.prototype.onAutoChoose=function(t){this.clearChoose(),t.sort(function(t,e){return t>e?1:-1});for(var e=0;e<this.bombLists.length;e++)if(this.bombLists[e].isSame(t)){for(var o=[],n=0;n<this.bombLists[e].numChildren;n++)o.push(this.bombLists[e].getChildAt(n)),this.onChoose(o[n]);return void this.emitCards()}for(var e=0;e<this.otherLists.length;e++)if(this.otherLists[e].isSame(t)){for(var i=[],n=0;n<this.otherLists[e].numChildren;n++)i.push(this.otherLists[e].getChildAt(n)),this.onChoose(i[n]);return void this.emitCards()}for(var r=[],e=t.length-1;e>=0;e--){var s=this.getCardFromCardLists(t[e],r);s?(r.push(s),this.onChoose(s)):(s=this.getCardFromOtherLists(t[e],r),s?(r.push(s),this.onChoose(s)):(s=this.getCardFromBombLists(t[e],r),s&&(r.push(s),this.onChoose(s))))}this.emitCards()},o.prototype.initMy=function(){this.cardGroup.touchEnabled=!1,this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBegin,this)},o.prototype.clearMoveListeners=function(){this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCardsMove,this)},o.prototype.onBegin=function(e){this.lastCard=null,this.endCard=null,e.target instanceof t.Card&&(this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCardsMove,this),this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this),this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCardsMove,this),this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this),this.lastTouchDB=e.target,this.onChoose(e.target))},o.prototype.onTouchEnd=function(t){t.currentTarget.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this),this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onCardsMove,this)},o.prototype.resumeCards=function(){var t=[];if(this.chooseCards.length>0)for(var e=0;e<this.chooseCards.length;e++){var o=this.chooseCards[e];t.push(o)}else{for(var e=0;e<this.bombLists.length;e++)for(var n=0;n<this.bombLists[e].numElements;n++)t.push(this.bombLists[e].getChildAt(n));for(var e=0;e<this.otherLists.length;e++)for(var n=0;n<this.otherLists[e].numElements;n++)t.push(this.otherLists[e].getChildAt(n))}this.resumeChooseCards(t),this.clearChoose()},o.prototype.resumeChooseCards=function(t){for(var e=[],o=0;o<t.length;o++){var n=t[o];if(e.indexOf(n)<0){e.push(n);var i=n.parent,r=this.otherLists.indexOf(i);0>r&&(r=this.bombLists.indexOf(i));for(var s=0;r>=0&&s<i.numChildren;s++){var a=i.getChildAt(s);a!=n&&e.push(a)}}}this.removeFromCardList(e);for(var o=0;o<e.length;o++)this.addToCardList(e[o]);this.checkLayout()},o.prototype.zhengli=function(){if(0!=this.chooseCards.length){if(this.chooseCards.length<=3)return two.showTip("牌数太少，不可以整理"),void this.clearChoose();for(var e=[],o=0;o<this.chooseCards.length;o++)e.push(this.chooseCards[o].card);var n=t.styleUtils.getStyle(e);if(n.type==t.ChuType.NONE)return two.showTip("非可打牌型，不可以整理"),void this.clearChoose();this.removeFromCardList(this.chooseCards),n.type==t.ChuType.BOMB_ONE||n.type==t.ChuType.BOMB||n.type==t.ChuType.Flower_BOMB||n.type==t.ChuType.MAX_BOMB?this.addToBombList(this.chooseCards):this.addToOtherList(this.chooseCards),this.clearChoose(),this.checkLayout()}},o.prototype.onCardsMove=function(e){e.stopImmediatePropagation(),e.target!=this.lastTouchDB&&(this.lastTouchDB=e.target,e.target instanceof t.Card&&this.onChoose(e.target))},o.prototype.clearChoose=function(){for(var t=this.chooseCards.length-1;t>=0;t--)this.chooseCards[t].setColor(null);this.chooseCards.length=0,this.lastCard=null,this.endCard=null,this.emitCards()},o.prototype.emitCards=function(){one.monitor.emit("onChooseCards",{cards:this.chooseCards,canTidy:!this.isInZhenliList(this.chooseCards)})},o.prototype.isInZhenliList=function(t){for(var e=t.length-1;e>=0;e--){var o=t[e],n=o.parent,i=this.otherLists.indexOf(n);if(i>=0)return!0;if(i=this.bombLists.indexOf(n),i>=0)return!0}return!1},o.prototype.onChoose=function(t){var e=this.chooseCards.indexOf(t);if(e>=0)if(this.lastCard==t){this.chooseCards.pop().setColor(null);var o=this.chooseCards.pop();o&&o.setColor(null),this.lastCard=null,this.endCard=null}else this.chooseCards.splice(e,1),t.setColor(null),this.lastCard=this.endCard,this.endCard=t;else this.lastCard==t?(this.chooseCards.push(this.lastCard),this.chooseCards.push(this.endCard),this.lastCard.setColor(7926903),this.endCard.setColor(7926903),this.lastCard=null,this.endCard=null):(this.chooseCards.push(t),t.setColor(7926903),this.lastCard=this.endCard,this.endCard=t);this.emitCards()},o.prototype.changeToLay=function(t){this.clearMoveListeners(),this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBegin,this)},o.prototype.checkLayout=function(){var t=two.getStageWith()-180,e=this.cardLists.length+this.bombLists.length+this.otherLists.length,n=e*this.cardWidth+o.MAX_GAP*(e-1),i=o.MAX_GAP;n<=t/this.cardGroup.scaleX||(i=Math.floor((t/this.cardGroup.scaleX-e*this.cardWidth)/(e-1))),this.cardGroup.removeChildren();for(var r=0;r<this.bombLists.length;r++)this.cardGroup.addChildAt(this.bombLists[r],0);for(var r=0;r<this.cardLists.length;r++)this.cardGroup.addChild(this.cardLists[r]);for(var r=0;r<this.otherLists.length;r++)this.cardGroup.addChild(this.otherLists[r]);i!=this.cardGroup.layout.gap&&(this.cardGroup.layout.gap=i)},o.prototype.clear=function(){this.cardGroup.removeChildren(),this.cardLists.length=0,this.otherLists.length=0,this.bombLists.length=0,this.chooseCards.length=0,this.lastTouchDB=null,this.lastCard=null,this.endCard=null},o.prototype.removeCardIDs=function(t){for(var e=0;e<this.bombLists.length;e++)if(this.bombLists[e].isSame(t)){for(var o=[],n=0;n<this.bombLists[e].numChildren;n++)o.push(this.bombLists[e].getChildAt(n));return this.removeFromCardList(o),this.clearChoose(),void this.refresh()}for(var e=0;e<this.otherLists.length;e++)if(this.otherLists[e].isSame(t)){for(var i=[],n=0;n<this.otherLists[e].numChildren;n++)i.push(this.otherLists[e].getChildAt(n));return this.removeFromCardList(i),this.clearChoose(),void this.refresh()}for(var r=!1,s=[],e=t.length-1;e>=0;e--){var a=this.getCardFromCardLists(t[e],s);a?(s.push(a),t.splice(e,1)):(a=this.getCardFromOtherLists(t[e],s),a?(r=!0,s.push(a),t.splice(e,1)):(a=this.getCardFromBombLists(t[e],s),a&&(r=!0,s.push(a),t.splice(e,1))))}r&&this.resumeChooseCards(s),this.removeFromCardList(s),t.length>0&&console.error(t),this.clearChoose(),this.refresh()},o.prototype.getCardFromCardLists=function(t,e){for(var o=0;o<this.cardLists.length;o++){var n=this.cardLists[o].getCard(t,e);if(n)return n}return null},o.prototype.getCardFromBombLists=function(t,e){for(var o=0;o<this.bombLists.length;o++){var n=this.bombLists[o].getCard(t,e);if(n)return n}return null},o.prototype.getCardFromOtherLists=function(t,e){for(var o=0;o<this.otherLists.length;o++){var n=this.otherLists[o].getCard(t,e);if(n)return n}return null},o.prototype.refresh=function(){this.checkLayout()},o.prototype.addOne=function(e){var o=new t.Card;o.isBig=this.isBig,o.card=e,this.addToCardList(o),this.refresh()},o.prototype.addToOtherList=function(e){var o=new t.CardList;o.setDirection(this.isHorizontal,this.isBig),o.addCards(e),this.otherLists.push(o),o.sort()},o.prototype.addToBombList=function(e){var o=new t.CardList;o.setDirection(this.isHorizontal,this.isBig),o.addCards(e),this.bombLists.push(o),o.sort()},o.prototype.addToCardList=function(e){for(var o=0;o<this.cardLists.length;o++){if(null==this.cardLists[o]||!this.cardLists[o].hasCards())return void this.insertCardList(e,o);var n=t.compareCardID(this.cardLists[o].getChildAt(0).card,e.card,!0,t.getZhuID());if(0==n)return this.cardLists[o].addCards([e]),void this.cardLists[o].sort();if(0>n)return void this.insertCardList(e,o)}this.insertCardList(e,this.cardLists.length)},o.prototype.insertCardList=function(e,o){var n=new t.CardList;n.setDirection(this.isHorizontal,this.isBig),n.addCards([e]),this.cardLists.splice(o,0,n),n.sort()},o.prototype.removeFromCardList=function(t){for(var e=t.length-1;e>=0;e--){var o=t[e],n=o.parent;if(o.parent.removeChild(o),!n.hasCards()){var i=this.cardLists.indexOf(n);i>=0?this.cardLists.splice(i,1):(i=this.otherLists.indexOf(n),i>=0?this.otherLists.splice(i,1):(i=this.bombLists.indexOf(n),i>=0&&this.bombLists.splice(i,1)))}}},o.MAX_GAP=2,o}(t.BaseStand);t.VerticalStand=e,__reflect(e.prototype,"two_pk.VerticalStand")}(two_pk||(two_pk={}));var two;!function(t){var e;!function(e){var o=function(o){function n(){var t=o.call(this)||this;return t.intervalID=-1,t.timeId=-1,t.tempWins=[],t}return __extends(n,o),n.prototype.execute=function(t){var o=this;one.monitor.emit("onBiggerCards",{isBigger:!0});var n,i=e.tableVO.ownPos,r=t.seat;n=this.getSeatUI(r).stand;var s=t.cardIDs;e.tableVO.removeCardIDs(r,s),e.tableVO.setDropCardIDs(r,s),n.removeCardIDs(s.concat());var a=e.styleUtils.getStyle(s);switch(a.type){case two_pk.ChuType.BOMB:case two_pk.ChuType.MAX_BOMB:e.tableVO["double"]*=2,one.monitor.emit("onChangeDouble",null)}if(this.chuCards(r,s),r==i&&one.monitor.emit("onResetCards",null),0==e.tableVO.getSeatData(r).length){for(var c=[0,0,0],h=0;h<e.tableVO.allOutPai.length;h++)e.tableVO.allOutPai[h].pais.length>0&&c[e.tableVO.allOutPai[h].index]++;var l=e.tableVO.lord,u=(l+1)%e.TableVO.Max_Member,d=(l+2)%e.TableVO.Max_Member;0==c[u]&&0==c[d]?(this.showMovie("pk_spring","spring"),e.tableVO["double"]*=2,one.monitor.emit("onChangeDouble",null)):1==c[l]&&(this.showMovie("pk_spring","respring"),e.tableVO["double"]*=2,one.monitor.emit("onChangeDouble",null)),this.timeId=one.setTimeout(function(){o.execEnd()},2500)}else this.nextChu(r,!1)},n.prototype.nextChu=function(t,o){var n=e.tableVO.getNextChuIdx(t);this.getSeatUI(n).lay.clearAll(),this.execEnd()},n.prototype.chuCards=function(t,o){var n=e.styleUtils.getStyle(o);if(this.setLayCardIDs(t,o,n),n.type!=two_pk.ChuType.MAX_BOMB&&n.type!=two_pk.ChuType.BOMB){if(2==e.tableVO.players[t].pais.length)return void one.soundManager.playSound("female_left_two",0,1);if(1==e.tableVO.players[t].pais.length)return void one.soundManager.playSound("female_left_one",0,1);var i=e.tableVO.getLastOutCards(1);if(i.length>0)return void one.soundManager.playSound("female_yasi"+one.randomInt(0,2),0,1)}switch(n.type){case two_pk.ChuType.SINGLE:one.soundManager.playSound("female_"+o.length+"_"+n.value.cardID,0,1);break;case two_pk.ChuType.LINE:switch(n.value.count){case 1:one.soundManager.playSound("female_shunzi",0,1);break;case 2:one.soundManager.playSound("female_liandui",0,1);break;case 3:one.soundManager.playSound("female_feiji",0,1)}break;case two_pk.ChuType.THREE_APP:switch(o.length){case 4:one.soundManager.playSound("female_three_with_one",0,1);break;case 5:one.soundManager.playSound("female_sandaier",0,1)}break;case two_pk.ChuType.FOUR_APP:switch(o.length){case 6:one.soundManager.playSound("female_four_with_two",0,1);break;case 8:one.soundManager.playSound("female_four_with_two_pair",0,1)}break;case two_pk.ChuType.THREE_APP_LINE:one.soundManager.playSound("female_airplane_with_wing",0,1);break;case two_pk.ChuType.BOMB_ONE:case two_pk.ChuType.BOMB:one.soundManager.playSound("female_zhadan"+one.randomInt(0,3),0,1);break;case two_pk.ChuType.MAX_BOMB:one.soundManager.playSound("female_rocket",0,1)}},n.prototype.showMovie=function(e,o){if(""!=e&&RES.getRes(e+"_tex_png")){var n=new one.DynamicDB(e,o);n.once(one.DynamicDB.LOOP_COMPLETE,function(e){n.destroy(),t.removeSelf(n)},this),n.play("1",1),t.sceneLayer.addChild(n),n.x=t.getStageWith()/2,n.y=t.getStageHeight()/2}},n.prototype.setLayCardIDs=function(e,o,n){var i=this.getSeatUI(e).lay;if(0==o.length)return void i.setCardIDs(o);if(i.setCardIDs(o),null!=n){var r="",s="",a="";switch(n.type){case two_pk.ChuType.LINE:switch(n.value.count){case 1:a=one.langUtils.getStatement(4021),r="pk_shunzi",s="shunzi";break;case 2:a=one.langUtils.getStatement(4022),r="pk_liandui",s="liandui";break;case 3:a=one.langUtils.getStatement(4023),r="pk_feiji",s="feiji"}break;case two_pk.ChuType.THREE_APP:switch(o.length){case 4:a=one.langUtils.getStatement(4027);break;case 5:a=one.langUtils.getStatement(4028)}break;case two_pk.ChuType.THREE_APP_LINE:a=one.langUtils.getStatement(4024),r="pk_feiji",s="feiji";break;case two_pk.ChuType.BOMB_ONE:case two_pk.ChuType.BOMB:a=one.langUtils.getStatement(4025),r="pk_bomb",s="bomb";break;case two_pk.ChuType.MAX_BOMB:a=one.langUtils.getStatement(4026),r="pk_huojian",s="huojian"}if(""!=a){var c=new eui.BitmapLabel;c.scaleX=c.scaleY=2,c.font="tip_fnt",c.text=a,i.setIcon(t.showTempTip(c,!1))}else i.setIcon(null);this.showMovie(r,s)}},n.prototype.destroy=function(){one.clearTimeout(this.timeId),this.timeId=-1,one.clearInterval(this.intervalID),this.intervalID=-1},n}(e.DDZCommand);e.ChuCommand=o,__reflect(o.prototype,"two.ddz.ChuCommand")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t.isOver=!1,t}return __extends(o,e),o.prototype.execute=function(e){var o=this;one.callLater(function(){if(!o.isOver){for(var e=0;e<t.TableVO.Max_Member;e++){var n=o.getSeatUI(e);n.lay.clearAll(),n.stand.clear()}o.execEnd()}},2)},o.prototype.destroy=function(){this.isOver=!0},o}(t.DDZCommand);t.ClearCommand=e,__reflect(e.prototype,"two.ddz.ClearCommand")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(t){var e=function(e){function o(){return e.call(this)||this}return __extends(o,e),o.prototype.execute=function(e){if(one.monitor.emit(t.ConfirmPanel.ON_COMFIRM_CLOSE,{}),1==t.tableVO.isPlaying)e.seat==t.tableVO.ownPos&&this.checkDDDConfirm(5,!1);else if(e.seat==t.tableVO.ownPos){var o=t.tableVO.getLastChuIdx();this.checkDDDConfirm(4,-1==o||o==t.tableVO.ownPos)}this.setThickIdxs(Math.floor((e.endTime-Date.now())/1e3),e.seat),this.execEnd()},o.prototype.destroy=function(){},o}(t.DDZCommand);t.ConfirmCommand=e,__reflect(e.prototype,"two.ddz.ConfirmCommand")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(o){function n(){var t=o.call(this)||this;return t.intervalID=-1,t.timeId=-1,t}return __extends(n,o),n.prototype.execute=function(o){function n(t){if(m[t]&&m[t].length>0){var e=one.randomInt(0,m[t].length-1),o=m[t][e];return m[t].splice(e,1),o}return 0}var i=this;t.closeAllBoxes();for(var r=e.TableVO.Max_Member,s=0;s<e.TableVO.Max_Member;s++)e.tableVO.users[s].cash=o.userPais[s].cash;one.monitor.emit("onRoomProxyInit",{}),one.monitor.emit("gameStart",{});for(var s=0;s<e.TableVO.Max_Member;s++){var a=this.getSeatUI(s);a.lay.clearAll(),a.stand.clear()}var c=e.tableVO.ownPos,h=o.firstUidIdx||0;e.tableVO.dealCards(o.userPais,h);for(var l=e.tableVO.players,u=0,d=0,p=[],m=[],s=0;r>s;s++)l[s]&&(m[s]=l[s].pais.concat(),p[l[s].index]=l[s].pais.length);one.monitor.emit(e.ConfirmPanel.ON_CHANGE_MING_SCORE,{score:4}),this.intervalID=one.setInterval(function(){var t=(u+h)%r,o=p[t],s=i.getSeatUI(t).stand;o>1?(s.addOne(n(t)),p[t]-=1,t==c&&one.soundManager.playSound("act_card_dao",0,1)):o>0&&(t==h?(s.addOne(n(t)),p[t]-=1):(s.addOne(n(t)),p[t]-=1),s.refresh(),t==c&&one.soundManager.playSound("act_hp01_togather",0,1)),u++,u==r&&(u=0,d++,8==d&&one.monitor.emit(e.ConfirmPanel.ON_CHANGE_MING_SCORE,{score:3}),0==p[h]&&(one.monitor.emit(e.ConfirmPanel.ON_CHANGE_MING_SCORE,{score:2}),one.clearInterval(i.intervalID),i.execEnd()))},50)},n.prototype.destroy=function(){one.clearTimeout(this.timeId),this.timeId=-1,one.clearInterval(this.intervalID),this.intervalID=-1},n}(e.DDZCommand);e.FapaiCommand=o,__reflect(o.prototype,"two.ddz.FapaiCommand")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t.intervalID=-1,t.timeId=-1,t.tempWins=[],t}return __extends(o,e),o.prototype.execute=function(e){one.monitor.emit("onBiggerCards",{isBigger:!0});var o,n=e.seat;o=this.getSeatUI(n).stand,t.tableVO.setNoDrop(n),this.setGuoIcon(n),one.soundManager.playSound("female_pass"+one.randomInt(0,2),0,1),this.nextChu(n,!0)},o.prototype.nextChu=function(e,o){var n=t.tableVO.getNextChuIdx(e);this.getSeatUI(n).lay.clearAll(),this.execEnd()},o.prototype.setLayCardIDs=function(t,e,o){var n=this.getSeatUI(t).lay;return 0==e.length?void n.setCardIDs(e):void n.setCardIDs(e)},o.prototype.setGuoIcon=function(t){var e=this.getSeatUI(t).lay,o="gd_wenzi_yaobuqi_001_png",n=new eui.Image;n.scaleX=n.scaleY=2,n.source=o,e.setIcon(n)},o.prototype.destroy=function(){one.clearTimeout(this.timeId),this.timeId=-1,one.clearInterval(this.intervalID),this.intervalID=-1},o}(t.DDZCommand);t.GuoCommand=e,__reflect(e.prototype,"two.ddz.GuoCommand")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(t){var e=function(e){function o(){return e.call(this)||this}return __extends(o,e),o.prototype.execute=function(e){var o=this.checkStarted();o&&one.monitor.emit("gameStart",{});for(var n=0;n<t.TableVO.Max_Member;n++)this.initStand(n);for(var n=0;n<t.TableVO.Max_Member;n++)this.getSeatUI(n).lay.clearAll();if(o){var i=t.tableVO.currentPos,r=t.tableVO.allOutPai;if(r.length>0)for(var n=r.length-1;n>=0&&n>=r.length-3;n--){var s=r[n];if(s.index==i)break;s.pais.length>0?this.setLayCardIDs(s.index,s.pais,null):this.setGuoIcon(s.index)}}2==t.tableVO.isPlaying?(one.monitor.emit("showDiPool",null),one.monitor.emit(t.ConfirmPanel.ON_CHANGE_MING_SCORE,{score:0}),one.monitor.emit("onRoomProxyInit",null)):1==t.tableVO.isPlaying&&(t.tableVO.players[0].pais.length>0?one.monitor.emit(t.ConfirmPanel.ON_CHANGE_MING_SCORE,{score:2}):one.monitor.emit(t.ConfirmPanel.ON_CHANGE_MING_SCORE,{score:5})),one.monitor.emit("onResetCards",null),one.monitor.emit(t.ConfirmPanel.ON_CHOOSE_CARDS,{cards:[],canTidy:!1}),t.tableVO.users[t.tableVO.ownPos]&&t.tableVO.users[t.tableVO.ownPos].trusteeship&&one.monitor.emit("onTrusteeship",{index:t.tableVO.ownPos,isOpen:1}),this.execEnd()},o.prototype.checkStarted=function(){for(var e=0,o=0;o<t.TableVO.Max_Member;o++)e=t.tableVO.getSeatData(o).length;return e>0},o.prototype.initStand=function(e){var o=t.tableVO.getSeatData(e),n=this.getSeatUI(e).stand;n.clear();for(var i=0;i<o.length;i++)n.addOne(o[i]);n.refresh()},o.prototype.setLayCardIDs=function(t,e,o){var n=this.getSeatUI(t).lay;return 0==e.length?void n.setCardIDs(e):void n.setCardIDs(e)},o.prototype.setGuoIcon=function(t){var e=this.getSeatUI(t).lay,o="gd_wenzi_yaobuqi_001_png",n=new eui.Image;n.scaleX=n.scaleY=2,n.source=o,e.setIcon(n)},o}(t.DDZCommand);t.InitCommand=e,__reflect(e.prototype,"two.ddz.InitCommand")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t.intervalID=-1,t.timeId=-1,t}return __extends(o,e),o.prototype.execute=function(e){var o,n=e.seat;o=this.getSeatUI(n).stand;var i=e.score;i>0?(t.tableVO.score=i,this.setGuoIcon(n,"btn_rate"+i+"_png"),one.monitor.emit("onChangeDouble",null),one.soundManager.playSound("female_point_"+i,0,1)):(this.setGuoIcon(n,"btn_nocall_png"),one.soundManager.playSound("female_not_call",0,1)),this.execEnd()},o.prototype.setGuoIcon=function(t,e){var o=this.getSeatUI(t).lay,n=e,i=new eui.Image;i.scaleX=i.scaleY=2,i.source=n,o.setIcon(i)},o.prototype.destroy=function(){one.clearTimeout(this.timeId),this.timeId=-1,one.clearInterval(this.intervalID),this.intervalID=-1},o}(t.DDZCommand);t.JiabeiCommand=e,__reflect(e.prototype,"two.ddz.JiabeiCommand")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(t){var e=function(e){function o(){return e.call(this)||this}return __extends(o,e),o.prototype.execute=function(e){t.tableVO.addUser(e.userInfo,e.index),t.tableVO.users[e.index].isLeave=!1,one.monitor.emit("onUserJoinRoom",e),this.execEnd()},o.prototype.destroy=function(){},o}(t.DDZCommand);t.JoinCommand=e,__reflect(e.prototype,"two.ddz.JoinCommand")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(o){function n(){return o.call(this)||this}return __extends(n,o),n.prototype.execute=function(o){one.monitor.emit("onConfirmClear",{}),t.closeAllBoxes(),e.tableVO.setRoomData(o),e.tableVO.isPlaying=0,one.monitor.emit("gameEnd",{}),this.execEnd()},n.prototype.destroy=function(){one.clearTimeout(this.timeoutId),this.timeoutId=-1},n}(e.DDZCommand);e.NewRoundCommand=o,__reflect(o.prototype,"two.ddz.NewRoundCommand")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(o){function n(){return o.call(this)||this}return __extends(n,o),n.prototype.execute=function(o){o.isOwn?(t.userVO.userInfo.rid=0,t.changePage(t.SceneType.HALL)):(e.tableVO.removeUser(o.index),one.monitor.emit("onUserQuitRoom",o),this.execEnd())},n.prototype.destroy=function(){},n}(e.DDZCommand);e.QuitCommand=o,__reflect(o.prototype,"two.ddz.QuitCommand")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(o){function n(){var t=o.call(this)||this;return t.timeId=-1,t}return __extends(n,o),n.prototype.execute=function(o){var n=this;this.setThickIdxs(0,-1),one.monitor.emit("onBiggerCards",{isBigger:!0});for(var i=0,r=0;r<o.winList.length;r++)e.tableVO.users[o.winList[r].index].cash+=o.winList[r].score,i-=o.winList[r].score;e.tableVO.users[e.tableVO.lord].cash+=i,e.tableVO.isPlaying=4,one.monitor.emit(t.CardsLeftPanel.CLOSE,{});for(var r=0;r<o.userPaiData.length;r++){var s=o.userPaiData[r].index;this.getSeatUI(s).lay.clearAll(),s!=e.tableVO.ownPos&&this.getSeatUI(s).stand.changeToLay(o.userPaiData[r].pais)}one.monitor.emit(e.ConfirmPanel.ON_COMFIRM_CLOSE,{});var a=new e.Result;a.init(o.winList,o.userPaiData,e.tableVO.users,e.TableVO.Max_Member,e.tableVO.ownPos,e.tableVO.lord,Math.floor((o.endTime-Date.now())/1e3)),t.showBox(a,.6),a.once(egret.Event.REMOVED_FROM_STAGE,function(){if(t.currentPageType==t.SceneType.TABLE){one.monitor.emit("gameEnd",{}),one.monitor.emit("onRoomProxyInit",{});for(var o=0;o<e.TableVO.Max_Member;o++)n.getSeatUI(o).stand.clear(),n.getSeatUI(o).lay.clearAll()}},null),e.tableVO.lord=-1,this.timeId=one.setTimeout(function(){n.timeId=-1,n.execEnd()},4e3)},n.prototype.destroy=function(){one.clearTimeout(this.timeId),this.timeId=-1},n}(e.DDZCommand);e.ResultCommand=o,__reflect(o.prototype,"two.ddz.ResultCommand")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t.intervalID=-1,t.timeId=-1,t}return __extends(o,e),o.prototype.execute=function(e){if(null!=e.lord){t.tableVO.lord=e.lord,t.tableVO.diPool=e.cardIDs,t.tableVO.addCardIDs(t.tableVO.lord,e.cardIDs);for(var o=this.getSeatUI(e.lord).stand,n=0;n<e.cardIDs.length;n++)o.addOne(e.cardIDs[n],t.tableVO.users[e.lord].mingpai>0)}for(var n=0;n<t.TableVO.Max_Member;n++){var i=this.getSeatUI(n);i.lay.clearAll()}e.cardIDs&&e.cardIDs.length>0&&one.monitor.emit("showDiPool",null),one.monitor.emit(t.ConfirmPanel.ON_CHANGE_MING_SCORE,{score:0}),this.execEnd()},o.prototype.destroy=function(){one.clearTimeout(this.timeId),this.timeId=-1,one.clearInterval(this.intervalID),this.intervalID=-1},o}(t.DDZCommand);t.TurnDiCommand=e,__reflect(e.prototype,"two.ddz.TurnDiCommand")}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e=function(){function t(){}return t.prototype.getAsset=function(t,e,o){function n(n){e.call(o,n,t)}if(RES.hasRes(t)){var i=RES.getRes(t);i?n(i):RES.getResAsync(t,n,this)}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();t.AssetAdapter=e,__reflect(e.prototype,"two.AssetAdapter",["eui.IAssetAdapter"])}(two||(two={}));var two;!function(t){function e(){return null==n&&(n=new o),n}var o=function(e){function o(){var t=e.call(this,"two.LoaderSkin")||this;return t.hasInit=!1,t}return __extends(o,e),o.prototype.load=function(e,o){var n=this;if(this.loadOver=o,t.showBox(this,void 0,!0),!this.hasInit){this.hasInit=!0;var i=new eui.Rect(t.uiRoot.stage.stageWidth,t.uiRoot.stage.stageHeight,0);i.fillAlpha=.6,this.addChildAt(i,0)}one.loaderManager.loadGroups(e,9,function(e,o){n.setProgress(e,o),e==o&&(t.closeBox(n,!0),one.clearTimeout(r),n.loadOver())});var r=one.setTimeout(function(){n.stage&&(n.visible=!0)},1e3);this.visible=!1},o.prototype.setProgress=function(t,e){this.txt&&(this.txt.text="正在更新游戏资源 "+Math.round(t/e*100)+"%"),this.bar&&(this.bar.value=100*t/e),this.thumb&&(this.thumb.x=435+409*t/e)},o}(t.BaseComponent);t.Loader=o,__reflect(o.prototype,"two.Loader"),t.getLoadUI=e;var n}(two||(two={}));var two;!function(t){var e=function(){function t(){}return t.prototype.getTheme=function(t,e,o,n){function i(t){e.call(n,t)}function r(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),o.call(n))}"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(n,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_TEXT))},t}();t.ThemeAdapter=e,__reflect(e.prototype,"two.ThemeAdapter",["eui.IThemeAdapter"])}(two||(two={}));var two;!function(t){function e(e,o){for(var n=t.ruleConfig.getAreaData(e).systemDefault,i=n&&n[1]?n[1]:[],r=t.ruleConfig.getAreaName(e),s=0;s<o.length;s++)i.indexOf(o[s])<0&&(r+="，"+t.ruleConfig.getName(o[s],o));return r}function o(t){t&&t.parent&&t.parent.removeChild(t)}function n(t,e){for(var o in e)t[o]=one.clone(e[o])}t.getRuleStr=e,t.removeFromParent=o,t.copyToObj=n}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t._delay=5,t}return __extends(o,e),Object.defineProperty(o.prototype,"delay",{get:function(){return this._delay},set:function(t){this._delay=t},enumerable:!0,configurable:!0}),o.prototype.onTap=function(o){e.prototype.onTap.call(this,o),null==this.chat&&(this.chat=new t.Chat(this._delay)),t.showBox(this.chat,void 0,!0,!0),one.soundManager.playSound("buttonClick",0,1)},o}(t.BaseButton);t.ChatButton=e,__reflect(e.prototype,"two.ChatButton")}(two||(two={}));var two;!function(t){var e=function(e){function o(){return e.call(this)||this}return __extends(o,e),o.prototype.onTap=function(o){e.prototype.onTap.call(this,o);var n;n=t.currentPageType==t.SceneType.TABLE?t.tableVO.tableData.rules:[];var i=new t.RulePanel(t.ruleConfig.getCurrentGameID(),n);t.showBox(i),one.soundManager.playSound("buttonClick",0,1)},o}(t.BaseButton);t.RuleButton=e,__reflect(e.prototype,"two.RuleButton")}(two||(two={}));var two;!function(t){var e=function(e){function o(){return e.call(this)||this}return __extends(o,e),o.prototype.onTap=function(o){e.prototype.onTap.call(this,o),t.showBox(new t.Setting),one.soundManager.playSound("buttonClick",0,1)},o}(t.BaseButton);t.SettingButton=e,__reflect(e.prototype,"two.SettingButton")}(two||(two={}));var two_pk;!function(t){function e(){return t.tableVO.tableData.guiPai||[]}function o(){return t.tableVO.tableData.zhuID
}t.getGuiPais=e,t.getZhuID=o}(two_pk||(two_pk={}));var two_pk;!function(t){function e(t){t.sort(function(t,e){return t%20==1?1:e%20==1?-1:t%20>=e%20?1:-1})}var o=function(t){function e(){var e=t.call(this)||this;return e._isBig=!0,e.touchChildren=!1,e.skinName="pk.CardSkin",e}return __extends(e,t),e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},Object.defineProperty(e.prototype,"isBig",{get:function(){return this._isBig},set:function(t){this._isBig=t},enumerable:!0,configurable:!0}),e.prototype.getRState=function(t){return this._isBig?t:t+"_s"},Object.defineProperty(e.prototype,"card",{get:function(){return this._card},set:function(t){if(this._card=t,null!=t){if(0>=t)this.skin.currentState="back";else if(t>100)this.skin.currentState=this.getRState("king"),116==t?(this.numIcon.source="card_king_small_png",this.bIcon.source="king_small_png"):(this.numIcon.source="card_king_big_png",this.bIcon.source="king_big_png");else{var e=t%20;10>=e?(this.skin.currentState=this.getRState("number"),20>t?(this.sIcon.source="heitao_L_png",this.bIcon.source="heitao_L_png",this.numIcon.source="card_num_b"+e+"_png"):40>t?(this.sIcon.source="hongtao_L_png",this.bIcon.source="hongtao_L_png",this.numIcon.source="card_num_r"+e+"_png"):60>t?(this.sIcon.source="meihua_L_png",this.bIcon.source="meihua_L_png",this.numIcon.source="card_num_b"+e+"_png"):80>t&&(this.sIcon.source="fangkuai_L_png",this.bIcon.source="fangkuai_L_png",this.numIcon.source="card_num_r"+e+"_png")):(this.skin.currentState=this.getRState("hua"),20>t?(this.sIcon.source="heitao_L_png",this.bIcon.source="hei_"+e+"_hua_png",this.numIcon.source="card_num_b"+e+"_png"):40>t?(this.sIcon.source="hongtao_L_png",this.bIcon.source="hong_"+e+"_hua_png",this.numIcon.source="card_num_r"+e+"_png"):60>t?(this.sIcon.source="meihua_L_png",this.bIcon.source="hei_"+e+"_hua_png",this.numIcon.source="card_num_b"+e+"_png"):80>t&&(this.sIcon.source="fangkuai_L_png",this.bIcon.source="hong_"+e+"_hua_png",this.numIcon.source="card_num_r"+e+"_png"))}this.currentState=this.skin.currentState}},enumerable:!0,configurable:!0}),e.prototype.setColor=function(t){return null==t?this.flag_lv?void(this.flag_lv.visible=!1):void(this.rect&&this.rect.parent&&this.rect.parent.removeChild(this.rect)):this.flag_lv?void(this.flag_lv.visible=!0):(null==this.rect&&(this.rect=new eui.Rect,this.rect.percentWidth=100,this.rect.percentHeight=100,this.rect.fillAlpha=.6),this.rect.fillColor=t,void this.addChild(this.rect))},e}(eui.Component);t.Card=o,__reflect(o.prototype,"two_pk.Card",["eui.UIComponent","egret.DisplayObject"]),t.sortCards=e}(two_pk||(two_pk={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this,"two.BoxBgSkin")||this;return e._title="",e}return __extends(e,t),e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.titleIcon.text=this._title},Object.defineProperty(e.prototype,"title",{get:function(){return this._title},set:function(t){this._title=t,this.titleIcon&&(this.titleIcon.text=t)},enumerable:!0,configurable:!0}),e}(t.BaseComponent);t.BoxBg=e,__reflect(e.prototype,"two.BoxBg")}(two||(two={}));var two;!function(t){var e=function(e){function o(t){var o=e.call(this,"ChatSkin")||this;return o.delayTime=t,o.lastTime=0,o}return __extends(o,e),o.prototype.childrenCreated=function(){var o=this;e.prototype.childrenCreated.call(this);var n=!0;this.eAC.removeAll();for(var i=RES.getRes("chatCfg_json").icon,r=101;101+i>r;r++)this.eAC.addItem({src:"E"+r+"_png"});this.yAC.removeAll();for(var s=RES.getRes("chatCfg_json").messages,r=0;r<s.length;r++){var a=one.langUtils.getLanguageStatement("chat",s[r]);this.yAC.addItem({label:a})}this.tab.addEventListener(egret.Event.CHANGE,function(t){o.vs.selectedIndex=o.tab.selectedIndex},this),this.langList.addEventListener(eui.ItemTapEvent.ITEM_TAP,function(e){var i=e.item;o.sendMsg(JSON.stringify({type:1,message:i.label})),t.closeBox(o,n)},this),this.iconList.addEventListener(eui.ItemTapEvent.ITEM_TAP,function(e){var i=e.item;o.sendMsg(JSON.stringify({type:2,message:i.src})),t.closeBox(o,n)},this),this.sendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(e){var i=o.input.text.trim();null!=i&&""!=i&&(o.sendMsg(JSON.stringify({type:1,message:o.input.text.trim()})),o.input.text="",t.closeBox(o,n))},this)},o.prototype.sendMsg=function(e){var o=Date.now();o-this.lastTime>=1e3*this.delayTime?(t.net.roomProxy.chat(e,function(){}),this.lastTime=o):t.showTip(one.langUtils.getStatement(9998))},o}(t.BaseLangComponent);t.Chat=e,__reflect(e.prototype,"two.Chat")}(two||(two={}));var two;!function(t){var e=function(t){function e(e,o,n,i){var r=t.call(this)||this;return r.lastSoundID=-1,r.fromIdx=i,r.message=o,r.type=e,r.duration=n,r.skinName="ChatTipSkin",r}return __extends(e,t),e.prototype.childrenCreated=function(){var e=this;switch(t.prototype.childrenCreated.call(this),this.icon_emoji.visible=!1,this.icon_emoji.includeInLayout=!1,this.tipGp.visible=!1,this.tipGp.includeInLayout=!1,this.type){case 1:this.tipGp.visible=!0,this.tipGp.includeInLayout=!0,this.txt_tip.text=this.message;for(var o=RES.getRes("chatCfg_json").messages,n=0;n<o.length;n++)if(this.message==one.langUtils.getLanguageStatement("chat",o[n])){this.playSound("chat"+n,this.fromIdx);break}break;case 2:RES.hasRes(this.message)&&(this.icon_emoji.visible=!0,this.icon_emoji.includeInLayout=!0,this.icon_emoji.source=this.message,this.icon_emoji.y=0);break;case 3:RES.hasRes("room_sound_png")&&(this.icon_emoji.visible=!0,this.icon_emoji.includeInLayout=!0,this.icon_emoji.source="room_sound_png")}this.alpha=1,2==this.type?(this.icon_emoji.alpha=1,egret.Tween.get(this.icon_emoji).to({y:-10},200).to({y:0},200).to({y:-5},100).to({y:0},100).to({y:-5},100).to({y:0},100).wait(1200).to({alpha:0},200).call(function(){e.parent&&e.parent.removeChild(e)},this)):egret.Tween.get(this).wait(this.duration).to({alpha:0},200).call(function(){e.parent&&e.parent.removeChild(e)},this)},e.prototype.stop=function(){this.icon_emoji&&egret.Tween.removeTweens(this.icon_emoji),egret.Tween.removeTweens(this),one.soundManager.stopSound(this.lastSoundID)},e.prototype.playSound=function(t,e){this.lastSoundID=one.soundManager.playSound("w"+t,0,1)},e}(eui.Component);t.ChatTip=e,__reflect(e.prototype,"two.ChatTip",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(e){function o(t,n,i){void 0===n&&(n=!0),void 0===i&&(i=!0);var r=e.call(this)||this;return r.message=t,r.needOK=n,r.needCancel=i,r.skinName=o.ConfirmSkin,r}return __extends(o,e),o.prototype.childrenCreated=function(){var n=this;e.prototype.childrenCreated.call(this),this.okBtn&&this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onOK,this),this.cancelBtn&&this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCancel,this),this.messageTxt.text=this.message,!this.needOK&&this.okBtn&&this.okBtn.parent&&this.okBtn.parent.removeChild(this.okBtn),!this.needCancel&&this.cancelBtn&&this.cancelBtn.parent&&this.cancelBtn.parent.removeChild(this.cancelBtn),this.closeBtn&&this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.closeBox(n),n.dispatchEvent(new egret.Event(o.CANCEL))},this)},o.prototype.onOK=function(){t.closeBox(this),this.dispatchEvent(new egret.Event(o.OK))},o.prototype.onCancel=function(){t.closeBox(this),this.dispatchEvent(new egret.Event(o.CANCEL))},o.OK="okClick",o.CANCEL="cancelClick",o.ConfirmSkin="ConfirmSkin",o}(t.BaseLangComponent);t.Confirm=e,__reflect(e.prototype,"two.Confirm")}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t.userDirs=[],t.skinName="two.DirectionPanelSkin",t}return __extends(o,e),o.prototype.setSeatIdx=function(e,o){e=t.getSeatNO(e),o=t.getSeatNO(o);for(var n=0;n<this.userDirs.length;n++)this.userDirs[n].icon.visible=!1;this.userDirs[(e-o+this.userDirs.length)%this.userDirs.length].icon.visible=!0},o.prototype.setDirects=function(t){this.userDirs.length=0;for(var e=0;e<t.length;e++)this.userDirs.push({icon:this.directGp2.getChildAt(t[e])})},o.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this);for(var t=0;4>t;t++)this.directGp2.getChildAt(t).visible=!1},o.prototype.setEndTime=function(t){this.time.setEndTime(t),this.time.start()},o}(eui.Component);t.DirectionSamePanel=e,__reflect(e.prototype,"two.DirectionSamePanel",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.isThemeLoadEnd=!1,t.isResourceLoadEnd=!1,t}return __extends(o,e),o.prototype.createChildren=function(){e.prototype.createChildren.call(this),t.initScene(this),t.initBox(this),t.initBaseView(t.ErrorTip,t.Confirm),t.uiRoot=this;var o=new t.AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",o),egret.registerImplementation("eui.IThemeAdapter",new t.ThemeAdapter),RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),RES.loadConfig("resource/5bcdcafe_62129.json","resource/");var n=new eui.Theme("resource/ed6c534b_4484.json",this.stage);n.addEventListener(eui.UIEvent.COMPLETE,this.onThemeLoadComplete,this)},o.prototype.onConfigComplete=function(t){RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),this.isResourceLoadEnd=!0,this.gamesingOver()},o.prototype.onThemeLoadComplete=function(){this.isThemeLoadEnd=!0,this.gamesingOver()},o.prototype.gamesingOver=function(){var e=this;this.isThemeLoadEnd&&this.isResourceLoadEnd&&one.loaderManager.loadGroup("loading",1,function(o,n){if(o==n){var i=one.getOption("language")||RES.getRes("config_json").language;one.langUtils.setLanguage("4_"+i),e.loadingView=new t.LoadingUI,e.addChild(e.loadingView),egret.ImageLoader.crossOrigin="anonymous",RES.getResAsync("load_json",function(){var t=["bj","game","pk_ddz"];one.loaderManager.loadGroups(t,1,function(t,o){e.loadingView.setProgress(t,o),t==o&&e.createScene()})},e)}})},o.prototype.onResourceLoadComplete=function(t){"loading"==t.groupName},o.prototype.createScene=function(){this.isThemeLoadEnd&&this.isResourceLoadEnd&&(this.startCreateScene(),this.removeChild(this.loadingView))},o.prototype.onItemLoadError=function(t){console.warn("Url:"+t.resItem.url+" has failed to load")},o.prototype.onResourceLoadError=function(t){console.warn("Group:"+t.groupName+" has failed to load")},o.prototype.onResourceProgress=function(t){},o.prototype.startCreateScene=function(){t.Storage.game="ddz",one.setOption("appId",RES.getRes("config_json").gameID),t.net.domain=RES.getRes("ip"+one.getOption("appId")+"_json").domain,t.net.testDomain=RES.getRes("ip"+one.getOption("appId")+"_json").testDomain,t.net.payType=RES.getRes("ip"+one.getOption("appId")+"_json").payType;var e="false"!=egret.localStorage.getItem("music_selected"),o=parseFloat(egret.localStorage.getItem("music_volume"));isNaN(o)&&(o=1),e&&0==o?o=1:e||(o=0),one.soundManager.setVolume(egret.Sound.MUSIC,o);var n="false"!=egret.localStorage.getItem("effect_selected"),i=parseFloat(egret.localStorage.getItem("effect_volume"));isNaN(i)&&(i=1),n&&0==i?i=1:n||(i=0),one.soundManager.setVolume(egret.Sound.EFFECT,i),t.changePage(t.SceneType.LOGIN),one.setTimeout(function(){one.soundManager.playMusic("bgm1")},200),this.stage.once(egret.TouchEvent.TOUCH_TAP,function(){one.soundManager.playMusic("bgm1")},this),(new t.ReconnectCtr).start(),t.GameCtr.init(this.stage)},o}(eui.UILayer);t.Main=e,__reflect(e.prototype,"two.Main")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e.skinName="HallSkin",e.percentHeight=100,e.percentWidth=100,one.soundManager.playMusic("bgm1"),e}return __extends(e,t),e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e}(eui.Component);t.Hall=e,__reflect(e.prototype,"two.Hall",["eui.UIComponent","egret.DisplayObject"]),t.setClassMap(t.SceneType.HALL,"two.Hall")}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=e.call(this,"LoginViewSkin")||this;return t.isLoginConnect=!1,t.timeoutId=-1,t.percentHeight=t.percentWidth=100,one.soundManager.playMusic("bgm1"),t}return __extends(o,e),o.prototype.childrenCreated=function(){var o=this;e.prototype.childrenCreated.call(this),this.weixinBtn.visible=!1,one.getOption("userId")||one.getCookie("QnmAuth")?(this.weixinBtn.enabled=!1,t.net.loginProxy.connect(function(t){200==t.code&&(o.isLoginConnect=!0,o.initLogin())})):this.initLogin(),one.loaderManager.loadGroup("hall",1)},o.prototype.initLogin=function(){var e=this;this.weixinBtn.enabled=!0,this.weixinBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.login()},this),o.IS_FIRST?(this.weixinBtn.enabled=!1,o.IS_FIRST=!1,one.plat&&one.plat.canUse()?this.login():t.userVO.usePlatInfo()?this.login():this.login()):one.plat&&one.plat.canUse()&&"apple"!=t.net.payType||t.userVO.usePlatInfo()&&"apple"!=t.net.payType},o.prototype.login=function(){var e=this;this.weixinBtn.enabled=!1,egret.log("login"),one.plat&&one.plat.canUse()?(this.timeoutId>0&&egret.clearTimeout(this.timeoutId),this.timeoutId=egret.setTimeout(function(){e.weixinBtn.enabled=!0},this,2e4),one.plat.login(function(o){egret.clearTimeout(e.timeoutId),0==o.code?e.isLoginConnect?e.enterHall():t.net.loginProxy.connect(function(t){200==t.code?(e.isLoginConnect=!0,e.enterHall()):e.weixinBtn.enabled=!0}):e.weixinBtn.enabled=!0})):this.isLoginConnect?this.enterHall():t.net.loginProxy.connect(function(t){200==t.code?(e.isLoginConnect=!0,e.enterHall()):e.weixinBtn.enabled=!0})},o.prototype.setNameView=function(){var e=this;egret.log("login  4444 ");var o=new t.NameView;t.showBox(o),o.once(egret.Event.CLOSE,function(){t.net.loginProxy.connect(function(t){200==t.code&&(e.isLoginConnect=!0,e.enterHall())})},this)},o.prototype.onGateError=function(){null==one.getOption("name")?this.setNameView():this.weixinBtn.enabled=!0},o.prototype.enterHall=function(){var e=this;t.net.pomeloProxy.connect(function(o){200==o.code?t.getLoadUI().load(["hall"],function(){t.changePage(t.SceneType.HALL)}):(t.net.pomeloProxy.disconnect(),e.onGateError())})},o.IS_FIRST=!0,o}(t.BaseLangComponent);t.LoginView=e,__reflect(e.prototype,"two.LoginView"),t.setClassMap(t.SceneType.LOGIN,"two.LoginView")}(two||(two={}));var two;!function(t){var e=function(e){function o(){return e.call(this,"NameViewSkin")||this}return __extends(o,e),o.prototype.childrenCreated=function(){var o=this;e.prototype.childrenCreated.call(this),this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){""!=o.inputTxt.text.trim()&&(t.userVO.setUserName(o.inputTxt.text.trim()),t.closeBox(o),o.dispatchEvent(new egret.Event(egret.Event.CLOSE)))},this)},o}(t.BaseComponent);t.NameView=e,__reflect(e.prototype,"two.NameView")}(two||(two={}));var two;!function(t){function e(t,e){return null==n&&(n=new o),egret.Tween.removeTweens(n),n.removeChildren(),n.horizontalCenter=n.verticalCenter=0,n.show(t,e),n}var o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.show=function(t,e){var o=this;this.alpha=0,egret.Tween.get(this).to({alpha:1},200).wait(2e3).to({alpha:0},200).call(function(){o.parent&&e&&(o.removeChildren(),o.parent.removeChild(o))},this),this.addChild(t)},e}(eui.Component);t.PaiTip=o,__reflect(o.prototype,"two.PaiTip");var n;t.showTempTip=e}(two||(two={}));var two;!function(t){var e=function(){function e(){this.timeoutID=-1}return e.prototype.start=function(){one.monitor.on("onConnectStart",this.onConnectStart,this),one.monitor.on("onConnectSuccess",this.onConnectSuccess,this)},e.prototype.stop=function(){one.monitor.off("onConnectStart",this.onConnectStart,this),one.monitor.off("onConnectSuccess",this.onConnectSuccess,this)},e.prototype.onConnectStart=function(){var e=this;return null==this.reconnectingView&&(this.reconnectingView=new t.ReconnectingView),this.reconnectingView.stage?void t.showBox(this.reconnectingView):void(-1==this.timeoutID&&(this.timeoutID=egret.setTimeout(function(){e.timeoutID=-1,t.showBox(e.reconnectingView),e.reconnectingView.start()},this,3e3)))},e.prototype.onConnectSuccess=function(){-1!=this.timeoutID&&(egret.clearTimeout(this.timeoutID),this.timeoutID=-1),this.reconnectingView.stage&&t.closeBox(this.reconnectingView)},e}();t.ReconnectCtr=e,__reflect(e.prototype,"two.ReconnectCtr")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this,"ReconnectingViewSkin")||this;return e.timerId=-1,e.secondUtils=new one.SecondUtils,e}return __extends(e,t),e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e.prototype.start=function(){var t=this;this.timerId=this.secondUtils.addSecond(30,function(e){0>=e?(t.currentState="error",t.secondUtils.stop()):t.textTxt.text=one.langUtils.getStatement(49)+("（"+e+"）")}),this.secondUtils.start(),this.currentState="timer",this.once(egret.Event.REMOVED_FROM_STAGE,function(e){e.target==e.currentTarget&&(t.secondUtils.removeSecond(t.timerId),t.secondUtils.stop())},this)},e}(t.BaseLangComponent);t.ReconnectingView=e,__reflect(e.prototype,"two.ReconnectingView")}(two||(two={}));var two;!function(t){var e=function(){function t(){this.rate=1,this.isPause=!1,this.timeID=-1}return t.prototype.start=function(){one.monitor.on("replayData",this.onReplayStart,this),one.monitor.on("replatRate",this.onReplayRate,this),one.monitor.on("onStepTransEnd",this.onStepTransEnd,this)},t.prototype.destroy=function(){one.monitor.off("replayData",this.onReplayStart,this),one.monitor.off("replatRate",this.onReplayRate,this),one.monitor.off("onStepTransEnd",this.onStepTransEnd,this),this.isPause=!0,egret.clearTimeout(this.timeID)},t.prototype.onReplayRate=function(t){this.rate=1/t.rate,this.isPause=t.isPause,this.timeID<0&&this.setData()},t.prototype.onReplayStart=function(t){var e=this;this.steps=t.stepData,this.timeID=egret.setTimeout(function(){e.timeID=-1,e.send()},this,100)},t.prototype.onStepTransEnd=function(){this.setData()},t.prototype.setData=function(){var t=this;this.isPause||(this.timeID=egret.setTimeout(function(){t.timeID=-1,t.send()},this,1e3*this.rate))},t.prototype.send=function(){this.steps.length<=1||this.isPause||one.monitor.emit("onLocalPlay",this.steps.shift())},t}();t.ReplayCtr=e,__reflect(e.prototype,"two.ReplayCtr")}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=e.call(this)||this;return t.rate=1,t.count=1,t.skinName="ReplayPanelSkin",t}return __extends(o,e),o.prototype.removed=function(){e.prototype.removed.call(this),this.replayCtr&&this.replayCtr.destroy()},o.prototype.added=function(){e.prototype.added.call(this)},o.prototype.created=function(){var o=this;e.prototype.created.call(this);var n=t.currentPageType==t.SceneType.REPLAY;return n?(this.replayCtr=new t.ReplayCtr,this.replayCtr.start(),this.playBtn.visible=!1,this.pauseBtn.visible=!0,this.slowBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){o.rate>1?(o.count-=1,o.rate=o.count):(o.count+=1,o.rate=1/o.count),o.count=Math.min(4,o.count),o.rate=Math.max(.25,o.rate),o.sendData()},this),this.accBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){o.rate<1?(o.count-=1,o.rate=1/o.count):(o.count+=1,o.rate=o.count),o.rate=Math.min(3,o.rate),o.count=Math.min(3,o.count),o.sendData()},this),this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){o.playBtn.visible=!1,o.pauseBtn.visible=!0,o.sendData()},this),this.pauseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){o.playBtn.visible=!0,o.pauseBtn.visible=!1,o.sendData()},this),this.refreshBtn&&this.refreshBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){var e=new t.Confirm(one.langUtils.getStatement(32),!0,!0);t.showBox(e),e.once(t.Confirm.OK,function(){o.refreshBtn.enabled=!1,t.net.httpSend.sendHttp("game/getPlayback",{rid:t.tableVO.tableData.rid,playTimes:t.tableVO.tableData.playTimes+1},!1,!0,function(e){o.refreshBtn.enabled=!0,200==e.code&&(t.tableVO.tableData=e.data.roomInfo,t.tableVO.tableData.rid=e.data.roomInfo.rid,t.closeAllBoxes(),t.changePage(t.SceneType.REPLAY),one.monitor.emit("replayData",{stepData:e.data.stepData}))})},e)},this),void(this.nextBtn&&(this.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){var e=new t.Confirm(one.langUtils.getStatement(30),!0,!0);t.showBox(e),e.once(t.Confirm.OK,function(){o.nextBtn.enabled=!1,t.net.httpSend.sendHttp("game/getPlayback",{rid:t.tableVO.tableData.rid,playTimes:t.tableVO.tableData.playTimes+2},!1,!0,function(e){o.nextBtn.enabled=!0,200==e.code&&(t.tableVO.tableData=e.data.roomInfo,t.tableVO.tableData.rid=e.data.roomInfo.rid,t.closeAllBoxes(),t.changePage(t.SceneType.REPLAY),one.monitor.emit("replayData",{stepData:e.data.stepData}))})},e)},this),t.tableVO.tableData.playTimes<t.tableVO.tableData.topPlayTimes?this.nextBtn.visible=!0:this.nextBtn.visible=!1))):void(this.visible=!1)},o.prototype.sendData=function(){one.monitor.emit("replatRate",{rate:this.rate,isPause:this.playBtn.visible})},o}(t.BaseComponent);t.ReplayPanel=e,__reflect(e.prototype,"two.ReplayPanel")}(two||(two={}));var two;!function(t){var e=function(){function t(){this.areaRules=[],this.showRules=[],one.monitor.on("ruleItemChanged",this.onChange,this)}return t.prototype.getAllRules=function(){return RES.getRes("rules_json").configs},t.prototype.getAreaList=function(t){return RES.getRes("areas_json")[t]},t.prototype.getAreaName=function(t){return this.getAllRules()[t].name},t.prototype.initArea=function(t){this._gameId=t,this.areaData=this.getAllRules()[t],this.selects=this.areaData["default"].concat(),this.areaRules.length=0;for(var e=0;e<this.areaData.rules.length;e++)for(var o=0;o<this.areaData.rules[e].rules.length;o++)this.areaRules.push(this.areaData.rules[e].rules[o]);this.showRules.length=0,this.refresh(this.areaRules.concat()),console.log(this.getChooseRules())},t.prototype.getCurrentGameID=function(){return this._gameId},t.prototype.getAreaData=function(t){return t?this.getAllRules()[t]:this.areaData},t.prototype.onChange=function(t){for(var e=0;e<t.length;e++){var o=this.selects.indexOf(t[e].id);t[e].selected&&0>o?this.selects.push(t[e].id):!t[e].selected&&o>=0&&this.selects.splice(o,1)}this.showRules.length=0,this.refresh(this.areaRules.concat()),console.log(this.getChooseRules()),one.monitor.emit("ruleChangedRefresh",null)},t.prototype.refresh=function(t){for(var e=t.length-1;e>=0;e--){var o=t[e],n=this.areaData.relation[o+""];n.dependent?t.indexOf(n.dependent)<0&&(this.showRules.indexOf(n.dependent)>=0&&this.selects.indexOf(n.dependent)>=0?(this.showRules.push(o),t.splice(e,1)):t.splice(e,1)):n.exdependent?t.indexOf(n.exdependent)<0&&(this.showRules.indexOf(n.exdependent)<0||this.selects.indexOf(n.exdependent)<0?(this.showRules.push(o),t.splice(e,1)):t.splice(e,1)):(this.showRules.push(o),t.splice(e,1))}t.length>0&&this.refresh(t)},t.prototype.getShowRules=function(){return this.showRules},t.prototype.checkInShowRules=function(t){return this.showRules.indexOf(t)>=0},t.prototype.checkSelected=function(t){return this.selects.indexOf(t)>=0},t.prototype.isDeNotShowRule=function(t){return this.areaData.systemDefault&&this.areaData.systemDefault[1]?this.areaData.systemDefault[1].indexOf(t)>=0:!1},t.prototype.getChooseRules=function(){for(var t=[],e=0;e<this.selects.length;e++)this.checkInShowRules(this.selects[e])&&t.push(this.selects[e]);if(this.areaData.systemDefault.length>0)for(var e=0;e<this.areaData.systemDefault.length;e++)t=t.concat(this.areaData.systemDefault[e]);return t},t.prototype.getRelationData=function(t){return this.areaData.relation[t]},t.prototype.getName=function(t,e){void 0===e&&(e=null);var o=this.getRelationData(t);if(o&&o.names)for(var n in o.names){for(var i=o.names[n],r=!0,s=0;s<i.ids.length;s++)if(e){if(e.indexOf(i.ids[s])<0){r=!1;break}}else if(!this.checkSelected(i.ids[s])){r=!1;break}if(r)return i.name}return o&&o.name?o.name:RES.getRes("rules_json").rules[t]||""},t}();t.RuleArea=e,__reflect(e.prototype,"two.RuleArea"),t.ruleConfig=new e}(two||(two={}));var two;!function(t){var e=function(e){function o(){return e.call(this)||this}return __extends(o,e),Object.defineProperty(o.prototype,"id",{get:function(){return this._id},set:function(t){this._id=t,this.createRules(t)},enumerable:!0,configurable:!0}),o.prototype.createRules=function(e){this.removeChildren();var o,n=one.getOption("language")||RES.getRes("config_json").language;o=RES.getRes("rule"+this._id+"_"+n+"_txt")?[RES.getRes("rule"+this._id+"_"+n+"_txt")]:RES.getRes("rule"+e+"Des_"+n+"_json")?RES.getRes("rule"+e+"Des_"+n+"_json").rules:RES.getRes("rule2Des_"+n+"_json").rules;for(var i=0;i<o.length;i++)if("{"==o[i][0]&&"}"==o[i][o[i].length-1])this.addChild(new eui.Image(RES.getRes(o[i].substr(1,o[i].length-2))));else{var r=new t.RuleDesItem;r.setText(o[i]),this.addChild(r)}},o}(eui.Group);t.RuleDesGroup=e,__reflect(e.prototype,"two.RuleDesGroup")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e.skinName="RuleDesItemSkin",e}return __extends(e,t),e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e.prototype.setText=function(t){this.txt.text=t},e}(eui.Component);t.RuleDesItem=e,__reflect(e.prototype,"two.RuleDesItem",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(e){function o(t){var o=e.call(this)||this;return o.ruleItems={},o.ruleData=t,o.skinName="RuleGroupSkin",o.maxWidth=900,o}return __extends(o,e),o.prototype.childrenCreated=function(){var o=this;e.prototype.childrenCreated.call(this),this.signTxt.text=this.ruleData.title,null!=this.ruleData.gap&&(this.ruleGp.layout.gap=this.ruleData.gap),this.ruleData.ruleX&&(this.ruleGp.x+=this.ruleData.ruleX),this.ruleData.ruleY&&(this.ruleGp.y+=this.ruleData.ruleY);for(var n=0;n<this.ruleData.rules.length;n++){var i=this.ruleData.rules[n],r=new t.RuleItem(i);this.ruleItems[i]=r,t.ruleConfig.checkInShowRules(i)&&this.ruleGp.addChild(r)}this.refresh(),one.monitor.on("ruleChangedRefresh",this.refresh,this),this.once(egret.Event.REMOVED_FROM_STAGE,function(t){t.currentTarget==t.target&&one.monitor.off("ruleChangedRefresh",o.refresh,o)},this)},o.prototype.refresh=function(){this.ruleGp.removeChildren();for(var e=0;e<this.ruleData.rules.length;e++){var o=this.ruleData.rules[e],n=this.ruleItems[o];t.ruleConfig.checkInShowRules(o)&&this.ruleGp.addChild(n),n.selected=t.ruleConfig.checkSelected(o),n.label=t.ruleConfig.getName(o)}},o}(eui.Component);t.RuleGroup=e,__reflect(e.prototype,"two.RuleGroup",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e.labelText=new eui.Label,e.addChild(e.labelText),e.labelText.textColor=8079919,e}return __extends(e,t),Object.defineProperty(e.prototype,"selected",{get:function(){return this._selected},set:function(t){this._selected=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"label",{get:function(){return this._label},set:function(t){this._label=t,this.labelText.text=t},enumerable:!0,configurable:!0}),e.prototype.setStyle=function(t){for(var e in t)this.labelText[e]=t[e]},e}(eui.Component);t.RuleLabelItem=e,__reflect(e.prototype,"two.RuleLabelItem",["eui.UIComponent","egret.DisplayObject"]);var o=function(e){function o(t){var o=e.call(this)||this;return o._label="",o._selected=!1,o.ruleID=t,o.skinName="RuleItemSkin",o}return __extends(o,e),o.prototype.childrenCreated=function(){var o=this;e.prototype.childrenCreated.call(this);var n=t.ruleConfig.getRelationData(this.ruleID);switch(n.type){case 1:this.item=new eui.RadioButton,this.item.groupName=n.group+"";break;case 2:this.item=new eui.CheckBox;break;case 3:this.item=new t.RuleLabelItem,n.style&&this.item.setStyle(n.style);break;default:this.item=new eui.CheckBox}this.item.selected=this._selected,this.item.label=this._label,this.item.addEventListener(egret.Event.CHANGE,function(t){var e=o.item.selected;if(1==n.type){var i=o.item.group.selection.parent;one.monitor.emit("ruleItemChanged",[{id:o.ruleID,selected:e},{id:i.ruleID,selected:!1}])}else one.monitor.emit("ruleItemChanged",[{id:o.ruleID,selected:e}])},this),this.addChild(this.item)},Object.defineProperty(o.prototype,"label",{get:function(){return this._label},set:function(t){this._label=t,this.item&&(this.item.label=this._label)},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"selected",{get:function(){return this._selected},set:function(t){this._selected=t,this.item&&(this.item.selected=this._selected)},enumerable:!0,configurable:!0}),o}(eui.Component);t.RuleItem=o,__reflect(o.prototype,"two.RuleItem",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(e){function o(t,o){var n=e.call(this,"two.RulePanelSkin")||this;return n.id=t,n.rules=o,n}return __extends(o,e),o.prototype.created=function(){var o=this;e.prototype.created.call(this),this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.closeBox(o)},this),this.ruleGp.id=this.id;this.rules;this.ruleTxt&&(t.tableVO.tableData&&t.tableVO.tableData.gid>0?this.ruleTxt.text=t.getRuleStr(t.tableVO.tableData.gid,t.tableVO.tableData.rules):this.ruleTxt.text="")},o}(t.BaseLangComponent);t.RulePanel=e,__reflect(e.prototype,"two.RulePanel")}(two||(two={}));var two;!function(t){var e=function(e){function o(){return e.call(this,"SettingSkin")||this}return __extends(o,e),o.prototype.childrenCreated=function(){var o=this;e.prototype.childrenCreated.call(this),this.okBtn&&this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.closeBox(o)},this),this.backBtn&&this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.closeBox(o);var e=new t.Confirm(one.langUtils.getStatement(5));e.addEventListener(t.Confirm.OK,function(){t.net.roomProxy.quitRoom(function(e){200==e.code&&t.changePage(t.SceneType.HALL)})},e),t.showBox(e)},this);var n="false"!=egret.localStorage.getItem("music_selected");this.musicBtn.selected=n;var i=parseFloat(egret.localStorage.getItem("music_volume")),r="false"!=egret.localStorage.getItem("effect_selected");this.soundBtn.selected=r;var s=parseFloat(egret.localStorage.getItem("effect_volume"));this.musicSlider.maximum=100,this.musicSlider.value=0,this.soundSlider.maximum=100,this.soundSlider.value=0,one.callLater(function(){isNaN(i)&&(i=1),n&&0==i&&(i=1),n?o.musicSlider.value=i*o.musicSlider.maximum||0:o.musicSlider.value=0,isNaN(s)&&(s=1),r&&0==s&&(s=1),r?o.soundSlider.value=s*o.soundSlider.maximum||0:o.soundSlider.value=0},6),this.musicSlider.addEventListener(egret.Event.CHANGE,function(t){o.musicBtn.selected=0!=o.musicSlider.value,i=o.musicSlider.value/o.musicSlider.maximum,one.soundManager.setVolume(egret.Sound.MUSIC,i),egret.localStorage.setItem("music_volume",i.toString()),o.musicBtn.selected?(one.soundManager.open(egret.Sound.MUSIC),egret.localStorage.setItem("music_selected","true")):(one.soundManager.close(egret.Sound.MUSIC),egret.localStorage.setItem("music_selected","false"))},this),this.soundSlider.addEventListener(egret.Event.CHANGE,function(t){o.soundBtn.selected=0!=o.soundSlider.value,s=o.soundSlider.value/o.soundSlider.maximum,one.soundManager.setVolume(egret.Sound.EFFECT,s),egret.localStorage.setItem("effect_volume",s.toString()),o.soundBtn.selected?(one.soundManager.open(egret.Sound.EFFECT),egret.localStorage.setItem("effect_selected","true")):(one.soundManager.close(egret.Sound.EFFECT),egret.localStorage.setItem("effect_selected","false"))},this),this.musicBtn.addEventListener(egret.Event.CHANGE,function(t){o.musicBtn.selected?(one.soundManager.open(egret.Sound.MUSIC),0==i&&(i=1),o.musicSlider.value=i*o.musicSlider.maximum,one.soundManager.setVolume(egret.Sound.MUSIC,i),egret.localStorage.setItem("music_selected","true")):(one.soundManager.close(egret.Sound.MUSIC),o.musicSlider.value=0,one.soundManager.setVolume(egret.Sound.MUSIC,0),egret.localStorage.setItem("music_selected","false"))},this),this.soundBtn.addEventListener(egret.Event.CHANGE,function(t){o.soundBtn.selected?(one.soundManager.open(egret.Sound.EFFECT),0==s&&(s=1),o.soundSlider.value=s*o.soundSlider.maximum,one.soundManager.setVolume(egret.Sound.EFFECT,s),egret.localStorage.setItem("effect_selected","true")):(one.soundManager.close(egret.Sound.EFFECT),o.soundSlider.value=0,one.soundManager.setVolume(egret.Sound.EFFECT,0),egret.localStorage.setItem("effect_selected","false"))
},this)},o}(t.BaseLangComponent);t.Setting=e,__reflect(e.prototype,"two.Setting")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e.endTime=0,e.isRunning=!1,e.skinName="TimePanelSkin",e}return __extends(e,t),e.prototype.removed=function(){t.prototype.removed.call(this),this.stop()},e.prototype.added=function(){t.prototype.added.call(this),0!=this.endTime&&this.start()},e.prototype.setEndTime=function(t){this.endTime=1e3*t+Date.now()},e.prototype.onTicker=function(t){var e=Date.now(),o=Math.floor((this.endTime-e)/1e3);return 0>=o?(this.timeTxt.text=one.toFixed(0,2),this.stop(),!1):(this.timeTxt.text=one.toFixed(o,2),!1)},e.prototype.start=function(){if(!this.isRunning){var t=Date.now(),e=Math.floor((this.endTime-t)/1e3);this.timeTxt.text=one.toFixed(e,2),this.isRunning=!0,this.visible=!0,egret.startTick(this.onTicker,this)}},e.prototype.stop=function(){this.isRunning&&(this.isRunning=!1,egret.stopTick(this.onTicker,this))},e}(t.BaseComponent);t.TimePanel=e,__reflect(e.prototype,"two.TimePanel")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e._fileName="sign_3g",e.skinName="two.WifiSkin",e}return __extends(e,t),e.prototype.removed=function(){t.prototype.removed.call(this),one.monitor.off("onWifiChanged",this.onDelayTime,this)},e.prototype.added=function(){t.prototype.added.call(this),one.monitor.on("onWifiChanged",this.onDelayTime,this)},e.prototype.onDelayTime=function(t){t.delay<50?this.icon.source=this._fileName+"4_png":t.delay<100?this.icon.source=this._fileName+"3_png":t.delay<500?this.icon.source=this._fileName+"2_png":this.icon.source=this._fileName+"1_png"},Object.defineProperty(e.prototype,"fileName",{get:function(){return this._fileName},set:function(t){this._fileName=t},enumerable:!0,configurable:!0}),e}(t.BaseComponent);t.Wifi=e,__reflect(e.prototype,"two.Wifi")}(two||(two={}));var two;!function(t){var e=function(){function t(t,e){this._type=0,this.numTxt=t,this.roundTxt=e,this.addListeners()}return Object.defineProperty(t.prototype,"type",{get:function(){return this._type},set:function(t){this._type=t},enumerable:!0,configurable:!0}),t.prototype.addListeners=function(){one.monitor.on(t.ON_ROUND,this.onRound,this),one.monitor.on(t.ON_LEFT_CARDS,this.onLeftCards,this)},t.prototype.onRound=function(t){0==this._type?this.roundTxt.text=t.current+"/"+t.total:1==this._type&&(this.roundTxt.text=t.current+"")},t.prototype.onLeftCards=function(t){this.numTxt.text=t.toString()},t.prototype.destroy=function(){one.monitor.off(t.ON_ROUND,this.onRound,this),one.monitor.off(t.ON_LEFT_CARDS,this.onLeftCards,this)},t.ON_ROUND="onRound",t.ON_LEFT_CARDS="onLeftCards",t}();t.RoundCtr=e,__reflect(e.prototype,"two.RoundCtr")}(two||(two={}));var two;!function(t){var e=function(){function e(){}return e.load=function(o,n){function i(t,o){var n=new egret.Texture;n.bitmapData=o,e.icons[t]=n;for(var i=e.loadings[t].length-1;i>=0;i--)e.loadings[t][i](n);delete e.loadings[t]}if(e.icons[o])return void n(e.icons[o]);if(o.indexOf("http")<0)return RES.getRes(o)?void n(RES.getRes(o)):void RES.getResAsync(o,function(t){return n(t)},this);if(e.loadings[o])return void e.loadings[o].push(n);e.loadings[o]=[n];var r={imgUrl:o,target:"weixin/getImgBase64"};(new t.HttpProxy).loadAbsUrl(r,function(t){if(200==t.code)if(egret.Capabilities.runtimeType===egret.RuntimeType.WEB){var e=new Image;e.src=t.data.imgBase64Data,e.onload=function(){i(o,new egret.BitmapData(e))}}else{var n=egret.BitmapData.create("base64",t.data.imgBase64Data.replace(/^data:image[^;]*;base64,/,""));i(o,n)}})},e.icons={},e.loadings={},e}();__reflect(e.prototype,"HeadLoader");var o=function(t){function e(){return t.call(this)||this}return __extends(e,t),Object.defineProperty(e.prototype,"source",{get:function(){return this._imageUrl},set:function(t){var e=this;return this._imageUrl=t,null==t||""==t?void(this.texture=null):RES.getRes(t)?void(this.texture=RES.getRes(t)):void RES.getResByUrl(t,function(t){e.texture=t},this,RES.ResourceItem.TYPE_IMAGE)},enumerable:!0,configurable:!0}),e}(eui.Image);t.HeadIcon=o,__reflect(o.prototype,"two.HeadIcon")}(two||(two={}));var two;!function(t){var e;!function(t){var e=function(){function e(){this.manager=new t.SingleManager}return e.prototype.setData=function(t,e){switch(t+"Proxy"){case"Game_getServerProxy":return{code:200,uniqueHashCode:"",msg:"success",data:this.Game_getServerProxy()};case"HeartbeatProxy":return{code:200,uniqueHashCode:"",msg:"success",data:{}};case"LoginProxy":return{code:200,uniqueHashCode:"",msg:"success",data:this.login()};case"Play_chatProxy":this.manager.chat(0,e.message);break;case"Play_matchRoomProxy":this.manager.matchRoom(e.mgid);break;case"Play_cancelMatchRoomProxy":this.manager.cancelMatch(e.mgid);break;case"Play_createRoomProxy":this.manager.createRoom(e.mgid);break;case"Play_joinNewGameProxy":this.manager.joinNewGame();break;case"Play_joinRoomProxy":var o=this.manager.getRoomInfo(!1);return this.manager.isInGaming||this.manager.startHistory(),{code:200,uniqueHashCode:"",msg:"success",data:o};case"Play_kickProxy":var n=e.kickId;this.manager.kick(n);break;case"Play_quitProxy":this.manager.quit();break;case"Play_readyProxy":this.manager.jiaofen(0,e.score);break;case"Play_trusteeshipProxy":this.manager.trusteeship(0,e.isOpen);break;case"Play_actionProxy":switch(e.type){case 2:var i=e.cards;this.manager.chu(0,i);break;case 3:this.manager.chu(0,[]);break;case 4:var r=e["double"];this.manager.mingpai(0,r)}}return{code:200,uniqueHashCode:e.postData,msg:"success",data:{}}},e.prototype.Game_getServerProxy=function(){var e=t.SingleServerUtils.getMyUser(),o=this.manager.getRoomInfo(!1);return{secret:"7ac6b8d9080df248b0c8c2c4a60eac36",serverInfo:{wssHost:"ws://ddz.g-demos.com:6869"},userInfo:{uid:e.uid,name:e.name,sex:e.sex,pic:e.pic,cash:e.cash,rid:o?o.rid:0,gid:4,login_time:"2019-06-10 18:26:08",ip:"",address:""},clientVersion:"1.0",methodList:t.SingleServerUtils.getMethodList()}},e.prototype.login=function(){var e=t.SingleServerUtils.getMyUser(),o=this.manager.getRoomInfo(!1);return{userInfo:{uid:e.uid,name:e.name,sex:e.sex,pic:e.pic,cash:e.cash,gold:0,rid:o?o.rid:0,gid:"4",login_time:"2019-06-10 18:26:08",ip:"",address:"",real_name:null,id_card:null}}},e}();t.SingleServer=e,__reflect(e.prototype,"two.ddz.SingleServer"),t.singleServer=new e}(e=t.ddz||(t.ddz={}))}(two||(two={}));var two;!function(t){var e=function(){function e(){}return e.prototype.loadAbsUrl=function(e,o){var n=/golemon/.test(e.target),i="";i="1"==one.getOption("test")?n?t.net.golemonTestDomain:t.net.testDomain:n?t.net.golemonDomain:t.net.domain,i+=e.target.replace("golemon/",""),delete e.target,"1"==one.getOption("debug")&&(e.debug="1");var r=new egret.HttpRequest;r.responseType=egret.HttpResponseType.TEXT,r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n&&r.setRequestHeader("QnmAuth",one.getCookie("QnmAuth")||"eyJpdiI6IndGR3BkbTlZMnd1WmM4bE56M0E2eVE9PSIsInZhbHVlIjoiVFVjT0FtRjhBNFpcL0czd2VxcXRaMGZjS1QrOXMzeG42OGFPdWtqMUowR1NsaUM2TVI4REg3RkdNcE5yVmZnbEVnRWpyS3l5OHk4aDVDcGwwamRsTHgxeUpIVzJDd1RBQk9HMGNjOE5ncjVkbDB1TkJkRnhEUDd0Q2UzWG1xSElNOTBoV055bVZ0dllqM2FOaU1vVzQrV1pSMDNEODMzd1BKNk1nM3ZXXC9TeTZtRW1iUzBUdVJBT2xpZ2dPY0Z1UVRMajlWV0NXbVJcLytYbFBuVWRGS1YrWUhrdUFmcnhndUN3WVhrTUFtczlrVG9kNEZxem1HZXlWRndoN0V3eHY4OTlsYlJqMHorTmZrQ1wvWGdLeWk4Nyt0UG0rcDFDRFJCRDBTbTMxYkY1ZllIVTBHTTNJWEZmWGYwOGhQd0NBejd2MG5ZZkN1QkZsM3RMcXVPVmk3Z20wKzlDWVVqbWN3aTJHWE05ZWc2N3ZyN1cwdkVvTSs1ZG1Yb1Y5ZHR6M0xhUiIsIm1hYyI6Ijc2ZWViMzNlMDlkNzk3YWFjNmUyMGMwNmIzM2JiNDY1OTEzZmI0MWNjMjY0YjBmODRkYjZmZjUzOWMzMTdhNjkifQ");r.once(egret.Event.COMPLETE,function(e){var n=r.response;if(7!=n[0]||"b"!=n[1])var s=n;else{s="";for(var a=0;a<n.length;a+=2)s+=String.fromCharCode(parseInt(n.substr(a,2),16))}t.conUtils.addMessage("loadAbsUrl respond complete "+i+" "+s);var c=JSON.parse(s);t.net.dealErrorCode(c.code,c.msg),o&&o(c)},this),r.once(egret.IOErrorEvent.IO_ERROR,function(){t.conUtils.addMessage("loadAbsUrl respond error "+i+" "),o&&o({code:9998})},this);var s=[];if("0"==one.getOption("encrypt"))for(var a in e)s.push({key:a,value:e[a]});else for(var a in e)s.push({key:a,value:encodeURI(e[a])});s.sort(function(t,e){return t.key>e.key?1:-1});for(var c="",h="",l=0;l<s.length;l++)h+=s[l].key+"="+s[l].value+"&","target"!=s[l].key&&(c+=s[l].value);c+="f8203ccd77ff849150b7dde50cd21a59";var u=(new md5).hex_md5(c);t.conUtils.addMessage("loadAbsUrl send "+i+" "+JSON.stringify(e)+" verify="+u);var d=h+"verify="+u;if("0"==one.getOption("encrypt"));else{var p=this.strToHexCharCode(d);d="binData="+p}r.open(i+"?"+d,egret.HttpMethod.POST),r.send(d)},e.prototype.strToHexCharCode=function(t){if(""===t)return"";for(var e=[],o=0;o<t.length;o++)e.push(t.charCodeAt(o).toString(16));return e.join("")},e.prototype.load=function(e,o,n){if(one.getOption("userId")){for(var i=["o","p","b","d","t","v","a","u","i","w"],r="",s=one.getOption("userId"),a=0;a<s.length;a++)r+=i[s[a]];for(var c=Math.floor(Date.now()/1e3),h=c.toString(),l="",a=0;a<h.length;a++)l+=i[h[a]];r+="_"+l,o.checkStr=r,o.appId=one.getOption("appId")}one.getOption("state")&&(o.mobile=t.net.getMobileID(),o.state=one.getOption("state"),o.sign=one.getOption("sign")),o.target=e,this.loadAbsUrl(o,n)},e}();t.HttpProxy=e,__reflect(e.prototype,"two.HttpProxy")}(two||(two={}));var two;!function(t){var e;!function(e){var o=function(){function t(){this.routes={}}return t.prototype.sendHttpData=function(t,e,o){var n=this;if(null==this.routes[t]&&(this.routes[t]=[]),this.routes[t].push(o),!(this.routes[t].length>=2)){var i=function(e){n.dealRespond(t,e)},r=t.split(".");this.sendHttp("game/play/"+r.pop(),e,!0,"connector.roomHandler.heartbeat"!=t,i)}},t.prototype.dealRespond=function(t,o){if(e.dealErrorCode(o.code,o.msg),this.routes[t]){for(var n=[],i=0;i<this.routes[t].length;i++){var r=this.routes[t][i];r&&n.push(r)}delete this.routes[t];for(var i=0;i<n.length;i++){var r=n[i];r&&r(o)}}},t.prototype.sendHttp=function(t,e,o,i,r){(new n).sendHttp(t,e,o,i,r)},t.prototype.clear=function(){this.routes={}},t}();e.HttpSend=o,__reflect(o.prototype,"two.net.HttpSend");var n=function(){function o(){}return o.prototype.sendHttp=function(n,i,r,s,a){var c=this;i.actionUnique=o.ActionUnique,o.ActionUnique++,i.firstTime=Date.now();var h=-1,l=!1,u=function(){s&&t.conUtils.addMessage("respondData route "+n+"  "+JSON.stringify(i)+"   timeout"),p++,p>=2?(l=!0,e.socketProxy.reConnect(function(){p=0,l=!1,m()})):m()},d=function(e){if(e){if(222==e.code)return void p--;if(9998==e.code)return}s&&t.conUtils.addMessage("respondData route 1 "+n+"  "+JSON.stringify(i)+"  "+JSON.stringify(e)),l||(l=!0,egret.clearTimeout(h),a&&a(e))},p=0,m=function(){s&&t.conUtils.addMessage("sendData route "+n+" "+JSON.stringify(i)),h=egret.setTimeout(function(){u()},c,3e3),p>0&&(i.repeatRequest=1),i.twoTime=Date.now(),(new t.HttpProxy).load(n,i,d)};m()},o.ActionUnique=0,o}();e.HttpP=n,__reflect(n.prototype,"two.net.HttpP"),e.httpSend=new o}(e=t.net||(t.net={}))}(two||(two={}));var two;!function(t){var e=function(){function e(){}return e.Instance=function(){return this.instance||(this.instance=new e),this.instance},e.prototype.strToHexCharCode=function(t){if(""===t)return"";for(var e=[],o=0;o<t.length;o++)e.push(t.charCodeAt(o).toString(16));return e.join("")},e.prototype.sendRequest=function(e,o,n){var i=[];if("0"==one.getOption("encrypt"))for(var r in o)i.push({key:r,value:o[r]});else for(var r in o)i.push({key:r,value:encodeURI(o[r])});i.sort(function(t,e){return t.key>e.key?1:-1});for(var s="",a="",c=0;c<i.length;c++)a+=i[c].key+"="+i[c].value+"&","target"!=i[c].key&&(s+=i[c].value);s+="f8203ccd77ff849150b7dde50cd21a59";var h=(new md5).hex_md5(s);t.conUtils.addMessage("loadAbsUrl send "+e+" "+JSON.stringify(o)+" verify="+h);var l=a+"verify="+h;if("0"==one.getOption("encrypt"));else{var u=this.strToHexCharCode(l);l="binData="+u}var d=new egret.HttpRequest;d.responseType=egret.HttpResponseType.TEXT,d.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),d.open(e+"?"+l,egret.HttpMethod.POST),d.send(l),d.addEventListener(egret.Event.COMPLETE,function(t){if(!d.response)return void console.log("error "+e);var o=JSON.parse(d.response);n&&n(o)},this),d.addEventListener(egret.IOErrorEvent.IO_ERROR,function(){console.log("get error : "+event)},this),d.addEventListener(egret.ProgressEvent.PROGRESS,function(t){console.log("get progress : "+Math.floor(100*t.bytesLoaded/t.bytesTotal)+"%")},this)},e.prototype.onSendCommonRequest=function(e,o,n){console.log(e,o);var i=e.replace(/_/g,"/");i=i.charAt(0).toLowerCase()+i.substr(1);var r="";r="1"==one.getOption("test")?t.net.testDomain:t.net.domain,o.appId=one.getOption("appId"),o.gameId=parseInt(one.getOption("gameId"))||RES.getRes("config_json").gameID,o.mobile=t.net.getMobileID(),o.state=one.getOption("state"),o.sign=one.getOption("sign"),o.time=Date.now(),o.checkStr=this.getCheckStr(),this.sendRequest(r+i,o,n)},e.prototype.getCheckStr=function(){for(var t=["o","p","b","d","t","v","a","u","i","w"],e="",o=one.getOption("userId"),n=0;n<o.length;n++)e+=t[o[n]];for(var i=Math.floor(Date.now()/1e3),r=i.toString(),s="",n=0;n<r.length;n++)s+=t[r[n]];return e+="_"+s},e.instance=null,e}();t.HttpOperator=e,__reflect(e.prototype,"two.HttpOperator")}(two||(two={}));var two;!function(t){var e=function(){function e(){}return e.Instance=function(){return this.instance||(this.instance=new e),this.instance},e.prototype.onSendCommonRequest=function(e,o,n){console.log(e,o);var i=e.replace(/_/g,"/");i=i.charAt(0).toLowerCase()+i.substr(1),t.net.pomeloProxy.sendData(i,o,!1,function(t){n(t)})},e.instance=null,e}();t.PomeloOperator=e,__reflect(e.prototype,"two.PomeloOperator")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=["clientVersion","methodList","secret","userInfo","serverInfo"],e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Game_getServerProxy=e,__reflect(e.prototype,"two.Game_getServerProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.HeartbeatProxy=e,__reflect(e.prototype,"two.HeartbeatProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=["userInfo"],e.proxyType=2,e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.LoginProxy=e,__reflect(e.prototype,"two.LoginProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e.proxyType=2,e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Play_actionProxy=e,__reflect(e.prototype,"two.Play_actionProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e.proxyType=2,e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Play_cancelMatchRoomProxy=e,__reflect(e.prototype,"two.Play_cancelMatchRoomProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Play_chatProxy=e,__reflect(e.prototype,"two.Play_chatProxy")}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.responseKeys=[],t.proxyType=2,t}return __extends(o,e),o.getInstance=function(){return null==o._instance&&(o._instance=new o),o._instance},o.prototype.responseBefore=function(){var e=this.getResponse();two_pk.tableVO.setRoomData(e),t.userVO.userInfo.rid=e.rid},o}(t.BaseProxy);t.Play_createRoomProxy=e,__reflect(e.prototype,"two.Play_createRoomProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e.proxyType=2,e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Play_joinNewGameProxy=e,__reflect(e.prototype,"two.Play_joinNewGameProxy")}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.responseKeys=[],t.proxyType=2,t}return __extends(o,e),o.getInstance=function(){return null==o._instance&&(o._instance=new o),o._instance},o.prototype.responseBefore=function(){var e=this.getResponse();two_pk.tableVO.setRoomData(e),t.userVO.userInfo.rid=e.rid},o.prototype.getCDTime=function(){var t=this.getResponse();return t?t.cdTime:0},o.prototype.getCurrentMethod=function(e){void 0===e&&(e=0);for(var o=e||t.tableVO.mgid,n=t.net.serverConfig.methodList,i=0;i<n.length;i++)if(n[i].mgid==o)return n[i];return n[0]},o}(t.BaseProxy);t.Play_joinRoomProxy=e,__reflect(e.prototype,"two.Play_joinRoomProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e.proxyType=2,e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Play_kickProxy=e,__reflect(e.prototype,"two.Play_kickProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e.proxyType=2,e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Play_matchRoomProxy=e,__reflect(e.prototype,"two.Play_matchRoomProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e.proxyType=2,e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Play_quitProxy=e,__reflect(e.prototype,"two.Play_quitProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e.proxyType=2,e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Play_readyProxy=e,__reflect(e.prototype,"two.Play_readyProxy")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.responseKeys=[],e.proxyType=2,e}return __extends(e,t),e.getInstance=function(){return null==e._instance&&(e._instance=new e),e._instance},e}(t.BaseProxy);t.Play_trusteeshipProxy=e,__reflect(e.prototype,"two.Play_trusteeshipProxy")}(two||(two={}));var two;!function(t){var e=function(e){function o(){return e.call(this)||this}return __extends(o,e),o.prototype.onTap=function(){t.currentPageType!=t.SceneType.HALL&&t.currentPageType!=t.SceneType.TABLE?t.changePage(t.SceneType.HALL):(console.log("exitapp"),t.exitApp()),one.soundManager.playSound("buttonClick",0,1)},o}(t.BaseButton);t.BackButton=e,__reflect(e.prototype,"two.BackButton")}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=e.call(this,"CircleHead")||this;return t._source="",t}return __extends(o,e),o.prototype.removed=function(){e.prototype.removed.call(this)},o.prototype.created=function(){e.prototype.created.call(this),this.source=this._source},o.prototype.setMask=function(){if(!this.shapeMask){var t=this.shapeMask=new egret.Shape;t.graphics.beginFill(16777215,1),t.graphics.drawCircle(this.head.width/2,this.head.width/2,this.head.width/2),t.graphics.endFill(),t.x=this.head.x,t.y=this.head.y}},Object.defineProperty(o.prototype,"source",{get:function(){return this._source},set:function(e){this._source=e,this.setMask(),this.head&&e?(this.head.source="",this.head.source=e,this.head.visible=!0,this.head.parent.addChild(this.shapeMask),this.head.mask=this.shapeMask):(t.removeSelf(this.shapeMask),this.head.mask=null,""==e?this.head.visible=!1:(this.head.source="tx_png",this.head.visible=!0))},enumerable:!0,configurable:!0}),o}(t.BaseComponent);t.CircleHead=e,__reflect(e.prototype,"two.CircleHead")}(two||(two={}));var two;!function(t){var e=function(e){function o(t,o,n){var i=e.call(this)||this;return i.w=t,i.h=o,i.key=n,i.startTime=0,i.second=0,i}return __extends(o,e),o.prototype.created=function(){e.prototype.created.call(this);this.w,this.h},o.prototype.removed=function(){e.prototype.removed.call(this),egret.stopTick(this.onTicker,this)},o.prototype.setLeftSecond=function(t){this.second=t,this.stage&&(this.startTime=Date.now(),egret.stopTick(this.onTicker,this),egret.startTick(this.onTicker,this))},o.prototype.onTicker=function(e){var o=Date.now(),n=(o-this.startTime)/(1e3*this.second)*360;return n=Math.min(360,n),360==n?(egret.stopTick(this.onTicker,this),t.removeSelf(this),!1):!1},o}(t.BaseGroup);t.CircleProgress=e,__reflect(e.prototype,"two.CircleProgress")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e.isChoose=!1,e._allowMultipleSelection=!1,e._dataProvider=null,e._selectedIndices=[],e.skinName="ComboBoxSkin",e}return __extends(e,t),e.prototype.childrenCreated=function(){var e=this;t.prototype.childrenCreated.call(this),this.addEventListener(egret.Event.REMOVED_FROM_STAGE,function(t){t.currentTarget==t.target&&(e.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,e.onCancel,e),e.contentList=null)},this),this.isChoose=!1,this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(t){e.isChoose=!0},this),this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onCancel,this),this.select.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.scroller.visible=!0,e.btn_down.visible=!1,e.btn_up.visible=!0},this),this.btn_down.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.scroller.visible=!e.scroller.visible,e.btn_down.visible=!1,e.btn_up.visible=!0},this),this.btn_up.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.scroller.visible=!e.scroller.visible,e.btn_down.visible=!0,e.btn_up.visible=!1},this),this.list.addEventListener(egret.Event.CHANGE,function(t){e.select.data=e.selectedItems,e._allowMultipleSelection||(e.scroller.visible=!1,e.btn_down.visible=!0,e.btn_up.visible=!1),e.onSort(),e.dispatchEvent(t)},this),this.list.allowMultipleSelection=this._allowMultipleSelection,this.scroller.visible=!1,this.btn_up.visible=!1,this.btn_down.visible=!0,this.setCombo()},Object.defineProperty(e.prototype,"selectedSkin",{set:function(t){this.select.skinName=t},enumerable:!0,configurable:!0}),e.prototype.onCancel=function(){return this.isChoose?void(this.isChoose=!1):(this.isChoose=!1,this.scroller.visible=!1,this.btn_down.visible=!0,void(this.btn_up.visible=!1))},Object.defineProperty(e.prototype,"allowMultipleSelection",{get:function(){return this._allowMultipleSelection},set:function(t){this._allowMultipleSelection=t,this.list&&(this.list.allowMultipleSelection=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dataProvider",{get:function(){return this._dataProvider},set:function(t){this._dataProvider=t,this.list.selectedIndices=[],this.setCombo()},enumerable:!0,configurable:!0}),e.prototype.bind=function(t){this.contentList=t,this.onSort()},e.prototype.unbind=function(){this.contentList=null},e.prototype.onSort=function(){if(null!=this.contentList&&this._allowMultipleSelection){var t=this.contentList.dataProvider,e=t.source,o=this.selectedItems;e.sort(function(t,e){for(var n=o.length-1;n>=0;n--){if(t[o[n].key]>e[o[n].key])return o[n].ascending?1:-1;if(t[o[n].key]<e[o[n].key])return o[n].ascending?-1:1}return 0}),t.refresh()}},e.prototype.setCombo=function(){this._dataProvider&&(this.select&&(this.select.data=this.selectedItems),this.list&&(this.list.dataProvider=this._dataProvider))},Object.defineProperty(e.prototype,"selectedIndices",{get:function(){return this.list?this.list.selectedIndices:this._selectedIndices},set:function(t){this._selectedIndices=t,this._dataProvider&&(this.list.selectedIndices=t,this.select&&(this.select.data=this.selectedItems),this.onSort())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedItems",{get:function(){return this.list?this.list.selectedItems:[]},enumerable:!0,configurable:!0}),e}(eui.Component);t.ComboBox=e,__reflect(e.prototype,"two.ComboBox",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.partAdded=function(e,o){t.prototype.partAdded.call(this,e,o)},e.prototype.dataChanged=function(){t.prototype.dataChanged.call(this),this.data.label&&(this.labelDisplay.text=this.data.label)},e}(eui.ItemRenderer);t.ComboChooseItem=e,__reflect(e.prototype,"two.ComboChooseItem",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.dataChanged=function(){if(t.prototype.dataChanged.call(this),this.data){for(var e="",o=this.data.length-1;o>=0;o--)e+=this.data[o].label,o>0&&(e+=",");this.labelDisplay.text=e}},e}(eui.ItemRenderer);t.ComboSelectedItem=e,__reflect(e.prototype,"two.ComboSelectedItem",["eui.UIComponent","egret.DisplayObject"])}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=t.call(this,"EUIDB")||this;return e._fileName="",e._arName="",e._frame="",e._isShow=!1,e.isPlayed=!1,e}return __extends(e,t),Object.defineProperty(e.prototype,"fileName",{get:function(){return this._fileName},set:function(t){this._fileName=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"arName",{get:function(){return this._arName},set:function(t){this._arName=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frame",{get:function(){return this._frame},set:function(t){this._frame=t},enumerable:!0,configurable:!0}),e.prototype.created=function(){t.prototype.created.call(this),this.gp_role.removeChildren(),this.zRole=new one.DynamicDB(this.fileName,this.arName),this.gp_role.addChild(this.zRole),this.isShow=this._isShow},Object.defineProperty(e.prototype,"isShow",{set:function(t){this._isShow=t,this.zRole&&(this.zRole.visible=t,t?(this.isPlayed=!0,this.zRole.play(this._frame,-1)):(this.isPlayed||this.zRole.play(this._frame,1),this.zRole.stop(0)))},enumerable:!0,configurable:!0}),e}(t.BaseComponent);t.EUIDB=e,__reflect(e.prototype,"two.EUIDB")}(two||(two={}));var two;!function(t){var e=function(){function e(){}return e.init=function(o){e.acTime=0;var n=!0;o.addEventListener(egret.Event.ACTIVATE,function(){one.setTimeout(function(){one.soundManager.playLastMusic(),e.acTime=Date.now(),n&&one.soundManager.open(egret.Sound.EFFECT)},100)},e),o.addEventListener(egret.Event.DEACTIVATE,function(){e.isInBack=!0,one.soundManager.stop(egret.Sound.MUSIC),n=one.soundManager.isOpened(egret.Sound.EFFECT),one.soundManager.close(egret.Sound.EFFECT)},e),t.net.pomeloProxy.on("onUserCash",this.onUserCash,this)},e.removed=function(){t.net.pomeloProxy.off("onUserCash",this.onUserCash,this)},e.onUserCash=function(e){t.userVO.userInfo.cash=e.cash,t.currentPageType!=t.SceneType.TABLE&&(t.userVO.userInfo.rid=0)},e.lastSynTime=0,e.acTime=0,e.isInBack=!1,e}();t.GameCtr=e,__reflect(e.prototype,"two.GameCtr")}(two||(two={}));var two;!function(t){var e=function(e){function o(t){var o=e.call(this,"ddz.MatchingTableSkin")||this;return o.mgId=t,o.secId=-1,o}return __extends(o,e),o.prototype.created=function(){var o=this;e.prototype.created.call(this);var n=this.mgId;this.txt_score.text=t.Play_joinRoomProxy.getInstance().getCurrentMethod(this.mgId).score+"",this.goldTxt.text=t.formatCash(t.userVO.userInfo.cash);var i=!0;t.Play_matchRoomProxy.getInstance().send({mgid:n},function(e){if(200==e.code)i=!1;else{t.closeBox(o,!0);var n=new t.clazzes.confirm(one.langUtils.getStatement(36),!1,!1);t.showBox(n),i=!1}}),t.net.pomeloProxy.on("onMatchRoom",this.onMatchRoom,this),this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.Play_cancelMatchRoomProxy.getInstance().send({mgid:o.mgId},function(t){}),t.closeBox(o,!0)},this)},o.prototype.added=function(){var o=this;e.prototype.added.call(this),t.setLabelLanguage(this.txt_msg,35,0),this.secId=one.secondUtils.addSecond(99999,function(e){t.setLabelLanguage(o.txt_msg,35,99999-e)})},o.prototype.onMatchRoom=function(e){t.closeBox(this,!0),two_pk.tableVO.setRoomData(e),t.userVO.userInfo.rid=e.rid,t.changePage(t.SceneType.TABLE)},o.prototype.removed=function(){e.prototype.removed.call(this),t.net.pomeloProxy.off("onMatchRoom",this.onMatchRoom,this),one.secondUtils.removeSecond(this.secId)},o}(t.BaseLangComponent);t.MatchingTable=e,__reflect(e.prototype,"two.MatchingTable")}(two||(two={}));var two;!function(t){var e=function(e){function o(){var t=e.call(this,"MatchingView")||this;return t.secId=-1,t}return __extends(o,e),o.prototype.created=function(){var o=this;e.prototype.created.call(this);var n=!0;t.Play_matchRoomProxy.getInstance().send({mgid:parseInt(one.getOption("facility_type"))},function(e){if(200==e.code)n=!1;else{t.closeBox(o);var i=new t.clazzes.confirm(one.langUtils.getStatement(36),!1,!1);t.showBox(i),n=!1}}),t.net.pomeloProxy.on("onMatchRoom",this.onMatchRoom,this),this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.Play_cancelMatchRoomProxy.getInstance().send({mgid:parseInt(one.getOption("facility_type"))},function(t){}),t.closeBox(o)},this)},o.prototype.added=function(){var o=this;e.prototype.added.call(this),t.setLabelLanguage(this.txt_msg,35,0),this.secId=one.secondUtils.addSecond(99999,function(e){t.setLabelLanguage(o.txt_msg,35,99999-e)})},o.prototype.onMatchRoom=function(e){t.closeBox(this),two_pk.tableVO.setRoomData(e),t.userVO.userInfo.rid=e.rid,t.changePage(t.SceneType.TABLE)},o.prototype.removed=function(){e.prototype.removed.call(this),t.net.pomeloProxy.off("onMatchRoom",this.onMatchRoom,this),one.secondUtils.removeSecond(this.secId)},o}(t.BaseLangComponent);t.MatchingView=e,__reflect(e.prototype,"two.MatchingView")}(two||(two={}));var two;!function(t){var e=function(e){function o(){return e.call(this)||this}return __extends(o,e),o.prototype.created=function(){e.prototype.created.call(this)},o.prototype.dataChanged=function(){e.prototype.dataChanged.call(this),null!=this.data.min&&(this.txt_score.text=""+t.formatCash(this.data.score),this.txt_tip.text=one.langUtils.getStatement(4030,t.formatCash(this.data.min),t.formatCash(this.data.join)),this.di_icon.source="bg_card_"+this.data.mgid+"_png",this.flag_icon.source="font_room_"+this.data.mgid+"_png")},o}(t.BaseLangItemRenderer);t.RoomSelectItem=e,__reflect(e.prototype,"two.RoomSelectItem")}(two||(two={}));var two;!function(t){var e=function(e){function o(t){void 0===t&&(t=!0);var o=e.call(this,"RoomSelectView")||this;return o.isRand=t,o.isConnecting=!1,o.percentHeight=100,o.percentWidth=100,o}return __extends(o,e),o.prototype.removed=function(){e.prototype.removed.call(this),t.removeResizeMonitor(this.list)},o.prototype.created=function(){var o=this;e.prototype.created.call(this),t.addResizeMonitor(this.list,474,980,{scaleX:.5,scaleY:.5},{scaleX:1,scaleY:1},!1);var n=parseInt(one.getOption("gameId"))||RES.getRes("config_json").gameID;this.onChoose(n),t.ruleConfig.initArea(n);var i=t.Storage.getStorageKey("21_des_box"),r=egret.localStorage.getItem(i);if(!r){var s=new t.RulePanel(t.ruleConfig.getCurrentGameID(),[]);t.showBox(s),egret.localStorage.setItem(i,"1")}this.list.addEventListener(egret.Event.CHANGE,function(){if(!o.backRoom()){for(var e=o.list.selectedItem.mgid,n=t.net.serverConfig.methodList,i=0;i<n.length;i++)if(n[i].mgid==e){if(o.isRand){if(n[i].min>t.userVO.userInfo.cash){var r=new t.Confirm(one.langUtils.getStatement(62),!0,!0);
return t.showBox(r),void r.once(t.Confirm.OK,function(){t.VideoAd.show("333",function(e){t.userVO.userInfo.cash+=1e3,t.ddz.SingleServerUtils.saveData(t.userVO.userInfo.cash)})},null)}}else if(n[i].create>t.userVO.userInfo.cash){var r=new t.Confirm(one.langUtils.getStatement(61),!0,!0);return t.showBox(r),void r.once(t.Confirm.OK,function(){t.VideoAd.show("333",function(e){t.userVO.userInfo.cash+=1e3,t.ddz.SingleServerUtils.saveData(t.userVO.userInfo.cash)})},null)}break}one.setOption("facility_type",e+""),o.isRand&&t.VideoAd.show("333",function(t){o.matching(o.list.selectedIndex+1,e)}),one.setTimeout(function(){o.list.selectedIndex=-1},60)}},this);var a=t.net.serverConfig.methodList,c=this.list.dataProvider;c.removeAll();for(var h=0;h<a.length;h++)c.addItem(a[h])},o.prototype.backRoom=function(){return t.userVO.userInfo.rid&&t.userVO.userInfo.rid>0?(t.VideoAd.show("333",function(e){t.Play_joinRoomProxy.getInstance().send({rid:t.userVO.userInfo.rid},function(e){200==e.code&&t.changePage(t.SceneType.TABLE)})}),!0):!1},o.prototype.matching=function(e,o){var n=new t.MatchingTable(o);t.showBox(n,void 0,!0),n.once("onCancelMatching",function(){},null)},o.prototype.onChoose=function(e){this.enterToGameHall(e),t.userVO.userInfo.rid>0&&t.userVO.userInfo.gid>0&&t.ruleConfig.getAreaData(t.userVO.userInfo.gid).type==e?this.joinRoom(t.userVO.userInfo.rid,t.ruleConfig.getAreaData(t.userVO.userInfo.gid).type):this.loadRes(e,function(){})},o.prototype.enterToGameHall=function(e){one.setOption("gameType",e+"");var o=RES.getRes("load_json").clazz,n=o[e].common;for(var i in n)t.setClassMap(i,n[i]);for(var r=o[e].initial,s=0;s<r.length;s++){var a=egret.getDefinitionByName(r[s]);new a}},o.prototype.joinRoom=function(t,e){var o=this;this.isConnecting||(this.isConnecting=!0,this.loadRes(e,function(){o.isConnecting=!1}))},o.prototype.loadRes=function(t,e){one.loaderManager.reducePriorities(),one.loaderManager.loadGroup("sound",0),e()},o}(t.BaseLangComponent);t.RoomSelectView=e,__reflect(e.prototype,"two.RoomSelectView"),t.setClassMap("RoomSelectView","two.RoomSelectView")}(two||(two={}));var two;!function(t){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._format="",e}return __extends(e,t),e.prototype.childrenCreated=function(){var e=this;t.prototype.childrenCreated.call(this),this.addEventListener(egret.Event.REMOVED_FROM_STAGE,function(t){t.target==t.currentTarget&&e.removed()},this),this.intervalID=egret.setInterval(function(){e.text=one.formatTime(Date.now(),e._format)},this,200),this.text=one.formatTime(Date.now(),this._format)},e.prototype.removed=function(){egret.clearInterval(this.intervalID)},Object.defineProperty(e.prototype,"format",{get:function(){return this._format},set:function(t){this._format=t},enumerable:!0,configurable:!0}),e}(eui.Label);t.TimeLabel=e,__reflect(e.prototype,"two.TimeLabel")}(two||(two={}));var two;!function(t){var e=function(e){function o(){return e.call(this,"UserInfoSkin")||this}return __extends(o,e),o.prototype.created=function(){e.prototype.created.call(this);var o=t.userVO.userInfo;this.nameTxt.text=one.cutName(o.name,8),this.idTxt.text=o.uid+"",this.goldTxt.text=t.formatCash(o.cash)+"",this.headIcon.source=o.pic},o.prototype.added=function(){e.prototype.added.call(this),t.net.pomeloProxy.on("onUserCash",this.onUserCash,this)},o.prototype.removed=function(){e.prototype.removed.call(this),t.net.pomeloProxy.off("onUserCash",this.onUserCash,this)},o.prototype.onUserCash=function(e){this.goldTxt.text=t.formatCash(e.cash)+""},o}(t.BaseComponent);t.UserBannerPanel=e,__reflect(e.prototype,"two.UserBannerPanel")}(two||(two={}));