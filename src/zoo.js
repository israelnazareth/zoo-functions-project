const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const specieOfAnimal = species.find((specie) => specie.name === animal);
  return specieOfAnimal.residents.every((specie) => specie.age >= age);
}

function getEmployeeByName(employeeName) {
  const employeeNameComparation = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  if (!employeeName) return {};
  return employeeNameComparation;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const listManagers = employees.map((employee) => employee.managers);
  return listManagers.some((idOfManager) => idOfManager.includes(id));
  // Fonte sobre a função 'includes()':
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function countAnimals(animal) {
  const allAnimals = {};
  if (!animal) {
    species.forEach((specie) => {
      allAnimals[specie.name] = specie.residents.length;
    });
    return allAnimals;
  }
  return species.find((specie) => specie.name === animal).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || entrants === 0) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const adultPrice = prices.Adult * Adult;
  const seniorPrice = prices.Senior * Senior;
  const childPrice = prices.Child * Child;
  const total = adultPrice + seniorPrice + childPrice;
  return total;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
