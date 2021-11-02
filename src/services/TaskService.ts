import axios from "./axios";
import { AxiosResponse } from 'axios'
import { Task } from "../interfaces/Task";

const services = {
    createTask: async (task: Task) => {
        //Retornar tarea al frontend
        return await axios.post('/tasks', task)
    },
    
    getTasks: async ():Promise<AxiosResponse<Task[]>> => await axios.get('/tasks'),

    getTask: async (id: string):Promise<AxiosResponse<Task>> => await axios.get('/tasks/'+ id),

    updateTask: async (id: string, task: Task) => { await axios.put('/tasks/'+id, task) },

    deleteTask: async (id: string) => await axios.delete('/tasks/'+id)
}

export default services