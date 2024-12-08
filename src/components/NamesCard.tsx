import styled from 'styled-components'
import { Card } from './SwipeableCard'

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

  // Hide scrollbar
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const NameItem = styled.li`
  font-size: 20px;
  font-weight: bold;
`

export const NamesCard = ({ approvedNames }: { approvedNames: string[] }) => {
  return (
    <Card $interactable={false}>
      {approvedNames.length === 0 ? (
        <p>No names approved yet</p>
      ) : (
        <NamesList>
          {approvedNames.map((name) => (
            <NameItem key={name}>{name}</NameItem>
          ))}
        </NamesList>
      )}
    </Card>
  )
}
