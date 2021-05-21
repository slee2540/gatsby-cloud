import styled, { css } from 'styled-components'

export const StyledBlog = styled.div`
  width: 100%;
  margin: 0;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #7ad1f3;
  list-style-type: none;
  overflow: hidden;

  .image {
    /* flex: 1 0 8rem; */
    flex-basis: 8rem;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 1rem; */

    img {
      width: 8rem;
      height: 8rem;
    }
  }

  .text-container {
    flex: 9;
    display: flex;
    flex-direction: column;
    height: 8rem;
    overflow: hidden;
    padding-left: 20px;
    .title {
      flex: 1;
      margin-bottom: 10px;
      cursor: pointer;
      color: red;
      font-size: 20px;
    }

    .description {
      flex: 3;
      line-height: 1.4;
      color: blue;

      & > * {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
      }
    }
  }
`
