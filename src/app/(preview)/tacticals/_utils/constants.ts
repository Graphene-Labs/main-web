export const env = {
    COMPANY: process.env.REACT_APP_COMPANY,
    CURRENCY: process.env.REACT_APP_CURRENCY,
    LOCAL_API: process.env.REACT_APP_LOCAL_API,
    WEB_BASE: process.env.REACT_APP_WEB_BASE,
    CALIMACO_BASE: process.env.REACT_APP_CALIMACO_BASE,
    CALIMACO_API_BASE: process.env.REACT_APP_CALIMACO_API_BASE,
    CMS: process.env.REACT_APP_WEB_CMS,
    GTM_ID: process.env.GTM_ID,
    ENV: process.env.ENV,
    ACITY_BASE_DOMAIN: process.env.ACITY_BASE_DOMAIN,
    BUCKET_URL: process.env.BUCKET_URL,
    BUCKET_URL_IMG: process.env.BUCKET_URL_IMG,
    OPTIX_PUBLIC_KEY: process.env.OPTIX_PUBLIC_KEY,
    OPTIX_SECRET_KEY: process.env.OPTIX_SECRET_KEY,
};

export const BUCKET_IMG = `${env.BUCKET_URL}/CMS_COL/PROD/STATIC+MULTIMEDIA/IMG`;

export const acityEndpoints = {
    ganaCash: '/api-con-generales/api/Promocion/GanaCash',
    torneoWinner: '/api-con-promocion_winner/api/TorneoWinner',
};

export const notificationConfigObject = {
    host: env.CALIMACO_API_BASE,
    path: '/api/notifications',
    cms: env.CMS,
    company: env.COMPANY,
};

const isProd = env.ENV === 'PROD' || env.ENV === 'MOBILE';

export const ENV_IS_MOBILE = env.ENV === 'MOBILE';

const devGroups = {
    retiradas_verificados: 3031,
    acceso_programa_canje: 3027,
    acceso_test_desarrollo: 542182, // No se usa
    otp_validado: 542215, // No se usa
    welcome_bonus_col: 600014, // No se usa
};

const prodGroups = {
    retiradas_verificados: 68,
    acceso_programa_canje: 542200,
    acceso_test_desarrollo: 542182,
    otp_validado: 542215,
    welcome_bonus_col: 600014, // bono de bienvenida asignado: pendiente o activado
} as const;

export const groups = isProd ? prodGroups : devGroups;

export const userExcluidosCuotas = 600238;

const prodPromotionsId = {
    bienvenidaPrefix: 'BDS',

    bienvenida1Prefix: 'BDS1',
    bienvenida1: 'BDS1_F1_PEN', // 1er depósito
    bienvenida2Prefix: 'BDS2',
    bienvenida2: 'BDS2_F1_PEN', // 2do depósito
    bienvenida3Prefix: 'BDS3',
    bienvenida3: 'BDS3_F1_PEN', // 3er depósito

    bienvenida1USD: 'BDS1_F2_USD', // 1er depósito USD
    bienvenida2USD: 'BDS2_F1_USD', // 2do depósito USD
    bienvenida3USD: 'BDS3_F1_USD', // 3er depósito USD

    bienvenidaADPrefix: 'BDD',
    bienvenidaAD1Prefix: 'BDD1',
    bienvenidaAD2Prefix: 'BDD2',
    bienvenidaAD3Prefix: 'BDD3',

    bienvenidaAD1: 'BDD1_F3_PEN',
    bienvenidaAD2: 'BDD2_F3_PEN', // 2do depósito PEN
    bienvenidaAD3: 'BDD3_F3_PEN', // 3er depósito PEN

    bienvenidaAD1USD: 'BDD1_F3_USD',
    bienvenidaAD2USD: 'BDD2_F3_USD', // 2do depósito USD
    bienvenidaAD3USD: 'BDD3_F3_USD', // 3er depósito USD

    bienvenidaFreeSpinsPrefix: 'FSBD', // Free spins de bienvenida

    bienvenidaFreeSpins1Prefix: 'FSBD_F1', // Free spins de bienvenida 1er día
    bienvenidaFreeSpins2Prefix: 'FSBD_F2', // Free spins de bienvenida 2do día

    bienvenidaFreeSpinsDeposit2Prefix: 'FSBD2DEP', // Free spins de depósito 2do día
    bienvenidaFreeSpinsDeposit3Prefix: 'FSBD3DEP', // Free spins de depósito 3ro día

    bonoFreeSpinPrefix: 'FS',

    bonoBpPrefix: 'BP', // Cashback
    bonoBpSlotsPrefix: 'BPS', // Cashback Slots
    bonoBpMesasPrefix: 'BPM', // Cashback Mesas
    bonoBpMesasVivoPrefix: 'BMV', // Cashback Mesas en Vivo

    bonoBpCrossPrefix: 'BPCross', // Cashback Cross (?)
    bonoBpFreeSpinPrefix: 'BPCross_FreeSpins', // Cashback Free Spins

    bonoPEN: 'PEN',
    bonoUSD: 'USD',
    bonoRecuperoAD: 'AD', // bono deporte
} as const;

