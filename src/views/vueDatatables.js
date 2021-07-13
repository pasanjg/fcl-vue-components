export const VueDatatablesView = {
  data() {
    const vm = this
    return {
      json: {
        draw: 1,
        recordsTotal: 200,
        recordsFiltered: 20,
        error: false,
        data: [
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
              street: "Kulas Light",
              suite: "Apt. 556",
              city: "Gwenborough",
              zipcode: "92998-3874",
              geo: {
                lat: "-37.3159",
                lng: "81.1496"
              }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
              name: "Romaguera-Crona",
              catchPhrase: "Multi-layered client-server neural-net",
              bs: "harness real-time e-markets"
            }
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
            address: {
              street: "Victor Plains",
              suite: "Suite 879",
              city: "Wisokyburgh",
              zipcode: "90566-7771",
              geo: {
                lat: "-43.9509",
                lng: "-34.4618"
              }
            },
            phone: "010-692-6593 x09125",
            website: "anastasia.net",
            company: {
              name: "Deckow-Crist",
              catchPhrase: "Proactive didactic contingency",
              bs: "synergize scalable supply-chains"
            }
          },
          {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
            address: {
              street: "Douglas Extension",
              suite: "Suite 847",
              city: "McKenziehaven",
              zipcode: "59590-4157",
              geo: {
                lat: "-68.6102",
                lng: "-47.0653"
              }
            },
            phone: "1-463-123-4447",
            website: "ramiro.info",
            company: {
              name: "Romaguera-Jacobson",
              catchPhrase: "Face to face bifurcated interface",
              bs: "e-enable strategic applications"
            }
          },
          {
            id: 4,
            name: "Patricia Lebsack",
            username: "Karianne",
            email: "Julianne.OConner@kory.org",
            address: {
              street: "Hoeger Mall",
              suite: "Apt. 692",
              city: "South Elvis",
              zipcode: "53919-4257",
              geo: {
                lat: "29.4572",
                lng: "-164.2990"
              }
            },
            phone: "493-170-9623 x156",
            website: "kale.biz",
            company: {
              name: "Robel-Corkery",
              catchPhrase: "Multi-tiered zero tolerance productivity",
              bs: "transition cutting-edge web services"
            }
          },
        ]
      },
      options: {
        ajax: vm.json,
        buttons: ['copy', 'csv', 'print'],
        /*eslint-disable */
        dom: "Btr<'row vdtnet-footer'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'pl>>",
        /*eslint-enable */
        responsive: false,
        processing: true,
        searching: true,
        searchDelay: 1500,
        destroy: true,
        ordering: true,
        lengthChange: true,
        serverSide: true,
        fixedHeader: true,
        saveState: true,
        /*
        select: {
          style: 'multi'
        }*/
      },
      fields: {
        id: { label: 'ID', sortable: true },
        actions: {
          isLocal: true,
          label: 'Actions',
          defaultContent: '<a href="javascript:void(0);" data-action="edit" class="btn btn-primary btn-sm"><i class="mdi mdi-square-edit-outline"></i> Edit</a>' +
            '<span data-action="delete" class="btn btn-danger btn-sm"><i class="mdi mdi-delete"></i> Delete</span>'
        },
        name: { label: 'Name', sortable: true, searchable: true, defaultOrder: 'desc' },
        username: { label: 'Username', sortable: false, searchable: true },
        email: { label: 'Email' },
        address1: {
          label: 'Address1',
          data: 'address',
          template: '{{ data.street }}, {{ data.suite }}'
        },
        address2: {
          label: 'Address2',
          data: 'address'
        },
        phone: { label: 'Phone' },
        website: {
          label: 'Website',
          render: (data) => {
            return `https://${data}`
          }
        }
      },
      quickSearch: '',
      details: {}
    }
  },
  methods: {
    doLoadTable(cb) {
      $.getJSON('https://jsonplaceholder.typicode.com/users', function (data) {
        cb(data)
      })
    },
    doAlertEdit(data) {
      window.alert(`row edit click for item ID: ${data.id}`)
    },
    doAlertDelete(data, row, tr, target) {
      window.alert(`deleting item ID: ${data.id}`)
      // row.remove() doesn't work when serverside is enabled
      // so we fake it with dom remove
      tr.remove()
      const table = this.$refs.table
      setTimeout(() => {
        // simulate extra long running ajax
        table.reload()
      }, 1500)
    },
    doAfterReload(data, table) {
      window.alert('data reloaded')
    },
    doCreating(comp, el) {
      console.log('creating')
    },
    doCreated(comp) {
      console.log('created')
    },
    doSearch() {
      this.$refs.table.search(this.quickSearch)
    },
    doExport(type) {
      const parms = this.$refs.table.getServerParams()
      parms.export = type
      window.alert('GET /api/v1/export?' + jQuery.param(parms))
    },
    formatCode(zipcode) {
      return zipcode.split('-')[0]
    }
  },
  template:
    `
		<div>
			<h3>Vue Datatables</h3>
      <br />

      <div class="row">
      <div class="col-12 col-md-9">
        Below are client-side buttons demo, go here to see
        <a
          href="https://laratt.niiknow.org/home/contacts"
          target="_blank"
        >
          server-side buttons demo
        </a>
      </div>
      <div class="col-12 col-md-3">
        <form
          class="form-inline d-flex mx-1 justify-content-end"
          @submit.stop.prevent="doSearch"
        >
          <div class="input-group">
            <input
              v-model="quickSearch"
              type="search"
              placeholder="Quick search"
              class="form-control"
            >
            <div class="input-group-append">
              <button
                type="submit"
                class="btn btn-outline-secondary"
              >
                <i class="mdi mdi-magnify" /> Go
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
    <p>VDT</p>
    <!-- Using the VdtnetTable component -->
    <vdtnet-table
      ref="table"
      :fields="fields"
      :opts="options"
      :select-checkbox="1"
      :details="details"
      @edit="doAlertEdit"
      @delete="doAlertDelete"
      @reloaded="doAfterReload"
      @table-creating="doCreating"
      @table-created="doCreated"
    >
      <template slot="HEAD__details_control">
        <b>Show Details</b>
      </template>
      <template
        slot="address2"
        slot-scope="ctx"
      >
        <span>{{ ctx.data.city }}, {{ ctx.comp.formatCode(ctx.data.zipcode) }}</span>
      </template>
      <template
        slot="_details"
        slot-scope="ctx"
      >
        <strong>I'm a child for {{ ctx.data.id }} yall</strong>
      </template>
    </vdtnet-table>

		</div>
  `,
};
