import "./style/index.less"

class Food {
	element: HTMLElement
	constructor() {
		this.element = document.getElementById("food")!
	}
	get X() {
		return this.element.offsetLeft
	}
	get Y() {
		return this.element.offsetTop
	}
	change() {
		let top = Math.round(Math.random() * 29) * 10
		let left = Math.round(Math.random() * 29) * 10
		this.element.style.left = left + "px"
		this.element.style.top = top + "px"
	}
}

// const food = new Food()
// food.change()
// console.log(food.X, food.Y)

class ScorePanel {
	score = 0
	level = 1
	scoreEle: HTMLElement
	levelEle: HTMLElement
	maxLevel: number
	constructor(maxLevel: number = 10) {
		this.scoreEle = document.getElementById("score")!
		this.levelEle = document.getElementById("level")!
		this.maxLevel = maxLevel
	}
	addScore() {
		this.scoreEle.innerHTML = ++this.score + ""
		if (this.score % 10 === 0) {
			this.levelUp()
		}
	}
	levelUp() {
		if (this.level < this.maxLevel) {
			this.levelEle.innerHTML = ++this.level + ""
		}
	}
}
const scorePanel = new ScorePanel()
for (let i = 0; i < 200; i++) {
	scorePanel.addScore()
}
