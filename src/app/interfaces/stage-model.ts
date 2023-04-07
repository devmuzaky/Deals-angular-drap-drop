import {DealsModel} from "./deals-model";

export interface StageModel {
  id: string;
  name: string;
  dealsCounter: number;
  potential: number;
  notifications: number;
  deals: DealsModel[];
}

export const EMPTY_STAGE: StageModel = {
  id: '-1',
  name: '',
  dealsCounter: 0,
  potential: 0,
  notifications: 0,
  deals: []
}
