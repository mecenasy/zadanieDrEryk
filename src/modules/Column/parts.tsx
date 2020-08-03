import styled from 'styled-components';

export const Coll = styled.div<{collWidth: number}>`
   background-color: white;
   border: solid 1px blue;
   width: ${({ collWidth }) => collWidth ? collWidth : 100}px;
   flex: 0 0 auto;

   &:last-of-type {
      border: solid 1px red;
      position: sticky;
      right: 0;
   }
   `;

