import styled from 'styled-components';

export const Table = styled.table`
    width:100%;
    background-color: #FFFFFF;
    padding: 1.25rem;
    box-shadow: 0 0 5px #CCC;
    border-radius: 0.625rem;
    margin-top: 1.25rem;
`;

export const TableHeadColumn = styled.th<{width?: number}>`
    padding: 0.625rem 0;
    text-align: left;
    width: ${props => props ?`${props.width}rem` : 'auto'};
`;