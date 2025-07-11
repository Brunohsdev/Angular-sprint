import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VeiculosAPI } from '../models/veiculo.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'http://localhost:3001'
  // ;
  constructor(private Http: HttpClient) { }
  getVehicles(): Observable<VeiculosAPI>{
    return this.Http.get<VeiculosAPI>(`${this.baseUrl}/vehicles`);
  }
}
