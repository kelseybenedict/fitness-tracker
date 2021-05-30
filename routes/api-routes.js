// requiring express and workout model to use for routing
const router = require('express').Router();
const Workout = require('../models/workout.js');

// route for creating new workout -- POST
router.post('/api/workouts', (req, res) => {
    Workout.create({})
      .then((workouts) => {
        res.json(workouts);
      })
      // error handlinga
      .catch((err) => {
        res.json(err);
      });
  });

// route for getting all workouts with their duration -- GET
router.get('/api/workouts', (req, res) => {
    // referenced https://docs.mongodb.com/manual/aggregation/
    Workout.aggregate([
      {
        // adding the field to include the duration of the exercise
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration',
          },
        },
      },
    ])
      .then((workouts) => {
        res.json(workouts);
      })
      // error handling
      .catch((err) => {
        res.json(err);
      });
  });
// route for updating workout by ID -- PUT
// route for getting workouts in range -- GET
// route for deleting workouts -- DELETE