export interface IDates {
  start: string;
  end: string;
}

export interface IResume {
  name: string;
  description?: string;
  place: string;
  url: string;
  dates: IDates;
}

export interface IDownloadButton {
  customClassname?: string;
}

export interface IContainer {
  children: React.ReactNode;
  customClassname?: string;
}
