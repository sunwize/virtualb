<template>
    <b-form @submit.prevent="sendMessage" class="chat">
        <div ref="chat" class="chat-messages">
            <div class="message" v-for="(message, index) in messages" :key="index">
                <b-avatar :src="null"></b-avatar>
                <div class="ml-2">
                    <div class="author">
                        <span>{{ message.user }}</span>
                        <span class="date">{{ formatDate(message.date) }}</span>
                    </div>
                    <div class="text">{{ message.text }}</div>
                </div>
            </div>
        </div>
        <b-input v-model="message" autocomplete="off" placeholder="Envoyer un message" class="chat-send"></b-input>
    </b-form>
</template>

<script>
    import io from "socket.io-client";
    import moment from "moment";

    export default {
        name: "Chat",
        data() {
            return {
                message: null,
                socket: null,
                user: null
            }
        },
        mounted() {
            // eslint-disable-next-line
            this.socket = io(process.env.VUE_APP_API_URL);

            this.user = prompt('Pseudo ?');
            this.socket.emit('new_user', this.user);

            this.socket.on('new_user', user => {
                console.log(user + ' a rejoint le chat');
            });

            this.socket.on('message', data => {
                this.$store.state.messages.push({
                    user: data.user,
                    text: data.message,
                    date: moment()
                });
                this.scrollBottom();
            });
        },
        methods: {
            sendMessage() {
                if (!this.message || this.message.length === 0)
                    return;

                this.socket.emit('message', this.message);
                this.$store.state.messages.push({
                    user: this.user,
                    text: this.message,
                    date: moment()
                });

                this.message = null;
                this.scrollBottom();
            },
            async scrollBottom() {
                await this.$nextTick();
                this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
            },
            formatDate(date) {
                if (this.$moment().format('YYYY-MM-DD') === this.$moment(date).format('YYYY-MM-DD'))
                    return 'Aujourd\'hui à ' + this.$moment(date).format('HH:mm');
                else if (this.$moment().subtract({ day: 1 }).format('YYYY-MM-DD') === this.$moment(date).format('YYYY-MM-DD'))
                    return 'Hier à ' + this.$moment(date).format('HH:mm');
                else
                    return 'Le ' + this.$moment(date).format('YYYY/MM/DD');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .chat {
        width: 100%;
        height: var(--chat-height);
        background: rgba(255, 255, 255, 0.03);
        padding: 0.5em;
        display: flex;
        flex-wrap: wrap;

        .chat-messages {
            width: 100%;
            height: 190px;
            overflow-y: auto;

            .message {
                font-size: 11pt;
                display: flex;
                align-items: center;
                padding: 0.3em 0.5em;
                margin-right: 0.5em;

                &:hover {
                    background: rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                }

                .author {
                    font-weight: 500;
                    color: white;
                }

                .date {
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 11px;
                    letter-spacing: 0.5px;
                    font-weight: 200;
                    margin-left: 0.5em;
                }

                .text {
                    font-weight: 300;
                    color: rgba(255, 255, 255, 0.7);
                }
            }
        }

        .chat-send {
            margin-top: auto;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: white;

            &::placeholder {
                color: rgba(255, 255, 255, 0.5);
                font-weight: 400;
            }
        }
    }
</style>
