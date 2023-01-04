import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.625rem;

  button {
    cursor: pointer;
    width: 15rem;
    padding: 0.75rem 2rem;

    border-radius: 6px;
    border: 1px solid #262626;

    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors['neutral-900']};

    transition: all 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.colors['red-600']};
    }
  }
`
