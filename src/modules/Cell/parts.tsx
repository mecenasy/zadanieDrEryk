import styled, {keyframes, css} from 'styled-components';

const Fade = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
`;

export const Cell = styled.div<{animate: boolean}>`
   text-align: center;
   border-bottom: 1px solid black;
   ${({animate}) =>animate && css` animation: ${Fade} 2s linear`};
`;