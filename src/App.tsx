import './App.scss';
import AlertLinear from "./components/AlertLinear";
import AlertSqr from "./components/AlertSqr";
import {useEffect, useRef, useState} from "react";
import {localStorage} from "./utils/localstorate";
import useInViewport from "./hooks/useInViewPort";

function App() {
  const alertLinearRef = useRef(null)
  const isAlertLinearInViewport = useInViewport(alertLinearRef)
  const [isAlertSqrShow, setIsAlertSqrShow] = useState(true)

  const handleAlertSqrClose = () => {
    setIsAlertSqrShow(false)
    localStorage.setSqrAlertState('hidden')
  }

  useEffect(() => {
    if (localStorage.getSqrAlertState() === 'hidden') {
      setIsAlertSqrShow(false)
    }
  }, [])


  return (
    <main className="App">
      <AlertLinear ref={alertLinearRef}/>
      <AlertSqr isShow={isAlertSqrShow && alertLinearRef?.current !== null && !isAlertLinearInViewport} onCloseClick={handleAlertSqrClose}/>
    </main>
  );
}

export default App;
