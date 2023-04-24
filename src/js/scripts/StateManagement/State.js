class State {
    constructor() {
        this.user = null;
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

    getUser() {
        return this.user;
    }
}

export default State;