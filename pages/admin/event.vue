<template>
  <div class="col-md-10 offset-md-1">
    <v-data-table
      :headers="headers"
      :items="events"
      sort-by="date"
      class="elevation-1"
    >
      <template v-slot:item.dateStart="{ item }">
        <span>{{ new Date(item.dateStart).toLocaleString() }}</span>
      </template>
      <template v-slot:item.dateEnd="{ item }">
        <span>{{ new Date(item.dateEnd).toLocaleString() }}</span>
      </template>
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-spacer />
          <v-dialog
            v-model="dialog"
            max-width="800px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                Cree un Event
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="12"
                    >
                      <v-text-field
                        v-model="editedItem.title"
                        label="Title"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="12"
                    >
                      <v-text-field
                        v-model="editedItem.description"
                        label="description"
                      />
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="12"
                    >
                      <v-menu
                        ref="menu-start"
                        v-model="menu1"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="editedItem.dateStart"
                            label="Debut"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          />
                        </template>
                        <v-date-picker
                          ref="picker"
                          v-model="editedItem.dateStart"
                          locale="fr"
                          @change="menu1 = false"
                        />
                      </v-menu>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="12"
                    >
                      <v-menu
                        ref="menu-end"
                        v-model="menu2"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="editedItem.dateEnd"
                            value=""
                            label="Fin"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          />
                        </template>
                        <v-date-picker
                          ref="picker"
                          v-model="editedItem.dateEnd"
                          locale="fr"
                          @change="menu2 = false"
                        />
                      </v-menu>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary darken-1"
                  text
                  @click="close"
                >
                  Anuller
                </v-btn>
                <v-btn
                  color="primary darken-1"
                  text
                  @click="save"
                >
                  Sauvegarder
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="800px">
            <v-card>
              <v-card-title class="headline">
                <b>Cet action est irreversible.</b><br>
                Etes-vous sur de vouloir supprimer ?
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary darken-1" text @click="closeDelete">
                  Anuller
                </v-btn>
                <v-btn color="secondary darken-1" text @click="deleteItemConfirm">
                  Oui, supprimer
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Réessayer
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  layout: 'admin',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    menu1: false,
    menu2: false,
    headers: [
      { text: 'Titre', value: 'title' },
      { text: 'Description', value: 'description' },
      { text: 'Debut', value: 'dateStart' },
      { text: 'Fin', value: 'dateEnd' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    events: [],
    editedIndex: -1,
    editedItem: {
      title: '',
      description: '',
      dateStart: '',
      creator: '',
      dateEnd: ''
    },
    defaultItem: {
      title: '',
      description: '',
      dateStart: '',
      dateEnd: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nouvel Event' : 'Editer l\'event'
    },

    editedItemDateStartFormated () {
      return this.editedItem.dateStart ? moment(this.editedItem.dateStart).format('dddd, MMMM Do YYYY') : ''
    },

    editedItemDateEndFormated () {
      return this.editedItem.dateEnd ? moment(this.editedItem.dateEnd).format('dddd, MMMM Do YYYY') : ''
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.$axios
        .get('/event')
        .then(response => (this.events = response.data))
    },

    editItem (item) {
      this.editedIndex = this.events.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editedItem.dateStart = new Date(this.editedItem.dateStart).toISOString().substr(0, 10)
      this.editedItem.dateEnd = new Date(this.editedItem.dateEnd).toISOString().substr(0, 10)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.events.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.events.splice(this.editedIndex, 1)
      this.closeDelete()
      this.$axios
        .delete('/event/' + this.editedItem._id)
        .then(
          this.$store.commit('sendNotification', {
            status: 'success',
            message: 'Evennement supprimé !'
          }))
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.events[this.editedIndex], this.editedItem)
        this.$axios
          .put('/event/', this.editedItem)
          .then(
            this.$store.commit('sendNotification', {
              status: 'success',
              message: 'Event modifier avec success !'
            }))
          .catch(error => (
            this.$store.commit('sendNotification', {
              status: 'error',
              message: error
            })
          ))
      } else {
        this.editedItem.creator = this.$auth.user._id
        this.events.push(this.editedItem)
        this.$axios
          .post('/event/', this.editedItem)
          .then(
            this.$store.commit('sendNotification', {
              status: 'success',
              message: 'Event cree avec success !'
            }))
          .catch(error => (
            this.$store.commit('sendNotification', {
              status: 'error',
              message: error
            })
          ))
      }
      this.close()
    }
  }
}
</script>
