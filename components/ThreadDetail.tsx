import styled from 'styled-components'
import { Thread } from 'types/thread'
import { RiArrowUpCircleLine, RiArrowDownCircleLine, RiChat3Line } from 'react-icons/ri'
import TimeAgo from 'react-timeago'

const Wrapper = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    border-color: #898989;
  }
`

const Aside = styled.div`
  background: #f5f5f5;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 700;
  color: #878A8C;
  flex: 0 0 60px;
  width: 60px;
  svg {
    color: #878A8C;
    padding: 2px;
    &:hover {
      background: #ededed;
      border-radius: 4px;
    }
  }
`
const View = styled.div`
  padding: 16px;
  width: 100%;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: #222222;
  margin: 10px 0;
`

const Meta = styled.div`
  font-size: 12px;
  color: #787C7E;
`

const Social = styled.div`
  button {
    display: flex;
    align-items: center;
    gap: 4px;
    border: none;
    background: #f5f5f5;
    height: 24px;
    border-radius: 4px;
    color: #787C7E;
  }
`

const Content = styled.div`
  margin-bottom: 16px;
`

interface ThreadDetailProps {
  thread: Thread
  isDetail: boolean
}

const ThreadDetail: React.FC<ThreadDetailProps> = (props) => {
  const { thread, isDetail } = props
  return (
    <Wrapper>
      <Aside>
        <RiArrowUpCircleLine size={24}/>
        {thread.numUps}
        <RiArrowDownCircleLine size={24}/>
      </Aside>
      <View>
        <Meta>Posted by {thread.postedBy} <TimeAgo date={new Date(thread.postedAt)} /></Meta>
        <Title>{thread.title}</Title>
        {isDetail && (
          <Content dangerouslySetInnerHTML={{
            __html: thread.content
          }}/>
        )}
        <Social>
          <button>
            <RiChat3Line/>
            {thread.numComments} comments
          </button>
        </Social>
      </View>
    </Wrapper>
  )
}

export default ThreadDetail
