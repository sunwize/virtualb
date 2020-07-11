export default class JitsiAPI {
    static join(id, name) {
        if (this.jitsi)
            JitsiAPI.leave();

        const domain = 'meet.jit.si';
        const options = {
            roomName: id,
            parentNode: document.querySelector('#meet'),
            subject: 'whatever',
            configOverwrite: {
                subject: name
            }
        };

        // eslint-disable-next-line no-undef
        this.jitsi = new JitsiMeetExternalAPI(domain, options); // Imported in index.html
    }

    static executeCommand(command, ...params) {
        if (!this.jitsi)
            return;

        this.jitsi.executeCommand(command, params);
    }

    static leave() {
        if (!this.jitsi)
            return;

        this.jitsi.dispose();
    }
}
