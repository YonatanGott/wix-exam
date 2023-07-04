import { ITicket } from '../../types/ticket'

export const filterTicketsByQuery = ({
  query,
  tickets,
  itemsPerPage,
}: {
  query: string
  tickets: ITicket[]
  itemsPerPage: number
}) => {
  const filteredTickets = []
  let count = 0
  let maxCount = 50
  if (itemsPerPage) {
    maxCount = itemsPerPage
  }
  for (const ticket of tickets) {
    const fields = `${ticket.title.toLowerCase()} ${ticket.content.toLowerCase()} ${ticket.userEmail.toLowerCase()}`
    if (fields.includes(query.toLowerCase())) {
      filteredTickets.push(ticket)
      count++

      if (count === maxCount) {
        break
      }
    }
  }
  return filteredTickets
}
