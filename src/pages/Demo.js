import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';

import Paper from 'material-ui/Paper';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import dashboard from '@fortawesome/fontawesome-free-solid/faTachometerAlt'
import online from '@fortawesome/fontawesome-free-solid/faSignal'
import offline from '@fortawesome/fontawesome-free-solid/faExclamationTriangle'



import 'flexboxgrid/css/flexboxgrid.min.css'

const style = {
    minWidth: "25em",
    margin: 20,
    padding: 10
  };

const iconStyles = {
    marginRight: '0.5em',
  };

export default class Demo extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                        title="John Doe Shop RAISS Security"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <Paper style={style} zDepth={2}>
                            <h1><FontAwesomeIcon style={iconStyles} icon={dashboard} />RAISS Status</h1>
                            <Table>
                                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                                <TableRow>
                                    <TableHeaderColumn>Camera Name</TableHeaderColumn>
                                    <TableHeaderColumn>Status</TableHeaderColumn>
                                </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}>
                                    <TableRow>
                                        <TableRowColumn>Entrance</TableRowColumn>
                                        <TableRowColumn><FontAwesomeIcon icon={online} /></TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>Store</TableRowColumn>
                                        <TableRowColumn><FontAwesomeIcon icon={offline} /></TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>Cash Register</TableRowColumn>
                                        <TableRowColumn><FontAwesomeIcon icon={online} /></TableRowColumn>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}