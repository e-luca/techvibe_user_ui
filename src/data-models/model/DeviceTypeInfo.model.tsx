import { DeviceType } from '../enum/DeviceType.enum'

export class DeviceTypeInfo {
    public constructor(
        public type: DeviceType,
        public displayName: string
    ) { }
}