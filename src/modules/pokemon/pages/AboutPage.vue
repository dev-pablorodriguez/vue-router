<template>
    <h2>About Page</h2>
    <h3>{{ name }}</h3>
    <button @click="onChangeName">Click Me!</button>
</template>

<script>
export default {
    data(){
        return {
            name: 'Pablo'
        }
    },
    methods: {
        onChangeName(){
            this.name = 'Andrés'
        }
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){
        console.log('updated')
    },
    activated(){
        console.log('activated')
    },
    deactivated(){
        console.log('deactivated')
    },
    beforeUnmount(){
        console.log('beforeUnmount')
    },
    unmounted(){
        console.log('unmounted')
    },
    errorCaptured(){
        console.log('errorCaptured')
    },
    renderTracked(){
        console.log('renderTracked')
    },
    renderTriggered(){
        console.log('renderTriggered')
    }
}
</script>