class Worker {
  constructor(stringUrl) {
    this.url = stringUrl
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    this.onmessage = () => {}
  }

  postMessage(msg) {
    this.onmessage(msg)
  }
}

window.Worker = Worker
