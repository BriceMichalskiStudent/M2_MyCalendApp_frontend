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
.single-event-content{
  h1{
    padding: 40px 0;
  }
  img{
    padding: 0;
    object-fit: cover;
    width: 100%;
    height: 200px;
    margin: 20px 0;
  }
  button{
    margin: 10px 0;
    float: right;
    width: 200px;
  }
}
.event-map{
  position: fixed;
  right: 40px;
}
</style>
