import React from 'react';

class AjouterNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      description: ''
    };
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFileChange(event) {
    this.setState({
      selectedFile: event.target.files[0]
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);
    formData.append('description', this.state.description);
    // Here you can make a request to upload the file and its description to the server using axios, fetch or other libraries
    console.log(formData);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="fileInput">Choose file to upload:</label>
            <input type="file" id="fileInput" onChange={this.handleFileChange} />
          </div>
          <div>
            <label htmlFor="descriptionInput">Description:</label>
            <input type="text" id="descriptionInput" value={this.state.description} onChange={this.handleDescriptionChange} />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

export default AjouterNote;
