// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onclickEventItem, activeId} = props
  const {imageUrl, name, location, id} = eventDetails

  const onselectEvent = () => {
    onclickEventItem(id)
  }

  const activeClass = activeId === id ? 'event-image active' : 'event-image'

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onselectEvent}>
        <img src={imageUrl} alt="event" className={activeClass} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
