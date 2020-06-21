class Measurable
{
    setWidth(width) 
    {
        this.width = width;
    }

    setLength(length) 
    {
        this.length = length;
    }

    getWidthPercentageOfLength()
    {
        return  (this.width - this.length) / this.length * 100 + 100;
    }

    getLengthPercentageOfWidth()
    {
        return  (this.length - this.width) / this.width * 100 + 100;
    }

    setFillDimensions(parentWidth, parentLength)
    {
        var length = parentLength;

        var width = length * this.getWidthPercentageOfLength() / 100;

        if (width > parentWidth) {
            width = parentWidth;
            length = width * this.getLengthPercentageOfWidth() / 100;
        }

        this.pxWidth = width;
        this.pxLength = length;

        return {
            width: width,
            length: length
        }
    }
}
