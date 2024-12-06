import styled from 'styled-components'
import { SwipeableCard } from './components/SwipeableCard'
import { useRef, useState } from 'react'
import { INITIAL_NAMES } from './constants'
import { NamesCard } from './components/NamesCard'

type ButtonProps = {
  mode: 'primary' | 'secondary'
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #242424;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 52px;
  color: #fff;
  font-weight: bold;
  margin: 0px;
`

const Instructions = styled.p`
  margin: 0px;
  font-size: 16px;
  color: #e0e0e0;
  text-align: center;

  strong {
    color: #ffffff;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 8px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: #fff;

  background-color: ${({ mode }) =>
    mode === 'primary' ? '#007bff' : '#6c757d'};
  border: ${({ mode }) => (mode === 'primary' ? 'none' : '1px solid #000000')};

  &:hover {
    background-color: ${({ mode }) =>
      mode === 'primary' ? '#0056b3' : '#5a6268'};
  }
`

export const App = () => {
  const [previewApprovedNames, setPreviewApprovedNames] = useState(false)
  const approvedNames = useRef<string[]>([])

  return (
    <Container>
      <Title>Name Selector</Title>
      {previewApprovedNames ? (
        <NamesCard approvedNames={approvedNames.current} />
      ) : (
        <>
          <SwipeableCard
            initialNames={INITIAL_NAMES}
            approvedNames={approvedNames}
          />
          <Instructions>
            Swipe <strong>Right</strong> to accept, <strong>Left</strong> to
            deny, and <strong>Up</strong> to postpone.
          </Instructions>
        </>
      )}
      <ButtonsContainer>
        <Button
          mode={previewApprovedNames ? 'secondary' : 'primary'}
          onClick={() => setPreviewApprovedNames(!previewApprovedNames)}
        >
          {previewApprovedNames ? 'Back to swiping' : 'View selected names'}
        </Button>
      </ButtonsContainer>
    </Container>
  )
}
