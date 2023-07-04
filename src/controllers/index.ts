import { Response } from 'express'

export abstract class BaseController {
  public static jsonResponse(res: Response, code: number, message: string) {
    return res.status(code).json({ message })
  }

  public success<T>(res: Response, data?: T) {
    if (!!data) {
      res.type('application/json')
      return res.status(201).json(data)
    } else {
      return res.sendStatus(200)
    }
  }
  
  public notFound(res: Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      404,
      message ? message : 'Not found',
    )
  }

  public fail(res: Response, error: Error | string) {
    console.log(error)
    return res.status(500).json({
      message: error.toString(),
    })
  }
}
