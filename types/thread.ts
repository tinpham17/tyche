export interface Thread {
  id: string
  title: string
  channel: string
  isSelf: boolean
  content: string
  isVideo: boolean
  videoUrl: string
  numUps: number
  numDowns: number
  numComments: number
  postedBy: string
  postedAt: number
}
