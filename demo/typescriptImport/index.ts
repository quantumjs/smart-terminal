import SmartTerminal from 'smart-terminal'


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
  component.setTimeTillCloseAfterAppending(199000).appendMessage("Some message<br> on several lines, monospaced")
}
function startPending() {
  component.startPending()
}
function stopPending() {
  component.stopPending()
}
