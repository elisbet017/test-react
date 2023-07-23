import useFetchEvent from '../../hooks/useFetchEvent';
import { Link } from 'react-router-dom/dist';
import { useLocation } from 'react-router-dom/dist';
const EventSubPage = () => {
  const location = useLocation();
  const event = useFetchEvent();
  console.log(event);
  return (
    <>
      {event && (
        <>
          <p>{event.name}</p>
          <img src={event.images[0].url} alt="" width="300" />
          <Link state={location.state} to="details">
            Details
          </Link>
        </>
      )}
    </>
  );
};

export default EventSubPage;
