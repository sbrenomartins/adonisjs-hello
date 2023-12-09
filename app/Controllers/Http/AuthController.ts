import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthValidator from '../../Validators/auth/AuthValidator'

export default class AuthController {
  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(AuthValidator)

    const token = await auth.attempt(data.email, data.password, {
      expiresIn: '1 day',
    })

    return token
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
