import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AttractionsService {

  constructor(private httpClient:HttpClient) { }

  getAttractions(){
    return this.httpClient.get('/api/attractions');
  }

  getAttractionByID(id){
    return this.httpClient.get(`/api/attractions/${id}`);
  }

  updateAttraction(body){
    return this.httpClient.put('/api/attractions', body);
  }
}
