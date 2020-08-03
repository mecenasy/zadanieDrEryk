import React, { FC, useState, useCallback } from 'react';
import { TableWrapper } from  './parts';
import Column from '../Column/Column';
import HeaderCell from '../HeaderCell/HeaderCell';
import Cell from '../Cell/Cell';
import { TableProps } from './types';

const Table: FC<TableProps> = ({ sort, columnsConfiguration, data}) => {
   const [animate, setAnimate] =useState(false);
   
   const onSort = useCallback((index: number) => () => {
      setAnimate(true)
      sort(index)
      setTimeout(()=>{
         setAnimate(false);
      },500)
   }, [sort, setAnimate]);

     return  (
   <TableWrapper>
      {columnsConfiguration.map(({ width, title }, index) => (
         <Column key={index} width={width}>
            <HeaderCell 
               onClick={onSort(index)}
               text={title}
            />
            {data.map((text, cellIndex) => (
               <Cell
                  animate={animate}
                  key={cellIndex}
                  text={text[index] || ''}
               />
            ))}
         </Column>
         ))}
   </TableWrapper>
)};

export default Table;
