import { useState } from 'react';
import './App.css';
import MyButton from './components/MyButton';
import ProfileCard from './components/ProfileCard';
import pfp from "./Assets/profileImg/Sufi.png"


const myAge = 20;
console.log(myAge);

function App() {
  const [Age, setAge] = useState(myAge);
  return (
    <>
      <h2 style={{color:"red"}}>
        {Age}
      </h2>
      <button onClick={()=>setAge(Age-1)}>-</button>
      <button onClick={()=>setAge(Age+1)}>+</button>
      
      <MyButton title="Buy Now!" color="red"/>
      <MyButton title="Buy Now!" color="Green"/>
      <ProfileCard img={pfp}  name="Muhaddis Rehman" title="Frontend React Developer" description="I am a Frontend React Web Developer currently working at SufiTravels. I love to code 24/7." />
      <ProfileCard img={pfp}  name="Arslan" title="Accountant and Manager" description="I am an Accountant and a Manager at SufiTravels."/>

    </>
  );
}

export default App;
