export class AuthFakeService {
    loggedId = false;

    isAuth() {
        return new Promise((resolve, error) => {
            setTimeout(() => {
                resolve(this.loggedId);
            }, 800);
        })
    }
    login() {
        this.loggedId = true;
    }

    logout() {
        this.loggedId = false;
    }
}