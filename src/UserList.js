import React, { useState, useEffect } from "react"
import { Input } from "@components/ui/input"
import { Button } from "@components/ui/button"

interface User {
    id: number
    name: string
    email: string
}

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]) 
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]) 

    useEffect(() => {
        // Simulating an API call
        const fetchUsers = async () => {
            // In a real app, this would be an API call
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUsers(data)
        }

        fetchUsers()
    }, [])

    useEffect(() => {
        // Filter users based on search term
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredUsers(filtered)
    }, [users, searchTerm])

    return (
        <div className="p-4">
            <h1 className="text-2x1 font-bold mb-4">User List</h1>
            <div className="mb-4 flex gap-2">
                <Input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button onClick={() => setSearchTerm("")}>Clear</Button>
            </div>
            <ul className="space-y-2">
                {filteredUsers.map((user) => (
                    <li key={user.id} className="bg-gray-100 p-2 rounded">
                        <strong>{user.name}</strong> ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    )
}