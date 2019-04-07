class Animated {
	constructor(value, duration) {
        this.fromValue = value;
        this.toValue = value;
        this.value = value;
        this.startTime = 0;
        this.duration = duration;
        this.delay = 0;
	}

	animate(toValue) {
		this.startTime = time;
		this.toValue = toValue;
		this.fromValue = this.value;
	}

	updateAnimation() {
		if (this.value === this.toValue) return false;
		var progress = ((time - this.startTime) - this.delay) / this.duration;
		if (progress < 0) progress = 0;
		if (progress > 1) progress = 1;
		var ease = -progress * (progress - 2);
		this.value = this.fromValue + (this.toValue - this.fromValue) * ease;
		return true;
	}
}


export default Animated;