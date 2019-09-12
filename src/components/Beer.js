import React, { Component } from 'react'

class Beer extends Component  {
    render(){
        return (
            <div>
                <p>{this.props.beer.id}</p>
                <p>{this.props.beer.name}</p>
            </div>
        )
    }
}

export default Beer