import {Injectable} from '@angular/core';
import {DealsModel, EMPTY_DEAL} from "../../interfaces/deals-model";
import {HttpClient} from "@angular/common/http";
import {StageModel} from "../../interfaces/stage-model";
import {map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  private stages: StageModel[] = [
    {
      id: '1',
      name: 'Potential Value',
      dealsCounter: 29,
      potential: 2.36,
      notifications: 2,
      deals: []
    },
    {
      id: '2',
      name: 'Focus',
      dealsCounter: 4,
      potential: 30,
      notifications: 6,
      deals: []
    },
    {
      id: '3',
      name: 'Contact Made',
      dealsCounter: 6,
      potential: 425,
      notifications: 2,
      deals: []
    },
    {
      id: '4',
      name: 'Offer Sent',
      dealsCounter: 3,
      potential: 57.65,
      notifications: 0,
      deals: []
    },
    {
      id: '5',
      name: 'Getting Ready',
      dealsCounter: 13,
      potential: 17.4,
      notifications: 2,
      deals: []
    }
  ]

  constructor(private http: HttpClient) {
  }


  getDeals(): Observable<StageModel[]> {
    return this.http.get<{ deals: DealsModel[] }>('https://my-json-server.typicode.com/mabukoush1/contacts/db').pipe(
      map((response: { deals: DealsModel[] }): StageModel[] => {
          this.stages.forEach((stage: StageModel) => stage.deals = response.deals.filter((deal: DealsModel) => deal.status === stage.name));
          return this.stages;
        }
      ))
  }


  searchDeal(search: string): Observable<StageModel[]> {
    const filteredStages: StageModel[] = JSON.parse(JSON.stringify(this.stages));
    filteredStages.forEach((stage: StageModel) => {
      stage.deals = stage.deals.filter((deal: DealsModel) => {
        return deal.first_name.toLowerCase().includes(search.toLowerCase())
          || deal.last_name.toLowerCase().includes(search.toLowerCase())
          || deal.email.toLowerCase().includes(search.toLowerCase())
      });
    });
    return of(filteredStages);
  }

  updateStatus(dealId: number, newStatus: string, oldStatus: string): Observable<DealsModel> {
    const stage = this.stages.find((stage: StageModel) => stage.id === newStatus);
    if (stage) {
      const deal = stage.deals.find((deal: DealsModel) => deal.id === dealId);
      if (deal) {
        deal.status = stage.name;
        console.log(deal);
        return this.http.put<DealsModel>(`https://my-json-server.typicode.com/mabukoush1/contacts/deals/${dealId}`, deal);
      }
    }
    return of(EMPTY_DEAL);
  }
}
