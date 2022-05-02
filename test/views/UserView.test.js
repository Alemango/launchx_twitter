const UserView = require('./../../app/views/UserView');

describe("Test for User Views", () => {
    test("Return an error object when try to create a new user with an null payload", () => {
        const payload = null;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/payload no existe/);
    });

    test("Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = {
            id: "id",
            username: null,
            name: 12,
        };
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });

    test("Return an error object when try to create a new user eith a payload with missing properties", () => {
        const payload = {
            username: "username",
        }
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });

    test("Create a user by a given valid payload", () => {
        const payload = {
            id: 1,
            username: "username",
            name: "name",
        };
        const result = UserView.createUser(payload);
        expect(result.id).toBe(1);
        expect(result.username).toBe("username");
        expect(result.name).toBe("name");
    });
});