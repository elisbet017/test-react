import { useEffect, useState } from 'react';
import { fetchEventById } from '../servises/eventsAPI';
import { useParams } from 'react-router-dom';

const useFetchEvent = () => { 
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  useEffect(() => {
    fetchEventById(id).then(setEvent).catch(console.log);
  }, [id]);
  return event;
}

export default useFetchEvent;