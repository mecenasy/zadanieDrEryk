import React, { FC } from 'react';
import {Coll} from  './parts';

interface CollProps {
   width: number;
}
const Column: FC<CollProps> = ({ width, children }) => (
   <Coll collWidth={width}>
      {children}
   </Coll>
);


export default Column;
