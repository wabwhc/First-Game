export default class mine{
    constructor(Hx, Hy, ctx){
        this.Hx = Hx;
        this.Hy = Hy;
        this.ctx = ctx;
        this.MineLive = true;
    }

    draw(){
        if(this.MineLive === true){
            this.ctx.beginPath();
            this.ctx.fillStyle = 'red';
            this.ctx.arc(this.Hx, this.Hy, 10, 0, Math.PI * 2, false);
            this.ctx.fill();
            this.ctx.fillStyle = 'black';
            this.ctx.closePath();
        }
    }
}