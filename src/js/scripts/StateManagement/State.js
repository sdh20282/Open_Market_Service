class State {
    constructor() {
        this.user = null;
        this.token = '';
        this.isPurchaser = true;
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

    setIsPurchaser(isPurchaser) {
        this.isPurchaser = isPurchaser;
    }

    getIsPurchaser() {
        return this.isPurchaser;
    }
}

export default State;