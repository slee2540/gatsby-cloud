import styled, { css } from 'styled-components'

export const StyledLayout = styled.nav`
  .nav-container {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    background: darkgoldenrod;
    list-style-type: none;
  }

  .nav-item {
    /* background: blueviolet; */
    padding: 15px;
    cursor: pointer;

    a {
      text-align: center;
      text-decoration: none;
      color: white;
    }
  }
`
