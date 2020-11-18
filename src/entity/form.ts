import { FormElem, FormType } from '../modules/IForm';

export interface IForm<T> {
    formData: T;
    fieldSort?: Array<string>;
    fieldTypes: IFieldType;
}

export interface IFieldType {
    [key: string]: IFieldTypes;
}

export interface IFieldTypes {
    name: string;
    elem: FormElem;
    type?: FormType;
    placeholder?: string;
    option?: Array<Array<string>>;
}
