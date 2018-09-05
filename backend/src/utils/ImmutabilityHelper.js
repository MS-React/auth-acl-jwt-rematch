"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var ImmutabilityHelper = /** @class */ (function () {
    function ImmutabilityHelper() {
        throw new Error('just don\'t...');
    }
    ImmutabilityHelper.getType = function (variable) {
        var type = typeof variable;
        type = variable === null ? 'null' : type;
        type = Array.isArray(variable) ? 'array' : type;
        return type;
    };
    ImmutabilityHelper.immute = function (variable) {
        var copy;
        var variableType = ImmutabilityHelper.getType(variable);
        if (variableType === 'object')
            copy = __assign({}, variable);
        else if (variableType === 'array')
            copy = variable.slice();
        else
            copy = variable;
        return copy;
    };
    ImmutabilityHelper.copy = function (variable) {
        var result = ImmutabilityHelper.immute(variable);
        var loop = function (value) {
            var valueType = ImmutabilityHelper.getType(value);
            var loopable = !!(valueType === 'object' || valueType === 'array');
            var loopHandler = function (index) {
                value[index] = ImmutabilityHelper.immute(value[index]);
                if (loopable)
                    loop(value[index]);
            };
            if (valueType === 'object')
                for (var index in value)
                    loopHandler(index);
            if (valueType === 'array')
                for (var index = 0; index < value.length; index++)
                    loopHandler(index);
        };
        loop(result);
        return result;
    };
    return ImmutabilityHelper;
}());
exports.ImmutabilityHelper = ImmutabilityHelper;
