import React , {Component} from 'react';
import { LineChart, CartesianGrid, Line, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts'


export default class ReChart extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let dataset = this.props.data
     
        return(
            <div>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={this.props.data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis datakey="x" tick={{fontSize : '11px', padding : '12px'}}/>
                        <YAxis type="number" tick={{fontSize:'11px',padding:'12px'}}/>
                        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Line type="monotone" dataKey="y"></Line>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}