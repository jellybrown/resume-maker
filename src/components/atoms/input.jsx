import React from 'react';
import styled from 'styled-components';
const StyledInput = styled.input`
    border:none;
    padding:2rem;
`

const Input = ({children}) => {
    return (
        <>
        <StyledInput>{children}</StyledInput>
        </>
    );
};

export default Input;