export const FullCalendarView = {
  data() {
    return {
      calendarOptions: {
        // plugins: ['dayGridPlugin', 'interactionPlugin'],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', date: '2020-08-20' },
          { title: 'event 2', date: '2020-08-22' }
        ]
      }
    };
  },
  mounted() {
    console.log(window.FullCalendar);
  },
  methods: {
    handleDateClick: function (arg) {
      alert('date click! ' + arg.dateStr)
    }
  },
  template:
    `
		<div>
			<h3>FullCalendar</h3>
      <br />

      <full-calendar :options='calendarOptions' />

		</div>
  `,
};
