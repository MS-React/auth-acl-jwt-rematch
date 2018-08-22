"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var BaseFormatter = /** @class */ (function () {
    function BaseFormatter() {
    }
    BaseFormatter.prototype.format = function (args) {
        var _this = this;
        if (args === void 0) { args = {}; }
        if (typeof args.toJSON === 'function')
            args = args.toJSON();
        Object.keys(this).forEach(function (key) {
            if (args[key] !== undefined)
                _this[key] = utils_1.ImmutabilityHelper.copy(args[key]);
        });
        if (args._id)
            this.id = this._id = args._id;
    };
    return BaseFormatter;
}());
exports.BaseFormatter = BaseFormatter;
