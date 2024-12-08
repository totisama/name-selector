import styled from 'styled-components'

type ModeType = 'primary' | 'secondary' | 'delete'

type ButtonProps = {
  mode: ModeType
}

const buttonStyles = {
  primary: {
    backgroundColor: '#007bff',
    hoverBackgroundColor: '#0056b3',
    border: 'none',
  },
  secondary: {
    backgroundColor: '#6c757d',
    hoverBackgroundColor: '#5a6268',
    border: '1px solid #000000',
  },
  delete: {
    backgroundColor: '#dc3545',
    hoverBackgroundColor: '#a71d2a',
    border: 'none',
  },
}

const StyledButton = styled.button<ButtonProps>`
  border: ${({ mode }) => buttonStyles[mode].border};
  border-radius: 8px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: #fff;
  background-color: ${({ mode }) => buttonStyles[mode].backgroundColor};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ mode }) => buttonStyles[mode].hoverBackgroundColor};
  }
`

export const Button = ({
  text,
  mode,
  onClick,
}: {
  text: string
  mode: ModeType
  onClick: () => void
}) => {
  return (
    <StyledButton mode={mode} onClick={onClick}>
      {text}
    </StyledButton>
  )
}
