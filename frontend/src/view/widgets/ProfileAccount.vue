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
        <div class="profile__icons icons">
            <icon data-title="Update user" class="icons__edit" :urlImage="require('./../../images/pen.png').default"/>
            <icon @click.native="deleteUser" data-title="Delete user" class="icons__delete" :urlImage="require('./../../images/close.png').default"/>
            <icon data-title="Update avatar" class="icons__update" :urlImage="require('./../../images/file-upload.png').default"/>
        </div>
    </div>
</template>

<script>
    import Icon from "../atoms/Icon.vue";
    import axios from "axios";

    export default {
        name: "ProfileAccount",
        components: {Icon},
        props: ["profile"],
        methods: {
            deleteUser() {
                axios.delete(
                    `http://localhost:3000/api/deleteUser`, {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem('tokenUser')
                        }
                    }
                )
                    .then(() => {
                        localStorage.removeItem('tokenUser')
                        this.$router.push({name: 'login'})
                    })
            }
        }
    }
</script>

<style src="../../style/components/account_profile.styl" lang="stylus"/>