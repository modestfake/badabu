import React, { Component } from 'react'
import styled from 'styled-components'

const AudioBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 200px;
  height: 200px;
  margin: 16px;
  border: 2px solid ${props => props.isPlaying ? 'mediumseagreen' : 'darkslateblue'};
  cursor: pointer;
`
const Title = styled.span`
  font-size: 24px;
`

export default class Sound extends Component {
  audioRef = React.createRef()

  componentDidMount () {
    const { id, setAudioRef } = this.props
    setAudioRef(id, this.audioRef.current)
  }

  handleClick = () => {
    this.props.playSound(this.props.id)
  }

  render () {
    const { filename, isPlaying } = this.props

    return (
      <AudioBox
        onClick={this.handleClick}
        isPlaying={isPlaying}
      >
        <Title>{filename}</Title>
        <audio ref={this.audioRef} src={`sounds/${filename}`} />
      </AudioBox>
    )
  }
}
