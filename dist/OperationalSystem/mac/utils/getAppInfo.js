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
exports.getAppInfo = void 0;
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const util_1 = __importDefault(require("util"));
const fs_1 = __importDefault(require("fs"));
const execAsync = util_1.default.promisify(child_process_1.exec);
const getAppInfo = (app, index) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appNameExecFormat = app.replace(/\s+/g, "\\ ");
        const pathIcon = path_1.default.join("/Applications", `${appNameExecFormat}.app`, "Contents", "Resources");
        const { stdout: filesList } = yield execAsync(`ls ${pathIcon}`);
        const appNamesWithExtension = filesList.trim().split('\n');
        const iconName = appNamesWithExtension.find((iconName) => iconName.includes(".icns"));
        if (!iconName) {
            throw new Error("Erro ao buscar nome do ícone");
        }
        const icnsFilePath = `/Applications/${appNameExecFormat}.app/Contents/Resources/${iconName}`;
        const projectDirectory = `${__dirname}/${app.replace(/ /g, "_")}.png`;
        const sipsCommand = `sips -s format png ${icnsFilePath} --out ${projectDirectory}`;
        yield execAsync(sipsCommand);
        const file = yield fs_1.default.promises.readFile(projectDirectory);
        const iconBase64 = file.toString("base64");
        yield fs_1.default.promises.unlink(projectDirectory);
        return {
            id: `${index}`,
            name: app,
            image: iconBase64
        };
    }
    catch (error) {
        throw new Error("Erro ao buscar ícones do aplicativo.");
    }
});
exports.getAppInfo = getAppInfo;
