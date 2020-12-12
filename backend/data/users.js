import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@admin.admin',
        password: bcrypt.hashSync('admin', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@person.person',
        password: bcrypt.hashSync('john', 10),
    },
    {
        name: 'Max Mustermann',
        email: 'max@person.person',
        password: bcrypt.hashSync('max', 10),
    }
]

export default users