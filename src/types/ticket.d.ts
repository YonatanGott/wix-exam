export interface ITicket {
  id: string
  title: string
  content: string
  userEmail: string
  creationTime: number
  labels?: string[]
}
