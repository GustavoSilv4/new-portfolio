import styled from 'styled-components'

interface ContainerProps {
  title: string
}

export const Container = styled.div<ContainerProps>`
  width: 9.375rem;
  height: 9.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  font-size: 0.75rem;
  font-weight: 700;

  padding: 2.125rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['neutral-800']};

  @media (max-width: 397px) {
    width: 8rem;
    height: 8rem;
  }

  img {
    width: 100%;
    height: 100%;
  }

  transition: all 0.2s;

  &:hover {
    transform: translateY(-5px);

    ::before {
      content: '${(props) => props.title}';
      position: absolute;
      top: -35px;
      padding: 0.25rem 1rem;
      border-radius: 3px;
      background-color: ${(props) => props.theme.colors['neutral-800']};
    }

    ::after {
      content: '';
      position: absolute;
      top: -13px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent ${(props) => props.theme.colors['neutral-800']} transparent;
      transform: rotateX(180deg);
    }
  }
`
