export const vueDNDropView = {
  data() {
    return {
      items: this.generateItems(50, i => ({ id: i, data: "Draggable " + i })),
    }
  },
  mounted() {
    console.log(window);
  },
  methods: {
    onDrop(dropResult) {
      this.items = this.applyDrag(this.items, dropResult);
    },
    applyDrag(arr, dragResult) {
      const { removedIndex, addedIndex, payload } = dragResult;
      if (removedIndex === null && addedIndex === null) return arr;

      const result = [...arr];
      let itemToAdd = payload;

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }

      return result;
    },
    generateItems(count, creator) {
      const result = [];
      for (let i = 0; i < count; i++) {
        result.push(creator(i));
      }
      return result;
    }
  },
  template:
    `
		<div>
			<h3>VueDNDrop</h3>
      <br />
      <div class="simple-page">
        <Container @drop="onDrop">
          <Draggable v-for="item in items" :key="item.id">
            <div class="card draggable-item my-2">
              <div class="card-body">
                {{item.data}}
              </div>
            </div>
          </Draggable>
        </Container>
      </div>
		</div>
  `,
};
