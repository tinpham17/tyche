import axios from 'axios'
import { RedditListing, RedditThread } from 'types/reddit'
import { Thread } from 'types/thread'

const fetchThreads = async (params?: { before?: string, after?: string, category?: string }) : Promise<{ threads: Thread[], before: string | null, after: string | null } > => {
  const category = params?.category ?? 'best'
  const response = await axios.get<RedditListing>(`https://www.reddit.com/${category}.json`, {
    params: {
      after: params?.after,
      before: params?.before
    }
  })
  return {
    after: response.data.data.after,
    before: response.data.data.before,
    threads: response.data.data.children.map(toThread),
  }
}

const fetchThread = async (id: string): Promise<Thread> => {
  const response = await axios.get<RedditListing[]>(`https://www.reddit.com/comments/${id}.json`)
  const record = response.data[0].data.children[0]
  return toThread(record)
}

const toThread = (item: RedditThread): Thread => {
  return {
    id: item.data.id,
    title: item.data.title,
    channel: item.data.subreddit,
    isVideo: item.data.is_video,
    isSelf: item.data.is_self,
    content: item.data.selftext,
    videoUrl: item.data.media?.reddit_video?.fallback_url,
    numUps: item.data.ups,
    numDowns: item.data.downs,
    numComments: item.data.num_comments,
    postedBy: item.data.author,
    postedAt: Number(`${item.data.created}000`)  
  }
}

export {
  fetchThreads,
  fetchThread
}