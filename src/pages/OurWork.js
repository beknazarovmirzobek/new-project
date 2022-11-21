import React from 'react'
import styled from 'styled-components'

// Images

import athlete from '../img/athlete-small.png';
import therecer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

export default function OurWork() {
  return (
    <Work>
        <Moive>
          <h2>The Athlete</h2>
          <div className='line'></div>
          <a href='#'>
            <img src={athlete} alt="athlete" />
          </a>
        </Moive>
        <Moive>
          <h2>The Racer</h2>
          <div className='line'></div>
          <a href='#'>
            <img src={therecer} alt="racer" />
          </a>
        </Moive>
        <Moive>
          <h2>Good Times</h2>
          <div className='line'></div>
          <a href='#'>
            <img src={goodtimes} alt="goodtimes" />
          </a>
        </Moive>
    </Work>
  )
}


const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
  }
`

const Moive = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`