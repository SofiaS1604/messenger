<template>
    <div class="form__group">
        <input type="text" class="form__input"/>
        <label class="form__label">
            <slot/>
        </label>
    </div>
</template>

<script>
    export default {
        name: "MyInput"
    }
</script>

<style src="./../../style/components/input.styl" lang="stylus"/>