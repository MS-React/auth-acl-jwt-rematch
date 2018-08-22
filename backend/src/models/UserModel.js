"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BaseFormatter_1 = require("./BaseFormatter");
var UserFormatter = /** @class */ (function (_super) {
    __extends(UserFormatter, _super);
    function UserFormatter(args) {
        var _this = _super.call(this) || this;
        _this.email = undefined;
        _this.name = undefined;
        _this.password = undefined;
        _this.phone = undefined;
        _this.skypeId = undefined;
        _this.rol = undefined;
        _this.format(args);
        return _this;
    }
    return UserFormatter;
}(BaseFormatter_1.BaseFormatter));
exports.UserFormatter = UserFormatter;
