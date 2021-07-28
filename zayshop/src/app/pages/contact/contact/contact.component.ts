import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',

})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
   this.initForm();
  }
  private initForm(): void {
    const fullName = '';
    const subject = '';
    const email = '';
    const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const message="";

    this.contactForm = this.formbuilder.group({
      fullName: [fullName, [Validators.required]],
      subject: [subject, [Validators.required]],
      email: [email, [Validators.required, Validators.pattern(emailPattern)]],
      message:[message]
    });
  }
  submit() {
  }
  onSubmit(f: any) {

  }

}
