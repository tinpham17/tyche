import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'
import { Thread } from 'types/thread'
import ThreadDetail from 'components/ThreadDetail'
import Link from 'next/link'

const Wrapper = styled(InfiniteScroll)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

interface ThreadListProps {
  threads: Thread[]
  hasMore: boolean
  loadMore: () => void
}

const ThreadList: React.FC<ThreadListProps> = (props) => {
  const { threads, hasMore, loadMore } = props

  return (
    <Wrapper
      pageStart={0}
      hasMore={hasMore}
      loadMore={loadMore}
    >
      {threads.map((thread) => (
        <Link key={thread.id} href={`/thread/${thread.id}`}>
          <a>
            <ThreadDetail thread={thread}/>
          </a>
        </Link>
      ))}
    </Wrapper>
  )
}

export default ThreadList
