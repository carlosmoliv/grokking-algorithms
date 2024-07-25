export class ApproximationAlgorithm {
  private readonly finalStations: Set<string> = new Set();

  // List of states to cover
  private statesNeeded: Set<string> = new Set();

  // The list of stations being chosen from
  private stations: { [key: string]: Set<string> } = {};

  constructor() {
    this.statesNeeded.add('mt');
    this.statesNeeded.add('wa');
    this.statesNeeded.add('or');
    this.statesNeeded.add('id');
    this.statesNeeded.add('nv');
    this.statesNeeded.add('ut');
    this.statesNeeded.add('ca');
    this.statesNeeded.add('az');

    this.stations['kone'] = new Set(['id', 'nv', 'ut']);
    this.stations['ktwo'] = new Set(['wa', 'id', 'mt']);
    this.stations['kthree'] = new Set(['or', 'nv', 'ca']);
    this.stations['kfour'] = new Set(['nv', 'ut']);
    this.stations['kfive'] = new Set(['ca', 'az']);
  }

  getFinalStations(): Set<string> {
    this.findBestSolution();
    return this.finalStations;
  }

  // There can be more than one correct solution
  private findBestSolution(): void {
    while (this.statesNeeded.size > 0) {
      let bestStation = null;
      let statesCovered = new Set();

      // Every station must be evaluated to pick the one that covers the most uncovered states
      for (const [station, statesForStation] of Object.entries(this.stations)) {
        // Calculate the set of states covered by this station that are still needed
        // 'covered' is a set of states that were in both statesNeeded and statesForStation
        const covered = new Set(
          [...this.statesNeeded].filter((state) => statesForStation.has(state))
        );

        // Check if this station covers more states than the current best station
        if (covered.size > statesCovered.size) {
          bestStation = station;
          statesCovered = covered;
        }
      }

      // If a best station was found, add it to the final list
      if (bestStation !== null) {
        this.finalStations.add(bestStation);

        // Update the set of states needed by removing the covered states
        this.statesNeeded = new Set(
          [...this.statesNeeded].filter((state) => !statesCovered.has(state))
        );
      }
    }
  }
}
