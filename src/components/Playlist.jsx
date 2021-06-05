import React, { Component } from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'

import Sound from './Sound'
import data from '../data'

const normalizedSound = data.sounds.reduce(
  (acc, sound) => ({
    ...acc,
    [sound.id]: sound,
  }),
  {},
)

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
    this.setState((prevState) => ({
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
      this.stopSound()
    } else {
      this.setState({ current: id })

      audioElements[id].play()

      ReactGA.event({
        category: 'Sound',
        action: 'Play sound',
        label: normalizedSound[id].filename,
        value: Number(id),
      })
    }
  }

  stopSound = () => {
    this.setState({ current: null })
  }

  render() {
    return (
      <PlaylistBox>
        {data.sounds.map((sound) => (
          <Sound
            key={sound.id}
            isPlaying={sound.id === this.state.current}
            playSound={this.playSound}
            setAudioRef={this.setAudioRef}
            stopSound={this.stopSound}
            {...sound}
          />
        ))}
      </PlaylistBox>
    )
  }
}
