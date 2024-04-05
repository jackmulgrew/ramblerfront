import { useJourneysContext } from "../hooks/useJourneysContext"
import { useAuthContext } from "../hooks/useAuthContext"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const JourneyDetails = ({ journey }) => {
    const { dispatch } = useJourneysContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) {
            return
        }

        const response = await fetch('/api/journeys/' + journey._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_JOURNEY', payload: json})
        }
    }

    function handleClick1() {
        alert('Starting Location File Downloaded!');
      }

      function handleClick2() {
        alert('Transport File Downloaded!');
      }

      function handleClick3() {
        alert('Destination Location File Downloaded!');
      }

    return (
        <div className="journey-details">
            <h2>{journey.start} to {journey.end}</h2>
            <div className="start">
            <h4>Starting Location</h4>
            <p><strong>{journey.start}</strong></p>
            <p>{journey.startdate} to {journey.startenddate}</p>
            <h5><strong> {journey.startfile}</strong></h5>
            <button onClick={handleClick1}>Download</button> 
            </div>
            <div className="transport">
            <h4>Transport</h4>
            <p><strong>{journey.transport}</strong></p>
            <p><strong>Leaving {journey.start} at {journey.departure} on {journey.startdate}</strong></p>
            <p><strong>Arriving in {journey.end} at {journey.arrival} on {journey.enddate} </strong></p>

            <h5><strong> {journey.transportfile}</strong></h5>
            <button onClick={handleClick2}>Download</button> 
            </div>
            <div className="destination">
            <h4>Destination</h4>
            <p><strong>{journey.end}</strong></p>
            <p>{journey.enddate} to {journey.endenddate}</p>
            <h5 className="file"><strong>{journey.endfile}</strong></h5> 
            <button onClick={handleClick3}>Download</button> 
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
            </div>
            <p>{formatDistanceToNow(new Date(journey.createdAt), {addSuffix: true })}</p>
        </div>
    )
}

export default JourneyDetails