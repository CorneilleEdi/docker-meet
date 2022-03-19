// Some Enums to access easily the envs
export enum CONFIGURATIONS {
  // Configurations
  PORT = 'port',
  VERSION = 'version',
}

export const configurations = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  version: process.env.VERSION || '0.0.0',
});
