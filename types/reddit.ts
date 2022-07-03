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
    selftext: string
    selftext_html: string
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
