<template>
    <main-page>
        <div class="switch">
            <b-icon @click="setMode('meeting')" scale="0.85" class="icon" :class="{ 'active-left': mode === 'meeting' }" icon="mic-fill"></b-icon>
            <b-icon @click="setMode('webgl')" scale="0.85" class="icon" :class="{ 'active-right': mode === 'webgl' }" icon="aspect-ratio-fill"></b-icon>
        </div>
        <vuenity v-show="mode === 'webgl'" :unity-content="unityContent"></vuenity>
        <div v-show="mode === 'meeting'" class="w-100 h-100" id="meet">

        </div>
    </main-page>
</template>

<script>
    import Vuenity from "../../dependencies/vuenity";
    import {UnityContent} from "../../dependencies/vuenity";

    export default {
        name: "Home",
        components: { Vuenity },
        data() {
            return {
                unityContent: new UnityContent(
                    "webgl/Build/accordExV4.7WebGL.json",
                    "webgl/Build/UnityLoader.js"
                )
            }
        },
        mounted() {
            this.unityContent.on("NiceWords", message => {
                alert(message);
            });
        },
        methods: {
            setMode(mode) {
                this.$store.commit('setMode', mode);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .switch {
        z-index: 500;
        cursor: pointer;
        position: absolute;
        left: 10px;
        top: 10px;
        width: 75px;
        height: 40px;
        border-radius: 5px;
        background: #504d4d;
        display: flex;
        align-items: center;
        font-size: 17pt;
        color: #b8b2b2;

        .icon {
            width: 50%;
            height: 100%;
            font-size: 5px;
            padding: 1em;
            transition: 200ms ease;
        }

        .active-left {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            background: #323030;
            box-shadow: inset 0px 0px 15px 0px rgba(0,0,0,0.75);
            color: #eeeaea;
            padding: 1.5em;
        }

        .active-right {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            background: #323030;
            box-shadow: inset 0px 0px 15px 0px rgba(0,0,0,0.75);
            color: #eeeaea;
            padding: 1.5em;
        }
    }
</style>
