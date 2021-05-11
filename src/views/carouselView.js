const CarouselView = {
	props: ['class'],
	template: `
      <div>
				<h3>Carousel</h3>
				<Carousel/>
			</div>
  `,
	data() {
		return {
			message: "",
		};
	},
};