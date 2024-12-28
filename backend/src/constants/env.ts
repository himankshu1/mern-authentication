export const getEnvValue = (key: string, defaultValue?: string): string => {
    const value = process.env[key] || defaultValue;

    if (value === undefined) {
        throw new Error(`Missing environment variable ${key}`);
    }

    return value;
};

export const MONGODB_CONNECTION_STRING = getEnvValue(
    "MONGODB_CONNECTION_STRING"
);
export const NODE_ENV = getEnvValue("NODE_ENV");
export const PORT = getEnvValue("PORT");
export const APP_ORIGIN = getEnvValue("APP_ORIGIN");
export const JWT_SECRET = getEnvValue("JWT_SECRET");
export const JWT_REFRESH_SECRET = getEnvValue("JWT_REFRESH_SECRET");
export const EMAIL_SENDER = getEnvValue("EMAIL_SENDER");
export const RESEND_API_KEY = getEnvValue("RESEND_API_KEY");
