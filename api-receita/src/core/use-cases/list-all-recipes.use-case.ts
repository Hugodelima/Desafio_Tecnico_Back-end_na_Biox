import { Injectable } from '@nestjs/common';
import { RecipeRepository } from '../repositories/recipe.repository';

@Injectable()
export class ListAllRecipesUseCase {
  constructor(private repository: RecipeRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}