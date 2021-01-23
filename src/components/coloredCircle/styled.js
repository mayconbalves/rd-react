import styled from 'styled-components'

export const Circle = styled.div`
  height: 20px;
  width: 20px;
  background: ${(props) => props.background || '#000'};
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
`
