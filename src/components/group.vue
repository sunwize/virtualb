<template>
    <div @click="joinMeeting" class="group p-2" :class="{ 'active': id === meetingSelected }">
        <b-icon class="icon" icon="chat-fill"></b-icon>
        <div class="title">{{ title }}</div>
        <b-icon class="lock" icon="unlock"></b-icon>
    </div>
</template>

<script>
    export default {
        name: "group",
        props: {
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }
        },
        methods: {
            joinMeeting() {
                this.$store.commit('joinMeeting', this.id);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .group {
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: background 150ms ease;

        .icon {
            color: rgba(255, 255, 255, 0.7);
        }

        .title {
            margin-left: 0.5em;
            color: rgba(255, 255, 255, 0.7);
        }

        .lock {
            color: rgba(255, 255, 255, 0.2);
            margin-left: auto;
        }

        &:hover {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 5px;
        }
    }

    .active {
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.07) !important;
    }
</style>
