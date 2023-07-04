import { ITicket } from '../../types/ticket'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

export const filterTicketsByDates = ({
  startDate,
  endDate,
  tickets,
  itemsPerPage,
}: {
  startDate?: number
  endDate?: number
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
    const creationTime = dayjs(ticket.creationTime)
    let startCondition = true
    let endCondition = true
    if (startDate) {
      startCondition = creationTime.isSameOrAfter(startDate)
    }
    if (endDate) {
      endCondition = creationTime.isSameOrBefore(endDate)
    }
    if (startCondition && endCondition) {
      filteredTickets.push(ticket)
      count++

      if (count === maxCount) {
        break
      }
    }
  }
  return filteredTickets
}
