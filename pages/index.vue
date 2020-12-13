<template>
  <section class="col-md-10 offset-md-1 row">
    <div class="col-md-8 home-content">
      <h1>Trouvez et <br>partagez les évènements <br>qui vous interesse !</h1>
      <Button anchor="Découvrir !" link="/events" custom="primary" />
      <p class="col-md-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis commodi dicta doloremque
        ducimus eaque eius harum inventore, iure nostrum quam quidem repudiandae, sed, sit unde ut velit vitae voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis commodi dicta doloremque
        ducimus eaque eius harum inventore, iure nostrum quam quidem repudiandae, sed, sit unde ut velit vitae voluptatum.
        <br>
        <br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis commodi dicta doloremque
        ducimus eaque eius harum inventore, iure nostrum quam quidem repudiandae, sed, sit unde ut velit vitae voluptatum.
      </p>
    </div>
    <img class="col-md-4" src="/img/mobie-home.png">
    <div class="col-md-10 home-discover">
      <h2>Futurs évènements !</h2>
      <Button link="/" anchor="Voir tous" custom="primary" />
      <EventCarousel :events="events" />
    </div>
  </section>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: { Button },
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

<style scoped lang="scss">
.home-content{
  display: flex;
  flex-direction: column;
  a{
    align-self: center;
    width: 300px;
    margin: 30px auto;
  }
  p{
    margin: 40px 0;
    @media only screen and (max-width: map-get($grid-breakpoints, 'md')) {
      margin: 10px 0;
    }
  }
}
h1{
  font-size: 90px;
  line-height: 100px;
  padding: 60px 20px;
  @media only screen and (max-width: map-get($grid-breakpoints, 'md')) {
    font-size: 50px;
    line-height: 60px;
    padding: 40px 10px;
    br{
      display: none;
    }
  }
}
img{
  padding: 40px;
  object-fit: scale-down;
  @media only screen and (max-width: map-get($grid-breakpoints, 'md')) {
    display: none;
  }
}
.home-discover{
  margin-top: 100px;
  @media only screen and (max-width: map-get($grid-breakpoints, 'md')) {
    margin-top: 0;
  }
  h2{
    display: inline-block;
    padding: 30px 0;
    width: 73%;
    @media only screen and (max-width: map-get($grid-breakpoints, 'sm')) {
      width: 60%;
    }
  }
  a{
    display: inline-block;
    width: 27%;
    text-align: center;
    max-width: 200px;
    float: right;
    top: 20px;
    @media only screen and (max-width: map-get($grid-breakpoints, 'sm')) {
      padding: 10px 0;
      font-size: 17px;
      line-height: 27px;
      width: 38%;
      top:25px
    }
  }
}
</style>
