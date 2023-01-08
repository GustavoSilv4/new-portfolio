import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

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
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px 15px;
  position: fixed;
  top: 50%;
  left: 50%;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors['neutral-800']};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors['red-600']};
    border-radius: 20px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    color: ${(props) => props.theme.colors['red-600']};
  }

  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  background-color: ${(props) => props.theme.colors['neutral-800']};

  transform: translate(-50%, -50%);
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

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    > button {
      cursor: pointer;
      width: 10rem;
      padding: 0.75rem 2rem;
      margin-top: 1rem;

      border-radius: 6px;
      border: 1px solid ${(props) => props.theme.colors['neutral-900']};

      color: ${(props) => props.theme.colors.white};
      background: transparent;

      transition: all 0.2s;

      > &:hover {
        background-color: ${(props) => props.theme.colors['red-600']};
      }

      > &:disabled {
        cursor: not-allowed;
        background-color: ${(props) => props.theme.colors['zinc-400']};
      }
    }
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 10px;

  > input,
  textarea,
  select {
    width: 18rem;
    padding: 0.5rem 0.8rem;
    border: none;
    border-radius: 6px;
    resize: none;

    color: ${(props) => props.theme.colors['neutral-100']};
    background-color: ${(props) => props.theme.colors['neutral-900']};

    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors['neutral-900']};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors['red-600']};
      border-radius: 20px;
    }
  }
`

export const CheckboxesContainer = styled.div`
  width: 18rem;
  margin-bottom: 1.125rem;
`

export const FormError = styled.span`
  width: 18rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors['red-600']};
`

export const TagContainer = styled.div`
  width: 100%;
  /* border: 1px solid ${(props) => props.theme.colors['neutral-900']}; */
  margin-bottom: 1.125rem;
`

interface EditProjectContainerProps {
  isActive: boolean
}

export const EditProjectContainer = styled.div<EditProjectContainerProps>`
  display: ${(props) => (props.isActive === true ? 'block' : 'none')};
`
