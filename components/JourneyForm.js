import { useState } from 'react'
import { useJourneysContext } from "../hooks/useJourneysContext"
import { useAuthContext } from "../hooks/useAuthContext"



const JourneyForm = () => {
  const { dispatch } = useJourneysContext()
  const { user } = useAuthContext()
  const [start, setStart] = useState('')
  const [startdate, setStartdate] = useState('')
  const [startenddate, setStartenddate] = useState('')
  const [startfile, setStartfile] = useState('')
  const [transport, setTransport] = useState('')
  const [departure, setDeparture] = useState('')
  const [arrival, setArrival] = useState('')
  const [transportfile, setTransportfile] = useState('')
  const [end, setEnd] = useState('')
  const [enddate, setEnddate] = useState('')
  const [endenddate, setEndenddate] = useState('')
  const [endfile, setEndfile] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const journey = {start, startdate, startenddate, startfile, transport, departure, arrival, transportfile, end, enddate, endenddate, endfile}
    
    const response = await fetch('/api/journeys', {
      method: 'POST',
      body: JSON.stringify(journey),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setError(null)
      setStart('')
      setStartdate('')
      setStartenddate('')
      setStartfile('')
      setTransport('')
      setDeparture('')
      setArrival('')
      setTransportfile('')
      setEnd('')
      setEnddate('')
      setEndenddate('')
      setEndfile('')

      setEmptyFields([])
      console.log('new journey added:', json)
      dispatch({type: 'CREATE_JOURNEY', payload: json})
    }

  }

  return (

    <form className="create" onSubmit={handleSubmit}> 
      <div className='start-point'>
      <h2>Starting Location</h2>
      <label>Start Point:</label>
      <input 
        type="text" 
        onChange={(e) => setStart(e.target.value)} 
        value={start}
        className={emptyFields.includes('start') ? 'error' : ''}
      />

      <label>Arrival Date:</label>
      <input 
        type="date" 
        onChange={(e) => setStartdate(e.target.value)} 
        value={startdate}
        className={emptyFields.includes('startdate') ? 'error' : ''}
      />

      <label>Departure Date:</label>
      <input 
        type="date" 
        onChange={(e) => setStartenddate(e.target.value)} 
        value={startenddate}
        className={emptyFields.includes('startenddate') ? 'error' : ''}
      />

      <label>File:</label>
      <input 
        type="text" 
        onChange={(e) => setStartfile(e.target.value)} 
        value={startfile} placeholder="(hotel.pdf)"
        className={emptyFields.includes('startfile') ? 'error' : ''}
      />
      </div>

      <div className='transport-point'>
      <h2>Transport</h2>
      <label>Mode of Transport:</label>
      <input 
        type="text" 
        onChange={(e) => setTransport(e.target.value)} 
        value={transport}
        className={emptyFields.includes('transport') ? 'error' : ''}
      />

      <label>Departure Time:</label>
      <input 
        type="time" 
        onChange={(e) => setDeparture(e.target.value)} 
        value={departure}
        className={emptyFields.includes('departure') ? 'error' : ''}
      />

      <label>Arrival Time:</label>
      <input 
        type="time" 
        onChange={(e) => setArrival(e.target.value)} 
        value={arrival}
        className={emptyFields.includes('arrival') ? 'error' : ''}
      />

      <label>File:</label>
      <input 
        type="text" 
        onChange={(e) => setTransportfile(e.target.value)} 
        value={transportfile} placeholder="(trainticket.pdf)"
        className={emptyFields.includes('transportfile') ? 'error' : ''}
      />

      </div>


      <div className='end-point'>
      <h2>Destination</h2>
      <label>End Destination:</label>
      <input
        type="text" 
        onChange={(e) => setEnd(e.target.value)} 
        value={end} 
        className={emptyFields.includes('end') ? 'error' : ''}
      />

      <label>Arrival Date:</label>
      <input 
        type="date" 
        onChange={(e) => setEnddate(e.target.value)} 
        value={enddate}
        className={emptyFields.includes('enddate') ? 'error' : ''}
      />

      <label>Departure Date:</label>
      <input 
        type="date" 
        onChange={(e) => setEndenddate(e.target.value)} 
        value={endenddate}
        className={emptyFields.includes('endenddate') ? 'error' : ''}
      />

      <label>File:</label>
      <input 
        type="text" 
        onChange={(e) => setEndfile(e.target.value)} 
        value={endfile} placeholder="(airbnb.pdf)"
        className={emptyFields.includes('endfile') ? 'error' : ''}
      />
      </div>

      <button>Add Journey</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default JourneyForm