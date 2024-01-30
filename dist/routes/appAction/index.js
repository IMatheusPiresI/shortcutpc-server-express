"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyOpenningOption_1 = require("../../resources/helpers/verifyOpenningOption");
const robotjs_1 = __importDefault(require("robotjs"));
const os_1 = __importDefault(require("os"));
const openApplication_1 = require("../../operationalSystem/mac/actions/openApplication");
const router = express_1.default.Router();
router.post('/open-app-selected', (req, res) => {
    const app = req.body;
    const platform = os_1.default.platform();
    const openningOptionSelected = (0, verifyOpenningOption_1.verifyOpenningOption)(app.appOpenningOptions);
    switch (platform) {
        case "darwin":
            (0, openApplication_1.openApplicationMacOS)(openningOptionSelected, app, res);
            break;
        default:
            res.status(400).json({ error: "Erro, o sistema operacional utilizado no computador não é suportado! Utilize, Windows, MacOS ou linux." });
    }
});
router.post("/unblock", (req, res) => {
    const { password } = req.body;
    if (!password) {
        res.status(400).json({ error: "Erro, senha não enviada" });
    }
    robotjs_1.default.mouseClick();
    setTimeout(() => {
        robotjs_1.default.typeString(password);
        robotjs_1.default.keyTap("enter");
    }, 1000);
    res.json({ active: true });
});
exports.default = router;
