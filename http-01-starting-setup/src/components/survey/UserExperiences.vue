<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>

      <p v-if="isLoading">Loading...</p>

      <p v-else-if="!isLoading && error">
        {{ error }}
      </p>

      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found. Start adding some survey results first.
      </p>

      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;

      this.error = null;

      fetch(
        'https://vue-http-demo-e460f-default-rtdb.firebaseio.com/surveys.json'
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          this.isLoading = false;

          const results = [];

          for (const key in data) {
            const result = {
              id: key,
              name: data[key].name,
              rating: data[key].rating,
            };

            results.push(result);
          }

          this.results = results;
        })
        .catch(() => {
          this.error = "Couldn't load experiences. Please try again later.";
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
