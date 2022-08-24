<template>
  <div>
    <AppNotifications
      classes="app-notification"
      position="bottom center"
      width="340"
    />

    <template v-if="error">
      <div class="app-error">
        <i>🔥</i>
        <h1>Something unexpected happened</h1>
        <button @click="reloadPage">↺ reload</button>
      </div>
    </template>
    <template v-else>
      <ActivityGenerator />
    </template>
  </div>
</template>

<script>
import ActivityGenerator from './components/ActivityGenerator.vue'

export default {
  components: {
    ActivityGenerator
  },
  data() {
    return {
      error: null
    }
  },
  methods: {
    reloadPage() {
      window.location.reload()
    }
  },
  errorCaptured(error) {
    this.error = error
  },
}
</script>

<style>
.app-notification {
  margin: 0 0.5rem 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  border-radius: 0.5rem;
  background: #44A4FC;
  border-left: 0.5rem solid #187FE7;
}
.app-notification .notification-title,
.app-notification .notification-content {
  margin: 0.2rem 0;
}
.app-notification .notification-content {
  font-size: 0.9rem;
  opacity: 0.8;
}
.app-notification.success {
  background: #68CD86;
  border-left-color: #42A85F;
}
.app-notification.warn {
  background: #ffb648;
  border-left-color: #f48a06;
}
.app-notification.error {
  background: #E54D42;
  border-left-color: #B82E24;
}

.app-error i {
  display: block;
  font-size: 10rem;
  line-height: 1;
}
.app-error button {
  border: 0;
  display: inline;
  background: transparent;
  color: crimson;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}
.app-error button:hover,
.app-error button:focus {
  text-decoration: underline;
}
</style>
