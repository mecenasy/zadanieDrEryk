import React from 'react';
import TableContainer from './modules/Table/TableContainer';
import { ColumnConfigurationProps } from './modules/Table/types';

const columns: ColumnConfigurationProps[]= [
   {
      title: 'piewsza columna',
      width: 200,
   },
   {
      title: 'druga columna',
      width: 150,
   },
   {
      title: 'trzecia columna',
      width: 200,
   },
   {
      title: 'czawarta columna',
      width: 200,
   },
   {
      title: 'piąta columna',
      width: 200,
   },
   {
      title: 'szósta columna',
      width: 200,
   },
   {
      title: 'siódma columna',
      width: 170,
   },
   {
      title: 'ósma columna',
      width: 190,
   },
   {
      title: 'dziewiąta columna',
      width: 200,
   },
]
const data: string[][] = [
   ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a', 'h'],
   ['j', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'],
   ['a', 'j', 'h', 'g', 'f', 'e', 'd', 'c', 'b'],
   ['b', 'b', 'j', 'h', 'g', 'f', 'e', 'd', 'c'],
   ['c', 'b', 'c', 'j', 'h', 'g', 'f', 'e', 'd'],
   ['d', 'b', 'c', 'd', 'j', 'h', 'g', 'f', 'e'],
   ['e', 'b', 'c', 'd', 'e', 'j', 'h', 'g', 'f'],
   ['f', 'b', 'c', 'd', 'e', 'f', 'j', 'h', 'g'],
   ['g', 'b', 'c', 'd', 'e', 'f', 'g', 'j', 'h'],
   ['h', 'b', 'c', 'd', 'e', 'f', 'g', 'j', 'a'],
]

const App = () => {
   return (
      <div className="App">
         <TableContainer
            columnsConfiguration={columns}
            data={data}
         />
      </div>
   );
}

export default App;
