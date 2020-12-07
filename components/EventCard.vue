<template>
  <div class="event-card">
    <p>
      {{ event.tags[0].name }}
    </p>
    <img :src="event.image">
    <p class="big">
      {{ event.dateStart | moment("MMM D") }}
    </p>
    <p> {{ event.description }}</p>
    <h3> {{ event.name }}</h3>
    <p> {{ event.description }}</p>
  </div>
</template>
<script>
export default {
  props: {
    event: {
      type: Object,
      default () {
        return {
          name: 'Soirée D&D',
          description: 'Grosser soirée D&D',
          dateEnd: '2020-02-24 2:00',
          dateStart: '2020-02-23 21:00',
          image: 'img/placeholder-animation-banner.jpg',
          posts: [
            { '{Post}': '{Post}' }
          ],
          creator: {
            '{User}': '{User}'
          },
          tags: [
            {
              code: 'KITCHEN',
              name: 'Cuisine'
            },
            {
              code: 'SPORT',
              name: 'PISCINE'
            }
          ],
          localization: {
            '2DSPHERE': '2DSPHERE'
          }
        }
      }
    }
  }
}
</script>
