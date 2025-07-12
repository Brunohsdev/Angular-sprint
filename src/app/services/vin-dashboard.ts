import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VehicleData } from '../models/vehicleData.model';


@Injectable({
  providedIn: 'root'
})

export class VinDashboard {
  private baseUrl = 'http://localhost:3001';

  constructor(private Http:HttpClient) { }

  getVehiclesbyDataVin(vin:string): Observable<VehicleData> {
    return this.Http.post<VehicleData>(`${this.baseUrl}/vehicleData`, {vin});
  }
}
