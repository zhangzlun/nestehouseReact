export interface IUser {
    id?: string;
    firstName?: string;
    lastName?: string;
    gender?: number;
    nickName?: string;
    birthdayDate?: string;
    identityNumber?: string;
    companyId?: string;
    guarantorId?: string;
    phone?: string;
    telephone?: string;
    email?: string;
    country?: string;
    postalCode?: string;
    roadNo?: string;
    address?: string;
    relationshipStatus?: string;
    account?: string;
    password?: string;
    remark?: string;
}

export interface IUserInsert {
    firstName: string;
    lastName: string;
    gender: number;
    nickName: string;
    birthdayDate: string;
    identityNumber: string;
    phone: string;
    telephone: string;
    email: string;
    country: string;
    postalCode: string;
    roadNo: string;
    address: string;
    relationshipStatus: string;
    account: string;
    password: string;
    remark: string;
}
