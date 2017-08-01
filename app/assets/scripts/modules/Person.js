function Person(fullName, favColor) {
  this.fullName = fullName;
  this.favoriteColor = favColor;
  this.greet = function() {
    console.log('Hello, my name is ' + this.fullName + ' and my favorite color is ' +
                 this.favoriteColor + '.');
  }
}

module.exports = Person;
