import { HttpClient,HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {

  constructor(private http: HttpClient) { }
  percentDone: number;
  uploadSuccess: boolean;
  public img:any;
  // selectedFile: File;

  // onFileChanged(event) {
  //   this.selectedFile = event.target.files[0];
  // }

  // onUpload() {
  //   // upload code goes here
  //   const uploadData = new FormData();
  //   uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  //   this.http.post('my-backend.com/file-upload', uploadData, {
  //     reportProgress: true,
  //     observe: 'events'
  //   })
  //   .subscribe(event => {
  //     console.log(event); // handle event here
  //   });
  // }
  // selectedFile=null;
  // onselectedimage(event){
  //   // console.log(event);
  //   this.selectedFile=event.target.files[0];
  // }
  // onupload(){
  //   const formData = new FormData();
  //   formData.append('image', image);
  //   this.http.post('/api/v1/image-upload', formData)
  // }
  upload(files: File[]){
    //pick from one of the 4 styles of file uploads below
    this.uploadAndProgress(files);
    console.log('upload success',files);
  }
  uploadAndProgress(files: File[]){
    console.log(files)
    // tslint:disable-next-line: prefer-const
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f))
    
    this.http.post('https://file.io', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
          console.log('event success',event)
          this.img=event;
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
    });
  }
  ngOnInit() {

  };


}
