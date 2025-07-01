import React from 'react';
import { Categories, Card, CardUI, FormsUI } from './components';

// Main root component for categories feature
const Categories = (props) => {
  return <Categories {...props} />;
};

export default Categories;
export { Categories, Card, CardUI, FormsUI };
export { default as Categories } from './components/sharedComponents/reusableData';
export { default as Card } from './components/Cards/cards';
export { default as CardUI } from './components/Cards/cardsUI';
export { default as FormsUI } from './components/forms/formsUI';
// ...baaki exports (forms, reduxSlices, etc.) bhi yahan se kar sakte hain 