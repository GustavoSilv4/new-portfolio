import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  div:nth-child(1) {
    line-height: 0;
    padding: 1rem;
    border-radius: 50px;
    background-color: ${(props) => props.theme.colors['neutral-800']};
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3125rem;

    h3 {
      font-size: 1.125rem;
      color: ${(props) => props.theme.colors['neutral-200']};
    }

    span {
      display: block;
      font-size: 1rem;
      color: ${(props) => props.theme.colors['zinc-400']};
    }
  }
`
