import {TextSize, bgContainer} from './styledComponents'

const TheMeme = props => {
  const {styleData} = props
  const {top, bottom, url, font} = styleData
  console.log(font)

  return (
    <bgContainer
      size="https://assets.ccbp.in/frontend/react-js/nature-img.png"
      data-testid="meme"
    >
      <TextSize fontSize={`${font}px`}> {top} </TextSize>
      <TextSize fontSize={`${font}px`}> {bottom} </TextSize>
    </bgContainer>
  )
}
export default TheMeme
