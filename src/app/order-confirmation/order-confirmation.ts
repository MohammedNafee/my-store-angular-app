import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="confirmation">
      <h1>Thank You!</h1>
      <p>Your order has been placed successfully.</p>
      <p>We'll send you a confirmation email soon.</p>

      <button routerLink="/" class="btn-back">Back to Home</button>
    </section>
  `,
  styles: [`
    .confirmation {
      text-align: center;
      margin-top: 60px;
    }
    h1 {
      color: #28a745;
      font-size: 2rem;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.2rem;
      color: #444;
    }
    .btn-back {
      margin-top: 25px;
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    .btn-back:hover {
      background-color: #0056b3;
    }
  `]
})
export class OrderConfirmationComponent {}
