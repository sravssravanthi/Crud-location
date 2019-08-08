import { AuthserviceService } from './../../authservice.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectdata',
  templateUrl: './selectdata.component.html',
  styleUrls: ['./selectdata.component.css']
})
export class SelectdataComponent implements OnInit {

  constructor(private http: HttpClient,private auth:AuthserviceService) { }
  formdata = {
    country: null,
    state: null,
    city: null
  }
  public data;
  public data1=[];
  public data2 = [];
  public doctordata = {
    profession: null,
    speciality: null
  };
  public professiondata = [];
  public specialitydata = [];
  getproffession() {
this.auth.doctorprofessiondata()
.subscribe((success:any)=>{
  console.log('profession data', success);
  this.professiondata=success;
});
  }
  getspeciality(id){
    // this.specialitydata=[];
    this.auth.doctorspecialitydata()
    .subscribe(
      (success: any) => {
       
        success.forEach(speciality => {
          console.log(speciality);
          console.log('specialitydata',success)

          // tslint:disable-next-line: triple-equals
          if (speciality.profession == id) {
            this.specialitydata.push(speciality);
          }
        });
      },
      (error) => {

      }
    );
  }
  getProfessionSpeciality(){
    this.getspeciality(this.doctordata.profession)
  }
  finishFunction() {}
  
    
  
  getcountry(){
    this.http.get('/assets/country.json')
    .subscribe((success)=>{
    this.data=success;
    },(fail)=>{console.log('error')})
  }
  getstate(id) {
    this.http.get('/assets/state.json')
      .subscribe(
        (success: any) => {
          // console.log(success)
          // this.datas1 = success;
          success.forEach(state => {
            // console.log(city);

            // tslint:disable-next-line: triple-equals
            if (state.countryId == id) {
              this.data1.push(state);
            }
          });
        },
        (error) => {

        }
      );
  }
  //end
  // city start
  getcity(id) {
    this.data2 = [];
    this.http.get('/assets/city.json')
      .subscribe(
        (success: any) => {
          // console.log(success)
          // this.datas1 = success;
          success.forEach(city => {
            // console.log(city);

            // tslint:disable-next-line: triple-equals
            if (city.stateId == id) {
              this.data2.push(city);
            }
          });
        },
        (error) => {

        }
      );
  }
  getCountryStates(){
    this.getstate(this.formdata.country);
  }
  getStateCities() {

    this.getcity(this.formdata.state);
  }
  ngOnInit() {
    this.getcountry();
    this.getproffession();
  }

}
