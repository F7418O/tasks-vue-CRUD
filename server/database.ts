import { connect } from "mongoose"

export const startConnections = async ()=>{
    const db = await connect('mongodb://localhost/tasks-vue')
    console.log(db.connection.name)
}