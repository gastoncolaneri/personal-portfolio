export interface ICustomClassname {
  customClassname?: string;
}

export interface IContainer {
  children: React.ReactNode;
  customClassname?: string;
}

export interface ITitleSections {
  title: string;
  fadedTitle: string;
}
