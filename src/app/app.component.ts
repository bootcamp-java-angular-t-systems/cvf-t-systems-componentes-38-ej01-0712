import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { Client } from './interfaces/Client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'UD38-EJ01';
  variableComponente = "app.component";
  
  clientsApp: Client[] = [];

  handleClientRegistered(client: Client) {
    this.clientsApp.push(client);
  }
}
