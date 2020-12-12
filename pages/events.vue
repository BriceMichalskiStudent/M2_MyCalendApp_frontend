<template>
  <div class="col-md-10 offset-md-1 container">
    <section class="head">
      <img src="/img/event-banner.png">
      <h1 class="col-md-6">
        Trouvez <br> l'évènement <br>qui vous interesse&nbsp;!
      </h1>
      <div class="search" />
    </section>
    <section class="content col-md-10">
      <h2>Wow ! Nice slider !</h2>
      <Button link="/" anchor="Voir tous" custom="primary" />
      <EventCarousel :events="events" />
      <h2>OMG ! An other one !</h2>
      <Button link="/" anchor="Voir tous" custom="primary" />
      <EventCarousel />
    </section>
  </div>
</template>

<script>
import EventCarousel from '~/components/EventCarousel'
import Button from '~/components/Button'

export default {
  components: { Button, EventCarousel },
  transition: 'opacity',
  data () {
    return {
      title: 'Page events',
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

<style scoped lang="scss">
.head{
  position: relative;
  z-index: 0;
  height: 390px;
  margin-bottom: 80px;
  h1{
    font-size: 60px;
    line-height: 70px;
    z-index: 1;
  }
  img{
    width: 150%;
    position: absolute;
    top: 80px;
    left: -25%;
    z-index: -1;
    max-height: 300px;
    object-fit: cover;
    object-position: 0 20%;
  }
  .search{
    background-color: white;
    border: 1px solid rgba(0,0,0,0.3);
    height: 80px;
    width: 70%;
    margin: 10px auto;
    border-radius: 6px;
    position: absolute;
    bottom: -40px;
    left: 15%;
  }
}
.content{
  margin-top: 100px;
  h2{
    display: inline-block;
    padding: 30px 0;
    width: 79%;
  }
  a{
    display: inline-block;
    width: 20%;
    text-align: center;
  }
}
</style>
