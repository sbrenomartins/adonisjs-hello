import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from '../../app/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'admin@bmtecnologia.com',
        password: '1234567oito',
        role: 'admin',
        name: 'Admin',
      },
      {
        email: 'normal@bmtecnologia.com',
        password: '1234567oito',
        role: 'normal',
        name: 'Normal',
      },
    ])
  }
}
