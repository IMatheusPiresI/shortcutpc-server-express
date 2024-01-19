
import path from "path"
import { exec } from "child_process";
import util from "util"
import fs from "fs"

const execAsync = util.promisify(exec);

export const getAppInfo = async (app:string, index: number) => {
    try {
        const appNameExecFormat = app.replace(/\s+/g, "\\ ");
        const pathIcon = path.join("/Applications", `${appNameExecFormat}.app`, "Contents", "Resources");
        const { stdout: filesList } = await execAsync(`ls ${pathIcon}`);
        const appNamesWithExtension = filesList.trim().split('\n');
        
        const iconName = appNamesWithExtension.find((iconName: string) => iconName.includes(".icns"));
        if (!iconName) {
            throw new Error("Erro ao buscar nome do ícone");
        }
        
        const icnsFilePath = `/Applications/${appNameExecFormat}.app/Contents/Resources/${iconName}`;
        const projectDirectory = `${__dirname}/${app.replace(/ /g, "_")}.png`;
        const sipsCommand = `sips -s format png ${icnsFilePath} --out ${projectDirectory}`;
        
        await execAsync(sipsCommand);
        const file = await fs.promises.readFile(projectDirectory);
        const iconBase64 = file.toString("base64");
        await fs.promises.unlink(projectDirectory)
        
        return {
            id: `${index}`,
            name: app,
            image: iconBase64
        };
    } catch (error) {
        throw new Error("Erro ao buscar ícones do aplicativo.")
    }
};