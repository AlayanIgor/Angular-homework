import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
    `
      .filters {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 15px;
        margin-bottom: 25px;
        border-bottom: 1px solid rgb(202, 202, 202);
      }

      .filters button {
        height: 40px;
        margin-right: 24px;
        padding: 12px 8px;
        color: white;
        background-color: rgb(14, 113, 194);
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .filters button:hover {
        background-color: rgb(33, 136, 221);
      }

      .filters p {
        margin-right: 24px;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        color: #1e293b;
      }
    `,
  ],
})
export class FiltersComponent {
  @Output() filterTeenagers = new EventEmitter();
  @Output() filterAdult = new EventEmitter();
  @Output() noFilter = new EventEmitter();

  showTeenagers() {
    this.filterTeenagers.emit();
  }

  showAdult() {
    this.filterAdult.emit();
  }
  showAll() {
    this.noFilter.emit();
  }
}
