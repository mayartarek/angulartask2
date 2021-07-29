import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class HelpersService {
  constructor() {}

  setItemToLocalStorage(name: string, value: any): void {
    localStorage.setItem(name, JSON.stringify(value));
  }
  getItemFromLocalStorage(name: string): any {
    return JSON.parse(localStorage.getItem(name));
  }

  removeItemFromLocalStorage(name: string): any {
    localStorage.removeItem(name);
  }

  checkItemFromLocalStorage(name: string): boolean {
    return !!localStorage.getItem(name);
  }

  fillField(form: FormGroup, field: string, value: any): void {
    form.controls[field].patchValue(value);
  }

  trackBy(item: any): string {
    return item.id;
  }

  getDate(date: NgbDateStruct | null): Date {
    return new Date(date.year + '/' + date.month + '/' + date.day + 'GMT');
  }

  convertToFieldFormat(date: Date): NgbDateStruct {
    const fieldFormat: NgbDateStruct = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };
    return fieldFormat;
  }
}
