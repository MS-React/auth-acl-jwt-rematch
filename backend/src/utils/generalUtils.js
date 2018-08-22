"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var multer = require("multer");
var constants_1 = require("../config/constants");
var parseDatabaseArguments = function (args) {
    var localDbConfig = constants_1["default"].SQL;
    args.filter(function (element) { return element.substring(0, 2) === 'db'; })
        .forEach(function (dbparam) {
        var _a = dbparam.split('='), key = _a[0], value = _a[1];
        localDbConfig[key.slice(2)] = value;
    });
    return localDbConfig;
};
exports.safeParse = function (str, fallback) {
    if (fallback === void 0) { fallback = undefined; }
    try {
        return JSON.parse(str);
    }
    catch (_a) {
        return fallback;
    }
};
exports.isId = function (key) { return key === 'id' || key === '_id' || /Id$/.test(key); };
exports.cleanQuery = function (query, customFormatter) {
    if (query === void 0) { query = ''; }
    if (typeof query !== 'string')
        return query instanceof Object ? query : {};
    var defaultFormatter = function (key, value) {
        if (exports.isId(key))
            return value;
        value = exports.safeParse(value, value);
        if (typeof value === 'string')
            return new RegExp(value, 'i');
        return value;
    };
    var parsedQuery = exports.safeParse(query, {});
    return Object.keys(parsedQuery)
        .map(function (key) { return [key, parsedQuery[key]]; })
        .reduce(function (fullQuery, queryChunk) {
        var key = queryChunk[0];
        var value = (customFormatter || defaultFormatter)(key, queryChunk[1]);
        if (key && value !== undefined)
            fullQuery[key] = value;
        return fullQuery;
    }, {});
};
exports.parseMultiPartRequest = function (request) { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                multer().any()(request, undefined, function (error) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (error)
                            reject(error);
                        resolve();
                        return [2 /*return*/];
                    });
                }); });
            })];
    });
}); };
exports.getDatabaseConfig = function () {
    var config = constants_1["default"].SQL;
    if (process.env.NODE_ENV === 'local') {
        config = parseDatabaseArguments(process.argv);
    }
    return config;
};
