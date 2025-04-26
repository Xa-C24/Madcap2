// main.js

import { createApp } from 'vue'

// Styles globaux existants
import './style.css'
import './assets/tailwind.css'

//  composant racine
import App from './App.vue'

// 1) Import de Vuetify 3 et de ses styles
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

// 2) Import des composants et directives Vuetify (ou de ceux dont tu as besoin)
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// 3) Création de l'instance Vuetify
const vuetify = createVuetify({
  components,
  directives
})

// 4) Création de ton application Vue
const app = createApp(App)

// 5) On "connecte" Vuetify à l’app
app.use(vuetify)

// 6) On monte l’application
app.mount('#app')
