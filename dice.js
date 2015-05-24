module.exports = function() {
    var _value;
    return {
      roll: function() {
        return parseInt(Math.random() * 6) + 1;
      }
    }
}
