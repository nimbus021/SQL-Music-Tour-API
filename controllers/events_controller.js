//DEPENDENCIES
const events = require('express').Router()
const req = require('express/lib/request')
const db = require('../models')
const { Event } = db
const { Op } = require('sequelize')
const res = require('express/lib/response')

//FIND ALL EVENTS
events.get('/', async (req, res) =>  {
    try{
        const foundEvents = await Event.findAll({
            order: [['name', 'ASC']]
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC EVENT
events.get('/:id', async (req, res) => {
    try{
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE AN EVENT
events.post('/', async (req, res) =>  {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
    } catch(error) {
        res.status(500).json(error)
    }
})

//UPDATE AN EVENT
events.put('/:id', async (req, res) => {
    try {
        const updateEvent = await Event.update(req.body, {
            where: {event_id: req.params.id}
        })
        res.status(200).json({
            message: `Successfully update ${updateEvent} event(s)`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE AN EVENT
events.delete('/:id', async (req, res) =>  {
    try{
        const deletedEvents = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Succesffully deleted ${deletedEvents} event(s)`
        })
    } catch(error) {
        res.status(500).json(error)
    }
})

//EXPORT
module.exports = events