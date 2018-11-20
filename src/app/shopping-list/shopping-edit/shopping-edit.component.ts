import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() addIngredientEvent = new EventEmitter<Ingredient>();
  ingredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  onAddIngredients() {
    if (!this.nameInput.nativeElement.value ||  !this.amountInput.nativeElement.value) {
      console.log("Please fill the amount and the name of the ingrdient");
      return;
    }
    this.ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.addIngredientEvent.emit(this.ingredient);
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }

}
