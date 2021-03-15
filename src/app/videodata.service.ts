import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideodataService {

 

  

  constructor(private http:HttpClient) { }
  fetchProductListFromRemote():Observable<any>{
    return this.http.get<any>("http://localhost:8092/getvideolist");
  }
  addVideoToRemote(Video:any):Observable<any>{
  
    return this.http.post<any>("http://localhost:8092/addvideo",Video);
  }
  getVideoById(id:any):Observable<any>{
   
    return this.http.get("http://localhost:8092/getvideobyid"+id);
 }
 deleteVideoById(id:number):Observable<any>{
   
  return this.http.delete("http://localhost:8092/deletevideobyid"+id);
}

}
