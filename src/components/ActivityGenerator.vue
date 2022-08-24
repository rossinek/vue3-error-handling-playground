<template>
  <div class="activity-generator">
    <button
      class="activity-generator__action"
      :disabled="loading"
      @click="loadRandomActivity"
    >
      {{ this.activity ? 'Find something else' : 'I\'m bored!' }}
    </button>

    <button
      class="activity-generator__action"
      :disabled="loading"
      @click="loadRandomActivityWithBrokenApi"
    >
      I'm very bored!
    </button>

    <button
      class="activity-generator__action"
      :disabled="loading"
      @click="loadRandomActivityWithBrokenApiWithoutErrorHandling"
    >
      I want to watch the world burn
    </button>

    <div v-if="loading" class="loading-spinner" />
    <ActivityCard
      v-else
      class="activity-generator__activity"
      :activity="activity"
    />

  </div>
</template>

<script>
import { getRandomActivity, getRandomError } from '../api/bored'
import ActivityCard from './ActivityCard.vue'

export default {
  components: { ActivityCard },
  data () {
    return {
      loading: false,
      activity: null,
    }
  },
  methods: {
    async loadRandomActivity() {
      this.loading = true
      try {
        this.activity = await getRandomActivity()
      } catch (error) {
        const errorMessage = error?.message || 'Sorry, I don\'t know what to say'
        this.$notify({
          type: 'error',
          title: 'Unable to load activity',
          text: errorMessage,
        })
      }
      this.loading = false
    },
    async loadRandomActivityWithBrokenApi() {
      this.loading = true
      try {
        this.activity = await getRandomError()
      } catch (error) {
        const errorMessage = error?.message || 'Sorry, I don\'t know what to say'
        this.$notify({
          type: 'error',
          title: 'Unable to load activity',
          text: errorMessage,
        })
      }
      this.loading = false
    },
    async loadRandomActivityWithBrokenApiWithoutErrorHandling() {
      this.loading = true
      this.activity = await getRandomError()
      this.loading = false
    },
  },
}
</script>

<style scoped>
.activity-generator__action {
  margin: 0.5rem;
  background-color: crimson;
  color: white;
  border: 0;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-family: inherit;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: bold;
  cursor: pointer;
}
.activity-generator__action:focus,
.activity-generator__action:hover {
  opacity: 0.8;
}
.activity-generator__action:active {
  outline: 4px solid lightcoral;
  opacity: 1;
}
.activity-generator__action:disabled {
  opacity: 0.6;
  pointer-events: none;
}

.activity-generator__activity {
  margin-top: 3rem;
}

.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6.5rem;
}
.loading-spinner::before {
  content: '';
  display: block;
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  border: 0.5rem solid #ccc;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation-name: spin;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
