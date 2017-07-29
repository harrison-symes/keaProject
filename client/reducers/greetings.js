import rainbow from 'rainbow.js'

function greetings (state = rainbow(), action) {
  switch (action.type) {
    case 'RECEIVE_GREETINGS':
      return [...action.greetings]
    default:
      return state
  }
}

export default greetings
