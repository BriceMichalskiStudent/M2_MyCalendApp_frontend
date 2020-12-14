<template>
  <section class="col-md-10 offset-md-1 row">
    <div class="col-md-6 single-event-content">
      <h1>{{ event.name }} - Id:{{ event_id }}</h1>
      <EventInfoBar :place="event.address" :tag="event.tags[0].name" :date="$moment(event.dateStart).format(&quot;DD / MM / YYYY&quot;)" />
      <img :src="event.image">
      <h2>Exemple de sous-titre - h2 </h2>
      <p>
        {{ event.description }}
      </p>
      <Button anchor="S'inscrire !" custom="primary" type="submit" />
    </div>
    <div class="col-md-5 event-map">
      <Maps :location="event.localization" />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="red-bg" width="403.125" height="919.935" viewBox="0 0 403.125 919.935">
      <g id="graph" transform="translate(184.861 -229.685)">
        <path id="Tracé_6" data-name="Tracé 6" d="M15454.531-1865.795s113.014,22.237,129.818,250.821,109.182,246.768,107.959,367.752-169.816,304.948-237.777,225.6S15454.531-1865.795,15454.531-1865.795Z" transform="translate(-15544.437 2152)" fill="#ff645f" />
      </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" class="light-red-bg" width="403.125" height="867.379" viewBox="0 0 403.125 867.379">
      <path
        id="Tracé_7"
        data-name="Tracé 7"
        d="M15454.531-1865.795s214.662-49.009,140.008,184.681,75.651,334.135,97.77,433.892-102.6,322.63-263.153,162.942S15454.531-1865.795,15454.531-1865.795Z"
        transform="matrix(0.996, -0.087, 0.087, 0.996, -15142.382, 3230.855)"
        fill="#ff645f"
        opacity="0.35"
      />
    </svg>
  </section>
</template>

<script>
import Button from '~/components/Button'
import EventInfoBar from '~/components/EventInfoBar'
import Maps from '~/components/Maps'
export default {
  components: { Button, EventInfoBar, Maps },
  transition: 'opacity',
  data () {
    return {
      title: 'Page index',
      meta_desc: 'Je suis le magnifique content',
      event_id: 0,
      event:
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
            lat: 45.7137185,
            lng: 5.1291016,
            name: 'Montcul'
          }
        }
    }
  },
  mounted () {
    this.event_id = parseInt(this.$route.params.id)
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
<style lang="scss" scoped>
@media only screen and (max-width: map-get($grid-breakpoints, 'md')) {
  .row {
    margin: 0;
  }
}
.single-event-content{
  z-index: 3;
  h1{
    padding: 30px 0;
  }
  img{
    padding: 0;
    object-fit: cover;
    width: 100%;
    height: 300px;
    margin: 20px 0;
  }
  button{
    margin: 10px 0;
    float: right;
    width: 200px;
  }
}
.event-map{
  z-index: 3;
  position: fixed;
  right: 40px;
  @media only screen and (max-width: map-get($grid-breakpoints, 'md')) {
    position: unset;
  }
}
.light-red-bg{
  position: fixed;
  top: 3vh;
  left: -100px;
  height: 110vh;
  z-index: 1;
  @media only screen and (max-width: map-get($grid-breakpoints, 'md')) {
    height: 120vh;
    top: 0;
  }
}
.red-bg{
  position: fixed;
  top: 12vh;
  left: -120px;
  height: 90vh;
  z-index: 2;
  @media only screen and (max-width: map-get($grid-breakpoints, 'md')) {
    height: 100vh;
    top: 80px;
  }
}
</style>
