const User = require('./../../app/models/User');

describe("Unit Test for User class", () => {
    test('Create an User object', () => {
        const user = new User(1,'alemango', 'Juan', 'Bio', 'dateCreated', 'lastUpdated');

        expect(user.id).toBe(1);
        expect(user.username).toBe('alemango');
        expect(user.name).toBe('Juan');
        expect(user.bio).toBe('Bio');
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });

    test('Add getters', () => {
        const user = new User(1,'alemango', 'Juan', 'Bio');

        expect(user.getUsername()).toBe('alemango');
        expect(user.getBio()).toBe('Bio');
        expect(user.getDateCreated()).not.toBeUndefined();
        expect(user.getLastUpdated()).not.toBeUndefined();
    });

    test('Add setters', () => {
        const user = new User(1,'alemango', 'Juan', 'Bio');

        user.setUsername('Aleman');
        user.setBio('New bio');

        expect(user.getUsername()).toBe('Aleman');
        expect(user.getBio()).toBe('New bio');
    });
});