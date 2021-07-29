import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { contactApi } from 'src/app/shared/constants/api.constants';
import { ADDED_SUCCESSFULLY } from 'src/app/shared/constants/general.constants';
import { DataService } from 'src/app/shared/services/data.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ToastService } from 'src/app/shared/services/toast-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private dataService: DataService,
    public loadingService: LoadingService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(): void {
    const name = '';
    const address = '';
    const email = '';
    const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const website = '';

    this.contactForm = this.formbuilder.group({
      name: [name, [Validators.required]],
      address: [address, [Validators.required]],
      email: [email, [Validators.required, Validators.pattern(emailPattern)]],
      website: [website, [Validators.required]],
    });
  }
  submit() {
    this.loadingService.start();
    this.dataService
      .post(contactApi, this.contactForm.value)
      .pipe(
        tap(() => {
          this.loadingService.stop();
          this.toast.show(ADDED_SUCCESSFULLY, {
            classname: 'bg-success text-light',
          });
        })
      )
      .toPromise();
  }
}
