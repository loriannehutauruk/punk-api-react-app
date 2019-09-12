import React, { Component } from 'react'
import Beer from './Beer'

class Main extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        fetch ('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(data =>  {
                this.setState({beers: data})
            })
    }

    render() {
        return (
            <div>
                <h2>The Beer List:</h2>
                {
                    this.state.beers.map(b => {
                        return (
                            <Beer key={b.id} beer={b}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Main
