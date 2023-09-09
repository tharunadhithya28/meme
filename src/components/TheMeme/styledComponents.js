import styled from 'styled-components'

export const TextSize = styled.p`
  font-size: ${props => props.fontSize};
  color: blue;
`
export const bgContainer = styled.div`
  background-image: url(${props => props.size});
  height: 100vh;
`
