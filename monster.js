export default class monster{
    constructor(width, height, ctx, Hx, Hy){
        this.Mlive = true;
        this.Mlife = 100;
        this.Mpower = 10;
        this.Mspeed = 5;
        this.ctx = ctx;
        this.height = height;
        this.width = width;
        this.MPositionX;
        this.MPositionY;
        this.Msize = 20;
        this.randBool;
        this.make();
    }

    damaged(Hpower){
        this.Mlife -= Hpower;
        if(this.Mlife <= 0){
            this.Mlive = false;
        }
    }

    draw(monDirX, monDirY){
        if(this.Mlive === true){
            this.Dir(monDirX, monDirY);
            this.MPositionX += this.vx;
            this.MPositionY += this.vy;
            this.ctx.beginPath();
            this.ctx.arc(this.MPositionX, this.MPositionY, this.Msize, 0, Math.PI * 2, false);
            this.ctx.fill();
            this.ctx.closePath();
        }
    }

    Dir(monDirX, monDirY){
        this.monDirX = monDirX;
        this.monDirY = monDirY;
        this.x = this.MPositionX - this.monDirX;
        this.y = this.MPositionY - this.monDirY;
        this.degree = Math.atan2(-(this.y), -(this.x));
        this.vx = Math.cos(this.degree) * this.Mspeed;
        this.vy = Math.sin(this.degree) * this.Mspeed;
    }

    
    make(){
        this.randomBoolean();
        if(this.randBool){
            this.randomBoolean();
            if(this.randBool){
                this.MPositionX = this.width + this.Msize;
            }else{
                this.MPositionX = -(this.Msize);
            }
            this.MPositionY = Math.random() * this.height;
        }else{
            this.randomBoolean();
            if(this.randBool){
                this.MPositionY = this.height + this.Msize;
            }else{
                this.MPositionY = -(this.Msize);
            }
            this.MPositionX = Math.random() * this.width;
        }
    }

    randomBoolean(){
        if(Math.random() > 0.5){
            this.randBool = true;
        }else{
            this.randBool = false;
        }
    }
}