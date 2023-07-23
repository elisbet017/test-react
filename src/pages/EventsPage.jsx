import { useEffect, useState } from 'react';
import { fetchEvents } from '../servises/eventsAPI';
import { Link, Outlet } from 'react-router-dom';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents()
      .then(res => setEvents(res))
      .catch(error => console.log(error.message));
  }, []);
  return (
    <section>
      <ul>
        {events.length !== 0 && events.map(({ id, name }) => (
          <li key={id}>
            <Link to={`${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Outlet/>
    </section>
  );
};

export default EventsPage;
