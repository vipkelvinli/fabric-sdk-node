import { ICryptoSuite, ICryptoKeyStore, IKeyValueStore } from 'fabric-client';

export abstract class BaseClient {
    constructor();
    static setLogger(logger: any): void;
    static addConfigFile(path: string): void;
    static getConfigSetting(name: string, default_value?: any): any;
    static setConfigSetting(name: string, value: any): void;
    static newCryptoSuite(): ICryptoSuite;
    static newCryptoKeyStore(obj?: { path: string }): ICryptoKeyStore;
    static newDefaultKeyValueStore(obj?: { path: string }): Promise<IKeyValueStore>;
    static normalizeX509(raw: string): string;
    setCryptoSuite(suite: ICryptoSuite): void;
    getCryptoSuite(): ICryptoSuite;
}