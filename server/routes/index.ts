import { Router } from 'express'
import  Task from '../models/Task'

const router = Router()

router.get('/tasks', async (req, res) => {
  const tasks = await Task.find()

  res.send(tasks)
})

router.post('/tasks', async (req, res) => {
    const { title, descriptions } = req.body

    const task = new Task({
        title,
        descriptions
    })

    await task.save()
    return res.json(task)
})

router.get('/tasks/:id', async (req, res) => {
    const task = await Task.findById(req.params.id)
    return res.json(task)
})

router.delete('/tasks/:id', async (req, res) => {
    const taskRemoved = await Task.findByIdAndDelete(req.params.id)

    res.send('Delete task' + taskRemoved)
})

router.put('/tasks/:id', async (req, res) => {
    const taskUpdate = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.send('Updated task' + taskUpdate)
})

export default router;