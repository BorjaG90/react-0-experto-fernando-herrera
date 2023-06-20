const express = require('express');
const Event = require('../models/Event.model');

const getEvents = async(req, res = response) => {
  const events = await Event.find()
    .populate('user', 'name');

  res.json({
    ok: true,
    events
  })
};

const createEvent = async(req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;
    const eventSaved = await event.save();
    res.json({
      ok: true,
      event: eventSaved
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    });
  }

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