import Timer from './Components/Timer/Timer.js';
import Button from './Components/Button/Button.js';
import { useState, useEffect } from 'react';
import Container from './Components/Container/Container.js';


const App = () => {

  const [time, setTime] = useState(0);

  const [timer, setTimer] = useState(
    null
  );

  const start = e => {
    e.preventDefault();
    setTimer(
      setInterval(() => {
        setTime(prevValue => prevValue + 1);
      }, 1)
    );
  }

  const stop = e => {
    e.preventDefault();
    if(timer) clearInterval(timer);
  }
  
  useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);

  return (
      <Container>
        < Timer time={time} />
          <Button onClick={start}>Start</Button>
          <Button onClick={stop}>Stop</Button>
          <Button onClick={() => {setTime(0); if(timer) clearInterval(timer);}}>Reset</Button>
      </Container>
  );
};

export default App;
