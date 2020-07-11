import Vue from 'vue';
import Vuex from 'vuex';
import Jitsi from "@/helpers/Jitsi";
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        groups: [
            { title: 'Room 1', id: 'fgdsbkbnlsdfgblkdfsbnglbsdfkbk' }
        ],
        messages: [],
        meetingSelected: null,
        mode: 'webgl'
    },
    mutations: {
        joinMeeting(state, id) {
            state.meetingSelected = id;
            let name = state.groups.find(g => g.id === id).title;
            Jitsi.join(id, name);
        },
        createMeeting(state, meetingName) {
            state.groups.push({
                title: meetingName,
                id: uuidv4()
            })
        },
        setMode(state, mode) {
            state.mode = mode;
        }
    }
});
