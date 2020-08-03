import React, { FC } from 'react';
import { Cell } from './parts';

interface CollCellProps {
   text: string
   animate: boolean;
}

const CollCell: FC<CollCellProps> = ({ text, animate }) => (
   <Cell animate={animate} >{text}</Cell>
);

export default CollCell;
