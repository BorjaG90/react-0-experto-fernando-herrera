import { useDispatch, useSelector } from 'react-redux';
import { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onLoadEvents } from '../store/calendar/calendarSlice';
import { calendarApi } from '../api';
import { convertEventstoDateEvents } from '../helpers';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector(state => state.calendar);
  const { user } = useSelector(state => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async(calendarEvent) => {
    // TODO: llegar al backend

    if (calendarEvent._id) {
      // Actualizando
      dispatch(onUpdateEvent(calendarEvent));
    } else {
      // Creando
      const {data} = await calendarApi.post('/events', calendarEvent);
      dispatch(onAddNewEvent({
        ...calendarEvent,
        id: data.event.id,
        user
      }));
    }
  };

  const startDeletingEvent = () => {
    // TODO: llegar al backend
    dispatch(onDeleteEvent());
  }

  const startLoadingEvents = async() => {
    try {
      const {data} = await calendarApi.get('/events');
      const events = convertEventstoDateEvents(data.events);
      dispatch(onLoadEvents(events));
      console.log(events);
    } catch (error) {
      console.log('Error cargando eventos');
      console.log(error);
    }
  }

  return {
    //* Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //* Métodos
    setActiveEvent,
    startDeletingEvent,
    startLoadingEvents,
    startSavingEvent,
  }
}
