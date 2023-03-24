import React,{useState} from 'react'
import './App.css';

const quotes = [
  'It is often the small steps, not the giant leaps, that bring about the most lasting change.',
  'Education is the most powerful weapon which you can use to change the world.',
  'There is always light. If only were brave enough to see it. If only were brave enough to be it.',
  'If you want to lift yourself up, lift up someone else.',
  'I have learned not to allow rejection to move me.',
  'I scorched the earth with my talent and I let my light shine.',
  'Money Dosent buys happiness,, thats bullshitt!!'
]

function App() {

  const [quote , setQuote] = useState('')

  function randomizeQuote(){
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)
  }

  return (
    <div className="App">

      <div className='area'>
        <h2>{quote}</h2>
      </div>

      <button className='butt' onClick={randomizeQuote}>Time To Motivate</button>

    </div>
  );
}

export default App;
