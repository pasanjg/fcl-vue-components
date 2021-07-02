const { required, minLength, email, sameAs } = window.validators;

export const VuelidateView = {
  data() {
    return {
      email: null,
      password: null,
      repeatPassword: null,
    }
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs('password'),
    },
  },
  methods: {
    submit: function (e) {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      alert("Success!");
    }
  },
  template:
    `
		<div>
			<h3>Vuelidate</h3>
      <br />

      <form autocomplete="false" @submit.prevent="submit">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" v-model.trim="$v.email.$model" placeholder="Enter email">
          <div v-if="$v.email.$dirty">
            <small class="text-danger" v-if="!$v.email.required">Field is required</small>
            <small class="text-danger" v-if="!$v.email.email">Must be a valid email</small>
          </div>
        </div>
        <tree-view :data="$v.email" :options="{rootObjectKey: '$v.email', maxDepth: 2}"></tree-view>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" v-model.trim="$v.password.$model" placeholder="Password">
          <div v-if="$v.password.$dirty">
            <small class="text-danger" v-if="!$v.password.required">Password is required.</small>
            <small class="text-danger" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</small>
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Repeat Password</label>
          <input type="password" class="form-control" v-model.trim="$v.repeatPassword.$model" placeholder="Repeat password">
          <div v-if="$v.repeatPassword.$dirty">
            <small class="text-danger" v-if="!$v.password.required">Repeat password is required.</small>
            <small class="text-danger" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</small>
          </div>
        </div>
        <tree-view :data="$v" :options="{rootObjectKey: '$v', maxDepth: 2}"></tree-view>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

        <div>
          <pre v-if="email">Email: {{ email }}</pre>
          <pre v-if="password">Password: {{ password }}</pre>
          <pre v-if="repeatPassword">Repeat Password: {{ repeatPassword }}</pre>
          <pre>{{ $v }}</pre>
        </div>

		</div>
  `,
};
