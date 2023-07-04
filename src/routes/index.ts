import { Router } from 'express'
//Routes
import ticketsRoutes from './tickets'

const router = (): Router => {
  const router = Router({ mergeParams: true })

  router.use('/tickets', ticketsRoutes())

  return router
}

export default router
