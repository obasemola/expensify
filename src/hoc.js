import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>This is private info. Please don't share!</p>}

    </div>
  )
}




const AuthInfo = requireAuthentication(Info)
ReactDom.render(<AuthInfo isAuthenticated={false} info="these are the details" /> , document.getElementById('app'))