import { ApproximationAlgorithm } from './approximation-algo';

describe('ApproximationAlgorithm', () => {
  test('', async () => {
    const sut = new ApproximationAlgorithm();

    const finalStations = sut.getFinalStations();

    expect(Array.from(finalStations)).toEqual([
      'kone',
      'ktwo',
      'kthree',
      'kfive',
    ]);
  });
});
