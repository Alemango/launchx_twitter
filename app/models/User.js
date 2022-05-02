class User {
    constructor(id, username, name, bio, dateCreated, lastUpdated) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }

    getUsername() {
        return this.username;
    }

    getBio() {
        return this.bio;
    }

    getDateCreated() {
        return this.dateCreated;
    }

    getLastUpdated() {
        return this.lastUpdated;
    }

    setUsername(username) {
        this.username = username;
    }

    setBio(bio) {
        this.bio = bio;
    }
}

module.exports = User;