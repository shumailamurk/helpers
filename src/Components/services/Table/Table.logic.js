import { useMemo, useState } from 'react';
import dummyData from '../../categories/sharedComponents/dummyData.json';

export function useTableData() {
  const [searchText, setSearchText] = useState('');

  // Flatten dummyData into services array
  const getServicesData = () => {
    let index = 1;
    const services = [];
    dummyData.forEach(category => {
      (category.subCategories || []).forEach(sub => {
        services.push({
          key: index,
          indexNo: index,
          serviceName: sub.name + ' Service',
          subCategory: sub.name,
          category: category.name,
          surveyRequired: 'No',
          description: `${category.name} - ${sub.name}`,
          status: 'Available',
        });
        index++;
      });
    });
    return services;
  };

  const dataSource = useMemo(() => {
    const all = getServicesData();
    if (!searchText) return all;
    return all.filter(row =>
      row.serviceName.toLowerCase().includes(searchText.toLowerCase()) ||
      row.subCategory.toLowerCase().includes(searchText.toLowerCase()) ||
      row.category.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  return { dataSource, searchText, setSearchText };
} 