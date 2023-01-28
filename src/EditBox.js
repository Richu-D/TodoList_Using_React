import React from 'react'

const EditBox = ({setEditPanel,currentText,setcurrentText,handleSave}) => {
  return (
    <div className='editContainerOuter'>
    <div className='editContainerInner'>
        <div className='editContainer'>
        <input className='todoInput' type="text" value={currentText} onChange={(event)=>setcurrentText(event.target.value)} />
        <div className='editContainerButton'>
        <button className='editButtonCancel' onClick={()=>{setEditPanel(prev => !prev)}}>cancel</button>
        <button className='editButtonSave' onClick={()=>handleSave(currentText)}>save</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default EditBox