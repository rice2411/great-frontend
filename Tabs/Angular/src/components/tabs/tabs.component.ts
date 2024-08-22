import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {
  @Input()
  items!: any[];

  @Input()
  defaultValue!: string;

  value = '';

  ngOnInit(): void {
    this.value = this.defaultValue ?? this.items[0].value;
  }

  setValue(newValue: string): void {
    this.value = newValue;
  }
}
