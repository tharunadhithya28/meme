import {Component} from 'react'
import TheMeme from '../TheMeme'
import {Heading} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    styleData: [],
    url: '',
    top: '',
    bottom: '',
    font: '',
  }

  listenUrl = event => {
    this.setState({url: event.target.value})
  }

  listenTop = event => {
    this.setState({top: event.target.value})
  }

  listenBottom = event => {
    this.setState({bottom: event.target.value})
  }

  listenFont = event => {
    this.setState({font: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {top, bottom, font, url} = this.state
    const newList = {
      top,
      bottom,
      url,
      font,
    }
    this.setState({styleData: newList})
  }

  render() {
    const {top, url, bottom, font, styleData} = this.state
    return (
      <>
        <Heading> Meme Generator </Heading>
        <form onSubmit={this.onSubmitForm}>
          <div>
            <label htmlFor="imageUrl"> Image URL </label>
            <input
              id="imageUrl"
              type="text"
              onChange={this.listenUrl}
              value={url}
            />
          </div>
          <div>
            <label htmlFor="top"> Top Text </label>
            <input type="text" id="top" onChange={this.listenTop} value={top} />
          </div>
          <div>
            <label htmlFor="bottom"> Bottom Text </label>
            <input
              type="text"
              id="bottom"
              onChange={this.listenBottom}
              value={bottom}
            />
          </div>
          <div>
            <label htmlFor="fontsize"> Font Size </label>
            <select onChange={this.listenFont} value={font}>
              {fontSizesOptionsList.map(eachItem => (
                <option value={eachItem.optionId}>
                  {' '}
                  {eachItem.displayText}
                </option>
              ))}
            </select>
          </div>
          <button type="submit"> Generate </button>
        </form>
        <TheMeme styleData={styleData} />
      </>
    )
  }
}
export default MemeGenerator
