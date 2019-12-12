import React from 'react';
import './myStyles.css'

class Stylesheet extends React.Component{
    constructor(props){
        super(props);
  
        this.state={
            jsonData:[],
            err:null,
            active: false
        }
    }
  
  
    componentDidMount(){
        fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5')
        .then(data => {return data.json();})
        .then(data => {
            this.setState({jsonData:data.items});
        })
        .catch(err => {this.setState(err)})
    }

    toggleClass() {
        
            var exists = document.getElementById("example").className += " MyClass";


    };

    render(){

        return(
            
            <ul>

                

              {this.state.jsonData.map(data => 

                <div class="container-1">
                    <div id="example" onClick={this.toggleClass} >
                        
                    

                        <img src={data.volumeInfo.imageLinks.smallThumbnail} ></img>
                         
                    </div>
                    <div class="box-2">
                        <p>{this.state.active}</p>
                        <p class="title">{data.volumeInfo.title}</p>
                        <p>{data.volumeInfo.subtitle}</p>
                        <p class="description">{data.volumeInfo.description}</p>
                        <p>Authors: {data.volumeInfo.authors}</p>
                        <p>Pages: {data.volumeInfo.pageCount}</p>
                    </div>
                    
                  
                  



                </div>
              )}
            </ul>
        );
    }

}

export default Stylesheet;