import React from 'react';
import { useEffect, useState } from 'react';
import PrimaryLayout from '../layout/PrimaryLayout';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        fetchUserData();
    }, [])

    const fetchUserData = () => {
        fetch('https://api.github.com/users').then(response => {
            response.json().then(function (data) {
                setUsers(data);
            });
        })
    }

    const handlePageChange = (selectedPageNumber) => {
        setPageNumber(selectedPageNumber)
        fetchUserData();
    }

    return (
        <PrimaryLayout column="col">
            <div className="py-4">
                <h1>User Detail</h1>
                {
                    users.map((userInfo) => (
                        <div className="d-flex align-items-center p-2 border" key={userInfo.id}>
                            <div className="px-3">
                                <img src={userInfo.avatar_url} width="42" height="42" />
                            </div>
                            <div className="px-3">{userInfo.login} page: {pageNumber}</div>
                        </div>
                    ))
                }
                <button onClick={() => handlePageChange(1)}>Page 1</button>
                <button onClick={() => handlePageChange(2)}>Page 2</button>
            </div>
        </PrimaryLayout>
    )
}

export default Users;

