<template>
  <div id="app" class="rounded">
       <div id="nav">
    <b-card no-body>
    <b-nav pills slot="header" v-b-scrollspy:nav-scroller>

    </b-nav>
 </b-card>
 <b-container>
   <b-jumbotron header="Bootstrap Vue"
                     lead="Bootstrap 4 Components for Vue.js 2">
  <b-btn variant="primary" href="https://bootstrap-vue.js.org/">More Info</b-btn>
  </b-jumbotron>
  <div class="clear-fix">
  <b-img class="rounded" center fluid-grow alt="Vue logo" :src="require('./assets/vue32.png')"/>
  <hr>
 </div>
 </b-container>
      <b-container fluid class="bv-example-row">
        <b-form-row align-v="start" class="start">
          <b-col md="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus unde placeat itaque. Nulla eaque itaque odit nihil consectetur laborum? Voluptatum.</b-col>
          <b-col md="4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus adipisci saepe quis quasi ex, et cumque reprehenderit beatae ad aperiam?</b-col>
          <b-col md="4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ut animi, quos tempore sint ullam mollitia rem modi et architecto!</b-col>
        </b-form-row>
        <hr>
        <div id="button">
        <b-row align-v="start" class="end">
          <b-col ld="4">
            <h5>Toggleable Button!</h5>
            <b-button size="lg" :pressed.sync="myToggle" variant="outline-primary" @click="handleClick">My Button!</b-button>
            
              <b-alert show variant="primary">Light Alert!
                <h4 class="alert-heading">Pressed State: <strong>{{ myToggle }}</strong></h4>
              Primary Alert with <a href="#" class="alert-link">an example link</a>.
              </b-alert>
          </b-col>
          <b-col ld="4">
            <p>Toggleable Alertable Button!</p>
            <b-button size="lg" :pressed-sync="myToggle1" variant="warning">Warning!</b-button>
            
            <b-alert :show="dismissCountDown"
             dismissible
             variant="warning"
             @dismissed="dismissCountDown=10"
             @dismiss-count-down="countDownChanged">
              <h4 class="alert-heading">Pressed State:{{ myToggle1 }}</h4>
              </b-alert>
            <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
                        <b-progress variant="warning"
                  :max="dismissSecs"
                  :value="dismissCountDown"
                  height="2px">
              </b-progress>
          </b-col>
        </b-row>
      </div>
      <div>
        <b-form-row align-v="start" class="info">
          <b-col lg="6">
            <b-alert :show="dismissCountDown"
             dismissible
             fade
             variant="light"
             @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged">
      This alert will dismiss after {{dismissCountDown}} seconds...
            </b-alert>
              <b-btn @click="showAlert" variant="primary" class="m-1">
                  Show alert with count-down timer
              </b-btn>
          </b-col>
          <b-col lg="6">
            <b-alert :show="dismissCountDown"
             dismissible
             fade
             variant="dark"
             @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged">
      This alert will dismiss after {{dismissCountDown}} seconds...
            </b-alert>
              <b-btn @click="showAlert" variant="secondary" class="m-1">
                  Show alert with count-down timer
              </b-btn>
          </b-col>
        </b-form-row>
      </div>
      </b-container>
    </div>
    <hr>
    <router-view></router-view>
    <hr>
      <div>
   <b-container>  
  <b-row class="w-50 p-2 mb-1 bg-secondary" lg="10">
    <b-card bg-variant="light" class="w-100">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="name"
                    label="Your Name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-modal="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-alert variant="success" dismissable  @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged" :show="showAlert2">
          Hello {{ name }}
        </b-alert>
      <b-form-group id="exampleInputGroup3"
                    label="Food:"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="foods"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-form-group class="text-right">
        <b-button v-b-popover.hover.focus.topright="'Will reset Forms!'" class="float-left" title="Danger!!" type="reset" variant="outline-danger">Reset</b-button>
        <b-button v-b-popover.hover.focus.topright="'Submit your info.'" title="Submit!" class="float-right" variant="outline-primary" type="submit">Submit</b-button>
      </b-form-group>
    </b-form>
     </b-card>
      </b-row>
      <b-row lg="2">

      </b-row>
      </b-container>
      <b-container>
    <hr>
    <b-btn v-b-modal.modal>Launch demo modal</b-btn>
    <b-modal id="modal1" title="Bootstrap=Vue">
    <p class="my-4">Hello from modal!</p>
    </b-modal>
    <b-btn v-b-popover.hover="'I am popover content!'" title="Popover Title">
    Hover Me
  </b-btn>
  </b-container>
  </div>
  
  <h2>Breadcrumb</h2>
		<div style="padding: 1rem;">
			<ol class="breadcrumb">
			  <li class="breadcrumb-item active"><router-link to="/">Home</router-link></li>
			  <li class="breadcrumb-item"><router-link to="/About">About</router-link></li>
			  <li class="breadcrumb-item"><router-link to="/hello">Hello</router-link></li>
        <li class="breadcrumb-item"><router-link to="/helloworld">Hello World!</router-link></li>
			</ol>
		</div>
    </div>
</template>
<script lang="ts">
import Vue from "vue"
import HelloWorld from "./components/HelloWorld.vue"
import Home from "./components/Home.vue"

export default {
  name: 'app',
  data() {
    return {
      name: '',
      myToggle: true,
      myToggle1: true,
      buttons: [
        { variant: 'primary', caption: 'Toggle 1', state: true },
        { variant: 'danger', caption: 'Toggle 2', state: false },
        { variant: 'warning', caption: 'Toggle 3', state: true },
        { variant: 'success', caption: 'No Toggle', state: null },
        { variant: 'outline-success', caption: 'Toggle 5', state: false },
        { variant: 'outline-primary', caption: 'Toggle 6', state: false }
      ],
      dismissSecs: 10,
      dismissCountDown: 10,
      showDismissibleAlert: true,
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs;
    },
      showAlert2 () {
        return this.name.length > 4 ? true:false;
      },
    handleClick() {
      this.showDismissibleAlert = true;
    },
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
    }
  }
</script>

<style lang="scss">
.height {
  min-height: 8rem;
  background: lightgrey;
}
.start {
  min-height: 6rem;
  background: grey;
}
.end {
  min-height: 14rem;
  background: grey;
}
.info {
  min-height: 14rem;
  background: slategrey;
}
.app {
  color: #EBF5DF;
  background-color: complement($color: #4E8775);
  
}
</style>

