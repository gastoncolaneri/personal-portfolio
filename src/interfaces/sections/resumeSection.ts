import { IResume } from "../index";

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
