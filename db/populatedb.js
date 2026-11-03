#! /usr/bin/env node
require('dotenv').config();

const { Client } = require('pg');

const SQL = `
    CREATE TABLE IF NOT EXISTS usernames (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR ( 255 )
    );

    INSERT INTO usernames (username)
    VALUES 
        ('Mimoy'),
        ('Powder'),
        ('Nana'),
        ('Sagi');
`;

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: `postgresql://${DB_USER}:${DB_PASSWORD}@localhost:5432/top_users`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();