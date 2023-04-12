"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Userresolvers = void 0;
exports.Userresolvers = {
    Query: {
        login: (parent, args, contextValue, info) => {
            return args === null || args === void 0 ? void 0 : args.user;
        }
    }
};
//# sourceMappingURL=User.js.map