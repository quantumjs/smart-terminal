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

  constructor(contentFunction: () => void, onDestroyFunction: () => void) {

    this.hostElement = document.createElement('article')
    this.hostElement.dataset["minimised"] = "true"
    this.hostElement.title = "Hello, I will inform you of anything you need to know during your visit on this site."

    this.hostElement.innerHTML =
      `<div class="content">
     </div>`

    this.contentElement = <HTMLElement> this.hostElement.querySelector('.content')
    this.hostElement.className = 'smart-terminal'
  }

  show(): void {
    document.body.appendChild(this.hostElement)
  }

  revealForDuration() {
    this.hostElement.dataset["minimised"] = "false"
    setTimeout(function () {
      this.hostElement.dataset["minimised"] = "true"
    }.bind(this), this.timeTillCloseAfterAppending)
  }

  appendMessages(messages) {
    this.stopPending()
    if (this.pulseTypeNext) {

    } else {
      messages.forEach(message => {
        this.contentElement.innerHTML += `<p>${message}</p>`
      })
    }
    this.resetFancyStuff()
  }

  appendMessage(message) {
    this.stopPending()
    const contentEl = this.hostElement.querySelector('.content')

    if (this.pulseTypeNext) {

    } else {
      this.contentElement.innerHTML += `<p>${message}</p>`
    }

    this.revealForDuration()
    this.resetFancyStuff()
  }

  setTimeTillCloseAfterAppending(time: number): this {
    this.timeTillCloseAfterAppending = time
    return this
  }

  /**
   * gets called after any append message to default settings
   */
  resetFancyStuff() {
    this.pulseTypeNext = false
  }

  setPulseTypeNext(): this {
    this.pulseTypeNext = true
    return this
  }

  clear(): this {
    this.contentElement.innerHTML = ''
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
