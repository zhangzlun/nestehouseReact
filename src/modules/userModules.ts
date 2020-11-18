import { IUser, IUserInsert } from '~/entity/user';
import { IForm } from '~/entity/form';
import { FormElem, FormType } from '../entity/enum/formType';

export const UserList = [] as Array<IUser>;

export const UserForm: IForm<IUserInsert> = {
    formData: {} as IUserInsert,
    fieldSort: [
        'firstName',
        'lastName',
        'nickName',
        'birthdayDate',
        'identityNumber',
        'phone',
        'telephone',
        'email',
        'country',
        'gender',
        'postalCode',
        'roadNo',
        'address',
        'relationshipStatus',
        'account',
        'password',
        'remark',
    ],
    fieldTypes: {
        lastName: {
            name: '姓氏',
            elem: FormElem.input,
            type: FormType.text,
        },
        firstName: {
            name: '名字',
            elem: FormElem.input,
            type: FormType.text,
        },
        nickName: {
            name: '匿名',
            elem: FormElem.input,
            type: FormType.text,
        },
        phone: {
            name: '手機',
            elem: FormElem.input,
            type: FormType.text,
        },
        telephone: {
            name: '電話',
            elem: FormElem.input,
            type: FormType.text,
        },
        email: {
            name: 'email',
            elem: FormElem.input,
            type: FormType.email,
        },
        gender: {
            name: '性別',
            elem: FormElem.select,
            option: [
                ['', '選擇'],
                ['1', '男'],
                ['0', '女'],
            ],
        },
        birthdayDate: {
            name: '生日',
            elem: FormElem.input,
            type: FormType.date,
        },
        postalCode: {
            name: '郵遞區號',
            elem: FormElem.select,
            option: [],
        },
        address: {
            name: '住址',
            elem: FormElem.input,
            type: FormType.text,
        },
    },
};
