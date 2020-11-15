import { db } from 'src/lib/db'

export const items = () => {
  return db.item.findMany()
}

export const itemsQuery = (rawQuery) => {
  console.log('/api/src/servicse/items/items.js rawQuery', rawQuery)
  var queries = rawQuery.split('^');
  var queryObj = {};
  queries.forEach((query)=>{
    //e.g. date!=2020-10-10
    //e.g. author=Bart Simpson
    var queryArr = query.split('=');
    var field = queryArr[0];
    var operator = 'equals';
    var value = queryArr[1];
    if(field.indexOf('!')>0){
      operator = 'not';
      field = field.replace('!','');
      queryObj[field] = {};
    } else {
      operator = 'equals';
      queryObj[field] = {};
    }
    queryObj[field][operator] = value;
    var operator = 'equals';
    if(query.indexOf('!=')>0){
      operator = 'not'

    }
  })
  console.log('/api/src/servicse/items/items.js queryObj', queryObj)
  return db.item.findMany({
    where: {}
  })
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
