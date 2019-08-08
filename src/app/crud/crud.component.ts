import { Component, OnInit,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare function openNav():any;
declare function closeNav():any;
declare function abc():any;
  

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private http: HttpClient) { }
  @Input() collectionSize;
  options=[
    {name:'OptionA',value:'glacomia',checked:false},
    {name:'OptionB',value:'2vision',checked:false},
    {name:'OptionC',value:'3',checked:false},
  ]
  page = 1;
  get selectedOptions(){
    return this.options
               .filter(opt => opt.checked)
               .map(opt=>opt.value)
  }
  dataPass(){
    var myObj={
      data:this.selectedOptions
    }
    console.log(myObj)

  }
array=[];
  public inputdata = {
    name: '',
    email: '',
    phone: '',
    gender:'',
    minor:'',
    minorfirstname:'',
    bloodgroup:'',
    glaucoma:null
  };
  PartyRoles = [
    {
     Id: 1,
     Name: 'Vendor',
     Checked: true
    },
    {
      Id: 2,
      Name: 'Client',
      Checked: true
    },
    {
      Id: 3,
      Name: 'Consigner',
      Checked: false
    }       
  ]
  editPartyRolesSubmit() {
    console.log(this.PartyRoles);
  }

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  public displayNav: boolean = false;
  onchecked(event, value){
  if(event.checked) {
    // this.inputdata.glaucoma=value;
    console.log('value', value);
    console.log('glaucoma', this.inputdata.glaucoma)
  }

}
  genderfun(){
    console.log('gender',this.inputdata)
  }
  showCheckboxes(){
    
  }

  //  sravs=
  //     [
  //       {name: 'sravanthi', email:'sravs@gmail.com', phone:123445},
  //       {name: 'renuka', email:'renu@gmail.com', phone:354354},
  //       {name: 'ravi', email:'ravi@gmail.com', phone:54656657},
  //       {name: 'balaji', email:'balaji@gmail.com', phone:788778},
  //       {name: 'vijetha', email:'vijetha@gmail.com', phone:123445},
  //       {name: 'vignatha', email:'vignatha@gmail.com', phone:34546546},
  //       {name: 'soujanya', email:'soujanaya@gmail.com', phone:8989767},
  //       {name: 'sravanthi', email:'sravs@gmail.com', phone:123445}
  //     ];
  public data = [];
  id:number;
  // openNav(){
  //   this.displayNav = true;
  // }

  // closeNav(){
  //   this.displayNav = false;
  // }
  public show:boolean = false;
  public buttonName:any = 'Show';
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    // if(this.show)  
      // this.buttonName = "Hide";
    // else
      // this.buttonName = "Show";
  }
  getdata() {
    this.http.get('http://localhost:3000/data')
      .subscribe((success: any) => {
        this.data = success;
        console.log('json data', this.data);
      },
        (fail) => {
          console.log('json data fail');
        }
      )
  }
  delete(id) {
    console.log(id)
    if (confirm('Are you sure?')) {
      const url = `${"http://localhost:3000/data"}/${id}`;
      return this.http.delete(url, { headers: this.headers })
      .subscribe((success)=>{
        this.getdata()
        console.log('successfully deleted',success);
      },(fail)=>{
        console.log('fail',fail);
      })
         
          
      
    }
  }
  submit() {
    this.http.post('http://localhost:3000/data/', this.inputdata)
      .subscribe((success) => {
        console.log('data added', success);
      }, () => { })
    console.log('login success', this.inputdata);

  }

  ngOnInit() {
    this.getdata();
    // openNav();
    // closeNav();
    // abc();

  }

  
}
