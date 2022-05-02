const UserService = require('./../../app/services/UserService');

describe("Test for User Service", () => {
    test('Create a new user using the UserService', () => {
        const user = UserService.create(1, 'alemango', 'Juan');
        expect(user.id).toBe(1);
        expect(user.username).toBe('alemango');
        expect(user.name).toBe('Juan');
        expect(user.bio).not.toBeUndefined();
    });

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, 'alemango', 'Juan');
        const userInfoList = UserService.getInfo(user);
        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe('alemango');
        expect(userInfoList[2]).toBe('Juan');
        expect(userInfoList[3]).toBe('Sin bio');
    });

    test("3. Update username", () => {
        const user = UserService.create(1, 'alemango', 'Juan');
        UserService.updateUserUsername(user, 'alemangotest');
        expect(user.username).toBe('alemangotest');
    });

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, 'alemango', 'Juan');
        const user2 = UserService.create(2, 'alemangotest', 'Juan');
        const user3 = UserService.create(3, 'alemangotest2', 'Juan');

        const usernames = UserService.getAllUsernames([user1, user2, user3]);

        expect(usernames).toContain('alemango');
        expect(usernames).toContain('alemangotest');
        expect(usernames).toContain('alemangotest2');
    });
});