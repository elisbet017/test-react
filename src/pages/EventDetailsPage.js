import useFetchEvent from 'hooks/useFetchEvent';
import { useLocation, useNavigate } from 'react-router-dom/dist';
function EventDetailsPage() {
  const event = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <>
      {event && (
        <div>
          <button
            onClick={() => {
              navigate(location.state?.from ?? '/', { replace: true });
            }}
            type="button"
          >
            Go back
          </button>

          <p>{event.name}</p>
          <img src={event.images[0].url} width="300" alt="" />
          <p>{event.classifications[0].genre.name}</p>
          <p>{event.classifications[0].subGenre.name}</p>
        </div>
      )}
    </>
  );
}

export default EventDetailsPage;
