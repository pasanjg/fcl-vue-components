export const AddToCalendarView = {
  mounted() {
    var myCalendar = window.createCalendar({
      options: {
        class: 'my-class',
        id: 'my-id'                               // You need to pass an ID. If you don't, one will be generated for you.
      },
      data: {
        title: 'Get on the front page of HN',     // Event title
        start: new Date('June 15, 2013 19:00'),   // Event start date
        duration: 120,                            // Event duration (IN MINUTES)
        end: new Date('June 15, 2013 23:00'),     // You can also choose to set an end time.
        // If an end time is set, this will take precedence over duration
        address: 'The internet',
        description: 'Get on the front page of HN, then prepare for world domination.'
      }
    });

    document.querySelector('.new-cal').appendChild(myCalendar);
  },
  template:
    `
		<div>
			<h3>Vue Add To Calendar</h3>
      <br />

      <add-to-calendar title="VueConf"
                 location="WROCŁAW, POLAND"
                 :start="new Date()"
                 :end="new Date((new Date).setDate((new Date).getDate() + 1))"
                 details="The first Official Vue.js Conference in the world!"
                 inline-template>
        <div>
          <google-calendar id="google-calendar">
            <i class="fa fa-google"></i> Add to Google calendar
          </google-calendar>

          <microsoft-calendar id="microsoft-calendar">
            <i class="fa fa-windows"></i> Add to Microsoft live calendar
          </microsoft-calendar>

          <office365-calendar id="office365-calendar">
            <i class="fa fa-windows"></i> Add to Office365 outlook calendar
          </office365-calendar>
        </div>
      </add-to-calendar>
      <br /> <br />

      <div class="new-cal"></div>
		</div>
  `,
};
