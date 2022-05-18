export interface UserT {
    accessToken: string,
    auth: any,
    displayName: string | null,
    email: string,
    emailVerified: boolean,
    isAnonymous: boolean,
    metadata: {
        createdAt: string, 
    lastLoginAt: string, 
    lastSignInTime: string, 
    creationTime: string},
    phoneNumber: null,
    photoURL: null,
    proactiveRefresh: {
        user: any, 
        isRunning: boolean, 
        timerId: null, 
        errorBackoff: number},
    providerData: any[],
    providerId: string,
    reloadListener: null,
    reloadUserInfo: any,
    stsTokenManager: {
        refreshToken: string, 
        expirationTime: number
        },
    tenantId: null,
    uid: string,
    refreshToken: string
}