import {IComponent} from 'vanilla-typescript'
import './index.pcss'

const times = {SHORT_TIME: 6000}

/**
 * Shows messages tp user
 * @constructor
 */
export default class SmartTerminal implements IComponent {

  private hostElement: HTMLElement
  private contentElement: HTMLElement
  private timeTillCloseAfterAppending: number = times.SHORT_TIME
  private pulseTypeNext: boolean = false

  static EVENTS = { //use this to communicate with the component via DOM events when you don't have a reference to it. See the readme
    APPEND_MESSAGE: "APPEND_MESSAGE",
    APPEND_MESSAGES: "APPEND_MESSAGES",
    START_PENDING: "START_PENDING"
  }

  constructor(contentFunction: () => void, onDestroyFunction: () => void) {

    this.hostElement = document.createElement('article')
    this.hostElement.title = "Hello, I will inform you of anything you need to know during your visit on this site."

    this.hostElement.innerHTML =
      `<div class="content">
     </div>`

    this.contentElement = <HTMLElement> this.hostElement.querySelector('.content')
    this.hostElement.className = 'smart-terminal'
    this.minimise()
  }

  show(): void {
    document.body.appendChild(this.hostElement)
  }

  revealForDuration() {
    this.hostElement.dataset["minimised"] = "false"
    setTimeout(function () {
      this.minimise()
    }.bind(this), this.timeTillCloseAfterAppending)
  }

  appendMessages(messages) {
    this.clear()
    this.stopPending()
    messages.forEach(message => {
      this.contentElement.innerHTML += `<p>${message}</p>`
    })
  }

  appendMessage(message) {
    this.clear()
    this.stopPending()
    const contentEl = this.hostElement.querySelector('.content')
    this.contentElement.innerHTML += `<p>${message}</p>`

    this.revealForDuration()
  }

  setTimeTillCloseAfterAppending(time: number): this {
    this.timeTillCloseAfterAppending = time
    return this
  }

  minimise() {
    this.hostElement.dataset["minimised"] = "true"
    return this
  }

  clear(): this {
    this.contentElement.innerHTML = ''
    this.minimise()
    return this
  }

  /**
   * Makes the satellite icon spin, tells the user something is happening.
   */
  startPending(): this {
    this.hostElement.dataset["pending"] = 'true'
    return this
  }

  /**
   * Makes the satellite icon stop spinning
   */
  stopPending(): this {
    this.hostElement.dataset["pending"] = 'false'
    return this
  }


  destroy(): void {
    this.hostElement.parentElement.removeChild(this.hostElement)
  }
}
