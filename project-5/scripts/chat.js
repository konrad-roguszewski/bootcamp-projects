// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsubscribe;
    }
    async addChat(message){
        // format a chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        // save the chat document
        const response = await this.chats.add(chat);
        return response;
    }
    getChats(callback){
        this.unsubscribe = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type === 'added'){
                        // update the ui
                        callback(change.doc.data());
                    }
                });
            });
    }
    updateName(username){
        this.username = username;
    }
    updateRoom(room){
        this.room = room;
        console.log('room updated');
        if(this.unsubscribe){
            this.unsubscribe();
        }
    }
}

const chatroom = new Chatroom('general', 'Konrad');

chatroom.getChats((data) => {
    console.log(data);
})

setTimeout(() => {
    chatroom.updateRoom('gaming');
    chatroom.updateName('Adam');
    chatroom.getChats((data) => {
        console.log(data);
    });
    chatroom.addChat('hello world');
}, 3000);