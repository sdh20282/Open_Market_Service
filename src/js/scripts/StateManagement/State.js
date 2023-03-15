class State {
    constructor() {
        this.user = '';
        this.token = '';
    }

    setToken(token) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }

    setUser(user) {
        this.user = user;
    }
}

export default State;