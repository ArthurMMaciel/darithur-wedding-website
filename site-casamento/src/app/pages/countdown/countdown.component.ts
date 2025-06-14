import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  targetDate = new Date('2026-04-25T00:00:00');
  days = '00';
  hours = '00';
  minutes = '00';
  seconds = '00';

  flip = {
    days: false,
    hours: false,
    minutes: false,
    seconds: false
  };

  private intervalId: any;

  ngOnInit() {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance <= 0) {
      this.days = this.hours = this.minutes = this.seconds = '00';
      clearInterval(this.intervalId);
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    this.days = this.pad(d);
    this.hours = this.pad(h);
    this.minutes = this.pad(m);
    this.seconds = this.pad(s);
  }

  pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  triggerFlip(unit: 'days' | 'hours' | 'minutes' | 'seconds', newValue: string) {
    if (this[unit] !== newValue) {
      this.flip[unit] = false;
      setTimeout(() => {
        this[unit] = newValue;
        this.flip[unit] = true;
      }, 10); // força o reflow da animação
    }
  }
}