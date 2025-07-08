let instance: TimerWorkManager | null = null;

export class TimerWorkManager {
  private worker: Worker;

  private constructor() {
    /*
      A classe não aceita mais que alguém 
      chame um new, pq o construtor é privado
    */

    this.worker = new Worker(new URL('./timerWorker.js', import.meta.url));
  }

  static getInstance() {
    if (!instance) {
      instance = new TimerWorkManager();
    }

    return instance;
  }

  postMessage(message: any) {
    this.worker.postMessage(message);
  }

  onmessage(cb: (e: MessageEvent) => void) {
    this.worker.onmessage = cb;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
