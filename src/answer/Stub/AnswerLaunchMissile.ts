import {AnswerLaunchMissileSystem, AnswerMissile} from "./AnswerTypes";

export class AnswerLaunchMissileImpl implements AnswerLaunchMissileSystem {
    missile: AnswerMissile

    constructor(missile: AnswerMissile) {
        this.missile = missile
    }

    launch() {
            return this.missile.fire()
        }

}