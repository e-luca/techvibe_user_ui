import { DeviceType } from './data-models/enum/DeviceType.enum';
import { DeviceTypeInfo } from "./data-models/model/DeviceTypeInfo.model"

export const NavBarItems = [
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/devices',
        label: 'Devices'
    }
]

export const DeviceMenuItems: DeviceTypeInfo[] = [
    new DeviceTypeInfo(DeviceType.AUDIO_EQUIPMENT, 'Audio Equipment'),
    new DeviceTypeInfo(DeviceType.CAMERA, 'Camera'),
    new DeviceTypeInfo(DeviceType.GAMING_CONSOLES, 'Gaming & Consoles'),
    new DeviceTypeInfo(DeviceType.LAPTOP_NOTEBOOKS, 'Laptops & Notebooks'),
    new DeviceTypeInfo(DeviceType.MOBILE_SMARTPHONES, 'Mobile & Smartphones'),
    new DeviceTypeInfo(DeviceType.SMART_HOME_DEVICES, 'Smart Home Devices')
]