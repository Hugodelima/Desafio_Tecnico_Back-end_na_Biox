import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateRecipeUseCase } from '../../core/use-cases/create-recipe.use-case';
import { ListAllRecipesUseCase } from '../../core/use-cases/list-all-recipes.use-case';
import { GetRecipeByIdUseCase } from '../../core/use-cases/get-recipe-by-id.use-case';
import { RecipePresenter } from '../../infrastructure/presenters/recipe.presenter';
import { CreateRecipeDto } from '../../core/dto/create-recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(
    private readonly createRecipe: CreateRecipeUseCase,
    private readonly listAllRecipes: ListAllRecipesUseCase,
    private readonly getRecipeById: GetRecipeByIdUseCase,
  ) {}

  @Post()
  async create(@Body() data: CreateRecipeDto) {
    const recipe = await this.createRecipe.execute(data);
    return RecipePresenter.toHTTP(recipe);
  }

  @Get()
  async list() {
    const recipes = await this.listAllRecipes.execute();
    return recipes.map(RecipePresenter.toHTTP);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    const recipe = await this.getRecipeById.execute(id);
    if (!recipe) {
      throw new NotFoundException('Recipe not found');
    }
    return RecipePresenter.toHTTP(recipe);
  }
}