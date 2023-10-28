import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from '../user/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  creationForm = this.fb.group({
    name: ['', Validators.minLength(3)],
    email: ['', Validators.email],
    birthdate: [new Date()],
    isAdmin: [false]
  });

  @Output() 
  createEvent = new EventEmitter<IUser>();
  
  constructor(private fb: FormBuilder) {
    
  }

  onSubmit(): void {
    
    if (!this.creationForm.valid) {
      alert("Invaid data!");
      return;
    }

    const user = this.creationForm.value as IUser;
    console.log(user);

    this.createEvent.emit(user);
  }
}
