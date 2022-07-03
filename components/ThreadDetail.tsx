import styled from 'styled-components'
import { Thread } from 'types/thread'

const Wrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px 0;
  padding-left: 40px;
  padding-right: 10px;
  background: white;
  &:hover {
    cursor: pointer;
    border-color: #898989;
  }
`

interface ThreadDetailProps {
  thread: Thread
}

const ThreadDetail: React.FC<ThreadDetailProps> = (props) => {
  const { thread } = props
  return (
    <Wrapper>
      <p>{thread.numUps}</p>
      <p>Posted by {thread.postedBy} {thread.postedAt}</p>
      <p>{thread.title}</p>
      <p>{thread.description}</p>
      <p>{thread.numComments} comments</p>
    </Wrapper>
  )
}

export default ThreadDetail
