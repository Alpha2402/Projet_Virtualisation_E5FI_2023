// import { Component, OnInit } from '@angular/core';
// import { RemindersService, Reminder } from '../reminders.service';

// @Component({
//   selector: 'app-reminders',
//   templateUrl: './reminders.component.html',
//   styleUrls: ['./reminders.component.css']
// })
// export class RemindersComponent implements OnInit {
//   reminders: Reminder[] = [];
//   newReminder: Reminder = { title: '', date: new Date() };

//   constructor(private remindersService: RemindersService) { }

//   ngOnInit(): void {
//     this.reminders = this.remindersService.getReminders();
//   }

//   onAddReminder(): void {
//     if (!this.newReminder.title || !this.newReminder.date) return;
  
//     // Générer un nouvel ID unique pour le rappel ajouté
//     const maxId = this.reminders.reduce((max, reminder) => Math.max(max, reminder.id), 0);
//     this.newReminder.id = maxId + 1;
  
//     // Ajouter le rappel à la liste
//     this.remindersService.addReminder(this.newReminder);
//     this.reminders.push(this.newReminder);
  
//     // Réinitialiser l'objet newReminder
//     this.newReminder = { id: 0, title: '', date: null, description: '' };
//   }
  

//     onDeleteReminder(id?: number): void {
//       if (!id) return;
//       this.remindersService.deleteReminder(id);
//       this.reminders = this.reminders.filter((reminder) => reminder.id !== id);
//     }
      
// }

import { Component, OnInit } from '@angular/core';
import { RemindersService, Reminder } from '../reminders.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {
  reminders: Reminder[] = [];
  newReminder: Reminder = { title: '', date: new Date() };

  constructor(private remindersService: RemindersService) { }

  ngOnInit(): void {
    this.remindersService.getReminders().subscribe(reminders => {
      this.reminders = reminders;
    });
  }

  onAddReminder(): void {
    if (!this.newReminder.title || !this.newReminder.date) return;

    // Générer un nouvel ID unique pour le rappel ajouté
    const maxId = this.reminders.reduce((max, reminder) => Math.max(max, reminder.id), 0);
    this.newReminder.id = maxId + 1;

    // Ajouter le rappel à la liste
    this.remindersService.addReminder(this.newReminder).subscribe(reminder => {
      this.reminders.push(reminder);
    });

    // Réinitialiser l'objet newReminder
    this.newReminder = { id: 0, title: '', date: null, description: '' };
  }

  onDeleteReminder(id?: number): void {
    if (!id) return;
    this.remindersService.deleteReminder(id).subscribe(() => {
      this.reminders = this.reminders.filter((reminder) => reminder.id !== id);
    });
  }
}
