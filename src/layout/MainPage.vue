<template>
    <div class="main-page">
        <div class="sidebar">
            <h1 class="title mb-3">Virtual show de Montréal</h1>
            <group class="mx-1" v-for="group in groups" :key="group.id" :id="group.id" :title="group.title"></group>
            <add-group-btn class="mx-1 mt-1"></add-group-btn>
            <h1 class="copyright mt-auto">Copyright © VirtualB 2020</h1>
        </div>
        <div class="content">
            <div class="slot">
                <slot></slot>
            </div>
            <chat class="mt-auto"></chat>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainPage"
    }
</script>

<style lang="scss" scoped>
    .main-page {
        width: 100%;
        height: 100%;
        display: flex;
        color: white;

        .sidebar {
            width: var(--sidebar-width);
            height: 100%;
            display: flex;
            flex-direction: column;

            .title {
                font-size: 12pt;
                font-weight: bold;
                letter-spacing: 1px;
                text-align: center;
                padding-top: 0.5em;
                color: rgba(255, 255, 255, 0.5);
            }

            .copyright {
                font-size: 10pt;
                color: rgba(255, 255, 255, 0.2);
                text-align: center;
                letter-spacing: 1px;
            }
        }

        .content {
            background: rgba(255, 255, 255, 0.05);
            width: calc(100% - var(--sidebar-width));
            display: flex;
            flex-wrap: wrap;
            position: relative;

            .slot {
                height: calc(100% - var(--chat-height));
                width: 100%;
                box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75);
            }
        }
    }
</style>
