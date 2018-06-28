const uuid = require('uuid/v4')
const dbzChar = [{id: uuid(), name: 'Goku', race: 'Saiyan', strongest: 'Super Saiyan 3', signature: 'Kamehameha Wave'}, { id: uuid(), name: 'Vegeta', race: 'Saiyan', signature: 'Big Bang Attack', strongest: 'Super Saiyan 2' }, {id: uuid(), name: 'Piccolo', race: 'Namekian', signature: 'Special Beam Cannon', strongest: `He doesn't power up, the ninny.`}, {id: uuid(), name: 'Frieza', race: 'Frieza Race', strongest: 'Mecha Frieza', signature: 'Death Cannon'}, {id: uuid(), name: 'Cell', race: 'Android', strongest: 'Perfect Cell', signature: 'Kamehameha Wave'}]

function getAll(){
  return dbzChar
}

function getOne(id){
  let data = dbzChar.find(element => element.id === id)
  let errors = []
  let response
  if (!data){
    errors.push('error')
    response = {errors}
  } else{
    response = data
  }
  return response
}

function create(input){
  let name = input.name
  let race = input.race
  let strongest = input.strongest
  let signature = input.signature
  let errors = []
  let response
  if (!name || !race || !strongest || !signature){
    errors.push('Error')
    response = {errors}
  } else {
  let newCharacter = {name, race, strongest, signature}
  newCharacter.id = uuid()
  dbzChar.push(newCharacter)
  response = newCharacter
  }
  return response
}

function update(input, id){
  let name = input.name
  let race = input.race
  let strongest = input.strongest
  let signature = input.signature
  let errors = []
  let response
  if (!name || !race || !strongest || !signature){
    errors.push('Error')
    response = {errors}
  } else {
    let index = dbzChar.findIndex(element=>element.id=== id)
    dbzChar[index].name = name
    dbzChar[index].race = race
    dbzChar[index].strongest = strongest
    dbzChar[index].signature = signature

    response = dbzChar[index]
  }

  return response
}

function remove(id){
  let data = dbzChar.find(element => element.id === id)
  let index = dbzChar.indexOf(data)
  dbzChar.splice(index, 1)
  return data
}

module.exports = {getOne, getAll, create, update, remove}
