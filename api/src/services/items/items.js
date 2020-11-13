import { db } from 'src/lib/db'

export const items = () => {
  return db.item.findMany()
}

export const item = ({ id }) => {
  return db.item.findOne({
    where: { id },
  })
}

export const createItem = ({ input }) => {
  return db.item.create({
    data: input,
  })
}

export const updateItem = ({ id, input }) => {
  return db.item.update({
    data: input,
    where: { id },
  })
}

export const deleteItem = ({ id }) => {
  return db.item.delete({
    where: { id },
  })
}
