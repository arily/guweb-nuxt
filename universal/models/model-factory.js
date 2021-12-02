const availableType = [Number, String, Array, Object]
const typeValidator = (type, val) => (availableType.includes(type) && typeof val === typeof type()) || val === undefined || val === null
const recursiveBuilder = (typeDef, onField, onObject = recursiveBuilder, data) => {
  // target is not an object, return as it is
  if (typeof typeDef !== 'object') { return typeDef }

  // if target is not an typeDef do recursive on every variables
  if (!typeDef.type) {
    return Object.entries(typeDef).reduce((acc, [key, value]) => {
      acc[key] = onObject(value, onField, onObject, data?.[key])
      return acc
    }, {})
  }

  if (availableType.includes(typeDef.type) || Array.isArray(typeDef.type)) { return onField(typeDef, data) }
  throw new Error(`unknown type, got ${typeDef.type}`)
}

// create default json compatiable JS object
const jsonFieldBuilder = (field, data) => {
  if (field.required && !field.default) {
    return data || null
  } else {
    if (Array.isArray(field.type)) {
      if (field.type.some(item => !availableType.includes(item))) { throw new Error(`unknown types, got ${field.type}`) }
      if (!field.type.some(item => typeValidator(item, field.default))) { throw new Error('default value has wrong type') }
    } else if (!typeValidator(field.type, field.default)) { throw new Error('default value has wrong type') }
    return data ?? field.default ?? null
  }
}

// typeDef compatiable with vue
const vueFieldBuilder = field => field

module.exports = {
  json (typeDef) {
    return recursiveBuilder(typeDef, jsonFieldBuilder)
  },
  vue (typeDef) {
    return vueFieldBuilder(typeDef, vueFieldBuilder)
  },
  populate (typeDef, data) {
    return recursiveBuilder(typeDef, jsonFieldBuilder, recursiveBuilder, data)
  }
}
