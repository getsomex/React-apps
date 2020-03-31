import React , {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux'
const withErrorHandler = (Wrappedcontent,axios) => {
    return class extends Component{
        state = {
            error:null
        }

        errorConfirmedHandler = () => {
            this.setState({error:null})
        }




        componentWillMount(){
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null})
                return req;
            })
            this.responsetInterceptor = axios.interceptors.response.use(res => res, error => {
                console.log(error)
                this.setState({error:error});
               
            })
        }
        componentWillUnmount(){
            console.log("Will Unmount")
            axios.interceptors.request.eject(this.requestInterceptor)
            axios.interceptors.response.eject(this.responseInterceptor)
        }
        render(){
            
            return (
                <Aux>
                    <Modal show={this.state.error}
                            modalClosed={this.errorConfirmedHandler}
                    >
                       {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <Wrappedcontent {...this.props} />
                </Aux>
            );
        }
    }
    
}

export default withErrorHandler