import React from 'react'

export default function Users(props) {

    const { users, showBlogs } = props;

    const arrOfUsers = users.map((user) => {
        return (
            <div key={user.id} onClick={() => showBlogs("" + user.id, user.name)}>
                <hr></hr>
                <h3>{user.name}</h3>
                <p>{user.website}</p>
                <p>{user.companyInfo}</p>
            </div>
        )
    })

    return (
        <>
            {arrOfUsers}
        </>
    )
}
