import React from 'react';
import axios from "axios";

class AjouterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionTitle: '',
      coursId: props.coursId,
      parentSectionId: props.parentSectionId,
      parentType: props.parentType
    };

    console.log("course id = " + props.coursId);
    console.log("parent section id = " + props.parentSectionId);

    this.handleSectionTitleChange = this.handleSectionTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSectionTitleChange(event) {
    this.setState({
      sectionTitle: event.target.value
    });
  }

  createCourseSection(title, coursId, parentSectionId, parentType) {
    const section = {      
      titreSection: title,
      idCours: coursId,
      idParent: parentSectionId,
      typeParent: parentType
    }

    axios.post("http://localhost:5000/createSection", section)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.createCourseSection(this.state.sectionTitle, this.state.coursId, this.state.parentSectionId, this.state.parentType)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="titreDeSection">Titre</label>
            <input className="form-control" id="titreDeSection" placeholder="Entrez le titre de section" onChange={this.handleSectionTitleChange}/>
          </div>
          <button type="submit">Ajouter Section</button>
        </form>
      </div>
    );
  }
}

export default AjouterSection;
