import {DealsModel} from "./deals-model";

export interface StageModel {
  id: string;
  name: string;
  deals: DealsModel[];
}

export const EMPTY_STAGE: StageModel = {
  id: '-1',
  name: '',
  deals: []
}
