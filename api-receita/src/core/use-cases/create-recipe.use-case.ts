import { Injectable } from '@nestjs/common';
import { RecipeRepository } from '../repositories/recipe.repository';
import { Recipe } from '../entities/recipe.entity';

@Injectable()
export class CreateRecipeUseCase {
  constructor(private readonly repository: RecipeRepository) {}

  async execute(recipeData: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>) {
    return this.repository.create(recipeData);
  }
}