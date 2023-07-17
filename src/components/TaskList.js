import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './UpdateTask';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTask ,removeTaskFromList} from '../slices/TaskSlices';




const TaskList = () => {

  //use selector for show state data
const{taskList}=useSelector((state)=>state.tasks)

// import dispatch for update data to selectTask object
const dispatch=useDispatch()


  // this is for bootstrap modal
 const [modalShow,setModalShow]=useState(false)

 //update button function
    const UpdateTask=(task)=>{
        console.log("update-task")
        setModalShow(true)
        dispatch(setSelectedTask(task))
    }
    
    //delete button function
    const deleteTask=(task)=>{
        console.log("delete-task")
        dispatch(removeTaskFromList(task))
    }
  return (
    <>
     <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          taskList && taskList.map((task,index)=>{
            return(
              <tr className='text-center' key={task.id}>
              <td>{index+1}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
               <Button variant="warning" className='mx-3' onClick={()=>UpdateTask(task)}><i className="bi bi-pencil-square"></i></Button>
              <Button variant="danger" onClick={()=>deleteTask(task)}><i className="bi bi-x-octagon-fill"></i></Button></td>
            </tr>
            )
          })     }
        {/* <tr className='text-center'>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
           <Button variant="warning" className='mx-3' onClick={()=>UpdateTask()}><i className="bi bi-pencil-square"></i></Button>
          <Button variant="danger" onClick={()=>deleteTask()}><i className="bi bi-x-octagon-fill"></i></Button></td>
        </tr> */}
    
      </tbody>
    </Table>

    
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    
    </>
   
  )
}

export default TaskList