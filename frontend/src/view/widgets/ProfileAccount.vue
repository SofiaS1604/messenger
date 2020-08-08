<template>
    <div class="account__profile profile">
        <img :src="this.profile.avatar" class="profile__image">
        <div class="profile__container">
            <div class="profile__username">User name: {{this.profile.login}}</div>
            <div class="profile__surname">Surname: {{this.profile.surname}}</div>
            <div class="profile__first-name">First name: {{this.profile.first_name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileAccount",
        props: ["profile"]
    }
</script>

<style scoped>

</style>