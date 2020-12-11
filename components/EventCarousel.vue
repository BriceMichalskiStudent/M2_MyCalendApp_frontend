<template>
  <div class="carousel-container">
    <div class="carousel-wrapper">
      <VueSlickCarousel v-bind="slickOptions">
        <template #prevArrow class="slick-arrow arrow-prev">
          <span class="icon-arrow-left" />
        </template>
        <div v-for="i in 12" :key="i" class="img-wrapper">
          <EventCard />
        </div>
        <template #nextArrow class="slick-arrow arrow-next">
          <span class="icon-arrow-right" />
        </template>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import EventCard from '~/components/EventCard'
export default {
  components: { EventCard },
  data () {
    return {
      slickOptions: {
        slidesToShow: 3,
        arrows: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              arrows: true,
              infinite: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              arrows: true,
              infinite: false
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.carousel-container{
  width: 100%;
  padding: 10px 0 60px;
  position: relative;
}
.carousel-wrapper {
  width: 1200px;
  @media only screen and (max-width: map-get($grid-breakpoints, 'md')) {
    width: 600px;
    padding: 0;
  }
  @media only screen and (max-width: map-get($grid-breakpoints, 'sm')) {
    max-width: 300px;
    padding: 0;
  }
  span.slick-arrow{
    position: absolute;
    color: black;
    font-size: 35px;
    line-height: 45px;
    &.slick-prev{
      bottom: 0;
      left: 0;
    }
    &.slick-next{
      bottom: 0;
      right: 0;
    }
  }
}
.slick-slider{
  position: unset!important;
}
.slick-list{
  overflow: unset!important;
}
.img-wrapper img {
  margin: auto;
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>
