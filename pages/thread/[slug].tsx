import ThreadDetail from 'components/ThreadDetail'
import type { NextPage } from 'next'
import Head from 'next/head'
import { fetchThread } from 'services/reddit'
import styled from 'styled-components'
import { Thread } from 'types/thread'

const Wrapper = styled.div``

const Main = styled.main`
  padding: 10px;
`

interface ThreadPageProps {
  thread: Thread
}

const ThreadPage: NextPage<ThreadPageProps> = (props) => {
  const { thread } = props
  return (
    <Wrapper>
      <Head>
        <title>{ thread.title }</title>
        <meta name="description" content={ thread.description } />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <ThreadDetail thread={thread} isDetail={true}/>
      </Main>
    </Wrapper>
  )
}

ThreadPage.getInitialProps = async ({ query }) => {
  const result = await fetchThread(query.slug as string)
  return {
    thread: result
  }
}

export default ThreadPage
