<template>
    <h2>Pokémon: <span>#{{ id }}</span></h2>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data(){
        return {
            pokemon: null
        }
    },
    created(){
        this.getPokemon()
    },
    methods: {
        async getPokemon(){
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`)
                this.pokemon = await response.json();
            } catch (error) {
                this.$router.push('/')
            }
        }
    },
    watch: {
        id(){
            this.getPokemon();
        }
    }
}
</script>