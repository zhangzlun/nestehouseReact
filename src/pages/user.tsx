import {NextPage} from 'next';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {useSelector, useDispatch} from 'react-redux';
import {CHANGE_USER, insertUser} from '~/reducer/userReducer';
import {IForm} from '~/entity/form';
import {FormElem} from '~/entity/enum/formType';
import {IUserInsert} from '~/entity/user';

const UserPage: NextPage<{}> = () => {
    // 取得State資料
    const userState: IForm<IUserInsert> = useSelector((state) => state.userForm);
    const dispatch = useDispatch();

    const data = userState.formData;
    const field = userState.fieldTypes;
    const sort = userState.fieldSort;

    const onChange = (name) => (e) => {
        dispatch(
            CHANGE_USER({
                ...data,
                [name]: e.target.value,
            })
        );
    };
    const addUser = () => {
        dispatch(insertUser(data));
    };

    return (
        <StyledForm>
            {sort.map((value, index) => {
                const dl = field[value];
                if (dl === undefined) {
                    return '';
                }

                return (
                    <div key={index}>
                        <label>{dl.name}</label>
                        {dl.elem === FormElem.input
                            ? (<input type={dl.type} value={data[value]} onChange={onChange(value)}/>)
                            : (<select onChange={onChange(value)}>{dl.option.map((val, ind) => <option key={ind} selected={data[value] === val[0]} value={val[0]}>{val[1]}</option>)}</select>
                            )}
                    </div>
                );
            })}
            <div>
                <button onClick={addUser}>送出</button>
            </div>
        </StyledForm>
    );
};

const StyledForm = styled.main.attrs({
    className: 'flex flex-wrap px-5',
})`
    & {
        > div {
            ${tw`w-full lg:w-3/12 px-3 flex items-center`}
            label {
                ${tw`block flex-shrink-0 uppercase tracking-wide text-gray-700 text-sm font-bold `}
            }
            input {
                ${tw`m-2 appearance-none block w-full text-gray-700 border border-gray-400 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            }
            button {
                ${tw`w-full ml-5 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            }
        }
    }
`;

export default UserPage;
