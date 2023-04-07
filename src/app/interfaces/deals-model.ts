export interface DealsModel {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  status: string;
  date: string;
  probability_status: string;
  state: string;
}

export const EMPTY_DEAL: DealsModel = {
  id: -1,
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  company: '',
  status: '',
  date: '',
  probability_status: '',
  state: ''
}
