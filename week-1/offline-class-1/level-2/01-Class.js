
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
  countleg(){
    return `the animal you passed has ${this.legCount} legs`
  }
}
const square= new Animal("dog",4);
console.log(square.describe()); 
console.log(square.countleg());