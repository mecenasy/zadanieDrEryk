import React, { FC, useState, useCallback } from 'react';
import Table from './Table';
import { TableContainerProps } from './types';

const TableContainer: FC<TableContainerProps> = ({ data, columnsConfiguration }) => {
   const [sortedData, setSortedData] = useState(data)
   
   const sort = useCallback((index: number) => {
      console.log("sort -> index", index)
      const newSortedData = [...data].sort((a, b) => {
         if (  a[index] < b[index]){
            return -1
         }
         if (  a[index] > b[index]){
            return 1
         }
         return 0
      }) 
      setSortedData(newSortedData);
   }, [setSortedData, data])
   
   return (
      <Table
         sort={sort}
         data={sortedData}
         columnsConfiguration={columnsConfiguration}
      />
   );
}

export default TableContainer;
