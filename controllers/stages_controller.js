//DEPENDENCIES
const stages = require('express').Router()
const req = require('express/lib/request')
const db = require('../models')
const { Stage } = db
const { Op } = require('sequelize')

//FIND ALL STAGES
stages.get('/', async (req, res) =>  {
    try{
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC BAND
stages.get('/:id', async (req, res) => {
    try{
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE A BAND
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newStage
        })
    } catch(err)  {
        res.status(500).json(err)
    }
})

//UPDATE A BAND
stages.put('/:id', async (req, res) => {
    try {
        const updateStage = await Stage.update(req.body, {
            where: {stage_id: req.params.id}
        })
        res.status(200).json({
            message: `Successfully updated ${updateStage} bands(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//DELETE A BAND
stages.delete('/:id', async (req, res) => {
    try {
        const deletedBands = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedBands} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//EXPORT
module.exports = stages