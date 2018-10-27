<template>
  <div class="HelloWorld" role="tablist">
    <div class="w3-container w3-lime w3-light-green>"
    <div class="clear-fix">
    <h1><strong>{{msg}}</strong></h1>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn v-b-tooltip.hover.topright title="Plugins" block href="#" v-b-toggle.accordion1.hover variant="outline-info">Installed CLI Plugins</b-btn>
        </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
        <p class="card-text">
          <h3>Installed CLI Plugins</h3>
            <hr>
            <ul>
              <li class="active"><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
            </ul>
          </p>
          </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn v-b-tooltip.hover.topright title="Links" block href="#" v-b-toggle.accordion2.hover variant="outline-secondary">Essential Links</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
          <h3>Essential Links</h3>
            <hr>
            <ul>
              <li class="active"><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
              <hr><li class="active"><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
              <hr><li class="active"><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
              <hr><li class="active"><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
              <hr><li class="active"><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
            </ul>
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn transparent v-b-tooltip.hover.topright title="Ecosystem" block href="#" v-b-toggle.accordion3.click variant="outline-info">Ecosystem</b-btn>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            <h3>Ecosystem</h3>
              <hr>
              <ul>
                <hr><li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
                <hr><li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
                <hr><li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
                <hr><li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
                <hr><li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
              </ul>
          </p>
          </b-card-body>
      </b-collapse>
    </b-card>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  -moz-text-decoration-style: solid, 2px;
  size: 18px;
  margin: 8 10px;
}
h3 {
  margin: 40px 8px 10px;
  color: mintcream;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
.HelloWorld {
  background-color: seashell;
}
.mb-1 {
  background: linear-gradient(to top left, #336699 0%, #339966 100%);
}
</style>
