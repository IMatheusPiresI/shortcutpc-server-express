import { IGetAppIcon } from "../../@types";

export const orderAppsByName = (listApps: IGetAppIcon[]) => {
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
}