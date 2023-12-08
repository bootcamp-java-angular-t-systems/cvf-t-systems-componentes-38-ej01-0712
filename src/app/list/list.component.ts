import { Component, Input } from '@angular/core';
import { Client } from '../interfaces/Client';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

 @Input() clients: Client[] = [];
}
