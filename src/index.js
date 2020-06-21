var app = new App();

$(function() {
    app.area.setWidth($('#decking-area-width').val());
    app.area.setLength($('#decking-area-length').val());
    app.board.setWidth($('#decking-board-width').val());
    app.board.setLength($('#decking-board-length').val());
    app.board.setGap($('#decking-board-gap').val());
    app.board.setBlade($('#blade-cutting-width').val());
    app.init();
    app.canvas.draw();

    $('#actual-number').text(app.board.count);
    $('#purchase-number').text(Math.floor(app.board.count * (1 + 0.3)));

    $('.form-control').on('change', function(event) {
        switch (event.target.id) 
        {
            case 'decking-area-width':
                app.area.setWidth(event.target.value);
                break;
            case 'decking-area-length':
                app.area.setLength(event.target.value);
                break; 
            case 'decking-board-width':
                app.board.setWidth(event.target.value);
                break;
            case 'decking-board-length':
                app.board.setLength(event.target.value);
                break;
            case 'decking-board-gap':
                app.board.setGap(event.target.value);
                break;
            case 'blade-cutting-width':
                app.board.setBlade(event.target.value);
                break;
        }

        app.canvas.draw();
        $('#actual-number').text(app.board.count);
        $('#purchase-number').text(Math.floor(app.board.count * (1 + 0.3)));

    });
});

window.onresize = function(event) 
{
    app.canvas.setDimensions();
    app.canvas.draw();
}
