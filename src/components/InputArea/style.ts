import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    padding: 1.25rem;
    box-shadow: 0 0 5px #CCC;
    border-radius: 10px;
    margin-top: 1.25rem;
`;

export const InputLabel = styled.label`
    flex: 1;
    margin: 0.625rem;
`;

export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 0.3125rem;
`;

export const Input = styled.input`
    width: 100%;
    height: 1.875rem;
    padding: 0 0.3125rem;
    border: 1px solid lightblue;
    border-radius: 5px;
`;

export const Select = styled.select`
    width: 100%;
    height: 1.875rem;
    padding: 0 0.3125rem;
    border: 1px solid lightblue;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 100%;
    height: 1.875rem;
    padding: 0 0.3125rem;
    border: 1px solid lightblue;
    background-color: lightblue;
    color: #000000;
    cursor: pointer;

    &:hover{
        background-color: blue;
        color: #FFFFFF;
    }
`;