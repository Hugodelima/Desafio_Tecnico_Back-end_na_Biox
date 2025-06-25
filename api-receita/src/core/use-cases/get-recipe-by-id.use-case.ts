import { Injectable } from '@nestjs/common';
import { RecipeRepository } from '../repositories/recipe.repository';

@Injectable()
export class GetRecipeByIdUseCase {
  constructor(private readonly repository: RecipeRepository) {}

  async execute(id: string) {
    return this.repository.findById(id);
  }
}