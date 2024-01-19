import { IOpenningOptions, ITypeOpenningOption, IVerifyOpenningOption } from "../../@types";

export const verifyOpenningOption = (openningOptions: IOpenningOptions): IVerifyOpenningOption => {
    const navigatorSelected = openningOptions?.web?.find(navigator => navigator.selected === true)
    const appSelected = openningOptions?.app?.selected

    if(navigatorSelected) {
        return {
            typeOpenning: ITypeOpenningOption.Web,
            navigatorName: navigatorSelected.name,
            error: false
        }
    }

    if(appSelected) {
        return {
            typeOpenning: ITypeOpenningOption.App,
            error: false
        }
    }

    throw new Error("Nenhuma forma de abertura do aplicativo foi selecionada.")
}