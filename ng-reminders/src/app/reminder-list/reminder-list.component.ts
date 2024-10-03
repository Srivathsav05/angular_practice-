import { Component, inject } from '@angular/core';
import { ReminderComponent } from '../reminder/reminder.component';
import { NgFor } from '@angular/common';
import { Reminder } from '../reminder';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'rmd-reminder-list',
  standalone: true,
  imports: [ReminderComponent, NgFor],
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.css'
})
export class ReminderListComponent {
  service = inject(BackendService);

  reminders:Reminder[] = this.service.getRemindersArr();
}