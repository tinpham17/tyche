import type { NextPage } from 'next'
import Head from 'next/head'
import { fetchThreads } from 'services/thread'
import styled from 'styled-components'
import { Thread } from 'types/thread'
import CategoryBar from 'components/CategoryBar'
import ThreadList from 'components/ThreadList'
import { useEffect, useState } from 'react'

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Main = styled.main`
  padding: 10px;
`

interface HomePageProps {
  threads: Thread[]
  after: string | null
}

const HomePage: NextPage<HomePageProps> = (props) => {
  const { threads, after } = props
  const [ currentThreads, setCurrentThreads ] = useState<Thread[]>(threads)
  const [ currentAfter, setCurrentAfter ] = useState<string | null>(after)

  const loadMore = async () => {
    if (currentAfter) {
      const result = await fetchThreads({
        after: currentAfter
      })
      setCurrentThreads([
        ...currentThreads,
        ...result.threads
      ])
      setCurrentAfter(result.after)
    }
  }

  useEffect(() => {
    setCurrentThreads(threads)
    setCurrentAfter(after)
  }, [threads, after])

  return (
    <Wrapper>
      <Head>
        <title>Threads</title>
        <meta name="description" content="Awesome threads" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <CategoryBar />
        <ThreadList
          threads={currentThreads}
          hasMore={currentAfter !== null}
          loadMore={loadMore} />
      </Main>
    </Wrapper>
  )
}

HomePage.getInitialProps = async () => {
  const result = await fetchThreads()
  return {
    threads: result.threads,
    after: result.after
  }
}

export default HomePage
