import * as Checkbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

export const Root = styled(Checkbox.Root)`
  background-color: ${(props) => (props) => props.theme.colors['neutral-900']};
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);

  transition: all 0.2s;

  &:hover {
    background-color: #282828;
  }
`
export const Indicator = styled(Checkbox.Indicator)`
  color: ${(props) => props.theme.colors['red-600']};
`
