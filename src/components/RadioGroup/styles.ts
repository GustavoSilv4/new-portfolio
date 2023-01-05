import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Root = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.7rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.825rem;
  }
`

export const Item = styled(RadioGroup.Item)`
  background-color: ${(props) => props.theme.colors['neutral-900']};
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);

  transition: all 0.2s;

  &:hover {
    background-color: #282828;
  }
`

export const Indicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors['red-600']};
  }
`
