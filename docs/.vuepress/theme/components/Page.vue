<template>
    <main class="page">
        <slot name="top"/>

        <Content v-bind:class="{
          'theme-default-content': !isPrintMode,
          'theme-print-content': isPrintMode
        }"/>
        <PageEdit/>

        <PageNav v-bind=" { sidebarItems }"/>

        <slot name="bottom"/>
    </main>
</template>

<script>
    import PageEdit from "@parent-theme/components/PageEdit.vue"
    import PageNav from "@parent-theme/components/PageNav.vue"

    export default {
        components: {PageEdit, PageNav},
        props: ["sidebarItems"],
        computed: {
            isPrintMode() {
                const {themeConfig} = this.$site;
                return themeConfig.print;
            }
        }
    }
</script>

<style lang="stylus">
    .page
        padding-bottom 2rem
        display block
</style>