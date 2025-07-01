import React from 'react';
import { Categories, Card, CardUI, FormsUI } from './components';

// Main root component for categories feature
const CategoriesRoot = (props) => {
  return <Categories {...props} />;
};

export default CategoriesRoot;
export { Categories, Card, CardUI, FormsUI };
// ...baaki exports (forms, reduxSlices, etc.) bhi yahan se kar sakte hain 