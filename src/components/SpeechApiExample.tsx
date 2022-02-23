import { FC, useEffect, useMemo, useState } from "react";
import Button from "./Button";

import { FaMicrophone } from "react-icons/fa";

import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

const SpeechApiExample = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [utteranceTxt, setUtteranceTxt] = useState<string>("");

  const [synth, voices] = useMemo(() => {
    const synth = window.speechSynthesis;

    const voices = synth.getVoices();

    return [synth, voices];
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <section>
      <h2>Speech API</h2>

      <h3>Speech recognition</h3>

      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={() => SpeechRecognition.startListening()}>Start</button>
      <button onClick={() => SpeechRecognition.stopListening()}>Stop</button>
      <button onClick={() => resetTranscript()}>Reset</button>
      <p>{transcript}</p>

      <h3>Text to Speech</h3>

      <div>
        <textarea
          value={utteranceTxt}
          onChange={(e) => setUtteranceTxt(e.target.value)}
        />

        <Button
          onClick={() => {
            const utterance = new SpeechSynthesisUtterance(utteranceTxt);
            synth.speak(utterance);
          }}
        >
          speak!
        </Button>
      </div>
    </section>
  );
};

export default SpeechApiExample;
