function Animal(gender) {
  this.gender = gender;
}
function Mammalia(gender) {
  Animal.call(this, gender);
}
Mammalia.prototype = Object.create(Animal.prototype);
Mammalia.prototype.constructor = Mammalia;
Mammalia.prototype.getMilk = function () {
  if (this.gender == "female") {
    console.log("give milk a cub");
  } else {
    console.log("oops,that not for the child");
  }
};

function Raccoon(gender) {
  Mammalia.call(this, gender);
}
function Wolf(gender) {
  Mammalia.call(this, gender);
}
function Horse(gender) {
  Mammalia.call(this, gender);
}

Animal.prototype.run = function () {
  console.log("run");
};
Animal.prototype.bounce = function () {
  console.log("bounce");
};
Animal.prototype.crept = function () {
  console.log("quietly crept");
};

Raccoon.prototype = Object.create(Mammalia.prototype);
Raccoon.prototype.constructor = Raccoon;
Raccoon.prototype.steal = function () {
  console.log("steal something");
};

Wolf.prototype = Object.create(Mammalia.prototype);
Wolf.prototype.constructor = Wolf;
Wolf.prototype.howl = function () {
  console.log("howl at the moon");
};
Wolf.prototype.hunt = function () {
  console.log("attack prey");
};

Horse.prototype = Object.create(Mammalia.prototype);
Horse.prototype.constructor = Horse;
Horse.prototype.kicked = function () {
  console.log("kicked your balls");
};

const Zorro = new Raccoon("male");
const Spirit = new Horse("male");
const Keit = new Wolf("female");

console.log(Zorro);
console.log(Spirit);
console.log(Keit);
Zorro.crept();
Zorro.steal();
Zorro.run();
Spirit.getMilk();
Keit.getMilk();
Keit.howl();
Keit.hunt();
