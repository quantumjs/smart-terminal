# smart-terminal

It sits unobtrusively on the bottom right hand of the screen, and lets users know its listening. If something interesting happens
it performs its magic to let the users know what happened.

## installation
You can install into your application by running 
npm install --save-dev smart-terminal

## Why

I made this terminal for my own consumption, but you are free to use it too!

## Usage

npm install --save smart-terminal

```typescript
import SmartTerminal from 'smart-terminal'

var smartTerminal = new SmartTerminal(null, null)
smartTerminal.show()
smartTerminal.appendMessage("Some message")
```

If you want to show some pending operation you can do
`smartTerminal.showPending()`

You can also chain stuff:
`smartTerminal.clear().appendMessage("Some message")`

## Features

* It writes text
* Has fluent style api

## Demo

  [Basic usage](https://quantumjs.github.io/smart-terminal/demo/browserImport/)

## Roadmap

Gradual typing on output text to give it a geeky feel
