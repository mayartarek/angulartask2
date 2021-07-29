import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from '../../services/toast-service';

@Component({
  selector: 'app-toasts-container',
  templateUrl: './toasts-container.component.html',
})
export class ToastsContainerComponent implements OnInit {
  constructor(public toast: ToastService) {}

  ngOnInit(): void {}

  isTemplate(toast: any): any {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
