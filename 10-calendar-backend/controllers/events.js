const express = require('express');

const getEvents = (req, res = response) => {
  //const {events} = req.body;

  res.json({
    ok: true,
    msg: 'getEvents'
  })
};

const createEvent = (req, res = response) => {
  // verificar el evento
  console.log(req.body);
  
  res.json({
    ok: true,
    msg: 'createEvent'
  })
};

const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'updateEvent'
  })
};

const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'deleteEvent'
  })
};


module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}