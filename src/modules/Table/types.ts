export interface TableContainerProps {
   columnsConfiguration: ColumnConfigurationProps[];
   data: string[][];
}

export interface ColumnConfigurationProps {
   title: string;
   width: number;
}

export interface TableProps extends TableContainerProps {
   sort: (index: number) => void;
}