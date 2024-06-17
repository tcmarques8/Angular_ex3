import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

interface TransactionDetail {
  id: number;
  date: string;
  amount: number;
  type: string;
  description: string;
}

@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css'],
  imports: [HeaderComponent, CommonModule]
})
export class TransactionDetailComponent implements OnInit {
  transaction: TransactionDetail | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.http.get<TransactionDetail>(`assets/${id}.json`).subscribe(data => {
      this.transaction = data;
    });
  }
}
