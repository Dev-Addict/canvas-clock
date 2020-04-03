import React, {Component, createRef} from "react";

import '../style/Components/Clock.css';

class Clock extends Component{
    constructor(props) {
        super(props);
        this.canvasRef = createRef();
        this.showClock = this.showClock.bind(this);
    }

    componentDidMount() {
        this.ctx = this.canvasRef.current.getContext('2d');
        this.showClock();
    }

    showClock() {
        this.ctx.clearRect(0, 0, this.canvasRef.current.width, this.canvasRef.current.height);
        this.ctx.strokeStyle = 'rgb(15, 188, 249)';
        this.ctx.beginPath();
        this.ctx.lineWidth = 20;
        this.ctx.arc(300, 300, 200,  0, Math.PI * 2, true);
        this.ctx.stroke();
        this.ctx.closePath();
        let date = new Date();
        let second = date.getSeconds() + date.getMilliseconds() / 1000;
        let minute = date.getMinutes() + date.getSeconds() / 60 + date.getMilliseconds() / 60000;
        let hour = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600 + date.getMilliseconds() / 3600000;
        this.ctx.strokeStyle = 'rgb(126, 214, 223)';
        this.ctx.beginPath();
        this.ctx.lineWidth = 20;
        this.ctx.moveTo(300, 300);
        this.ctx.arc(300, 300, 180, Math.PI * 2 * (second - 15) / 60, Math.PI * 2 * (0-15) / 60);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.strokeStyle = 'rgb(190, 46, 221)';
        this.ctx.beginPath();
        this.ctx.moveTo(300, 300);
        this.ctx.arc(300, 300, 160, Math.PI * 2 * (minute - 15) / 60, Math.PI * 2 * (0-15) / 60);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.strokeStyle = 'rgb(249, 202, 36)';
        this.ctx.beginPath();
        this.ctx.moveTo(300, 300);
        this.ctx.arc(300, 300, 140, Math.PI * 2 * (hour - 3) / 12, Math.PI * 2 * (0-3) / 12);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.arc(300, 300, 10,  0, Math.PI * 2, true);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.font = '48px serif';
        this.ctx.fillStyle = 'rgb(199, 236, 238)';
        for (let i = 1; i <= 12; i++) {
            this.ctx.fillText(i.toString(), this.calculateArcX(280, 250, Math.PI * 2 * (i - 3) / 12), this.calculateArcY(310, 250, Math.PI * 2 * (i - 3) / 12));
        }
        setTimeout(this.showClock, 1);
    }

    calculateArcX(x, r, ea) {
        return x + r * Math.cos(ea);
    }

    calculateArcY(y, r, ea) {
        return y + r * Math.sin(ea);
    }

    render() {
        return (
            <canvas ref={this.canvasRef} width={600} height={600} className="clock-clock"/>
        );
    }
}

export default Clock;