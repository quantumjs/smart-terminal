import {IComponent} from 'vanilla-typescript'
import './index'

const times = {SHORT_TIME: 6000}

/**
 * Shows messages tp user
 * @constructor
 */
export default class SmartTerminal implements IComponent {

  private hostElement: HTMLElement
  private contentElement: HTMLElement

  constructor(contentFunction: () => void, onDestroyFunction: () => void) {

    this.hostElement = document.createElement('article')
    this.hostElement.dataset["minimised"] = "true"
    this.hostElement.innerHTML =
      `<div class="content">
     </div>`

    this.contentElement = <HTMLElement> this.hostElement.querySelector('.content')
    this.hostElement.className = 'smart-terminal'
  }

  show(): void {
    document.body.appendChild(this.hostElement)
  }

  revealFor(time) {
    this.hostElement.dataset["minimised"] = "false"
    setTimeout(function () {
      this.hostElement.dataset["minimised"] = "true"
    }.bind(this), time)
  }

  appendMessages(messages) {
    messages.forEach(message => {
      this.contentElement.innerHTML += `<p>${message}</p>`
    })
  }



  appendMessage(message) {
    const contentEl = this.hostElement.querySelector('.content')
    this.contentElement.innerHTML += ` <p>${message}</p>`
    this.revealFor(times.SHORT_TIME)
  }

  destroy(): void {
    //todo
  }
}
