import AnimationLoop from './AnimationLoop';


export default class Animated {
	constructor(value, duration, onAnimation) {
		this.onAnimation = onAnimation;
		this.fromValue = value;
		this.toValue = value;
		this.value = value;
		this.startTime = 0;
		this.duration = duration;
		this.delay = 0;
	}

	playFrom(fromValue, toValue) {
		this.value = fromValue;
		this.play(toValue);
	}

	play(toValue) {
		this.startTime = AnimationLoop.time;
		this.toValue = toValue;
		this.fromValue = this.value;
	}

	update() {
		const result = this._update();
		result && this.onAnimation && this.onAnimation();
		return result;
	}

	_update() {
		if (this.value === this.toValue) return false;
		let progress = ((AnimationLoop.time - this.startTime) - this.delay) / this.duration;
		if (progress < 0) progress = 0;
		if (progress > 1) progress = 1;
		const ease = -progress * (progress - 2);
		this.value = this.fromValue + (this.toValue - this.fromValue) * ease;
		return true;
	}
}


export function createAnimator() {
	const animations = [];
	const opts = {
		active: false,
	};

	function createAnimation(value, duration, onAnimation) {
		const animation = new Animated(value, duration, onAnimation)
		animations.push(animation);
		return animation;
	}

	function removeAnimation(animation) {
		const index = animations.indexOf(animation);
		if (index > -1) {
			animations.splice(index, 1);
		}
	}

	function updateAnimations() {
		const count = animations.length;
		let isActive = false;
		for (let i = 0; i < count; i++) {
			isActive = animations[i].update() || isActive;
		}
		opts.active = isActive;
		return isActive;
	}

	return {
		opts,
		createAnimation,
		removeAnimation,
		updateAnimations,
	}
}