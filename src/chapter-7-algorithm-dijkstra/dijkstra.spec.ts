import { Dijkstra } from './dijkstra';
import { Graph } from './graph';

describe('Dijkstra', () => {
  test('', async () => {
    const graph: Graph = {
      start: {
        a: 6,
        b: 2,
      },
      a: {
        fin: 1,
      },
      b: {
        a: 3,
        fin: 5,
      },
      fin: {},
    };

    const costs: { [key: string]: number } = {
      a: 6,
      b: 2,
      fin: Number.POSITIVE_INFINITY,
    };

    const parents: { [key: string]: string | null } = {
      a: 'start',
      b: 'start',
      fin: null,
    };

    const sut = new Dijkstra(graph);

    sut.execute(costs, parents);

    expect(costs).toEqual({
      a: 5,
      b: 2,
      fin: 6,
    });
    expect(parents).toEqual({
      a: 'b',
      b: 'start',
      fin: 'a',
    });
  });
});
