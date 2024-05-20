import { Injectable } from '@angular/core';

const TOKEN = 'ecom-token';
const USER = 'ecom-user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  public saveToken(token: string): void {
    window.localStorage.setItem(TOKEN, token);
  }

  public saveUser(user): void {
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken(): string {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(TOKEN);
    }
    return null;
  }
  

  static getUser(): any {
    return JSON.parse(window.localStorage.getItem(USER));
  }

  static getUserId(): string {
    const user = this.getUser();
    if (user == null) {
      return '';
    }
    return user.userId;
  }

  static getUserRole(): string {
    const user = this.getUser();
    if (user == null) {
      return '';
    }
    return user.role;
  }

  static isAdminLoggedIn(): boolean {
    const token = this.getToken();
    if (token == null) {
      return false;
    }
    const role: string = this.getUserRole();
    return role == 'ADMIN';
  }

  static isCustomerLoggedIn(): boolean {
    const token = this.getToken();
    if (token == null) {
      return false;
    }
    const role: string = this.getUserRole();
    return role == 'CUSTOMER';
  }

  static signOut(): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
}
