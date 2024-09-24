const SECRET_JWT_KEY = "la-pinga-es-mia";
const SALT_ROUNDS = 10;
const PORT = process.env.PORT ?? 3129;

module.exports = { SECRET_JWT_KEY, SALT_ROUNDS, PORT };
