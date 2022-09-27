const WorkEditPopUp = (props) => {
    const { editing, workArray, index } = props; 

    return (
        <div className="workPopUpContainer"> 
     <div>
             <label htmlFor='employer'>Employer</label>
             <input onChange={onemployerChange} value={} id="employer" type='text'></input>
           </div>  
           <div>
             <label htmlFor='start-date'>Start Date</label>
             <input  onChange={onWorkStartChange} value={} id='start-date' type='date'></input> 
           </div>
           <div>
             <label htmlFor='end-date'>End Date</label>
             <input onChange={onWorkEndChange} value={} id='end-date' type='date'></input>
           </div>
           <div>
             <label htmlFor='position'>Position</label>
             <input onChange={onPositionChange} value={} id='position' type='text'></input>
           </div>
        </div>
    )
}