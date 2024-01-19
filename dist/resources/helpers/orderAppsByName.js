"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderAppsByName = void 0;
const orderAppsByName = (listApps) => {
    return listApps.sort((a, b) => {
        const nomeA = a.name.toUpperCase();
        const nomeB = b.name.toUpperCase();
        if (nomeA < nomeB) {
            return -1;
        }
        if (nomeA > nomeB) {
            return 1;
        }
        return 0;
    });
};
exports.orderAppsByName = orderAppsByName;
