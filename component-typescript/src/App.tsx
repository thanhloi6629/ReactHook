import React,{useState,useCallback} from 'react';
import './App.css';
import PrimaryButton from 'components/atoms/Button/PrimaryButton';
import Accordion from 'components/molecules';
import { grayScale } from 'components/styles';
import BodyText from 'components/atoms/BodyText';
import { Console } from 'console';

const Button:React.FC<any> = ({children,...props}) =>{
  return <button {...props}>
    {children}
  </button>
}
function App() {
  const [count,setCount] = useState<number>(0)
  // fetch -> progressing -> compile -> calculate => value
  // fetch -> progressing -> compile -> calculate => value => useMemo
  const handleInc = useCallback(() => {
    setCount(count+1)
  },[count])
  const handleDesc = useCallback(() => {
    setCount(count-1)
  },[count])
  return (
    <div className="App">
      <Accordion text="loivo" color={grayScale.gray100} callBack={() => {}}>
        <BodyText> bodytext Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, nihil in ipsa sequi culpa ullam ratione repellat excepturi esse molestiae itaque ab autem! Iste dolorum qui dolor ipsam. Ducimus, in.</BodyText>
      </Accordion>
      <Button onClick={handleInc}>
        Inc
      </Button>
      <Button onClick={handleDesc}>
        Desc
      </Button>
      {count}
      
    </div>
  );
}

export default App;
