import styled from 'styled-components'
import { Card } from './SwipeableCard'
import { MutableRefObject } from 'react'

const NamesList = styled.ul`
  height: 400px;
  width: 300px;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: scroll;
`

const NameItem = styled.li`
  font-size: 20px;
  font-weight: bold;
`

export const NamesCard = ({
  approvedNames,
}: {
  approvedNames: MutableRefObject<string[]>
}) => {
  const approvedNamesArray = approvedNames.current

  return (
    <Card>
      {approvedNamesArray.length === 0 ? (
        <p>No names approved yet</p>
      ) : (
        <NamesList>
          {approvedNamesArray.map((name) => (
            <NameItem key={name}>{name}</NameItem>
          ))}
        </NamesList>
      )}
    </Card>
  )
}
