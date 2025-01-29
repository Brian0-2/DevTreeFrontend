export type TUser = {
    name: string;
    email: string;
    handle: string;
    password: string;
}

export type RegisterForm = Pick<TUser, 'handle' | 'email' | 'name'> & {
    password: string;
    password_confirmation: string;
}