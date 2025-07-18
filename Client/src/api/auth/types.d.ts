type LoginType = {
    id: string;
    email: string;
    role: string;
    token: string;
};

type RegisterType = {
    id: string;
    email: string;
    role: string;
};

type AddLoginType = {
    email: string;
    password: string;
};

type AddRegisterType = {    
    email: string;
    password: string;
    role: string
};