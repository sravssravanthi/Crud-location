import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }
  doctorprofessiondata(){
    let profession = this.http.get('/assets/doctorprofession.json')
    return profession;
  }
  doctorspecialitydata(){
    let speciality = this.http.get('/assets/doctorspeciality.json')
    return speciality;
  }
}
