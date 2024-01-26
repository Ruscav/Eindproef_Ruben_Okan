// Importing required modules and decorators
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
// Decorator to mark the class as injectable and define its scope
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  // API endpoints for user-related operations
  private apiUrl = 'http://127.0.0.1:8000/api/favorites';
   // BehaviorSubject to emit changes in the localStorage
  private favoriteSubject = new BehaviorSubject<string | null>(null);
   // Observable to subscribe to changes in the localStorage
   favorite$ = this.favoriteSubject.asObservable();

  // Constructor for the service
  constructor() {}

  // Method to create a new user
  async create(list: any) {
    this.favoriteSubject.next("Created"); 
    return await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(list) 
    });
  }

  async delete(id: any) {
    this.favoriteSubject.next("Deleted"); 
    return await fetch(this.apiUrl+"/"+id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Method to handle user login
  async getFavoritesByUserId(userId: any) {
    // Sending a POST request to the login endpoint with user credentials
    let response = await fetch(this.apiUrl +"/"+ userId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let result = await response.json();
    // Returning the response object for further processing
    return result; 
  }
}







