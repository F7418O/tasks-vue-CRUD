import {Schema, model} from 'mongoose'

const Task = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    descriptions: {
        type: String,
        required: true,
        trim: true
    },
    done:{
        type: Boolean,
        default: false
    }
})

export default model('Task', Task)

