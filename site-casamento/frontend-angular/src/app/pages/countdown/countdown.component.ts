import { Component, ElementRef, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { animate } from '@motionone/dom';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  standalone: true
})
export class CountdownComponent implements OnInit, OnDestroy {
  targetDate: Date = new Date('2026-04-25T16:40:00');
  days = '00';
  hours = '00';
  minutes = '00';
  seconds = '00';

  private intervalId: any;

  @ViewChildren('flipCard') flipCards!: QueryList<ElementRef>;

  ngOnInit() {
    this.updateCountdown();
  }

  ngAfterViewInit() {
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance <= 0) {
      this.setTime('00', '00', '00', '00');
      clearInterval(this.intervalId);
      return;
    }

    var remainingDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    var remainingHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.animateFlipIfChanged(this.days, this.formatNumber(remainingDays), 0);
    this.animateFlipIfChanged(this.hours, this.formatNumber(remainingHours), 1);
    this.animateFlipIfChanged(this.minutes, this.formatNumber(remainingMinutes), 2);
    this.animateFlipIfChanged(this.seconds, this.formatNumber(remainingSeconds), 3);

    this.setTime(this.formatNumber(remainingDays), this.formatNumber(remainingHours), this.formatNumber(remainingMinutes), this.formatNumber(remainingSeconds));
  }

  private setTime(days: string, hours: string, minutes: string, seconds: string) {
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  private formatNumber(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  private animateFlipIfChanged(oldValue: string, newValue: string, index: number) {
    if (oldValue !== newValue) {
      const el = this.flipCards.toArray()[index];
      if (!el) return;
      
      animate(el.nativeElement, {
        rotateX: [0, -180],
        opacity: [1, 0]
      }, {
        duration: 0.15,
        easing: 'ease-in'
      }).finished.then(() => {
        animate(el.nativeElement, {
          rotateX: [180, 0],
          opacity: [0, 1]
        }, {
          duration: 0.15,
          easing: 'ease-out'
        });
      });
    }
  }
}
