"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NowpushClient = void 0;
var axios_1 = require("axios");
var config = require("./config");
// cannot be `import` as it's not under TS root dir
// tslint:disable-next-line:no-var-requires
var version = require("./package.json").version;
var DEFAULTS = {
    BASE_URL: "https://nowpush-staging.herokuapp.com/v4"
};
exports.NowpushClient = function (options) {
    if (options === void 0) { options = {}; }
    var authorizationToken = options.authorizationToken || process.env.NOWPUSH_AUTH_TOKEN;
    if (!authorizationToken) {
        throw new Error("Nowpush Auth Token is required.");
    }
    var baseURL = options.baseUrl || process.env.NOWPUSH_BASE_URL || DEFAULTS.BASE_URL;
    var axiosInstance = axios_1.default.create({
        baseURL: baseURL,
        headers: {
            Authorization: "Bearer " + authorizationToken,
            "User-Agent": "nowpush-node/" + version
        }
    });
    var nowpush = config.client({
        httpClient: axiosInstance
    });
    return nowpush;
};