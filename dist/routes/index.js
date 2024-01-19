"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./connection"));
const appAction_1 = __importDefault(require("./appAction"));
const appInstalled_1 = __importDefault(require("./appInstalled"));
const router = express_1.default.Router();
router.use("/connection", connection_1.default);
router.use("/appAction", appAction_1.default);
router.use("/appInstalled", appInstalled_1.default);
exports.default = router;
