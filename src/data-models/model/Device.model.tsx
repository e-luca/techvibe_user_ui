import { DeviceType } from '../enum/DeviceType.enum'

export interface Device {
    id: number;
    name: string;
    type: DeviceType;
    shortDescription: string;
    longDescription: string;
    price: number;
    available: boolean;
    imageUrl: string;
}
