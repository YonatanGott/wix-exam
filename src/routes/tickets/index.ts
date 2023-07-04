import { TicketsController } from '../../controllers/tickets'
import { Router } from 'express'

const ticketsRoutes = (): Router => {
  const router = Router()
  const controller = new TicketsController()

  router.get('/', controller.getTickets)

  return router
}

export default ticketsRoutes
