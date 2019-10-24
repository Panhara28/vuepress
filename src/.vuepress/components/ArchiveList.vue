<script>
export default {
  name: "ArchiveList",
  props: {
    data: {
      title: "asdasd"
    }
  },
  data() {
    return {
      selectedTags: []
    };
  },
  computed: {
    
  }
};
</script>

<template>
  <div class="archive">
    <h1>{{ 1 + 1 }}</h1>
  </div>
</template>

<style>
.archive-list {
  padding: 0;
  margin: 0;
}

.archive-year {
  font-weight: bold;
  font-size: 32px;
  margin: 0 0 16px 0;
}

.archive-month {
  font-weight: bold;
  font-size: 24px;
  margin: 0 0 16px 16px;
}

.archive-list__item {
  list-style-type: none;
  margin: 0 0 16px 32px;
}
</style>
