import dummyData from '../../../Components/categories/sharedComponents/dummyData.json';


export function fetchCategories() {
  return JSON.parse(JSON.stringify(dummyData));
} 