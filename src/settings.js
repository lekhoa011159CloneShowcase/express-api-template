import dotenv from 'dotenv';

dotenv.config();

const testVariableEnv = process.env.TEST_VARIABLE_ENV;

export { testVariableEnv };
