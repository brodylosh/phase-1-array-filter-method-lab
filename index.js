// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


const findMatching = (arr, string) => {
    let result = arr.filter(element => element.toUpperCase() === string.toUpperCase());
    return result;
}

const fuzzyMatch = (arr, string) => {
    let result = arr.filter(element => element[0] === string[0]);
    return result;
}

const matchName = (arr, string) => {
    let result = arr.filter(element => element.name.toUpperCase() === string.toUpperCase());
    return result;
}
