import React,{ Component } from "react";
import axios from 'axios';
import withRouter from './withRouter';
class DeleteTodo extends Component{
    constructor(props){
        super(props);
        this.deletepost=this.deletepost.bind(this);
    }
    deletepost(){
    axios.delete('http://localhost:4000/todos/delete/'+this.props.params.id).then(
        res=>{
            if(res.status===200){
                console.log("deleted successfuly");
        }
    }
    );
    this.props.navigate('/');
    }
render(){
    return(
        <div>
            {this.deletepost()}
        </div>
    );
}

}
export default withRouter(DeleteTodo);