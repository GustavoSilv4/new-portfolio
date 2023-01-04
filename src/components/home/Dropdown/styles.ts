import styled from 'styled-components'

export const Content = styled.div`
  position: absolute;
  right: 50px;
  min-width: 100px;
  background-color: ${(props) => props.theme.colors['neutral-800']};
  border-radius: 6px;
  padding: 10px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-name: slideDownAndFade;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 745px) {
    display: none;
  }
`

export const Item = styled.div`
  font-size: 1rem;
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 5px;
  position: relative;
  user-select: none;
  outline: none;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors['red-600']};
  }
`
