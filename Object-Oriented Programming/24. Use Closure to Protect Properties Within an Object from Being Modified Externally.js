function Bird() {
    let weight = 15;
  
    this.getWeight = () => weight;
  }
  
  let duck = new Bird();
  
  console.log(duck.getWeight());