import React, { Component } from 'react';
const Projects = [
  {
    id:1,
    title:"RainMaster",
    desc:"App to check if it will rain tommorrow",
    upvotes:0
  },
  {
    id:2,
    title:"FireAlerter",
    desc:"App to check if there is fire and alert user",
    upvotes:3
  },
  {
    id:3,
    title:"Food panda",
    desc:"App to order food online",
    upvotes:5
  },
]


class Project extends Component{
  constructor(props){
    super(props);
    this.handleUpVotes = this.handleUpVotes.bind(this);
  }
  handleUpVotes(){
    this.props.handleVotes(this.props.id);
  }

  render(){
    return(
      <div className="box" key = {this.props.id} >
        <h1 className="title"> {this.props.title} </h1>
        <h2 className="subtitle"> {this.props.desc} </h2>
        <p>Votes: {this.props.upVotes}</p>
        <a onClick={this.handleUpVotes}><i className="fas fa-arrow-circle-up fa-3x"></i></a>
      </div>
    )
}
}
class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      projects:[],
    }
    this.handleUpVotes = this.handleUpVotes.bind(this);
  }

  handleUpVotes(id){
    const newProjects = this.state.projects.map((project)=>{
      if(project.id == id){
        return Object.assign({},project,{
          upvotes:project.upvotes + 1,
        });
      }else{
        return project;
      }
    });
    newProjects.sort((a,b)=>{return b.upvotes - a.upvotes});
    this.setState({
      projects:newProjects,
    })
  }


  componentDidMount(){
    Projects.sort((a,b)=>{return b.upvotes - a.upvotes});
    this.setState({
      projects:Projects,
    });
  }



  render() {
    const ProjectList = this.state.projects.map((project)=>(
      <Project
      key = {project.id}
      id = {project.id}
      title = {project.title}
      desc = {project.desc}
      upVotes = {project.upvotes}
      handleVotes = {this.handleUpVotes}
      />
    ));

    return (
      <div className="App">
        <div className = "section">
          {ProjectList}
        </div>
      </div>
    );
  }


}

export default App;
