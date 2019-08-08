import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { tap, map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor( private router:Router, private route:ActivatedRoute, private http:HttpClient) { }
id:number;
updatedata:object={};
data=[];
dataupdate:object = {}
update(item){
  console.log(this.id)
  console.log(item)
this.dataupdate = {
  'name':item.name,
  "email":item.email,
  "phone":item.phone 
}
const url = `${"http://localhost:3000/data"}/${this.id}`;
this.http.put(url,this.dataupdate)
.subscribe((success)=>{
  console.log('success',success)
  this.router.navigate( ['/']);
},(fail)=>{console.log('fail',fail)})

  

}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    this.http.get('http://localhost:3000/data')
      .subscribe((success: any) => {
        this.data = success;
        console.log('json data', this.data);
        for(var i=0; i< this.data.length;i++){
          if(parseInt(this.data[i].id)===this.id){
            this.updatedata = this.data[i];
            break;
             
          }
        }
      },
        (fail) => {
          console.log('json data fail');
        }
      )
  }

}
