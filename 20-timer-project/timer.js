// Class Timer
class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // Optional Callbacks
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    // When buttons are click, start or pause are called
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  // Start Timer
  start = () => {
    // Check if onComplete was called
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }

    this.tick();
    this.interval = setInterval(this.tick, 20);
  };

  // Pause Timer
  pause = () => {
    clearInterval(this.interval);
  };

  // Countdown Timer
  tick = () => {
    // Stops the timer at 0
    if (this.timeRemaining <= 0) {
      this.pause();

      // Check if onComplete was called
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      // this.timeRemaining(this.timeRemaining - 0.02)
      this.timeRemaining = this.timeRemaining - 0.02;

      // Check if onComplete was called
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  // Retrieve a variable from class
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  // Set the value
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
