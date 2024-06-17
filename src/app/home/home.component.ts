import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

interface Transaction {
  id: number;
  date: string;
  amount: number;
  type: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RouterModule, HeaderComponent]
})
export class HomeComponent implements OnInit {
  transactions: Transaction[] = [];
  sortKey: keyof Transaction = 'id';
  sortDirection: boolean = true; // true for ascending, false for descending

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Transaction[]>('assets/transactions.json').subscribe(data => {
      this.transactions = data;
    });
  }

  sortTransactions(key: keyof Transaction) {
    this.sortKey = key;
    this.sortDirection = !this.sortDirection;
    this.transactions.sort((a, b) => {
      let comparison = 0;
      if (a[key] > b[key]) {
        comparison = 1;
      } else if (a[key] < b[key]) {
        comparison = -1;
      }
      return this.sortDirection ? comparison : -comparison;
    });
  }

  viewDetails(id: number) {
    // Navigation handled by routerLink in template
  }
}
