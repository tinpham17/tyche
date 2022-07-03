import styled from 'styled-components'
import { RiSunLine } from 'react-icons/ri'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const Animation = styled.div`
  animation: rotation 1s infinite linear;
  color: #878A8C;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`

const Loader: React.FC = () => {
  return (
    <Wrapper>
      <Animation>
        <RiSunLine/>
      </Animation>
    </Wrapper>
  )
}

export default Loader
