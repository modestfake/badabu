import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 50%;
  padding: 16px;

  @media (min-width: 480px) {
    width: calc(100% / 3);
  }
  @media (min-width: 768px) {
    width: calc(100% / 4);
  }
  @media (min-width: 992px) {
    width: calc(100% / 6);
  }
`
const SquareBox = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
`
const AudioBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${({ cover }) => cover ? `sounds/${cover}` : 'placeholder.png'});
  background-size: cover;
  border: 2px solid ${props => props.isPlaying ? 'mediumseagreen' : 'darkslateblue'};
  cursor: pointer;
`
const Title = styled.span`
  font-size: 14px;
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
    const { filename, cover, title, isPlaying } = this.props

    return (
      <Wrapper>
        <SquareBox>
          <AudioBox
            onClick={this.handleClick}
            isPlaying={isPlaying}
            cover={cover}
          >
            {title && <Title>{title}</Title>}
            <audio ref={this.audioRef} src={`sounds/${filename}`} />
          </AudioBox>
        </SquareBox>
      </Wrapper>
    )
  }
}
