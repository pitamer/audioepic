export const resumeAudioContextIfInSuspendedState = (audioContext) => {
  // check if context is in suspended state (autoplay policy)
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
};
