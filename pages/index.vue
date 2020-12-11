<template>
  <div class="col-md-8 offset-md-2">
    <h2>Wow ! Nice slider !</h2>
    <EventCarousel :events="events" />
    <br>
    <br>
    <br>
    <h2>OMG ! An other one !</h2>
    <EventCarousel />
  </div>
</template>

<script>
import EventCarousel from '~/components/EventCarousel'

export default {
  components: { EventCarousel },
  transition: 'opacity',
  data () {
    return {
      title: 'Page index',
      meta_desc: 'Je suis le magnifique content',
      events: [
        {
          id: 0,
          name: 'Nowel',
          description: 'Let\'s go les cado, pour les grand et les mioches',
          dateEnd: '2020-12-24 23:00',
          dateStart: '2020-12-25 12:00',
          image: 'https://images.unsplash.com/photo-1576346618381-facf2a17af3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1345&q=80',
          address: '36 30, Allo pere noel',
          posts: [
            { '{Post}': '{Post}' }
          ],
          creator: {
            '{User}': '{User}'
          },
          tags: [
            {
              code: 'THUNES',
              name: 'Famille'
            }
          ],
          localization: {
            '2DSPHERE': '2DSPHERE'
          }
        },
        {
          id: 1,
          name: 'Road to 2021',
          description: 'Go se bourer la gueule mais toujours dans le respect des geste barrière, confiner ensemble toutes la sainte journee !!!',
          dateEnd: '2020-12-31 12:00',
          dateStart: '2021-01-02 00:00',
          image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          address: 'Chez, la gouinfre',
          posts: [
            { '{Post}': '{Post}' }
          ],
          creator: {
            '{User}': '{User}'
          },
          tags: [
            {
              code: 'ALCOOL',
              name: 'Biere'
            }
          ],
          localization: {
            '2DSPHERE': '2DSPHERE'
          }
        },
        {
          id: 3,
          name: 'Road to 2021',
          description: 'Go se bourer la gueule mais toujours dans le respect des geste barrière, confiner ensemble toutes la sainte journee !!!',
          dateEnd: '2020-12-31 12:00',
          dateStart: '2021-01-02 00:00',
          image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          address: 'Chez, la gouinfre',
          posts: [
            { '{Post}': '{Post}' }
          ],
          creator: {
            '{User}': '{User}'
          },
          tags: [
            {
              code: 'ALCOOL',
              name: 'Biere'
            }
          ],
          localization: {
            '2DSPHERE': '2DSPHERE'
          }
        },
        {
          id: 1,
          name: 'Road to 2021',
          description: 'Go se bourer la gueule mais toujours dans le respect des geste barrière, confiner ensemble toutes la sainte journee !!!',
          dateEnd: '2020-12-31 12:00',
          dateStart: '2021-01-02 00:00',
          image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          address: 'Chez, la gouinfre',
          posts: [
            { '{Post}': '{Post}' }
          ],
          creator: {
            '{User}': '{User}'
          },
          tags: [
            {
              code: 'ALCOOL',
              name: 'Biere'
            }
          ],
          localization: {
            '2DSPHERE': '2DSPHERE'
          }
        }
      ]
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta_desc }
      ]
    }
  }
}
</script>

<style scoped>
.center-here {
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
