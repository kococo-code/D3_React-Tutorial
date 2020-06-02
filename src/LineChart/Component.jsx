import React , {Component} from 'react';
import * as d3 from 'd3';
import { schemeGnBu } from 'd3';

export default class LinearChart extends Component{
    drawChart(){
        let data = this.props.data
        let epoch = this.props.epoch 
        let loss = this.props.loss
        let margin = {top: 10, right: 30, bottom: 30, left: 60}
        let width = 800 - margin.left - margin.right
        let height = 300 - margin.top - margin.bottom
        let color = "#ff00ba"
        
        let svg = d3.select('svg')
        .attr('width',width + margin.left + margin.right)
        .attr('height',height + margin.top + margin.bottom)
        .append('g')
        .attr('transform',
            "translate(" + margin.left +"," + margin.top +")");
        let x = d3.scaleLinear()
        .domain([0,data[data.length-1].x+5])
        .range([0,width]);
        svg.append('g')
        .attr('transform',"translate(0,"+ height + ")")
        .call(d3.axisBottom(x))

        let y = d3.scaleLinear()
        .domain([0,d3.max(data,function(d){return +d.y})])
        .range([height,0]);
        svg.append("g")
        .call(d3.axisLeft(y))

        svg.append("path")
        .datum(data)
        .attr("stroke",color)
        .attr('fill','none')
        .attr('d',d3.line()
        .x(function(d) {return x(d.x)})
        .y(function(d) {return y(d.y)}))
    
    }
    componentDidMount(){
        this.drawChart()
    }
    render(){
        return(
            <svg></svg>
        )
    }
}

