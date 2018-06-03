import * as CONST from './../../app/constants'
import Slot from './../../entity/particles-spaceship/Slot'
import Spaceship from './../../entity/particles-spaceship/Spaceship'

export const spaceship = [
  new Spaceship()
    .setModelKey(CONST.KEY_SPACESHIP_1)
    .addSlot(
      new Slot()
        .setParticleId('a546531f-a38e-43db-8604-06b3b36d7291')
        .setType(Slot.TYPE_ENGINE)
    )
    .addSlot(
      new Slot()
        .setParticleId('4443c766-ccd8-4bff-b12d-8353bc024617')
        .setType(Slot.TYPE_GUN)
    )
    .addSlot(
      new Slot()
        .setParticleId('4443c766-ccd8-4bff-b12d-8353bc024617')
        .setType(Slot.TYPE_GUN)
    )
    .addSlot(
      new Slot()
        .setType(Slot.TYPE_GUN_TURRET)
    )
    .setId('842d5a80-6880-4047-b10b-a69850cf577b'),
  new Spaceship()
    .setModelKey(CONST.KEY_SPACESHIP_2)
    .addSlot(
      new Slot()
        .setParticleId('a546531f-a38e-43db-8604-06b3b36d7291')
        .setType(Slot.TYPE_ENGINE)
    )
    .addSlot(
      new Slot()
        .setParticleId('4443c766-ccd8-4bff-b12d-8353bc024617')
        .setType(Slot.TYPE_GUN)
    )
    .addSlot(
      new Slot()
        .setParticleId('4443c766-ccd8-4bff-b12d-8353bc024617')
        .setType(Slot.TYPE_GUN)
    )
    .addSlot(
      new Slot()
        .setType(Slot.TYPE_GUN_TURRET)
    )
    .setId('c4148d8b-d1f0-4a51-96c8-7fa28c767813'),
  new Spaceship()
    .setModelKey(CONST.KEY_SPACESHIP_3)
    .addSlot(
      new Slot()
        .setParticleId('a546531f-a38e-43db-8604-06b3b36d7291')
        .setType(Slot.TYPE_ENGINE)
    )
    .addSlot(
      new Slot()
        .setParticleId('4443c766-ccd8-4bff-b12d-8353bc024617')
        .setType(Slot.TYPE_GUN)
    )
    .addSlot(
      new Slot()
        .setParticleId('4443c766-ccd8-4bff-b12d-8353bc024617')
        .setType(Slot.TYPE_GUN)
    )
    .addSlot(
      new Slot()
        .setType(Slot.TYPE_GUN_TURRET)
    )
    .setId('4cfb2c5e-475d-4113-ad7e-929e84d41b60')
]