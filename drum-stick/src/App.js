import logo from './logo.svg';
import {useState,useEffect} from "react"
import './App.css';

function App() {
  const [Activekey,setActivekey]=useState("")
  const [isOn, setIsOn] = useState(false);

  useEffect(()=>{
    document.addEventListener("keydown",(eve)=>{
      console.log(eve.key)
      playDrum(eve.key.toLocaleUpperCase())
    })
  })

  const drumArr = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];
  function playDrum(selector) {
    const audio = document.getElementById(selector);
    {isOn?audio.play():audio.pause()};
    setActivekey(selector)
  }
  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <div className='activekey'>{Activekey}</div> 
          <button className={`toggle-button ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
           {isOn ? 'Sound OFF' : 'Sound ON'}</button>
          <div className="drum-pads">
            {drumArr.map((arr) => (
              <div key={arr.src} onClick={() => playDrum(arr.text)} className="drum-pad" id={arr.src}>
                {arr.text}
                <audio className="clip" id={arr.text} src={arr.src}></audio>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;