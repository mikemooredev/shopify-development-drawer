export const dispatch = (element, eventName, bubbles = true) => {
  element.dispatchEvent(new CustomEvent(eventName, {
    bubbles
  }))
}

export const listen = (element, eventName, callback = () => {}) => {
  element.addEventListener(eventName, callback)
}

export const ucFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
