import { defineStore } from 'pinia'

interface CounterState {
  count: number
  incrementAmount: number
}

export const useCounterStore = defineStore('counter', {
  state: (): CounterState => ({
    count: 0,
    incrementAmount: 1
  }),

  getters: {
    doubleCount: (state): number => state.count * 2,
    currentCount: (state): number => state.count
  },

  actions: {
    increment(): void {
      this.count += this.incrementAmount
    },
    
    decrement(): void {
      this.count -= this.incrementAmount
    },
    
    setIncrementAmount(amount: number): void {
      this.incrementAmount = amount
    },
    
    reset(): void {
      this.count = 0
    }
  }
})