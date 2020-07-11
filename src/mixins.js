import Vue from 'vue';
import store from "@/store";

Vue.mixin({
    computed: {
        groups() {
            return store.state.groups;
        },
        messages() {
            return store.state.messages;
        },
        meetingSelected() {
            return store.state.meetingSelected;
        },
        mode() {
            return store.state.mode;
        }
    }
});
