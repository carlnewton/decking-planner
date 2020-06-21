class Canvas 
{
    constructor(app) 
    {
        this.app = app;
        this.c=document.getElementById("canvas");
        this.ctx = this.c.getContext("2d");
    }

    draw()
    {
        this.ctx.clearRect(0, 0, this.c.width, this.c.height);
        this.drawArea();
        this.drawBoards();
    }

    drawBoards()
    {
        this.ctx.beginPath();
        this.ctx.lineWidth = "1";
        this.ctx.strokeStyle = "#8c5c2e";
        let left = 0,
            top = 0,
            rectWidth = this.app.board.getWidth(this.app.area),
            rectHeight = this.app.board.getLength(this.app.area),
            fullRectHeight = this.app.board.getLength(this.app.area),
            cut = false,
            newColumn = false,
            count = 0
        ;
        while (left <= this.app.area.pxWidth) 
        {
            while (top <= this.app.area.pxLength)
            {
                newColumn = false;
                if (cut === true) {
                    rectHeight = fullRectHeight - rectHeight - this.app.board.getBlade(this.app.area);
                    cut = false;
                } else {
                    rectHeight = fullRectHeight;
                    count += 1;
                    if (top + rectHeight >= this.app.area.pxLength) {
                        rectHeight = this.app.area.pxLength - top;
                        cut = true;
                        newColumn = true;
                    }
                }

                this.ctx.rect(
                    left, 
                    top, 
                    rectWidth,
                    rectHeight
                );
                this.ctx.stroke();

                top += rectHeight;

                if (newColumn === true) {
                    break;
                }
            }
            
            top = 0;
            left += rectWidth + this.app.board.getGap(this.app.area);
        }

        this.app.board.count = count;
    }

    drawArea()
    {
        var areaSize = this.app.area.setFillDimensions(this.c.width, this.c.height);

        this.ctx.fillStyle = '#ce9c6a';
        this.ctx.fillRect(
            0,
            0,
            areaSize.width, 
            areaSize.length
        );
    }


    setDimensions() 
    {
        this.c.height = this.c.clientHeight;
        this.c.width = this.c.clientWidth;
    }
}
