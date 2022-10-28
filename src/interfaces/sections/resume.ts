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
export interface ICardList {
  title: string;
  data: IResume[];
}

export interface ICardItem {
  data: IResume[];
}

export interface IItemSkill {
  name: string;
  number: number;
}

export interface ISkillsList {
  data: IItemSkill[];
}
