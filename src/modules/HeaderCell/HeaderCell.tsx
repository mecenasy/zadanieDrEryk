import React, { FC } from 'react';
import { HeaderCell } from './parts';

interface CollHeaderCellProps {
   text: string;
   onClick: () => void;
}

const CollHeaderCell: FC<CollHeaderCellProps> = ({ text, onClick }) => (
   <HeaderCell onClick={onClick}>{text}</HeaderCell>
);


export default CollHeaderCell;
