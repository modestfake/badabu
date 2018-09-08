import React, { Component } from 'react'
import styled from 'styled-components'

import Sound from './Sound'
import data from '../data'

const PlaylistBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1600px;
  margin: 0 auto;
  padding: 16px;
`

export default class Playlist extends Component {
  state = {
    audioElements: {},
    current: null,
  }

  setAudioRef = (id, audioRef) => {
    this.setState(prevState => ({
      audioElements: {
        ...prevState.audioElements,
        [id]: audioRef,
      },
    }))
  }

  playSound = (id) => {
    const { current, audioElements } = this.state

    if (current) {
      audioElements[current].pause()
      audioElements[current].currentTime = 0
    }

    if (current === id) {
      this.setState({ current: null })
    } else {
      this.setState({ current: id })

      audioElements[id].play()
    }
  }

  render () {
    return (
      <PlaylistBox>
        {data.sounds.map(sound => (
          <Sound
            key={sound.id}
            setAudioRef={this.setAudioRef}
            playSound={this.playSound}
            isPlaying={sound.id === this.state.current}
            {...sound}
          />
        ))}
      </PlaylistBox>
    )
  }
}
