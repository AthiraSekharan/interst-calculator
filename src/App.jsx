
import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  //create state to store data
  const [interst, setInterst] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)


  const [principleAmountValid,setPrincipleAmountValid]=useState(true)
  const [rateAmountValid,setRateAmountValid]=useState(true)
  const [yearAmountValid,setYearAmountValid]=useState(true)



  const handleReset = () => {
    console.log("inside handlevalidation");
    setInterst(0)
    setYear(0)
    setRate(0)
    setPrinciple(0)
    setPrincipleAmountValid(true)
    setRateAmountValid(true)
    setYearAmountValid(true)

  }

  const handleValidation = (tag) => {
    console.log("inside handlevalidation");
    const { value, name } = tag
    console.log(value, name);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^\d*\.?\d+$/)) {
      //valid
      if (name == "principle") {
        setPrinciple(value)
        setPrincipleAmountValid(true)
      } else if (name == "rate") {
        setRate(value)
        setRateAmountValid(true)
      } else {
        setYear(value)
        setYearAmountValid(true)
      }
    } else {
      //invalid
      if (name == "principle") {
        setPrinciple(value)
        setPrincipleAmountValid(false)

      } else if (name == "rate") {
        setRate(value)
        setRateAmountValid(false)

      } else {
        setYear(value)
        setYearAmountValid(false)

      }
    }
  }
  const handleCalculate =()=>{
    if(principle && rate && year){
      setInterst(principle*year*rate/100)
    }else{
      alert("Please fill the Form Completely")
    }
  }

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>

      <div style={{ width: '600px' }} className='bg-light p-5 rounded shadow'>
        <h3>SIMPLE INTERST APP</h3>
        <p>Calulate Your Simple Interst Easily</p>

        <div className='d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow flex-column text-light'>
          <h1>₹ {interst}</h1>
          <p className='fw-bolder'>Total Simple Interst</p>
        </div>



        <form className="mt-5">
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" value={principle || ""} name='principle' onChange={e => handleValidation(e.target)} />
          </div>
          {!principleAmountValid &&<div className='text-danger mb-3'>*invalid principle Amount</div>}

          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-rate" label="Rate Of Interst (p.a)%" variant="outlined" value={rate || ""} name='rate' onChange={e => handleValidation(e.target)} />
          </div>
          {!rateAmountValid &&<div className='text-danger mb-3'>*invalid rate Amount</div>}


          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-time" label="Time Period (Yr)" variant="outlined" value={year || ""} name='year' onChange={e => handleValidation(e.target)} />
          </div>

          {!yearAmountValid &&<div className='text-danger mb-3'>*invalid year Amount</div>}


          <Stack direction="row" spacing={2}>
            <Button disabled={!principleAmountValid || !rateAmountValid || !yearAmountValid} onClick={handleCalculate} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">CALCULATE</Button>
            <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} variant="outlined">RESET</Button>
          </Stack>
        </form>

      </div>    </div>
  )
}

export default App
