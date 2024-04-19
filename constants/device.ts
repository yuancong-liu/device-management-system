import type { DeviceStatus } from "~/types/device";

/**
 * The status of the device.
 */
export const DEVICE_STATUS: Record<DeviceStatus, string> = {
  'repairing': 'Repairing',
  'in-use': 'In Use',
  'available': 'Available',
  'lost': 'Lost',
  'recycled': 'Recycled',
  'disposed': 'Disposed',
  'unknown': 'Unknown',
};