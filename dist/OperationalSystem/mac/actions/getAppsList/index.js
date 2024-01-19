"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppsListMacOS = void 0;
const child_process_1 = require("child_process");
const getAppInfo_1 = require("../../utils/getAppInfo");
const navigators_1 = require("../../../../mock/navigators");
const orderAppsByName_1 = require("../../../../resources/helpers/orderAppsByName");
const getAppsListMacOS = (res) => {
    (0, child_process_1.exec)('ls /Applications', (err, stdout) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            res.status(500).json({ error: "Erro inesperado ao buscar listagem de aplicativos" });
            return;
        }
        const appNamesWithExtension = stdout.trim().split('\n').filter((app) => app.includes(".app"));
        const appNamesWithoutExtension = appNamesWithExtension.map((appName) => {
            const match = appName.match(/([^\/]+)\.app$/);
            return match ? match[1] : appName;
        });
        let allApps = [];
        yield Promise.all(appNamesWithoutExtension.map((app, index) => __awaiter(void 0, void 0, void 0, function* () {
            const appInfo = yield (0, getAppInfo_1.getAppInfo)(app, index);
            if (appInfo) {
                allApps = [...allApps, appInfo];
            }
        })));
        const allAppsWithoutInstalleds = allApps.filter(app => {
            if (!navigators_1.navigators.includes(app.name)) {
                return app;
            }
        });
        const allNavigatorInstalleds = appNamesWithoutExtension.filter(app => {
            if (navigators_1.navigators.includes(app)) {
                return app;
            }
        });
        res.json({
            apps: (0, orderAppsByName_1.orderAppsByName)(allAppsWithoutInstalleds),
            navigators: allNavigatorInstalleds,
        });
    }));
};
exports.getAppsListMacOS = getAppsListMacOS;
