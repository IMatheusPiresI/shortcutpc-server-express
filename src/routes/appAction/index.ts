import express from "express";
import { IAppOpenned, IAppUnblockPC } from "../../@types";
import { verifyOpenningOption } from "../../resources/helpers/verifyOpenningOption";
import robot from "robotjs"
import os from "os"
import { openApplicationMacOS } from "../../OperationalSystem/mac/actions/openApplication";

const router = express.Router()

router.post('/open-app-selected', (req, res) => {
    const app: IAppOpenned = req.body
    const platform = os.platform()
    const openningOptionSelected = verifyOpenningOption(app.appOpenningOptions)

    switch(platform) {
        case "darwin":
            openApplicationMacOS(openningOptionSelected, app, res)
            break;
        default :
            res.status(400).json({ error: "Erro, o sistema operacional utilizado no computador não é suportado! Utilize, Windows, MacOS ou linux." })
    }
});

router.post("/unblock", (req, res) => {
    const {password} = req.body as IAppUnblockPC

    if (!password) {
        res.status(400).json({error: "Erro, senha não enviada"})
    }

    robot.mouseClick()
    setTimeout(() => {
        robot.typeString(password)
        robot.keyTap("enter")
    }, 1000);
    res.json({active: true})
});

export default router