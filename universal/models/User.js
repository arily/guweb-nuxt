// these meant to be used in both client and server,
// typedef are an example (came from mongoose)
const { json, vue, populate } = require('./model-factory')

const user = {
  id: { type: Number, default: -1, required: true, unique: true /*, increment: true  (mongodb do not have incremental fields) */ },
  name: { type: [Number, String] },
  nameSafe: { type: [Number, String] }
}

module.exports = {
  typeDef: user,
  default: {
    get json () {
      return json(user)
    },
    get vue () {
      return vue(user)
    }
  },
  populate (data) {
    return populate(user, data)
  }
}
