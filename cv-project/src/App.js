import React, { Component } from 'react';
import  Workexperience from './components/generalInfo';
import EducationalExperience from './components/educationalExperience';
import PracticalExperience from './components/practicalExperience';
import uniqid from 'uniqid';

class App extends Component {
  constructor () {
    super ();

    this.state = {
      work: {employer: '', start: '', end:'', position:'', id: uniqid(), pointer: ''}, 
      workArray: [], 
      education: {school: '', loe: '', yog: '', id: uniqid()}, 
      educationArray: [],
      pratcialSkill: {skill: '', id: uniqid()},
      skillArray: [], 
    };
  };

  onEmployerChange = (e) => {
    
    this.setState({work: {employer: e.target.value, start: this.state.work.start, end: this.state.work.end, position: this.state.work.position, id: this.state.work.id, pointer: this.state.work.pointer}})
  
  };

  onWorkStartChange = (e) => {
    this.setState({work: {employer: this.state.work.employer, start: e.target.value, end: this.state.work.end, position: this.state.work.position, id: this.state.work.id, pointer: this.state.work.pointer}})
  };

  onWorkEndChange = (e) => {
    this.setState({work: {employer: this.state.work.employer, start: this.state.work.start, end: e.target.value, position: this.state.work.position, id: this.state.work.id, pointer: this.state.work.pointer}})
  };

  onPositionChange = (e) => {
    this.setState({work: {employer:this.state.work.employer, start: this.state.work.start, end: this.state.work.end, position: e.target.value, id: this.state.work.id, pointer: this.state.work.pointer}})
  };

  onSchoolChange = (e) => {
    this.setState({education: {school: e.target.value, loe: this.state.education.loe, yog: this.state.education.yog, id: this.state.education.id}})
  };

  onLOEChange = (e) => {
    this.setState({education: {school:this.state.education.school, loe: e.target.value, yog: this.state.education.yog, id: this.state.education.id}})
  };
  
  onYOGChange = (e) => {
    console.log(e.target.value)
    this.setState({education: {school:this.state.education.school, loe: this.state.education.loe, yog: e.target.value, id: this.state.education.id}})
  };

  onSkillChange = (e) =>{
    this.setState({pratcialSkill: {skill: e.target.value, id: this.state.pratcialSkill.id}})
  };

  onSubmitWork = (e) => {
    e.preventDefault();
    console.log(this.state.workArray.length)
    this.setState({work: {employer: this.state.work.employer, start: this.state.work.start, end: this.state.work.end, position: this.state.work.position, id: this.state.work.id, pointer: this.state.workArray.length}})
    this.setState({workArray: this.state.workArray.concat(this.state.work), work: {employer: '', start: '', end: '', position: '', id: uniqid(), pointer: ''}})
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    this.setState({educationArray: this.state.educationArray.concat(this.state.education), education: {school: '', loe: '', yog: '', id: uniqid()}})
  };

  onSubmitSkill = (e) => {
    e.preventDefault();
    this.setState({skillArray: this.state.skillArray.concat(this.state.skill), pratcialSkill: {skill: '', id: uniqid()}})
  };

  testEdit = (e) => {
    e.preventDefault()
    console.log(this.state.educationArray)
    const copy = this.state.educationArray.slice();
    copy[0] = {school: 'run', loe: 'DMC', yog: 'rules'};
    console.log(copy)
    this.setState({educationArray: copy} )
    console.log(this.state.educationArray)
  }

  testThis = (e) => {
    console.log(e.target.className);
  }

  render () {  
      const {work, workArray, education, educationArray, skill, skillArray} = this.state;
    return (
      <div className='content'>
         <div className='header'>
           <h1>Cv Application</h1>
         </div>
        <form onSubmit={this.onSubmitWork} id="workExperienceFrom">  
         <div className='generalExperience'>
           <h1>Work Experience</h1>
           <div>
             <label htmlFor='employer'>Employer</label>
             <input onChange={this.onEmployerChange} value={work.employer} id="employer" type='text'></input>
           </div>  
           <div>
             <label htmlFor='start-date'>Start Date</label>
             <input  onChange={this.onWorkStartChange} value={work.start} id='start-date' type='date'></input> 
           </div>
           <div>
             <label htmlFor='end-date'>End Date</label>
             <input onChange={this.onWorkEndChange} value={work.end} id='end-date' type='date'></input>
           </div>
           <div>
             <label htmlFor='position'>Position</label>
             <input onChange={this.onPositionChange} value={work.position} id='position' type='text'></input>
           </div>
         </div>
         <button id='workButton' type="submit">Submit</button>
        </form>
        <Workexperience workArray={workArray}/>
        <form id='educationExperienceForm' onSubmit={this.onSubmitEducation}>
         <div className='educationalExperience'>
           <div>
             <label htmlFor='school'>School</label>
             <input onChange={this.onSchoolChange} value={education.school} id='school' type='text'></input>
           </div>
           <div>
             <label htmlFor='level-of-education' >Level of Education</label>
             <select onChange={this.onLOEChange} value={education.loe} name='level-of-education'> 
             <option value=''>-Select-</option>
             <option value='bachelors'>Bachelors</option>
             <option value='GED'>GED</option>
             <option value='graduate'>Graduates</option>
             <option value='masters'>Masters</option>
             <option value='doctorate'>Doctorate</option>
             </select>
           </div>
           <div>
             <label value={education.goe} htmlFor='year-of-graduation'>Year Of Graduation</label>
             <input onChange={this.onYOGChange} id='year-of-graduation' type='date'></input>
           </div>
         </div>
         <button id='educationButton' type='submit'>Submit</button>
        </form>
        <EducationalExperience educationArray={educationArray} test={this.testThis}/>
        <form onSubmit={this.onSubmitSkill} id='skillsForm'>
         <div className='practicalExperience'>
           <label htmlFor='skills'>Add Skills</label>
           <input onChange={this.onSkillChange} value={skill} id='skills' type='text'></input>
         </div>
         <button id='skillButton' type='submit'>Submit</button>
         </form>
         <PracticalExperience skillArray={skillArray}/>
         <button type='submit' onClick={this.testEdit}>Test Edit</button>
      </div>
    );  
  } 
}

export default App;
