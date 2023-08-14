const { authRegisterController } = require("../../controllers/auth");
const User = require("../../database/schemas/User");
const { hashPassword } = require("../../utils/helper");
const fs = require("fs");

jest.mock("../../database/schemas/User");
jest.mock("../../utils/helper");

describe("auth/register test", () => {
    const req = {
        body: {
            username: "chanwoo",
            password: "5565",
            email: "gmail.com",
        },
    };

    const res = {
        status: jest.fn((x) => x),
        send: jest.fn((x) => x),
    };

    test("should send a status code of 400 when user exists", async () => {
        User.findOne.mockImplementationOnce(() => {
            return {
                id: 1,
                username: "chanwoo",
                password: "5565",
            };
        });

        await authRegisterController(req, res);

        expect(res.send).toHaveBeenCalledTimes(1);
    });

    test("should send a status code of 201 when user created", async () => {
        User.findOne.mockResolvedValueOnce(undefined);
        hashPassword.mockReturnValueOnce("hash");

        await authRegisterController(req, res);

        expect(hashPassword).toHaveBeenCalledWith("5565");
        expect(User.create).toHaveBeenCalledTimes(1);
        expect(User.create).toHaveBeenCalledWith({
            username: "chanwoo",
            password: "hash",
            email: "gmail.com",
        });
    });
});