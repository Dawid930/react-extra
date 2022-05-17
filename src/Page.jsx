import React from 'react'
import ThemeContext from './ThemeContext'
import { useContext } from 'react'
import styled from 'styled-components';

const Button = styled.button`
    font-size: 20px;
    pading: 10px 20px;
    cursor: pointer;
    color: ${props => props.primary ? 'black' : 'grey'}
    background-color: ${props => props.primary ? 'grey' : 'black'}

`

function Page() {

    const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className={theme}>
        {
            theme === 'light' ?
            <Button onClick={toggleTheme}>Change theme</Button> :
            <Button primary onClick={toggleTheme}>Change theme</Button>


        }
    </div>
  )
}

export default Page