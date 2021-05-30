// requiring mongoose so we can use it 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating schema
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            name: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                required: true,
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            duration: {
                type: Number,
                required: true,
            },
            distance: {
                type: Number,
            },
        },
    ],
});

// labeling model, exporting it into index
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
