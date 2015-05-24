module.exports = function(name, points) {
	var _name = name || "";
	var _points = points || 0;
	return {
		init: function(name, points) {
			this._name = name;
			this._points = points;
		},
		getName: function() {
			return _name;
		},
		getPoints: function() {
			return _points;
		},
		addPoints: function(total) {
			_points += total;
		}
	}
}