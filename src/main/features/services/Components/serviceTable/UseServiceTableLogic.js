import { useState, useMemo } from 'react';

export default function UseServiceTableLogic(data = []) {
  const [searchText, setSearchText] = useState('');

  // Filtered data based on search text
  const filteredData = useMemo(() =>
    data.filter(row =>
      Object.values(row).some(val =>
        val && val.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    ),
    [data, searchText]
  );

  return {
    searchText,
    setSearchText,
    filteredData,
  };
} 