const devPromotionsId = {
    bienvenidaPrefix: 'BDS',

    bienvenida1Prefix: 'BDS1',
    bienvenida1: 'BDS1_F1_PEN', // 1er depósito
    bienvenida2Prefix: 'BDS2',
    bienvenida2: 'BDS2_F1_PEN', // 2do depósito
    bienvenida3Prefix: 'BDS3',
    bienvenida3: 'BDS3_F1_PEN', // 3er depósito

    bienvenida1USD: 'BDS1_F2_USD', // 1er depósito USD
    bienvenida2USD: 'BDS2_F1_USD', // 2do depósito USD
    bienvenida3USD: 'BDS3_F1_USD', // 3er depósito USD

    bienvenidaADPrefix: 'BDD',
    bienvenidaAD1Prefix: 'BDD1',
    bienvenidaAD2Prefix: 'BDD2',
    bienvenidaAD3Prefix: 'BDD3',

    bienvenidaAD1: 'BDD1_TEST_PEN', // 1er depósito PEN
    bienvenidaAD2: 'BDD2_TEST_PEN', // 2do depósito PEN
    bienvenidaAD3: 'BDD3_TEST_PEN', // 3er depósito PEN

    bienvenidaAD1USD: 'BDD1_TEST_USD', // 1er depósito USD
    bienvenidaAD2USD: 'BDD2_TEST_USD', // 2do depósito USD
    bienvenidaAD3USD: 'BDD3_TEST_USD', // 3er depósito USD

    bienvenidaFreeSpinsPrefix: 'FSBD', // Free spins de bienvenida

    bienvenidaFreeSpins1Prefix: 'FSBD_F1', // Free spins de bienvenida 1er día
    bienvenidaFreeSpins2Prefix: 'FSBD_F2', // Free spins de bienvenida 2do día

    bienvenidaFreeSpinsDeposit2Prefix: 'FSBD2DEP', // Free spins de depósito 2do díaFSBD_F1_PEN_TEST
    bienvenidaFreeSpinsDeposit3Prefix: 'FSBD3DEP', // Free spins de depósito 2do día

    bonoFreeSpinPrefix: 'FS', // Free spin

    bonoBpPrefix: 'BP', // Cashback
    bonoBpSlotsPrefix: 'BPS', // Cashback Slots
    bonoBpMesasPrefix: 'BPM', // Cashback Mesas
    bonoBpMesasVivoPrefix: 'BMV', // Cashback Mesas en Vivo

    bonoBpCrossPrefix: 'BPCross', // Cashback Cross (?)
    bonoBpFreeSpinPrefix: 'BPCross_FreeSpins', // Cashback Free Spins

    bonoPEN: 'PEN',
    bonoUSD: 'USD',
    bonoRecuperoAD: 'AD',
};

export const promotionsId = isProd ? prodPromotionsId : devPromotionsId;

export const acceptedCurrencies = ['PEN', 'USD'] as const;

export const MINUTE_MILISECONDS = 1000 * 60;
export const HOUR_MILISECONDS = 1000 * 60 * 60;
export const DAYS_MILISECONDS = HOUR_MILISECONDS * 24;
export const MONTH_MILISECONDS = DAYS_MILISECONDS * 31;
export const YEAR_MS = 31556926000;
export const SUPPORT_NUMBER = '(01) 705-4440';
export const FACEBOOK_URL = 'https://www.facebook.com/AtlanticCityPe/';
export const INSTAGRAM_URL = 'https://www.instagram.com/atlanticcityperu/?igshid=YmMyMTA2M2Y%3D';
export const TIKTOK_URL = 'https://www.tiktok.com/@atlanticcitysports?_t=8qnIHjkiRAE&_r=1';

export enum DEPOSITORDER {
    FIRST = 'firts',
    SECOND = 'second',
    THIRD = 'third',
}

export enum BLOCKED_MODAL_IN_PAGES {
    SALDOSYRETIROS = 'saldos-y-retiros',
}

export const CURRENT_TYC_FRAGMENT = 'TERMINOS_Y_CONDICIONES_V2';
export const CURRENT_POLICIES_FRAGMENT = 'POLITICA_DE_PROTECCION_DE_DATOS_V2';
