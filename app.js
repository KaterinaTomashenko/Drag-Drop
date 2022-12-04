const dragAndDrop = () => {
	const card = document.querySelector('.js-card')
	const cells = document.querySelectorAll('.js-cell')
	
	/* card */
	const dragStart = function() {
		setTimeout(() => {
			this.classList.add('hide')
		},0)
	}
	const dragEnd = function() {
		this.classList.remove('hide')
	}
	card.addEventListener('dragstart', dragStart)
	card.addEventListener('dragend',dragEnd)
	
	/* cell */
	const dragOver = function (event) {
		event.preventDefault()
	}
	const dragEnter = function (event) {
		event.preventDefault()
		this.classList.add('hover')
	}
	const dragLeave = function () {
		this.classList.remove('hover')
	}
	const dragDrop = function () {
		this.append(card)
		this.classList.remove('hover')
	}

	cells.forEach((cell) => {
		cell.addEventListener('dragover', dragOver)
		cell.addEventListener('dragenter', dragEnter)
		cell.addEventListener('dragleave', dragLeave)
		cell.addEventListener('drop', dragDrop)
	})
}
dragAndDrop()