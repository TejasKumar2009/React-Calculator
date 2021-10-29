import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar';

export class Alert extends Component {
   render() {
      return (
         <>
         <Snackbar
        open={this.props.alert.open}
        message={this.props.alert.message}
      />
      </>
      )
   }
}

export default Alert
