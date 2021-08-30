const month = `0${new Date().getMonth() + 1}`.slice(-2);

export const FullCalendarView = {
  data() {
    return {
      calendarOptions: {
        timeZone: 'local',
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        },
        weekends: true,
        editable: false,
        dateClick: this.handleDateClick,
        events: [
          {
            title: 'All Day Event',
            start: '2021-' + month + '-01'
          },
          {
            title: 'Long Event',
            start: '2021-' + month + '-07',
            end: '2021-' + month + '-10'
          },
          {
            groupId: '999',
            title: 'Repeating Event',
            start: '2021-' + month + '-09T16:00:00'
          },
          {
            groupId: '999',
            title: 'Repeating Event',
            start: '2021-' + month + '-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2021-' + month + '-11',
            end: '2021-' + month + '-13'
          },
          {
            title: 'Meeting',
            start: '2021-' + month + '-12T10:30:00',
            end: '2021-' + month + '-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2021-' + month + '-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2021-' + month + '-12T14:30:00'
          },
          {
            title: 'Birthday Party',
            start: '2021-' + month + '-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2021-' + month + '-28'
          },
        ],
      },
    };
  },
  methods: {
    handleDateClick: function (arg) {
      alert('date click! ' + arg.dateStr)
    },
  },
  template:
    `
		<div>
			<h3>FullCalendar</h3>
      <br />

      <textarea class="code-snippet" rows="9" readonly>
      &lt;!-- FullCalendar CSS -->
      &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar@5.9.0/main.min.css"&gt;

      &lt;!-- FullCalendar JS -->
      &lt;script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.9.0/main.min.js"&gt;&lt;/script&gt;
      &lt;script src="https://cdn.jsdelivr.net/npm/@fullcalendar/vue@5.9.0/dist/main.global.min.js"&gt;&lt;/script&gt;

      &lt;!-- Vue --&gt;
      &lt;full-calendar :options='calendarOptions' /&gt;</textarea>
      <br /> <br />

      <span class="mr-3">
        <button class="btn btn-info btn-sm shadow-none" @click="calendarOptions.editable = !calendarOptions.editable">Toggle Editable</button> <code>{{calendarOptions.editable}}</code>
      </span>
      <span>
        <button class="btn btn-info btn-sm shadow-none" @click="calendarOptions.weekends = !calendarOptions.weekends">Toggle Weekends</button> <code>{{calendarOptions.weekends}}</code>
      </span>
      <br /> <br /> <br />

      <div class="row">
        <div class="col">
          <full-calendar :options='calendarOptions' />
        </div>
        <div class="col">
          <textarea class="code-snippet" rows="30">calendarOptions: {{calendarOptions}}</textarea>
        </div>
      </div>

		</div>
  `,
};
