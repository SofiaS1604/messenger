<template>
    <div class="account__profile profile">
        <img :src="this.profile.avatar" class="profile__image">
        <div class="profile__container">
            <div class="profile__info profile__username">User name: {{this.profile.login}}</div>
            <div class="profile__info profile__surname">Surname: {{this.profile.surname}}</div>
            <div class="profile__info profile__first-name">First name: {{this.profile.first_name}}</div>
            <div class="profile__info profile__option">
                Option: {{this.profile.option ? this.profile.option : 'null' }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileAccount",
        props: ["profile"]
    }
</script>

<style src="../../style/components/account_profile.styl" lang="stylus"/>