import { KeycloakService } from "keycloak-angular";


export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
    return () =>
        keycloak.init({
            config: {
                url: 'http://localhost:8080/auth',
                realm: 'Angular-Demo',
                clientId: 'angular-web-client3',
            },
            initOptions: {
                //onLoad: 'check-sso',
                onLoad: 'login-required',
                checkLoginIframe: true

            },
            loadUserProfileAtStartUp: true
        });
}