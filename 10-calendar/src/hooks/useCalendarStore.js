import { useDispatch, useSelector } from 'react-redux';
import { onSetActiveEvent, onAddNewEvent } from '../store/calendar/calendarSlice';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector(state => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async(calendarEvent) => {
    // TODO: llegar al backend

    // Correcto
    if (calendarEvent._id) {
      // Actualizando
    } else {
      // Creando
      dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime}));
    }
  };

  return {
    //* Propiedades
    activeEvent,
    events,

    //* Métodos
    setActiveEvent,
    startSavingEvent,
  }
}
