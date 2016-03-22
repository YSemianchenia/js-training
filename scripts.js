(function() {

	function ToggleButton() {
		this.handleClick = this.handleClick.bind(this);
		this.handleDblClick = this.handleDblClick.bind(this);
	}

	ToggleButton.prototype.Css = {
		BLUE_BTN: 'blue-btn',
		BIG_BTN: 'big-btn'
	};	

	ToggleButton.prototype._element;

	ToggleButton.prototype.handleClick = function() {
		this._element.classList.toggle(this.Css.BLUE_BTN);
	};

	ToggleButton.prototype.handleDblClick = function() {
		this._element.classList.toggle(this.Css.BIG_BTN);
	};

	ToggleButton.prototype.attachEvent = function(element, evtType, listener) {
		if(element) {
			this._element = element;
			this._element.addEventListener(evtType, listener);
		}else {
			throw new Error("Can't attach event " + evtType + " to " + element);
		}
	};

	ToggleButton.prototype.detachEvent = function(evtType, listener) {
		this._element.removeEventListener(evtType, listener);
		this._element = null;
	};

	attachElements(".btn");

	function attachElements(selector) {
		var elements = document.querySelectorAll(selector);

		var i = 0;
		var len = elements.length;
		var element;
		var btn;
		for ( ; i < len; i++) {
			element = elements[i];
			
			btn = new ToggleButton();
			btn.attachEvent(element, 'click', btn.handleClick);
			btn.attachEvent(element, 'dblclick', btn.handleDblClick);
		}
	}

}());
