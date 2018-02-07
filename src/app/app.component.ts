import { Component } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rows;
  columns;

  constructor(private afs: AngularFirestore) {
    this.getData();
  }

  getData() {
    this.afs.collection('students').valueChanges().subscribe((students) => {
      this.rows = students;
    })
  }
}
