import styled from 'styled-components';

export const TableLine = styled.tr`
    
`;

export const TableColumn = styled.td`
    padding: 0.625rem 0;

`;

export const Category = styled.div<{color: string}>`
    display: inline-block;
    padding: 0.3125rem 0.625rem;
    border-radius: 5px;
    color: #FFFFFF;
    background-color: ${props => props.color};
`;

export const Value = styled.div<{color: string}>`
    color: ${props => props.color};
`;