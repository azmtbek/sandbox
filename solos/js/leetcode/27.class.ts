// 2694. Event Emitter

type Callback = (...args: unknown[]) => unknown;
type Subscription = {
  unsubscribe: () => void
}

class EventEmitter {
  eventCallbacksMap: Map<string, Map<number, Callback>> = new Map()
  subscribe(eventName: string, callback: Callback): Subscription {
    const x = this.eventCallbacksMap.get(eventName) || new Map()
    const l = x.size
    this.eventCallbacksMap.set(eventName, x.set(l, callback))

    return {
      unsubscribe: () => {
        x.delete(l)
        this.eventCallbacksMap.set(eventName, x)
      }
    };
  }

  emit(eventName: string, args: unknown[] = []): unknown {
    let res: unknown[] = []
    this.eventCallbacksMap.get(eventName)?.forEach((v: Callback, k: number) => {
      res.push(v(...args))
    })
    return res
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * * * Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */