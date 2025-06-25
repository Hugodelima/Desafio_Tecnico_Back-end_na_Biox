import { Module } from '@nestjs/common';
import { RecipesController } from './presentation/controllers/recipes.controller';
import { FakeRecipeRepository } from './infrastructure/repositories/fake-recipe.repository';
import { RecipeRepository } from './core/repositories/recipe.repository';
import { CreateRecipeUseCase } from './core/use-cases/create-recipe.use-case';
import { ListAllRecipesUseCase } from './core/use-cases/list-all-recipes.use-case';
import { GetRecipeByIdUseCase } from './core/use-cases/get-recipe-by-id.use-case';

@Module({
  controllers: [RecipesController],
  providers: [
    {
      provide: RecipeRepository,
      useClass: FakeRecipeRepository,
    },
    CreateRecipeUseCase,
    ListAllRecipesUseCase,
    GetRecipeByIdUseCase,
  ],
})
export class AppModule {}