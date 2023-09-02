import { Component, OnInit } from '@angular/core';
import { PersonsService } from './services/persons.service';
import { Daum } from './person/person.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  personsList: Daum[] = [];

  initialList: Daum[] = [];

  constructor(private _personsService: PersonsService) {}

  ngOnInit(): void {
    this._personsService.getPersons().subscribe((resp) => {
      this.initialList = resp.data;
      this.initialList.map((person) => {
        const currentDate = new Date();
        const shortDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        );
        const birthday = new Date(person.birthday);
        const currentBirthday = new Date(
          shortDate.getFullYear(),
          birthday.getMonth(),
          birthday.getDate()
        );
        let age = shortDate.getFullYear() - birthday.getFullYear();
        if (shortDate < currentBirthday) {
          age = age - 1;
        }

        person.age = age;

        this.personsList = this.initialList;
      });
    });
  }

  filterTeenagers() {
    this.personsList = this.initialList;
    this.personsList = this.initialList.filter((person) => person.age < 18);
  }

  filterAdult() {
    this.personsList = this.initialList;
    this.personsList = this.initialList.filter((person) => person.age >= 18);
  }

  noFilter() {
    this.personsList = this.initialList;
  }
}
