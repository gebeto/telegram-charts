import Globals from '../Globals';
import AnimationLoop from './AnimationLoop';

let animatorsCount = 0;

export default class Animated {
	constructor(value, duration) {
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
		this.startTime = Globals.time;
		this.toValue = toValue;
		this.fromValue = this.value;
	}

	update() {
		if (this.value === this.toValue) return false;
		var progress = ((Globals.time - this.startTime) - this.delay) / this.duration;
		if (progress < 0) progress = 0;
		if (progress > 1) progress = 1;
		var ease = -progress * (progress - 2);
		this.value = this.fromValue + (this.toValue - this.fromValue) * ease;
		return true;
	}
}


export function createAnimator() {
	animatorsCount++;
	console.log('A', animatorsCount)
	const animations = [];

	function createAnimation(value, duration) {
		const animation = new Animated(value, duration)
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
		for (let i = 0; i < count; i++) {
			animations[i].update();
		}
	}

	return {
		createAnimation,
		removeAnimation,
		updateAnimations,
	}
}


export function ValueAnimator(obj, key, duration) {
	const animated = new Animated(obj[key], duration);

	// function loop() {
	// 	// const res = animated.update();
	// 	if (animated.started && !animated.ended) {
	// 		obj[key] = animated.value;
	// 	}
	// }

	// AnimationLoop.add(loop);

	return animated;
}