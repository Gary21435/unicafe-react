import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick}>
        {text}
      </button>
    </>
  );
};

// every Stat will be a tr>td+td 
const Stat = ({ text, num }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{num}</td>
    </tr>
  );
};

// const All = ({ all }) => <p>{all}</p>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0.0)
  const [pos, setPos] = useState(0)

  const effects = {
    good: 1,
    neutral: 0,
    bad: -1
  }

  const handleClick = (type) => {
    let goodi = good;
    if (type === 'good') {
      goodi = good+1;
      setGood(goodi);
    }
    if (type === 'neutral') setNeutral(neutral+1);
    if (type === 'bad') setBad(bad+1);
    const alli = all+1;
    setAll(alli);
    setAvg((avg*(all) + effects[type])/alli);
    setPos(goodi/alli*100);
  }

  return (
    <>
      <h1>Give us feedback</h1>
      <div>
        <Button text="good" onClick={() => handleClick("good")}/>
        <Button text="neutral" onClick={() => handleClick("neutral")}/>
        <Button text="bad" onClick={() => handleClick("bad")}/>
      </div>
      <h1>Statistics</h1>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <Stat text="good" num={good}/>
            <Stat text="neutral" num={neutral}/>
            <Stat text="bad" num={bad}/>
            <Stat text="all" num={all}/>
            <Stat text="average" num={avg}/>
            <Stat text="positive" num={pos+' %'} />
          </tbody>
        </table>
      )}
      
    </>
  )
}

export default App