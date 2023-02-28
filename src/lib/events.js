export const dispatch = (element, eventName, bubbles = true) => {
  element.dispatchEvent(new CustomEvent(eventName, {
    bubbles
  }))
}

export const listen = (element, eventName, callback = () => {}) => {
  element.addEventListener(eventName, callback)
}
