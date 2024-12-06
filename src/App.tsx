import styled from 'styled-components'
import { SwipeableCard } from './components/SwipeableCard'
import { useRef } from 'react'
import { INITIAL_NAMES } from './constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #242424;
`

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 52px;
  color: #fff;
  font-weight: bold;
`

const Instructions = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #e0e0e0;
  text-align: center;

  strong {
    color: #ffffff;
  }
`

export const App = () => {
  const approvedNames = useRef<string[] | null>([])

  return (
    <Container>
      <Title>Name Selector</Title>
      <SwipeableCard
        initialNames={INITIAL_NAMES}
        approvedNames={approvedNames}
      />
      <Instructions>
        Swipe <strong>Right</strong> to accept, <strong>Left</strong> to deny,
        and <strong>Up</strong> to postpone.
      </Instructions>
    </Container>
  )
}
