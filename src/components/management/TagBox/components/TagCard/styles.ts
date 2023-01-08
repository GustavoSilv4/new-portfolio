import styled from 'styled-components'

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.15rem 0.3rem;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors['neutral-800']};

  span {
    width: max-content;
    display: block;
    font-size: 0.75rem;
  }

  button {
    all: unset;
    cursor: pointer;
    line-height: 0;
  }
`
