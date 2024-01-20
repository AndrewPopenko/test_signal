import { NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalComponent {
  // actions: string[] = [];
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(() => this.counter() *2);

  constructor() {
    effect(() => console.log(this.counter()));
  }

  increment() {
    this.counter.update((oldCounter) => oldCounter + 1);
    // this.actions.push('INCREMENT');
    this.actions.update((oldActions: string[]) => [...oldActions, 'INCREMENT']);
  }

  decrement() {
    this.counter.update((oldCounter) => oldCounter - 1);
    // this.actions.push('DECREMENT');
    this.actions.set([...this.actions(), 'DECREMENT']);
  }
}
