import React , {Component} from 'react';
import BirthRate from '../dataset/BirthRate.json';
import { LineChart, CartesianGrid, Line, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts'

export default class BirthRateComponenet extends Component{
    constructor(props){
        super(props);
        this.state={
            Birthrate : {}
        }
        this.updateState.bind(this);
    }
    updateState(){

    }
    componentDidMount(){
        this.updateState();
    }

    render(){
        let style={
            position : 'relative',
            top : 50,
            left : 50,
            width : 500,
            backgroundColor : 'white',
            border : "1px solid black"
        }
        let data = []
        let jsonData = BirthRate.BirthRate
        console.log(jsonData)
        let KoreaData = BirthRate.BirthRate.Korea_Rep;
        let AfghanistanData = BirthRate.BirthRate.Afghanistan;
        for(var i =0 ; i<KoreaData.length;i++){
            data.push({
                'year': KoreaData[i].year,
                'Korea' : KoreaData[i].value,
                'Afghanistan' : AfghanistanData[i].value
            })
        }
        
        console.log(data)
        return(
            <div className="BirthRate" style={style}>
                 <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="year" tick={{fontSize : '10px', padding : '12px'}}/>
                        <YAxis type="number" tick={{fontSize:'11px',padding:'12px'}}/>
                        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Line type="monotone" dataKey="Korea"></Line>
                        <Line type="monotone" dataKey="Afghanistan" stroke="#101010"></Line>

                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}