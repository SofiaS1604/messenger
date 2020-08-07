<template>
    <div class="form__group">
        <input :type="this.typeInput" @input="changeInput" class="form__input"/>
        <label class="form__label" :class="{'form__label--active': this.inputValue}" >
            <slot/>
        </label>
    </div>
</template>

<script>
    export default {
        name: "MyInput",
        props: ["typeInput"],
        data(){
            return{
                inputValue: false
            }
        },
        methods: {
            changeInput({target}){
                this.inputValue = target.value.length > 0;
            }
        }
    }
</script>

<style src="./../../style/components/input.styl" lang="stylus"/>