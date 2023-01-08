import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h5 {
    font-size: 1rem;
    font-weight: normal;
  }
`

export const Box = styled.div`
  width: 18rem;
  min-height: 2.5rem;
  padding: 0.5rem 0.5rem;
  border: none;
  border-radius: 6px;
  overflow: auto;

  ::-webkit-scrollbar {
    /* height: px; */
    display: none;
  }

  display: flex;
  gap: 0.5rem;

  background: ${(props) => props.theme.colors['neutral-900']};
`

export const Label = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 0.5rem 0.8rem;
    border: none;
    outline: none;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;

    font-size: 0.925rem;

    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors['neutral-900']};
  }

  button {
    all: unset;
    padding: 0.275rem 0.5rem 0.275rem 0;
    cursor: pointer;
    line-height: 0;

    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    background-color: ${(props) => props.theme.colors['neutral-900']};

    &:hover {
      svg {
        opacity: 0.7;
      }
    }
  }
`
