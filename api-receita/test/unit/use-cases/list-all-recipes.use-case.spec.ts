import { ListAllRecipesUseCase } from '../../../src/core/use-cases/list-all-recipes.use-case';

describe('ListAllRecipesUseCase', () => {
  it('should return all recipes', async () => {
    const mockRepo = {
      findAll: jest.fn().mockResolvedValue([
        { id: '1', title: 'Recipe 1' },
        { id: '2', title: 'Recipe 2' }
      ])
    };

    const useCase = new ListAllRecipesUseCase(mockRepo as any);
    const result = await useCase.execute();

    expect(mockRepo.findAll).toHaveBeenCalled();
    expect(result.length).toBe(2);
  });
});