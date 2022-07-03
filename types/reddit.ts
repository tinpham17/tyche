export interface RedditThread {
  kind: string
  data: {
    id: string
    title: string
    author: string
    created: number
    downs: number
    ups: number
    num_comments: number
    subreddit: string
    is_self: boolean
    selftext: string
    is_video: boolean
    media: {
      reddit_video: {
        fallback_url: string
      }
    }
  }
}

export interface RedditListing {
  kind: string
  data: {
    after: string | null
    before: string | null
    children: RedditThread[]
  }
}
