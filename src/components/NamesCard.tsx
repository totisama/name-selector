import styled from 'styled-components'

const Card = styled.div`
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

export const NamesCard = ({ approvedNames }: { approvedNames: string[] }) => {
  return (
    <Card>
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
