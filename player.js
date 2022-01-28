import mine from './mine.js';

export default class player{
    constructor(width, height, ctx){
        this.Hlive = true;
        this.Hlife = 100;
        this.Hpower = 10;
        this.Hspeed = 4;
        this.ctx = ctx;
        this.Hx = width / 2;
        this.Hy = height / 2;
        this.mines = [];
        this.minecount = 0;
    }

    damaged(Mpower){
        this.Hlife -= Mpower;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = 'red';
        this.ctx.arc(this.Hx, this.Hy, 30, 0, Math.PI * 2, false);
        this.ctx.fill();
        this.ctx.fillStyle = 'black';
        this.ctx.closePath();
        this.ctx.font = '20px serif';
        for(let i = 0; i < this.mines.length; i++){
            this.mines[i].draw();
        }
        this.ctx.fillText(this.Hlife, this.Hx - 15, this.Hy + 5);
    }

    mine(){
        this.mines[this.minecount] = new mine(this.Hx, this.Hy, this.ctx);
        this.minecount += 1;
    }
}