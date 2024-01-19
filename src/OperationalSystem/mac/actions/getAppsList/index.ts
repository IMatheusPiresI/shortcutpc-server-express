import { Response } from "express";
import { ExecException, exec } from "child_process";
import { navigators } from "../../../../mock/navigators";
import { orderAppsByName } from "../../../../resources/helpers/orderAppsByName";
import { IGetAppIcon } from "../../../../@types";
import { getAppInfo } from "../../utils/getAppInfo";

export const getAppsListMacOS = (res: Response) => {
    exec('ls /Applications', async (err: ExecException | null, stdout: string) => {
        if (err) {
            res.status(500).json({ error: "Erro inesperado ao buscar listagem de aplicativos" });
            return;
        }
    
        const appNamesWithExtension: string[] = stdout.trim().split('\n').filter((app:string) => app.includes(".app"));
        const appNamesWithoutExtension: string[] = appNamesWithExtension.map((appName: string) => {
          const match = appName.match(/([^\/]+)\.app$/);
          return match ? match[1] : appName;
        });
    
        let allApps: IGetAppIcon[] = []
        await Promise.all(appNamesWithoutExtension.map(async (app, index) => {
            const appInfo: IGetAppIcon | undefined = await getAppInfo(app, index)
            if(appInfo) {
                allApps = [...allApps, appInfo]
            }
        }))
    
        const allAppsWithoutInstalleds = allApps.filter(app => {
          if(!navigators.includes(app.name)) {
              return app
          }
        })
    
        const allNavigatorInstalleds = appNamesWithoutExtension.filter(app => {
          if(navigators.includes(app)) {
              return app
          }
        });
    
        res.json({
          apps: orderAppsByName(allAppsWithoutInstalleds),
          navigators: allNavigatorInstalleds,
        });
      });
}