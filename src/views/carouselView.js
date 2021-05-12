const CarouselView = {
	props: ['content-class'],
	data() {
		return {
			message: "",
		};
	},
	template: `
		<div>
			<h3>Carousel</h3>
			<fv-carousel/>
		</div>
  `,
};