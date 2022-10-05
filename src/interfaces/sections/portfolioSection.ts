export interface IItemData {
  name: string;
  image: any[];
  tools: string[];
  web: string;
  isApp: boolean;
  github: string;
  cols: number;
  rows: number;
  spanishDescription: string;
  englishDescription: string;
}
export interface IImageItem {
  item: IItemData;
  index: number;
}
