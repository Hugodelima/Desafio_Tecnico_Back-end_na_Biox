import { GetRecipeByIdUseCase } from '../../../src/core/use-cases/get-recipe-by-id.use-case';

describe('GetRecipeByIdUseCase', () => {
  it('should return a recipe by id', async () => {
    const mockRecipe = { id: '123', title: 'Bolo' };
    const mockRepo = {
      findById: jest.fn().mockResolvedValue(mockRecipe)
    };

    const useCase = new GetRecipeByIdUseCase(mockRepo as any);
    const result = await useCase.execute('123');

    expect(mockRepo.findById).toHaveBeenCalledWith('123');
    expect(result).toEqual(mockRecipe);
  });

  it('should return null if not found', async () => {
    const mockRepo = { findById: jest.fn().mockResolvedValue(null) };
    const useCase = new GetRecipeByIdUseCase(mockRepo as any);
    
    expect(await useCase.execute('999')).toBeNull();
  });
});