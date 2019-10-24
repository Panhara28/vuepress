<template>
  <div class="container-fluid">
    <header class="masthead text-white text-center">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div>
              <h1 class="kh-font-61">KHMER CODERS</h1>
              <p class="kh-text-style">VERSION 2.0</p>
              <p class="kh-text-comming-soon">Comming Soon</p>
              <img src="../../public/description.png" alt />
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <div class="row" v-if="data.features && data.features.length">
        <div class="col-lg-12">
          <div class="text-center mt-4 mb-4">
            <h1>{{ data.heroText || $title || 'Hello' }}</h1>
            <p
              class="description"
            >{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>
          </div>
        </div>
        <div class="col-lg-4" v-for="(feature, index) in data.features" :key="index">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </div>
    
    <Content custom />

    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white" v-if="data.footer">{{ data.footer }}</p>
      </div>
      <!-- /.container -->
    </footer>
  </div>
</template>

<script>
import NavLink from "../components/NavLink.vue";

export default {
  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>

<style>
.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
}

header.masthead {
  position: relative;
  background-color: #343434;
  background-size: cover;
  padding-top: 8rem;
  padding-bottom: 8rem;
}
.kh-font-61 {
  font-size: 61px;
  font-weight: bold;
  color: #b37a0d;
  margin-bottom: -10px;
}
.kh-text-style {
  padding-left: 325px;
  font-size: 22px;
  font-weight: bold;
  color: #b37a0d;
}
.kh-text-comming-soon {
  font-size: 32px;
  text-transform: uppercase;
}
.kh-text-description {
  font-size: 28px;
}

.kh-open-brack,
.kh-closing-brack {
  font-size: 16px;
}
</style>