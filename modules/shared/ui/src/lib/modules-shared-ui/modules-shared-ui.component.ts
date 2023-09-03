import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-modules-shared-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modules-shared-ui.component.html',
  styleUrls: ['./modules-shared-ui.component.css'],
})
export class ModulesSharedUiComponent {}
