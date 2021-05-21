import styled from 'styled-components'

export const StyledPhone = styled.div`
  /* The device with borders */
  .smartphone {
    position: relative;
    margin: auto;
    border: 16px black solid;
    border-top-width: 60px;
    border-bottom-width: 60px;
    border-radius: 36px;
  }

  /* The horizontal line on the top of the device */
  .smartphone:before {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 10px;
  }

  /* The circle on the bottom of the device */
  .smartphone:after {
    content: '';
    display: block;
    width: 35px;
    height: 35px;
    position: absolute;
    left: 50%;
    bottom: -65px;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 50%;
  }

  /* The screen (or content) of the device */
  .smartphone .content {
    /* width: 250px;
    height: 350px; */
  }
`
