import { Graph } from './graph';

// while there're nodes to process
// grab the node that is closest to the start
// update costs for its neighbors
// if any of the neighbor's costs were updated, update the parents too
// mark this child as processed
export class Dijkstra {
  private INFINITY = Number.POSITIVE_INFINITY;

  constructor(private readonly graph: Graph) {}

  execute(
    costs: { [key: string]: number },
    parents: { [key: string]: string | null }
  ) {
    const processed: string[] = [];

    // Find the lowest-cost node that you haven't processed yet
    let node = this.findLowestCostNode(costs, processed);

    while (node !== null) {
      // If you've processed all the nodes, this while loop is done.
      const cost = costs[node];
      const neighbors = this.graph[node];

      for (const n in neighbors) {
        // Go through all the neighbors of this node.
        const newCost = cost + neighbors[n];
        if (costs[n] > newCost) {
          // If it's cheaper to get to this neighbor by going through this node...
          costs[n] = newCost; // ...update the cost for this node.
          parents[n] = node; // This node becomes the new parent for this neighbor.
        }
      }

      processed.push(node); // Mark the node as processed.
      node = this.findLowestCostNode(costs, processed); // Find the next node to process, and loop.
    }
  }

  private findLowestCostNode(
    costs: { [key: string]: number },
    processed: string[]
  ): string | null {
    let lowestCost = this.INFINITY;
    let lowestCostNode = null;

    // Go through each node.
    for (const node in costs) {
      const cost = costs[node];
      // If it's the lowest cost so far and hasn't been processed yet...
      if (cost < lowestCost && !processed.includes(node)) {
        lowestCost = cost; // ... set it as the new lowest-cost node.
        lowestCostNode = node;
      }
    }

    return lowestCostNode;
  }
}
