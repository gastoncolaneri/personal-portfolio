export interface IItemData {
  name: string;
  image: any[];
  tools: string[];
  web: string;
  isApp: boolean;
  github: string;
  cols: number;
  rows: number;
}
export interface IImageItem {
  item: IItemData;
  index: number;
}
