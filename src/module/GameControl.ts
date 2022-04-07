import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"

class GameControl {
	snake: Snake
	food: Food
	scorePanel: ScorePanel
	// 蛇的移动方向
	direction: string = ""
	// 记录游戏是否结束
	isAlive = true

	constructor() {
		this.snake = new Snake()
		this.food = new Food()
		this.scorePanel = new ScorePanel()
		this.init()
	}
	init() {
		document.addEventListener("keydown", this.keydownHandler.bind(this))
	}

	// 创建一个键盘按下的响应函数
	keydownHandler(event: KeyboardEvent) {
		// console.log(this)
		this.direction = event.key
		this.run()
	}

	// 创建一个控制蛇移动的方法
	run() {
		let X = this.snake.X
		let Y = this.snake.Y
		switch (this.direction) {
			case "ArrowUp":
				Y -= 10
				break
			case "ArrowDown":
				Y += 10
				break
			case "ArrowLeft":
				X -= 10
				break
			case "ArrowRight":
				X += 10
				break
		}
		if (this.checkEat(X, Y)) {
			console.log("吃到食物了！")
		}
		try {
			this.snake.X = X
			this.snake.Y = Y
		} catch (error) {
			alert(error + " GAME OVER!")
			this.isAlive = false
		}
		// 开启定时调用
		this.isAlive &&
			setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
	}
	// 检查蛇是否吃到食物
	checkEat(X: number, Y: number) {
		return X === this.food.X && Y === this.food.Y
	}
}

export default GameControl
