import { BaseController } from '../index'
import { Request, Response } from 'express'
import { ITicket } from '../../types/ticket'
import { filterTicketsByQuery } from '../../functions/filter/filterTicketsByQuery'
import { filterTicketsByDates } from '../../functions/filter/filterTicketsByDates'

// mock database
import ticketsData from '../../data/data.json'

export class TicketsController extends BaseController {
  getTickets = async (req: Request, res: Response) => {
    try {
      const { query, itemsPerPage, startDate, endDate } = req.query
      let tickets: ITicket[] = ticketsData

      if (!tickets) {
        return this.notFound(res)
      }
      if (query) {
        tickets = filterTicketsByQuery({
          query: query.toString(),
          tickets,
          itemsPerPage: Number(itemsPerPage),
        })
      }
      if (startDate || endDate) {
        tickets = filterTicketsByDates({
          startDate: Number(startDate),
          endDate: Number(endDate),
          tickets,
          itemsPerPage: Number(itemsPerPage),
        })
      }
      return this.success<{ tickets: ITicket[]; count: number }>(res, {
        tickets,
        count: tickets.length,
      })
    } catch (error) {
      return this.fail(res, error.toString())
    }
  }
}
