import { ShoppingListService } from './../shopping-list.service';
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

  ingredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredients() {
    if (!this.nameInput.nativeElement.value ||  !this.amountInput.nativeElement.value) {
      console.log("Please fill the amount and the name of the ingrdient");
      return;
    }
    this.ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
    this.shoppingListService.addIngredient(this.ingredient);
  }

}
