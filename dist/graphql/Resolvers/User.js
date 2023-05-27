"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Userresolvers = void 0;
const user_model_1 = __importDefault(require("../../Models/user.model"));
const utilities_1 = require("../../utils/utilities");
exports.Userresolvers = {
    Query: {
        login: (parent, args, contextValue, info) => __awaiter(void 0, void 0, void 0, function* () {
            return user_model_1.default.findOne({ email: args.user.email })
                .then((data1) => __awaiter(void 0, void 0, void 0, function* () {
                console.log(data1);
                if (data1 == null) {
                    return { message: `User does not exist with this email ${args.user.email}` };
                }
                const generatedToken = yield (utilities_1.utilities === null || utilities_1.utilities === void 0 ? void 0 : utilities_1.utilities.generateToken(data1.email));
                return { data: data1, token: generatedToken, message: "Found Successfull" };
            }))
                .catch(err => {
                console.log(err.message);
                return { message: `${err.message}` };
            });
        })
    },
    Mutation: {
        register: (parent, args, contextValue, info) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            let encodedPassword = yield (utilities_1.utilities === null || utilities_1.utilities === void 0 ? void 0 : utilities_1.utilities.encodePassword((_a = args === null || args === void 0 ? void 0 : args.user) === null || _a === void 0 ? void 0 : _a.password));
            const newUser = new user_model_1.default(Object.assign(Object.assign({}, args.user), { password: encodedPassword }));
            return newUser.save().then(data => {
                return { message: "User Register Successfully", status: "200" };
            }).catch(err => {
                return { message: err.message, status: "500" };
            });
        })
    }
};
//# sourceMappingURL=User.js.map