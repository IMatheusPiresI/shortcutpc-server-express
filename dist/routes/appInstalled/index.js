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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const getAppsList_1 = require("../../OperationalSystem/mac/actions/getAppsList");
const router = express_1.default.Router();
router.get("/list-apps", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const platform = os_1.default.platform();
    switch (platform) {
        case "darwin":
            (0, getAppsList_1.getAppsListMacOS)(res);
            break;
        default:
            res.status(400).json({ error: "Erro, o sistema operacional utilizado no computador não é suportado! Utilize, Windows, MacOS ou linux." });
    }
}));
exports.default = router;
