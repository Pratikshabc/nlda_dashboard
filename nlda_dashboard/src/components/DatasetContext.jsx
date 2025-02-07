import React, { createContext, useState, useContext } from 'react';

const DatasetContext = createContext();

export const useDataset = () => useContext(DatasetContext);

export const DatasetProvider = ({ children }) => {
  const [dataset, setDataset] = useState(null);
  const [jdbcLink, setJdbcLink] = useState('');

  return (
    <DatasetContext.Provider value={{ dataset, setDataset, jdbcLink, setJdbcLink }}>
      {children}
    </DatasetContext.Provider>
  );
};
