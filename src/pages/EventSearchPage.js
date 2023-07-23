import { useEffect, useState } from 'react';
import { fetchEventsByName } from '../servises/eventsAPI';
import { Link, useSearchParams, Outlet, useLocation } from 'react-router-dom';

const EventSearchPage = () => {
  const [event, setEvent] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventName = searchParams.get('eventName');
  const location = useLocation();

  useEffect(() => {
    if (eventName === '' || eventName === null) {
      return;
    }

    fetchEventsByName(eventName).then(setEvent).catch(console.log);
  }, [eventName]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ eventName: e.target.elements.eventName.value });
    // form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventName" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {event &&
          event.map(({ id, name }) => (
            <li key={id}>
              <Link state={{ from: location }} to={`${id}`}>
                {name}
              </Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </>
  );
};

export default EventSearchPage;
