function Background(){

}

Background.prototype.draw = function(context) {
	context.fillStyle = '#000'
	context.fillRect(0, 0, game.width, game.height)
}

var canvas = $('canvas')[0],
	game = new Game(canvas)

game.entities = [
	new Background(),
	new Ball(),
	new Player()
]

game.start()
canvas.focus()