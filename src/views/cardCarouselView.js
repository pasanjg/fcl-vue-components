export const CardCarouselView = {
  data() {
    return {
      paginationFactor: 300,
      items: [
        { id: 1, name: 'Kin Khao', progress: 67 },
        { id: 2, name: 'Jū-Ni', progress: 45 },
        { id: 3, name: 'Delfina', progress: 32 },
        { id: 4, name: 'San Tung', progress: 88 },
        { id: 5, name: 'Anchor Oyster Bar', progress: 25 },
        { id: 6, name: 'Locanda', progress: 76 },
        { id: 7, name: 'Garden Creamery', progress: 12 },
      ],
      colors: [
        { "value": "red", "displayName": "Red" },
        { "value": "green", "displayName": "Green" },
        { "value": "purple", "displayName": "Purple" },
        { "value": "orange", "displayName": "Orange" },
        { "value": "black", "displayName": "Black" },
        { "value": "violet", "displayName": "Violet" },
        { "value": "blue", "displayName": "Blue" },
      ],
      color: {},
    }
  },
  template:
    `
		<div>
			<h3>Card Carousel</h3>
      <br />
			<div class="container-fluid">
        <fv-card-carousel :length="items.length" :pagination-factor="paginationFactor">
          <div class="card" v-for="item in items">
            <div class="card-header">
              <h3>{{item.name}}</h3>
            </div>
            <div class="card-body">
              <fv-select2 :id="'vue'+item.id" :data-list="colors" data-display="displayName" data-value="value" v-model="color" placeholder="Select Color"/> <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate esse veritatis aperiam, velit deserunt optio nihil voluptatem beatae enim tempora numquam excepturi magni similique alias doloremque, error earum minima dolores.</p> <br />
            </div>
            <div class="card-footer">
              <fv-progress class-name="bg-primary" :value="item.progress" height="10px"/>
            </div>
          </div>
        </fv-card-carousel>
      </div>
		</div>
  `,
};
