<template>
    <div class="page__update update">
        <form-update/>
        <img :src="require('./../../images/form__update.jpg').default" class="update__image" />
    </div>
</template>

<script>
    import FormUpdate from "../widgets/FormUpdate.vue";

    const componentsList = {};
    componentsList[FormUpdate.name] = FormUpdate;

    export default {
        name: "PageUpdate",
        components: componentsList
    }
</script>


<style src="../../style/components/form_update.styl" lang="stylus"/>