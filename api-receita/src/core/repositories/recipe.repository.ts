import { Recipe } from '../entities/recipe.entity';

export abstract class RecipeRepository {
  abstract create(recipe: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>): Promise<Recipe>;
  abstract findAll(): Promise<Recipe[]>;
  abstract findById(id: string): Promise<Recipe | null>;
}