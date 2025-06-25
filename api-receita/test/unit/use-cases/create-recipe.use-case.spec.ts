import { CreateRecipeUseCase } from '../../../src/core/use-cases/create-recipe.use-case';
import { RecipeRepository } from '../../../src/core/repositories/recipe.repository';

describe('CreateRecipeUseCase', () => {
  let useCase: CreateRecipeUseCase;
  let mockRepo: jest.Mocked<RecipeRepository>;

  beforeEach(() => {
    mockRepo = {
      create: jest.fn().mockResolvedValue({
        id: '1',
        title: 'Test',
        description: 'Test description',
        ingredients: [],
        createdAt: new Date(),
        updatedAt: new Date()
      })
    } as any;

    useCase = new CreateRecipeUseCase(mockRepo);
  });

  it('should create a recipe', async () => {
    const recipeData = { 
      title: 'Bolo', 
      description: 'Delicioso bolo de cenoura', 
      ingredients: ['farinha'] 
    };
    const result = await useCase.execute(recipeData);
    
    expect(mockRepo.create).toHaveBeenCalledWith(recipeData);
    expect(result).toHaveProperty('id');
  });

  it('should throw if repository fails', async () => {
    mockRepo.create.mockRejectedValue(new Error('DB Error'));
    await expect(useCase.execute({ 
      title: 'Fail', 
      description: 'Receita falha',
      ingredients: [] 
    })).rejects.toThrow('DB Error');
  });
});