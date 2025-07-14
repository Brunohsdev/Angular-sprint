import { Component, OnInit } from '@angular/core';
import { Header } from "../header/header";
import { MatGridListModule } from '@angular/material/grid-list';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { Veiculo } from '../../models/veiculo.model';
import { VehicleData } from '../../models/vehicleData.model';
import { DashboardService } from '../../services/dashboard';
import { VinDashboard } from '../../services/vin-dashboard';

@Component({
  selector: 'app-dashboard',
  imports: [
    Header,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class Dashboard implements OnInit {
  vehicles: Veiculo[] = [];
  selectVehicle!: Veiculo;
  vehicleData!: VehicleData;

  selectCarForms = new FormGroup({
    carId: new FormControl(''),
    vin: new FormControl('')
  })

  constructor(
    private dashboardservice:DashboardService,
    private vindashboard:VinDashboard
  ){}

  ngOnInit(): void {
    //o select do carro por nome
    this.dashboardservice.getVehicles().subscribe((res)=>{
      console.log(res.vehicles);
      this.vehicles = res.vehicles;
    });
    this.selectCarForms.controls.carId.valueChanges.subscribe((id) => {
      this.selectVehicle = this.vehicles[Number(id) -1]
      console.log(this.selectVehicle);
  })



  //o select do carro por vin
  this.selectCarForms.controls.vin.valueChanges.subscribe((vin) => {
    if(vin) {
      this.vindashboard.getVehiclesbyDataVin(vin).subscribe({
        next: (data)=>{
          this.vehicleData = data;
          console.log("dados vin", data)
        },
        error: (err)=>{
          console.log('Erro ao buscar Vin:', err.message);
        }
      })
    };
    throw new Error('Method not implemented.');
  })

}
buscarVin(): void {
  const vin = this.selectCarForms.controls.vin.value;

  if (vin) {
    this.vindashboard.getVehiclesbyDataVin(vin).subscribe({
      next: (data) => {
        this.vehicleData = data;
        console.log("Dados VIN recebidos:", data);
      },
      error: (err) => {
        console.error("Erro ao buscar VIN:", err);
        this.vehicleData = undefined!;
      }
    });
  }
}

}
