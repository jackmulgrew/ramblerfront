import { useJourneysContext } from "../hooks/useJourneysContext"
import { useAuthContext } from "../hooks/useAuthContext"


// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const FilesDetails = ({ journey }) => {
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
        <div className="file-details">
            <h2>{journey.start} to {journey.end}</h2>
            <div className="row">
            <div className="col">
            <div className="fileone">
            <h4>Start</h4>
            <h5><strong> {journey.startfile}</strong></h5>
            <button onClick={handleClick1}>Download</button> 
            </div>
            </div>
            <div className="col">
            <div className="filetwo">
            <h4>Transport</h4>
            <h5><strong> {journey.transportfile}</strong></h5>
            <button onClick={handleClick2}>Download</button> 
            </div>
            </div>
            <div className="col">
            <div className="filethree">
            <h4>Destination</h4>
            <h5 className="file"><strong>{journey.endfile}</strong></h5> 
            <button onClick={handleClick3}>Download</button> 
                        </div>
            </div>
            </div>
        </div>
    )
}

export default FilesDetails