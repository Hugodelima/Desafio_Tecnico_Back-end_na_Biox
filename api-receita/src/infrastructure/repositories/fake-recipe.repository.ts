import { Injectable } from '@nestjs/common';
import { RecipeRepository } from '../../core/repositories/recipe.repository';
import { Recipe } from '../../core/entities/recipe.entity';

@Injectable()
export class FakeRecipeRepository implements RecipeRepository {
  private recipes: Recipe[] = [];

  async create(recipe: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>): Promise<Recipe> {
    const newRecipe: Recipe = {
      id: Math.random().toString(36).substring(7),
      ...recipe,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.recipes.push(newRecipe);
    return newRecipe;
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipes;
  }

  async findById(id: string): Promise<Recipe | null> {
    return this.recipes.find(recipe => recipe.id === id) || null;
  }
}