"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOpenningOption = void 0;
const _types_1 = require("../../@types");
const verifyOpenningOption = (openningOptions) => {
    var _a, _b;
    const navigatorSelected = (_a = openningOptions === null || openningOptions === void 0 ? void 0 : openningOptions.web) === null || _a === void 0 ? void 0 : _a.find(navigator => navigator.selected === true);
    const appSelected = (_b = openningOptions === null || openningOptions === void 0 ? void 0 : openningOptions.app) === null || _b === void 0 ? void 0 : _b.selected;
    if (navigatorSelected) {
        return {
            typeOpenning: _types_1.ITypeOpenningOption.Web,
            navigatorName: navigatorSelected.name,
            error: false
        };
    }
    if (appSelected) {
        return {
            typeOpenning: _types_1.ITypeOpenningOption.App,
            error: false
        };
    }
    throw new Error("Nenhuma forma de abertura do aplicativo foi selecionada.");
};
exports.verifyOpenningOption = verifyOpenningOption;
