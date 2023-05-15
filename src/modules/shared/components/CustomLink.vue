<template>
    <a
        v-if="isExternalLink"
        :href="link.to"
        class="inactive"
        target="_blank"
    >{{ link.name }}</a>
    <router-link
        v-else
        :to="{ name: link.to, params: { id: link.id } }"
        v-slot="{ href, isActive }"
    >
        <a
            :href="href"
            :class="isActive ? 'active' : 'inactive'"
        >{{ link.name }}</a>
    </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    },
    computed: {
        isExternalLink(){
            return this.link.to.startsWith('http')
        }
    }
}
</script>

<style scoped>
.active {
    color: #42B983;
}
.inactive{
    color: #C5C5C5;
}
</style>