import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatServiceService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userForm: FormGroup = new FormGroup({});
  apiErrorMessages: string[] = [];
  submitted = false;
  openChat =false;
  constructor(private formBuilder: FormBuilder, private _chatService: ChatServiceService) { }
  ngOnInit(): void {
    this.initialzForm();
  }
  initialzForm() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    })
  }
  submitForm() {
    this.submitted = true;
    this.apiErrorMessages = [];
    if (this.userForm.valid) {
      this._chatService.registerUser(this.userForm.value).subscribe({
        next: () => {
          this._chatService.myName=this.userForm.get('name')?.value;
          this.openChat = true;
          this.userForm.reset();
          this.submitted=false;
        },
        error: error => {
          if (typeof (error.error) !== 'object') {
            this.apiErrorMessages.push(error.error);
          }
        }
      })
    }
  }

  closeChat() {
    this.openChat = false;
  }

}