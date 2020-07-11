<template>
    <div @click="modalVisible = true" class="add-group">
        <b-icon scale="1.5" icon="plus"></b-icon>
        <div class="ml-2">Créer un meeting</div>

        <b-modal @ok="createMeeting" @hidden="meeting.name = ''" v-model="modalVisible" title="Créer un meeting" ok-title="Créer" :ok-disabled="meeting.name.length === 0">
            <b-form @submit.prevent="createMeeting">
                <b-form-input v-model="meeting.name" placeholder="Nom du meeting" autofocus></b-form-input>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "add-group-btn",
        data() {
            return {
                modalVisible: false,
                meeting: {
                    name: ''
                }
            }
        },
        methods: {
            createMeeting() {
                if (this.meeting.name.length === 0)
                    return;
                this.$store.commit('createMeeting', this.meeting.name);
                this.modalVisible = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .add-group {
        cursor: pointer;
        padding: 0.25em 0.5em;
        transition: 250ms ease;
        border-radius: 5px;
        display: flex;
        align-items: center;
        color: rgba(255, 255, 255, 0.5);
        font-size: 12pt;

        &:hover {
            background: var(--success);
            color: white;
        }

        &:active {
            transform: translate(5px, 0);
        }
    }
</style>
