import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

 
  constructor(private http: HttpClient) { }
  public inputdata = {
    allergies: '',
    reaction: '',
    
  };
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public allergydata;
  
  getallergydata() {
    this.http.get('http://localhost:3000/allergies')
      .subscribe((success: any) => {
        this.allergydata = success;
        console.log('json data', this.allergydata);
      },
        (fail) => {
          console.log('json data fail');
        }
      )
  }
  add() {
    this.http.post('http://localhost:3000/allergies/', this.inputdata)
      .subscribe((success) => {
        console.log('data added', success);
      }, () => { })
    console.log('login success', this.inputdata);

  }
  delete(id) {
    console.log(id)
    if (confirm('Are you sure?')) {
      const url = `${"http://localhost:3000/allergies"}/${id}`;
      return this.http.delete(url, { headers: this.headers })
      .subscribe((success)=>{
        this.getallergydata()
        console.log('successfully deleted',success);
      },(fail)=>{
        console.log('fail',fail);
      })
         
          
      
    }
  }
  ngOnInit() {
    this.getallergydata()
  }
}
