import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'pf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pathfinding Angular';
  constructor() {
    Swal.fire('Drag Start or End node to set their positions.\n Select or drag on empty cells to create walls.');
  }
}
