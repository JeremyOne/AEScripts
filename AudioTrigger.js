//A script to trigger a fading effect based on keyframes generated from audio in After Effects CC 2015

threshold = 45.0;  //Volume level to trigger from
maxValue = 100.0;  //Max value to output
triggerLength = 5; //Number of frames to transition for

audioLevel = thisComp.layer("Audio Amplitude").effect("Both Channels")("Slider");
triggered = false;
frame = Math.round(time / thisComp.frameDuration);
frameCountdown = triggerLength;

while (frameCountdown > 0 && frame >= 0 && triggered == false){
  frameTime = frame * thisComp.frameDuration;
  if (audioLevel.valueAtTime(frameTime) > threshold){
	  triggered = true;
  }
  frameCountdown--;
  frame--;
}

(frameCountdown / triggerLength) * maxValue;
