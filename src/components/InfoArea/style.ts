import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    padding: 1.5rem;
    box-shadow: 0 0 5px #CCC;
    border-radius: 0.625rem;
    margin-top: -2.5rem;
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const MonthArrow = styled.div`
    width: 2.5rem;
    text-align: center;
    font-size: 1.5625rem;
    cursor: pointer;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
    font-weight: bold;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;
