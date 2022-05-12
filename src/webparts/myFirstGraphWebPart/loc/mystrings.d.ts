declare interface IMyFirstGraphWebPartWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'MyFirstGraphWebPartWebPartStrings' {
  const strings: IMyFirstGraphWebPartWebPartStrings;
  export = strings;
}
