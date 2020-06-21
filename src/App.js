class App
{
    constructor()
    {
        this.area = new Area();
        this.board = new Board();
        this.canvas = new Canvas(this);
    }

    setBladeWidth(width)
    {
        this.bladeWidth = width;
    }

    init()
    {
        this.canvas.setDimensions();
    }
}
