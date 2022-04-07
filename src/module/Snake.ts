class Snake {
	// 蛇头
	head: HTMLElement
	// 蛇的身体（包括蛇头）
	bodies: HTMLCollection
	// 获取蛇的容器
	element: HTMLElement

	constructor() {
		this.element = document.getElementById("snake")!
		this.head = document.querySelector("#snake > div")!
		this.bodies = this.element.getElementsByTagName("div")
	}
	get X() {
		return this.head.offsetLeft
	}
	get Y() {
		return this.head.offsetTop
	}
	set X(value: number) {
		// 如果新值和旧值相同，则直接返回不再修改
		if (this.X === value) return
		// x值的合法范围是0-290
		if (value < 0 || value > 290) {
			// console.log([this.X, this.Y])
			throw new Error("蛇撞墙了！")
		}
		this.head.style.left = value + "px"
	}
	set Y(value: number) {
		if (this.Y === value) return
		if (value < 0 || value > 290) {
			// console.log([this.X, this.Y])
			throw new Error("蛇撞墙了！")
		}
		this.head.style.top = value + "px"
	}
	addBody() {
		this.element.insertAdjacentHTML("beforeend", "<div><div>")
	}
}

export default Snake
