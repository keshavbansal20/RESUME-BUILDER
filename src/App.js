import firebaseApp from "./firebase/firebaseConfig";
import React, { Component } from 'react';


class App extends Component {
  state = {  }
  componentDidMount(){
     // API call
    // get all documents
    // firebaseApp.db.collection("resumes").get().then( allDocs =>{
    //   allDocs.forEach( doc =>{
    //     console.log(doc.id);
    //     console.log(doc.data());
    //   })
    // })

    // get a document

    

    firebaseApp.firestore().collection("resumes").doc("OBDBEgMQp6Z69BAYnDxc").get().then( doc =>{
      console.log(doc.data());
    })
    
  }
  addData = () =>{
    console.log("insie the addData")
    firebaseApp.firestore().collection("resumes").doc("OBDBEgMQp6Z69BAYnDxc").update({
      contactDetails:{
        Name:"keshav" ,
        Phone:"123456",
        Email:"abcd@test.com"
      }
    }).then(()=>{
      console.log("skin set!!!!!"); 
    })
  }
  render() { 
    return (<button onClick={this.addData}>Add button</button>);
  }
}
 
export default App;