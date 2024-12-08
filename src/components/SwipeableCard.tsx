import { useState, useRef, MutableRefObject } from 'react'
import { SwipeEventData, useSwipeable } from 'react-swipeable'
import styled from 'styled-components'
import { Direction, DIRECTIONS, DirectionsEnum, HexColor } from '../constants'
import { getRandomNumber } from '../utils/get-random-number'

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  background-color: #ffffff;
  color: #242424;
  border-radius: 10px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  user-select: none;
  transition: transform 0.3s ease-in-out;
`

export const SwipeableCard = ({
  initialNames,
  approvedNames,
}: {
  initialNames: string[]
  approvedNames: MutableRefObject<string[] | null>
}) => {
  const [names, setNames] = useState(initialNames)
  const [currentName, setCurrentName] = useState(
    () => initialNames[getRandomNumber(initialNames.length)]
  )
  const card = useRef<HTMLDivElement | null>(null)

  const onSwiping = (swipeEvent: SwipeEventData) => {
    if (!card.current || names.length === 0) {
      return
    }

    const currentDir = swipeEvent.dir as Direction

    // limit swipe distance
    if (swipeEvent.absX > 250 || swipeEvent.absY > 250) {
      return
    }

    if (currentDir === DirectionsEnum.Left) {
      card.current.style.transform = `translateX(-${swipeEvent.absX}px)`
    } else if (currentDir === DirectionsEnum.Right) {
      card.current.style.transform = `translateX(${swipeEvent.absX}px)`
    } else if (currentDir === DirectionsEnum.Up) {
      card.current.style.transform = `translateY(-${swipeEvent.absY}px)`
    }
  }

  const onSwiped = (swipeEvent: SwipeEventData) => {
    if (!card.current || names.length === 0) {
      return
    }

    const direction = swipeEvent.dir as Direction

    if (!DIRECTIONS.includes(direction)) {
      return
    }

    handleAction(direction)

    card.current.style.transition = 'transform 0.3s ease-out'
    card.current.style.transform = 'translate(0, 0)'
  }

  const handleAction = (action: Direction) => {
    // If we swipe up, do nothing
    if (action === DirectionsEnum.Up) {
      setCurrentName(names[getRandomNumber(names.length)])
      recolorCard('#87CEEB')
      return
    }

    const remainingNames = names.filter((name) => name !== currentName)

    // Accept name
    if (action === DirectionsEnum.Right) {
      approvedNames.current?.push(currentName)
      recolorCard('#98FB98')
    }

    if (action === DirectionsEnum.Left) {
      recolorCard('#FFB6C1')
    }

    console.log({ remainingNames, approvedNames: approvedNames.current })

    if (remainingNames.length > 0) {
      setCurrentName(remainingNames[getRandomNumber(remainingNames.length)])
      setNames(remainingNames)
    } else {
      setCurrentName('No more names!')
      setNames([])
    }
  }

  const recolorCard = (color: HexColor) => {
    if (!card.current) {
      return
    }

    card.current.style.backgroundColor = color

    setTimeout(() => {
      if (card.current) {
        card.current.style.backgroundColor = '#ffffff'
      }
    }, 300)
  }

  const handlers = useSwipeable({
    onSwiping,
    onSwiped,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  return (
    <Card {...handlers} ref={card}>
      {currentName}
    </Card>
  )
}
