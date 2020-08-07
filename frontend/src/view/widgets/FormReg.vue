<template>
    <div class="authorization__form form">
        <div class="form__title">Sign up</div>
        <my-input :error="this.error.surnameError" class="form__surname" @inputTask="keyDown" typeInput="text">
            Surname:
        </my-input>
        <my-input :error="this.error.firstNameError" class="form__first-name" @inputTask="keyDown" typeInput="text">
            First name:
        </my-input>
        <my-input :error="this.error.loginError" class="form__login" @inputTask="keyDown" typeInput="text">
            Login:
        </my-input>
        <my-input :error="this.error.passwordError" class="form__password" @inputTask="keyDown" typeInput="password">
            Password:
        </my-input>
        <my-button @click.native="submitForm">Submit</my-button>
        <a href="/" class="form__link">Already have an account?</a>
    </div>
</template>

<script>
    import MyInput from "../atoms/MyInput.vue";
    import MyButton from "../atoms/MyButton.vue";
    import axios from "axios";

    const componentsList = {};
    componentsList[MyInput.name] = MyInput;
    componentsList[MyButton.name] = MyButton;

    export default {
        name: "FormReg",
        components: componentsList,
        data() {
            return {
                input: {
                    login: null,
                    password: null,
                    firstName: null,
                    surname: null,
                },
                error: {
                    loginError: false,
                    passwordError: false,
                    surnameError: false,
                    firstNameError: false,
                },

            }
        },
        methods: {
            async getData() {
                return new Promise(async resolve => {
                    let res = await axios.get(`http://localhost:3000/api/signup`);
                    resolve(await res);
                });
            },

            async submitForm() {
                let filterInput = Object.values(this.input).filter((el, i) =>
                    this.error[`${Object.keys(this.input)[i]}Error`] = !el);
            },

            keyDown(input) {
                this.input.login = input.type === 'login' ? input.value : this.input.login;
                this.input.password = input.type === 'password' ? input.value : this.input.password;
                this.input.firstName = input.type === 'first-name' ? input.value : this.input.firstName;
                this.input.surname = input.type === 'surname' ? input.value : this.input.surname;


            }
        }
    }
</script>

<style src="../../style/components/form_reg.styl" lang="stylus"/>