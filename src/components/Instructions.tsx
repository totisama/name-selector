import styled from 'styled-components'

const InstructionsContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InstructionsText = styled.p`
  margin: 0px;
  font-size: 16px;
  color: #e0e0e0;
  text-align: center;

  strong {
    color: #ffffff;
  }
`

export const Instructions = ({ displaytext }: { displaytext: boolean }) => {
  return (
    <InstructionsContainer>
      {displaytext && (
        <InstructionsText>
          Swipe <strong>Right</strong> to accept, <strong>Left</strong> to deny,
          and <strong>Up</strong> to postpone.
        </InstructionsText>
      )}
    </InstructionsContainer>
  )
}
