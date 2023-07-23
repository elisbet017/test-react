import useFetchEvent from '../../hooks/useFetchEvent';

const EventSubPage = () => {
  const event = useFetchEvent();
  console.log(event);
  return (
    <>
      {event && (
        <>
          <p>{event.name}</p>
          <img src={event.images[0].url} alt="" width='300'/>
        </>
      )}
    </>
  );
};

export default EventSubPage;
