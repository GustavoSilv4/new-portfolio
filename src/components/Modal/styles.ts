import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.66);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 100;

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors['neutral-900']};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  z-index: 101;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;

  > button {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 15px;
    border: none;
    background: transparent;
  }
`

export const Title = styled(Dialog.Title)`
  font-size: clamp(1.5rem, 5vw, 2rem);
  color: ${(props) => props.theme.colors['red-600']};
`

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: clamp(0.875rem, 3vw, 1rem);
    text-align: center;
    color: ${(props) => props.theme.colors['neutral-200']};
  }

  span {
    margin-top: 0.625rem;
    font-size: clamp(0.625rem, 2vw, 0.875rem);
    font-weight: 500;
    text-align: center;
    color: ${(props) => props.theme.colors['zinc-400']};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: 1rem;

  button {
    cursor: pointer;
    padding: 0.75rem 1.5rem;
    font-size: clamp(0.875rem, 3vw, 1rem);

    border-radius: 6px;
    border: 1px solid #262626;

    background: ${(props) => props.theme.colors['neutral-900']};

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors['neutral-200']};
    }

    transition: all 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.colors['red-600']};
    }
  }
`
