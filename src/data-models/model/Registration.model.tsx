import { AccessInfo } from './AccessInfo.model'
import { User } from './User.model'
import { UserAddress } from './UserAddress.model'

export class Registration {
    public constructor(
        public user: User,
        public accessInfo: AccessInfo,
        public address: UserAddress,
    ) {}
}
