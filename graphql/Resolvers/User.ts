import User from "../../Models/user.model";
import { utilities } from "../../utils/utilities";
export const Userresolvers = {
    Query: {
        login: async (parent: any, args: any, contextValue: any, info: any) => {
            return User.findOne({ email: args.user.email })
                .then(async (data1) => {
                    console.log(data1)
                    if (data1 == null) {
                        return { message: `User does not exist with this email ${args.user.email}` }
                    }

                    const generatedToken = await utilities?.generateToken(data1.email)

                    return { data: data1, token: generatedToken, message: "Found Successfull" }
                })
                .catch(err => {
                    console.log(err.message)
                    return { message: `${err.message}` }
                })
        }
    },
    Mutation: {
        register: async (parent: any, args: any, contextValue: any, info: any) => {
            let encodedPassword = await utilities?.encodePassword(args?.user?.password)
            const newUser = new User({ ...args.user, password: encodedPassword })
            return newUser.save().then(data => {
                return { message: "User Register Successfully", status: "200" }
            }).catch(err => {
                return { message: err.message, status: "500" }
            })

        }
    }
};