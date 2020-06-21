class Board extends Measurable
{
    getLengthPercentage(comparison)
    {
        return (this.length - comparison) / comparison * 100 + 100;
    }

    getWidthPercentage(comparison)
    {
        return (this.width - comparison) / comparison * 100 + 100;
    }

    getGapPercentage(comparison)
    {
        return (this.gap - comparison) / comparison * 100 + 100;
    }

    getBladePercentage(comparison)
    {
        return (this.blade - comparison) / comparison * 100 + 100;
    }

    getLength(area)
    {
        var percentage = this.getLengthPercentage(area.length);

        return (area.pxLength / 100) * percentage;
    }

    getWidth(area)
    {
        var percentage = this.getWidthPercentage(area.width);

        return (area.pxWidth / 100) * percentage;
    }

    getGap(area)
    {
        var percentage = this.getGapPercentage(area.width);

        return (area.pxWidth / 100) * percentage;
    }

    setGap(gap)
    {
        this.gap = gap;
    }

    getBlade(area)
    {
        var percentage = this.getBladePercentage(area.length);

        return (area.pxLength / 100) * percentage;
    }

    setBlade(blade)
    {
        this.blade = blade;
    }
}
