import SmartTerminal from '../src/SmartTerminal'
import './common.css'

var component = new SmartTerminal(null, null)
component.show()

document.querySelector('#clearIt').addEventListener('click', function () {
  clearIt()
})
document.querySelector('#appendMessage').addEventListener('click', function () {
  appendMessage()
})
document.querySelector('#startPending').addEventListener('click', function () {
  startPending()
})
document.querySelector('#stopPending').addEventListener('click', function () {
  stopPending()
})

function clearIt() {
  component.clear()
}
function appendMessage() {
  component.setTimeTillCloseAfterAppending(5000).appendMessage("Some message<br> on several lines, monospaced")
}
function startPending() {
  component.startPending()
}
function stopPending() {
  component.stopPending()
}

document.body.addEventListener(SmartTerminal.EVENTS.APPEND_MESSAGE, function (event: CustomEvent) {
  component.appendMessage(event.detail)

})
let event = new CustomEvent(SmartTerminal.EVENTS.APPEND_MESSAGE,
  {detail: "this message came from a DOM event of type SmartTerminal.EVENTS.APPEND_MESSAGE"})

document.body.dispatchEvent(event)
