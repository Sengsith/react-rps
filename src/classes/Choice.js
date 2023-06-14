// The Choice class repesents the options the player can pick in Rock Paper Scissors
class Choice {
  constructor({ selection, url }) {
    // Holds the name (.e.g., rock)
    this.selection = selection;
    // Holds the svg icon/image
    this.url = url;
  }
}

export default Choice;
