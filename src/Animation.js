export function createAnimation(value, duration) {
    return {
        fromValue: value,
        toValue: value,
        value: value,
        startTime: 0,
        duration: duration,
        delay: 0
    }
}

export function play(anim, toValue) {
    anim.startTime = time;
    anim.toValue = toValue;
    anim.fromValue = anim.value;
}

export function updateAnimation(anim) {
    if (anim.value === anim.toValue) return false;
    var progress = ((time - anim.startTime) - anim.delay) / anim.duration;
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;
    var ease = -progress * (progress - 2);
    anim.value = anim.fromValue + (anim.toValue - anim.fromValue) * ease;
    return true;
}