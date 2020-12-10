<template>
  <nuxt-link to="/" class="event-card">
    <p class="event-tag">
      {{ event.tags[0].name }}
    </p>
    <span class="icon-arrow-right" />
    <div class="event-image" :style="{ backgroundImage: 'url(' + event.image + ')' }" />
    <section class="event-info">
      <p class="event-date">
        {{ $moment(event.dateStart).format("MMM D") }}
      </p>
      <div class="event-summary">
        <h3> {{ event.name }}</h3>
        <p> {{ event.description }}</p>
      </div>
    </section>
    <p class="event-position">
      {{ event.address }} <span class="icon-location_pin" />
    </p>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    event: {
      type: Object,
      default () {
        return {
          name: 'Soirée D&D',
          description: 'Grosser soirée D&D Rdv Musée d\'art contemporain, villeurbanne wjbxsakm dewjdksxb scjkwbcwb jckcwe we dwe od',
          dateEnd: '2020-02-24 2:00',
          dateStart: '2020-02-23 21:00',
          image: 'img/placeholder-animation-banner.jpg',
          address: 'Musée d\'art contemporain, villeurbanne',
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
<style scoped lang="scss">
.event-card{
  width: 350px;
  height: 400px;
  border-radius: 10px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin: 0;
  -webkit-box-shadow: -2px 2px 25px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: -2px 2px 25px 0px rgba(0,0,0,0.2);
  box-shadow: -2px 2px 35px 0px rgba(0,0,0,0.2);
  span.icon-arrow-right{
    position: absolute;
    right: 15px;
    top: calc(230px - 75px);
    -webkit-box-shadow: 0 0 0 4px $secondary;
    -moz-box-shadow: 0 0 0 4px $secondary;
    box-shadow: 0 0 0 4px $secondary;
    color: white;
    background-color: $secondary;
    width: 56px;
    height: 56px;
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 24px;
    border-radius: 10px;
    transition-duration: 0.6s;
  }
  &:hover span.icon-arrow-right{
    -webkit-box-shadow: 0 0 0 -1px $secondary;
    -moz-box-shadow: 0 0 0 -1px $secondary;
    box-shadow: 0 0 0 -1px $secondary;
  }
  p.event-tag{
    position: absolute;
    display: inline-block;
    text-align: center;
    height: auto;
    min-width: 150px;
    padding: 5px 20px;
    background-color: $primary;
    font-family: "Montserrat Bold", sans-serif;
    color: white;
    z-index: 1;
    border-radius: 0 6px 6px 0;
    top: 20px;
    left: 0;
  }
  .event-info {
    height: 130px;
    display: flex;

    .event-date {
      box-sizing: border-box;
      margin: 0;
      width: 30%;
      padding: 10px;
      text-align: center;
      font-family: "Montserrat Bold", sans-serif;
      font-size: 30px;
      line-height: 40px;
      align-self: center;
    }

    .event-summary {
      box-sizing: border-box;
      width: 70%;
      text-align: left;
      padding: 10px 20px;
      overflow: hidden;
      position: relative;
      margin-bottom: 10px;
      &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        margin: 0; padding: 30px 0;
        background-image: linear-gradient(to bottom, transparent, #ffffff);
      }
      h3{
        padding: 10px 0;
        color: black;
        font-size: 27px;
        line-height: 37px;
      }
      p{
        padding-bottom: 10px;
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
  p.event-position{
    width: 100%;
    padding: 0 10px;
    text-align: right;
    font-size: 14px;
    line-height: 24px;
    font-family: "Times New Roman", sans-serif;
    margin: 0;
    span{
      color: $primary;
      font-size: 20px;
      line-height: 20px;
      vertical-align: baseline;
      padding: 0 2px;
    }
  }
  .event-image{
    width: 100%;
    margin: 0;
    height: 230px;
    background-position: 50% 50%;
    background-size: cover;
  }
}
</style>
