export const resolvers = {
    User: {
        id: () => {
            return 0;
        },
        name: () => {
            return "alan";
        },
        password: () => {
            return "12345678";
        }
    }
}