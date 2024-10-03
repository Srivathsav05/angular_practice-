import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reminder } from '../reminder';
import { BackendService } from '../services/backend.service';
@Component({
  selector: 'rmd-reminder-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reminder-form.component.html',
  styleUrl: './reminder-form.component.css'
})
export class ReminderFormComponent {
  service = inject(BackendService);
  reminderText: string='';

  addReminder(event: KeyboardEvent)
  {
    if(event.key == 'Enter' && this.reminderText)
    {
      let reminder = new Reminder(0, this.reminderText,false);
      this.service.addReminder(reminder);
      this.reminderText = '';
    }
  }
  

}
