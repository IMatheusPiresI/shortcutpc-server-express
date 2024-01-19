import { exec } from "child_process";
import { IAppOpenned, ITypeOpenningOption, IVerifyOpenningOption } from "../../../../@types";
import { Response } from "express";

export const openApplicationMacOS = (openningOptionSelected: IVerifyOpenningOption, app: IAppOpenned, res: Response) => {
  if(openningOptionSelected.typeOpenning === ITypeOpenningOption.Web){
    if(!app.url){
      res.status(400).json({ error: "URL do aplicativo não foi encontrada." })
      return;
    }

    exec(`open -a "${openningOptionSelected.navigatorName}" ${app.url}`, (err => {
      if(err){
        res.status(400).json({ error: "Erro ao abrir aplicativo selecionado." })
        return;
      }

      res.json({
        app: app.name,
        oppenningOption: openningOptionSelected.navigatorName,
        url: app.url,
        success: true,
      })
    }));
  }
  
  if(openningOptionSelected.typeOpenning === ITypeOpenningOption.App){
    exec(`open -a ${app.name.replace(/\s+/g, "\\ ")}`, (err => {
      if(err) {
        res.status(500).json({ error: "Erro ao abrir aplicativo selecionado." })
        return;
      }

      res.json({
        app: app.name,
        oppenningOption: ITypeOpenningOption.App,
        success: true,
      })
    }));
  }
}