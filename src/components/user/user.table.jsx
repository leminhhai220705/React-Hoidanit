import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';



const UserTable = () => {

    const [dataUsers, setDataUsers] = useState([
        {
            _id: 'eric',
            fullName: 25,
            email: "HN",
        },
        {
            _id: 'hoidanit',
            fullName: 26,
            email: "HCM",
        }
    ]);

    useEffect(() => {
        loadUser();
    }, []) // array rỗng để ngăn chặn tình trạng render vòng lặp vô hạn của react

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data);
    }
    return (
        <Table columns={columns} dataSource={dataUsers} rowKey={'_id'} />
    )
}

export default UserTable;