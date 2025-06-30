import dummyData from '../../../Components/categories/sharedComponents/dummyData.json';

// Deep copy to avoid mutating the original dummy data
export function fetchCategories() {
  return JSON.parse(JSON.stringify(dummyData));
} 