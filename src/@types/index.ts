export type IApp = {
    id: string;
    name: string;
    selected: boolean;
    logo: string;
    appOpenningOptions: IOpenningOptions;
};

export type IAppOpenned = {
  id: string;
  name: string; 
  url?: string;
  appOpenningOptions: IOpenningOptions;
}

export type IAppUnblockPC = {
  password: string
}
  
export type IOpenningOptions = {
    web: IOpenningOption[];
    app?: IOpenningOption;
  };
  
export type IOpenningOption = {
    id: string;
    name: string;
    selected: boolean;
    logo: string;
  };

export type IGetAppIcon = {
    name: string;
    image: string;
}

export enum ITypeOpenningOption {
  App = "app",
  Web = "web"
}

export type IVerifyOpenningOption = {
  typeOpenning: ITypeOpenningOption;
  navigatorName?: string;
  error: boolean
}

