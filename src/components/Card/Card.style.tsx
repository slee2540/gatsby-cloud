import styled from 'styled-components'
import { CardProps } from './Card'

export const StyledCard = styled.div<CardProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);

  @media (min-width: 600px) {
    height: 350px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-position: 0 0;
    transition: transform 1s translateY(-50%);
    pointer-events: none;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.009) 11.7%,
      hsla(0, 0%, 0%, 0.034) 22.1%,
      hsla(0, 0%, 0%, 0.072) 31.2%,
      hsla(0, 0%, 0%, 0.123) 39.4%,
      hsla(0, 0%, 0%, 0.182) 46.6%,
      hsla(0, 0%, 0%, 0.249) 53.1%,
      hsla(0, 0%, 0%, 0.32) 58.9%,
      hsla(0, 0%, 0%, 0.394) 64.3%,
      hsla(0, 0%, 0%, 0.468) 69.3%,
      hsla(0, 0%, 0%, 0.54) 74.1%,
      hsla(0, 0%, 0%, 0.607) 78.8%,
      hsla(0, 0%, 0%, 0.668) 83.6%,
      hsla(0, 0%, 0%, 0.721) 88.7%,
      hsla(0, 0%, 0%, 0.762) 94.1%,
      hsla(0, 0%, 0%, 0.79) 100%
    );
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 1;

    > * + * {
      margin-top: 1rem;
    }
  }

  .title {
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.2;
  }

  .copy {
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.35;
  }

  @media (hover: hover) {
    &:hover,
    &:focus-within {
      align-items: center;

      &:before {
        transform: translateY(-4%);
      }
      &:after {
        transform: translateY(-50%);
      }

      .content {
        transform: translateY(0);
        > *:not(.title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: calc(700ms / 8);
        }
      }
    }

    .content {
      transform: translateY(calc(100% - 4.5rem));

      > *:not(.title) {
        opacity: 0;
        transform: translateY(2rem);
        transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1),
          opacity 700ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
`
