import express from "express";
import os from "os"
import { getAppsListMacOS } from "../../operationalSystem/mac/actions/getAppsList";

const router = express.Router()

router.get("/list-apps",async (_, res) => {
  const platform = os.platform()
  
  switch (platform) {
    case "darwin":
      getAppsListMacOS(res)
      break;  
      default: 
        res.status(400).json({ error: "Erro, o sistema operacional utilizado no computador não é suportado! Utilize, Windows, MacOS ou linux." })
  }
});
    
export default router