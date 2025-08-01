function createAnimationLoop() {
  const animationHandlers = [];

  const publicInterface = {
    time: 0,
    add(handler) {
      animationHandlers.push(handler);
    },
    remove(handler) {
      const index = animationHandlers.indexOf(handler);
      if (index > -1) {
        animationHandlers.splice(index, 1);
      }
    },
  };

  function loop(loopTime) {
    publicInterface.time = loopTime;
    for (let i = 0; i < animationHandlers.length; i++) {
      animationHandlers[i](loopTime);
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  return publicInterface;
}

const animationLoop = createAnimationLoop();

export default animationLoop;
