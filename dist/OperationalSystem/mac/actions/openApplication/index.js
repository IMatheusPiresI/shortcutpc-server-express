"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openApplicationMacOS = void 0;
const child_process_1 = require("child_process");
const _types_1 = require("../../../../@types");
const openApplicationMacOS = (openningOptionSelected, app, res) => {
    if (openningOptionSelected.typeOpenning === _types_1.ITypeOpenningOption.Web) {
        if (!app.url) {
            res.status(400).json({ error: "URL do aplicativo não foi encontrada." });
            return;
        }
        (0, child_process_1.exec)(`open -a "${openningOptionSelected.navigatorName}" ${app.url}`, (err => {
            if (err) {
                res.status(400).json({ error: "Erro ao abrir aplicativo selecionado." });
                return;
            }
            res.json({
                app: app.name,
                oppenningOption: openningOptionSelected.navigatorName,
                url: app.url,
                success: true,
            });
        }));
    }
    if (openningOptionSelected.typeOpenning === _types_1.ITypeOpenningOption.App) {
        (0, child_process_1.exec)(`open -a ${app.name.replace(/\s+/g, "\\ ")}`, (err => {
            if (err) {
                res.status(500).json({ error: "Erro ao abrir aplicativo selecionado." });
                return;
            }
            res.json({
                app: app.name,
                oppenningOption: _types_1.ITypeOpenningOption.App,
                success: true,
            });
        }));
    }
};
exports.openApplicationMacOS = openApplicationMacOS;
