export const VueDraggableView = {
  data: function () {
    return {
      drag: true,
      myArray: [
        {
          "name": "vue.draggable",
          "order": 1,
          "fixed": true
        },
        {
          "name": "draggable",
          "order": 2,
          "fixed": false
        },
        {
          "name": "component",
          "order": 3,
          "fixed": false
        },
        {
          "name": "for",
          "order": 4,
          "fixed": false
        },
        {
          "name": "vue.js 2.0",
          "order": 5,
          "fixed": false
        },
        {
          "name": "based",
          "order": 6,
          "fixed": false
        },
        {
          "name": "on",
          "order": 7,
          "fixed": false
        },
        {
          "name": "Sortablejs",
          "order": 8,
          "fixed": false
        }
      ]
    }
  },
  template:
    `
		<div>
			<h3>VueDraggable</h3>
      <br />

      <a href="https://github.com/SortableJS/Vue.Draggable"><span class="h5">Docs</span></a> <br /> <br />

      <div class="row">
        <div class="col">
        <ul class="list-group">
          <draggable v-model="myArray">
            <li class="list-group-item" v-for="element in myArray" :key="element.order">
                <span>{{element.name}}</span>
                <span class="badge badge-pill badge-dark float-right">{{element.order}}</span>
            </li>
          </draggable>
        </ul>
        </div>
        <div class="col">
          <textarea rows="18" class="code-snippet" readonly><small><pre>myArray: <br />{{myArray}}</pre></small></textarea>
        </div>
      </div>

		</div>
  `,
};
