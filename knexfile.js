const sharedConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migration: {directory: './data/migrations'},
    seeds: { directory: './data/seeds' },
    pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
}

module.exports = {
    development: {
        ...sharedConfig,
        connection: { filename: './data/cook_boook.db3' },
        
    },
    testing: {
        ...sharedConfig,
        connection: { fileanme: './data/cook_book.test.db3' },
    },
    production: {}
}