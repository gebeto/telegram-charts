import Globals from '../Globals';


function createAnimationLoop() {
	const animationHandlers = [];

	function loop(loopTime) {
		Globals.time = loopTime
		for (let i = 0; i < animationHandlers.length; i++) {
			animationHandlers[i](loopTime);
		}
		requestAnimationFrame(loop);
	};
	requestAnimationFrame(loop);

	return {
		add(handler) {
			animationHandlers.push(handler);
		},
		remove(handler) {
			const index = animationHandlers.indexOf(handler);
			if (index > -1) {
				animationHandlers.splice(index, 1);
			}
		},
	}
}


const animationLoop = createAnimationLoop();


export default animationLoop;