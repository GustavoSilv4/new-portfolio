import styled from 'styled-components'

export const Container = styled.button`
  cursor: pointer;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4375rem;
  padding: 1.2rem 1rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme.colors['neutral-800']};

  transition: all 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  > div:nth-child(1) {
    width: 18.75rem;
    height: 8.125rem;
    background-color: #171717;

    img {
      border-radius: 3px;
      object-fit: cover;
    }
  }

  div:nth-child(2) {
    h5 {
      text-align: start;
      font-size: 1.125rem;
      font-weight: 500;
      color: ${(props) => props.theme.colors.white};
    }

    span {
      display: block;
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors['zinc-400']};
    }
  }
`
