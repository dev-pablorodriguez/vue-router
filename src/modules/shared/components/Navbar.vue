<template>
    <div>
        <!-- <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'pokemon-by-id', params: { id: 5 } }">Detalle Pokémon</router-link>
        <router-link :to="{ name: 'about' }">About</router-link> -->

        <!-- Menú Dinámico -->
        <CustomLink
            v-for="link in links"
            :key="link.to"
            :link="link"
        />
        
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'Navbar',
  data(){
    return {
        links: [
            { to: 'pokemon-home', name: 'Pokémons' },
            { to: 'pokemon-id', name: 'Detalle PKMN', id: 150 },
            { to: 'pokemon-about', name: 'About' },
            { to: 'dbz-characters', name: 'DBZ Personajes' },
            { to: 'dbz-about', name: 'DBZ About' },
            { to: 'https://www.google.cl', name: 'Google' },
        ]
    }
  },
  components: {
    CustomLink: defineAsyncComponent(() => import('./CustomLink'))
  }
}
</script>

<style scoped>
div a{
    margin: 0px 10px;
    font-weight: bold;
    color: #2C3E50;
}

/* div a.router-link-exact-active {
    color: #42B983;
} */
</style>