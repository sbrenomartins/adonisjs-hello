import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from '../../app/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.create({
      email: 'sbrenomartins@gmail.com',
      password: '1234567oito',
    })
  }
}
