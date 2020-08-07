<template>
    <div class="authorization__form form">
        <div class="form__title">Log in</div>
        <my-input class="form__login" @inputTask="keyDown" typeInput="text">Login:</my-input>
        <my-input class="form__password" @inputTask="keyDown" typeInput="password">Password:</my-input>
        <my-button @click.native="submitForm">Log in</my-button>
        <a href="/#/signup" class="form__link">Don't have an account?</a>
    </div>
</template>

<script>
    import MyInput from "../atoms/MyInput.vue";
    import MyButton from "../atoms/MyButton.vue";

    const componentsList = {};
    componentsList[MyInput.name] = MyInput;
    componentsList[MyButton.name] = MyButton;

    export default {
        name: "FormAuth",
        components: componentsList,
        data(){
          return{
              input: {
                  login: null,
                  password: null
              }
          }
        },
        methods: {
            submitForm(){
                console.log(this.input);
            },

            keyDown(input){
                this.input.login = input.type === 'login' ? input.value : this.input.login;
                this.input.password = input.type === 'password' ? input.value : this.input.password;
            }
        }
    }
</script>

<style src="../../style/components/form_auth.styl" lang="stylus"/>