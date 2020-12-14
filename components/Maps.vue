<template>
  <GMap
    ref="gMap"
    :center="{lat: location.lat, lng: location.lng}"
    :options="{fullscreenControl: false, streetViewControl: false, mapTypeControl: false, zoomControl: true, gestureHandling: 'cooperative', styles: mapStyle}"
    :zoom="10"
  >
    <GMapMarker
      :position="{lat: location.lat, lng: location.lng}"
      :options="{icon: pins.selected}"
    >
      <GMapInfoWindow :options="{maxWidth: 800}">
        <b>{{ location.name }}</b>
        <br>
        <br>
        <code>
          Lat: {{ location.lat }},
          <br>
          Lng: {{ location.lng }}
        </code>
      </GMapInfoWindow>
    </GMapMarker>
  </GMap>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      default () {
        return {
          lat: 45.81444,
          lng: 15.97798,
          name: 'Zagreb'
        }
      }
    }
  },
  data () {
    return {
      pins: {
        selected:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII='
      },
      mapStyle: [
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#ffffff'
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#3e606f'
            },
            {
              weight: 2
            },
            {
              gamma: 0.84
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry',
          stylers: [
            {
              weight: 0.6
            },
            {
              color: '#313536'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            {
              color: '#44a688'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#13876c'
            }
          ]
        },
        {
          featureType: 'poi.attraction',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#f5e4e4'
            },
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi.attraction',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'on'
            },
            {
              lightness: '14'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#13876c'
            },
            {
              visibility: 'simplified'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#067372'
            },
            {
              lightness: '-20'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              color: '#357374'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#004757'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.GMap__Wrapper {
  width: 100%;
  height: 80vh;
  @media only screen and (max-width: map-get($grid-breakpoints, 'md')) {
    height: 50vh;
  }
}
</style>
