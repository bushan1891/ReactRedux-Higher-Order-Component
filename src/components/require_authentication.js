import React , {Component} from 'react';
import {connect} from 'react-redux';

export default function(ComposedComponent){
  class Authentication extends Component {
    // to get access to router object
    static contextTypes ={
      router : React.PropTypes.object
    }

    componentWillMount() {
      // pushe t home route
      if(!this.props.authenticated){
      this.context.router.push('/');
      }

    }

      componentWillUpdate(nextProps){
        // new props after some change
        if(!nextProps.authenticated){
        this.context.router.push('/');
        }


      }

    render(){
      console.log('rendering composed component',ComposedComponent , this.props.authenticated , this.context);

      return <ComposedComponent {...this.props} />
    }
  }

function mapStateToProps(state){
return {authenticated : state.authenticated};
}


  return connect(mapStateToProps)(Authentication);
}



// in some other file
// we want to use HOC

/*import Authentication // this hoc
import Resources  // thisi the component to wrap

const ComposedComponent = Authentication(Resources);
*/
