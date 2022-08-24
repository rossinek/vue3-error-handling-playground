<template>
  <div v-if="activity" class="activity">
    <h2 class="activity__title">{{ activity.activity }}</h2>
    <ul class="activity__attributes">
      <li class="activity__attributes-item">Type: {{ activity.type }}</li>
      <li class="activity__attributes-item">Participants: {{ activity.participants }}</li>
      <li class="activity__attributes-item">
        Price:
        <strong v-if="!priceLevel">🧅 FREE! 🧅</strong>
        <template v-else>
          <span class="activity__price-icons">
            <template v-for="i in priceLevel">💸</template>
          </span>
          <span class="activity__price-icons activity__price-icon--dimmed">
            <template v-for="i in 5 - priceLevel">💸</template>
          </span>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      default: null,
    }
  },
  computed: {
    priceLevel() {
      return Math.round(this.activity.price * 5);
    },
  }
}
</script>

<style scoped>
.activity {
  border-radius: 2rem;
  border: 1px solid #ccc;
  box-shadow: 2px 4px 32px rgba(0,0,0,0.15);
  max-width: 30rem;
  margin: 0 auto;
  padding: 2rem;
}
.activity__title {
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 1.4rem;
}
.activity__attributes {
  list-style: none;
  padding: 0;
  margin: 0;
}
.activity__attributes-item {
  margin-top: 1rem;
  text-transform: uppercase;
  font-family: Menlo,Consolas,Ubuntu Mono,monospace;
  letter-spacing: .1rem;
  font-size: 0.8rem;
}
.activity__price-icon--dimmed {
  opacity: 0.3;
}
</style>
