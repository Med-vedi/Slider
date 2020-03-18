var slider1 = {
	imagesUrls: [],
	currentImageIndex: 0,
	prevButton: document.getElementById('show-prev-btn'),
	nextButton: document.getElementById('show-next-button'),
	slideImage: document.getElementById('slide-image'),

	start: function () {
		this.prevButton.addEventListener('click', this.onPrevButtonClick);
		this.nextButton.addEventListener('click', this.onNextButtonClick);

		// create images array
		this.imagesUrls.push('image/img1.jpg');
		this.imagesUrls.push('image/img2.jpg');
		this.imagesUrls.push('image/img3.jpg');
		this.imagesUrls.push('image/img4.jpg');
		this.imagesUrls.push('image/img5.jpg');


		///introduce the array variable
		this.slideImage.src = this.imagesUrls [this.currentImageIndex];
		this.prevButton.disabled = true;
	}
	//functions definitions
	onPrevButtonClick: function () {
		this.currentImageIndex--;
		this.slideImage.src = this.imagesUrls [this.currentImageIndex];
		this.nextButton.disabled = false;

		//disable prev button if need
		if (this.currentImageIndex === 0) {
			this.prevButton.disabled = true;
		}
		
	}
	onNextButtonClick: function () {
		this.currentImageIndex++;
		this.prevButton.disabled = false;
		this.slideImage.src = this.imagesUrls [this.currentImageIndex];
		if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
			this.nextButton.disabled= true;
			}
	}


};
