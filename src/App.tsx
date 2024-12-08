import styled from 'styled-components'
import { SwipeableCard } from './components/SwipeableCard'
import { useRef, useState } from 'react'
import { INITIAL_NAMES } from './constants'
import { NamesCard } from './components/NamesCard'
import { Instructions } from './components/Instructions'
import { getFromLocalStorage, removeFromLocalStorage } from './lib/localStorage'
import { Button } from './components/Button'

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

const CardContainer = styled.div`
  width: 300px;
  height: 400px;
`

const Card = styled.div<{ $rotation: number }>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(${({ $rotation }) => $rotation}deg);
  transition: transform 1s ease-in;
`

const CardFace = styled.div<{ $face: 'front' | 'back' }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: ${({ $face }) =>
    $face === 'front' ? 'rotateY(0deg)' : 'rotateY(180deg)'};
`

export const App = () => {
  const storedApprovedNames = getFromLocalStorage('approvedNames')
  const storedInitialNames = getFromLocalStorage('initialNames')

  const [previewApprovedNames, setPreviewApprovedNames] = useState(false)
  const [rotation, setRotation] = useState(0)
  const approvedNames = useRef<string[]>(storedApprovedNames ?? [])
  const initialNames = useRef<string[]>(storedInitialNames ?? INITIAL_NAMES)

  const handleButtonClick = () => {
    setRotation((prevRotation) => prevRotation + 180)

    setTimeout(() => {
      setPreviewApprovedNames(!previewApprovedNames)
    }, 500)
  }

  const handleDeleteAllNames = () => {
    approvedNames.current = []
    initialNames.current = INITIAL_NAMES
    removeFromLocalStorage('approvedNames')
    removeFromLocalStorage('initialNames')
  }

  return (
    <Container>
      <Title>Name Selector</Title>
      <CardContainer>
        <Card $rotation={rotation}>
          <CardFace $face="front">
            <SwipeableCard names={initialNames} approvedNames={approvedNames} />
          </CardFace>
          <CardFace $face="back">
            <NamesCard approvedNames={approvedNames.current} />
          </CardFace>
        </Card>
      </CardContainer>
      <Instructions displaytext={!previewApprovedNames} />
      <Button
        mode={previewApprovedNames ? 'secondary' : 'primary'}
        onClick={handleButtonClick}
        text={previewApprovedNames ? 'Back to swiping' : 'View selected names'}
      />
      <Button
        text={'Restart selection'}
        mode="delete"
        onClick={handleDeleteAllNames}
      />
    </Container>
  )
}
