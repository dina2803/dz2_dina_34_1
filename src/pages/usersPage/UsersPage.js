import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersAction } from '../../redux/actions'
import Card from '../../components/Card'

function UsersPage() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.usersReducer.users)
    const [selectedUser, setSelectedUser] = useState(null)
    const getUsers = () => {
        dispatch(fetchUsersAction())
    }
    const handleCardHover = (userId) => {
        setSelectedUser(userId)
    }
    return (
        <div>
            <button onClick={getUsers}>get users</button>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {users.map((user) => (
                    <Card key={user.id} cardInfo={user} isSelected={selectedUser === user.id} onMouseEnter={() => handleCardHover(user.id)} onMouseLeave={() => setSelectedUser(null)}/>
                ))}
            </div>
        </div>
    )
}
export default UsersPage