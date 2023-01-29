import {AnswerLaunchMissileSystem, AnswerMissile} from "./AnswerTypes";

export class AnswerLaunchMissileImpl implements AnswerLaunchMissileSystem {
    missile: AnswerMissile
    password: string

    constructor(missile: AnswerMissile, password: string) {
        this.missile = missile
        this.password = password
    }

    launch() {
        if (this.passwordCheck() === true) {
            return this.missile.fire()
        } else {
            return this.missile.selfDestruction()
        }
    }

    passwordCheck() {
        if (this.password === "black300") {
            return true
        } else {
            return false
        }
    }

}