import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice";
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState } from "../../fixtures/calendarStates";

describe('Pruebas en calendarSlice', () => {
  test('debe de regresar el estado por defecto', () => {
    expect(calendarSlice.getInitialState()).toEqual(initialState);
  });

  test('onSetActiveEvent de activar el event', () => {
    const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]));
    expect(state.activeEvent).toEqual(events[0]);
  });

  test('onAddNewEvent debe de agregar el evento', () => {
    const newEvent = {
      id: '3',
      title: 'Cumpleaños de Fer',
      notes: 'Alguna nota de Fer',
      start: new Date('2022-04-05 13:00:00'),
      end: new Date('2022-04-05 15:00:00')
    };

    const state = calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEvent));
    expect(state.events).toEqual([...events, newEvent]);
  });

  test('onUpdateEvent debe de actualizar el evento', () => {
    const updatedEvent = {
      id: '1',
      title: 'Cumpleaños de Alguien',
      notes: 'Alguna nota de Alguien',
      start: new Date('2022-04-05 13:00:00'),
      end: new Date('2022-04-05 15:00:00')
    };

    const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updatedEvent));
    expect(state.events).toContain(updatedEvent);
  });

  test('onDeleteEvent debe de borrar el evento activo', () => {
    const state = calendarSlice.reducer(calendarWithActiveEventState, onDeleteEvent());
    expect(state.activeEvent).toBe(null);
    expect(state.events).not.toContain(events[0]);
  });

  test('onLoadEvents debe de establecer los eventos', () => {
    const state = calendarSlice.reducer(initialState, onLoadEvents(events));
    expect(state.isLoadingEvents).toBeFalsy();
    expect(state.events).toEqual(events);

    const newState = calendarSlice.reducer(state, onLoadEvents(events));
    expect(newState.events.length).toBe(events.length);

  });

  test('onLogoutCalendar debe de limpiar el estado', () => {
    const state = calendarSlice.reducer(calendarWithActiveEventState, onLogoutCalendar());
    expect(state).toEqual(initialState);
  });
});