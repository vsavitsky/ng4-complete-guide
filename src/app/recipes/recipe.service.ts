import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 
        'This is a first test recipe description',
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
        [
            new Ingredient('First ingredient', 1),
            new Ingredient('Second ingredient', 5)
        ]),
        new Recipe('A second test recipe', 'This is a second test recipe description',
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
        [
            new Ingredient('First ingredient', 1),
            new Ingredient('Second ingredient', 5)
        ]),
        new Recipe('A third test recipe', 'This is a third test recipe description',
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
        [
            new Ingredient('First ingredient', 1),
            new Ingredient('Second ingredient', 5)
        ])
      ];

    constructor(private shoppingListService: ShoppingListService) {}
      
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService;
    }
}