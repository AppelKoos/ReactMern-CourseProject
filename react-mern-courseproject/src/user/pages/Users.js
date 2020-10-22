import React from 'react';

import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
            id: "u1",
            name: "Johan Smith",
            image: "https://p.kindpng.com/picc/s/111-1113220_peepo-emote-hd-png-download.png",
            places: 3
        }
    ] //dummy until have backend

    return <UsersList items={USERS} />
}
export default Users