const car1 = {
  brand: 'Nissan',
  model: 'Skyline',
  year: 1999,
};

const car2 = {
  brand: 'Toyota',
  model: 'Supra',
  owner: 'Poul Walker',
};

const car3 = { ...car1, ...car2 };

console.log(car3);
