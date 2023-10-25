"use client"

import React from 'react'
import * as d3 from "d3";
import { useRef, useEffect } from "react";

type Props = {
    data: number[],
    width: number,
    height: number,
    marginTop: number,
    marginRight: number,
    marginBottom: number,
    marginLeft: number
}

export default function LinePlot({
    data = [1, 1, 2, 3, 5, 8, 13, 21, 34],
    width = 640,
    height = 400,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 30,
    marginLeft = 40
}: Props) {

    // this line creates a new React ref object
    const gx = useRef<SVGGElement>() as React.MutableRefObject<SVGGElement>;

    // this line creates a new React ref object
    const gy = useRef<SVGGElement>() as React.MutableRefObject<SVGGElement>;

    // this line creates a new d3 scaleLinear object which is used to map values from one range to another on the x axis
    const x = d3.scaleLinear([0, data?.length - 1], [marginLeft, width - marginRight]);

    // this line creates a new d3 scaleLinear object which is used to map values from one range to another on the y axis
    const y = d3.scaleLinear(d3.extent(data) as [number, number], [height - marginBottom, marginTop]);


    // this line creates a new d3 line object which is used to draw the line that connects the data points
    const line = d3.line((d, i) => x(i), y);

    // this line creates a new d3 axisBottom object which is used to draw the x axis
    useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);

    // this line creates a new d3 axisLeft object which is used to draw the y axis
    useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);

    return (
        <>
            <div className='flex mx-auto'>
                <h1 className='font-bold text-2xl'>Price History</h1>
            </div>
            <svg width={width} height={height}>
                <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
                <g ref={gy} transform={`translate(${marginLeft},0)`} />
                <path fill="none" stroke="currentColor" stroke-width="1.5" d={line(data)!} />
                <g fill="white" stroke="currentColor" stroke-width="1.5">
                    {data.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="2.5" />))}
                </g>
            </svg>
        </>
    );
}