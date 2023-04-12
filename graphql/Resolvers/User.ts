export const Userresolvers = {
    Query: {
        login: (parent: any, args: any, contextValue: any, info: any) => {

            return args?.user
        }
    }
};