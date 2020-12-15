<template>
  <div class="col-md-10 offset-md-1">
    <v-data-table
      :headers="headers"
      :items="users"
      sort-by="firstName"
      class="elevation-1"
    >
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
                Cree un utilisateur
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
                        v-model="editedItem.firstName"
                        label="First name"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="12"
                    >
                      <v-text-field
                        v-model="editedItem.lastName"
                        label="Last name"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="12"
                    >
                      <v-text-field
                        v-model="editedItem.phone"
                        label="Telephone"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="12"
                    >
                      <v-text-field
                        v-model="editedItem.mail"
                        label="Email"
                        type="email"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="12"
                    >
                      <v-text-field
                        v-model="editedItem.password"
                        label="Password"
                        type="password"
                      />
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
          <v-dialog v-model="dialogGrant" max-width="800px">
            <v-card>
              <v-card-title class="headline">
                Etes-vous sur de vouloir accorder les privileges administrateur ?
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary darken-1" text @click="closeGrant">
                  Annuler
                </v-btn>
                <v-btn color="secondary darken-1" text @click="grantItemConfirm">
                  Oui, passer admin
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
          @click="grantItem(item)"
        >
          mdi-arrow-up-bold
        </v-icon>
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
export default {
  layout: 'admin',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    dialogGrant: false,
    headers: [
      { text: 'Name', value: 'lastName' },
      { text: 'Surname', value: 'firstName' },
      { text: 'Email', value: 'mail' },
      { text: 'Telephone', value: 'phone' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    users: [],
    editedIndex: -1,
    editedItem: {
      firstName: '',
      lastName: '',
      mail: '',
      phone: '',
      password: ''
    },
    defaultItem: {
      firstName: '',
      lastName: '',
      mail: '',
      phone: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nouvel utilisateur' : 'Editer l\'utilisateur'
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
        .get('/user')
        .then(response => (this.users = response.data))
    },

    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    grantItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogGrant = true
    },

    grantItemConfirm () {
      const idAdmin = '5fa6a6239a28712fcc4a3e71'
      let alreadyAdmin = false
      for (let i = 0; i < this.editedItem.Roles.length; i++) {
        if (this.editedItem.Roles[i] === idAdmin) {
          alreadyAdmin = true
        }
      }
      if (alreadyAdmin === true) {
        this.$store.commit('sendNotification', {
          status: 'info',
          message: 'l\'utilisateur est deja administrateur !'
        })
      } else {
        this.editedItem.Roles.push(idAdmin)
        this.$axios
          .patch('/user/' + this.editedItem._id, this.editedItem.Roles
          )
          .then(
            this.$store.commit('sendNotification', {
              status: 'success',
              message: 'l\'utilisateur est maintenant administrateur !'
            }))
      }
      this.closeGrant()
    },

    deleteItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.users.splice(this.editedIndex, 1)
      this.closeDelete()
      this.$axios
        .delete('/user/' + this.editedItem._id)
        .then(
          this.$store.commit('sendNotification', {
            status: 'success',
            message: 'Utilisateur supprimer !'
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

    closeGrant () {
      this.dialogGrant = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem)
        this.$axios
          .put('/user/', this.editedItem)
          .then(
            this.$store.commit('sendNotification', {
              status: 'success',
              message: 'User modifier avec success !'
            }))
          .catch(error => (
            this.$store.commit('sendNotification', {
              status: 'error',
              message: error
            })
          ))
      } else {
        this.users.push(this.editedItem)
        this.$axios
          .post('/user/', this.editedItem)
          .then(
            this.$store.commit('sendNotification', {
              status: 'success',
              message: 'User cree avec success !'
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
