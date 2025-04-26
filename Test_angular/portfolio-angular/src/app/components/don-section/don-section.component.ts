import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-don-section',
  templateUrl: './don-section.component.html',
  styleUrls: ['./don-section.component.scss'] // <-- Correction ici
})
export class DonSectionComponent {
  @Input() title!: string;
  @Input() content!: { title: string, description: string }[];
}
