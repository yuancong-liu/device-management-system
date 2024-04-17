/**
 * The type of the device.
 */
export type DeviceType = 'iPhone' | 'iPad' | 'MacBook' | 'Pc';

/**
 * The status of the device.
 */
export type DeviceStatus =
  | 'maintenance'
  | 'in-use'
  | 'available'
  | 'unavailable'
  | 'lost'
  | 'recycled'
  | 'disposed'
  | 'unknown';

/**
 * User information.
 */
export type User = {
  /**
   * The unique identifier of the user.
   */
  id: string;
  /**
   * The name of the user.
   */
  name: string;
  /**
   * The email of the user.
   */
  email: string;
};

/**
 * iPhone details.
 */
export type IPhoneDetails = {
  /**
   * The serial number of the iPhone.
   */
  serialNumber: string;
  /**
   * The model of the iPhone.
   */
  model: string;
  /**
   * The color of the iPhone.
   */
  color: string;
};

/**
 * iPad details.
 */
export type IPadDetails = {
  /**
   * The serial number of the iPad.
   */
  serialNumber: string;
  /**
   * The model of the iPad.
   */
  model: string;
  /**
   * The color of the iPad.
   */
  color: string;
};

/**
 * MacBook details.
 */
export type MacBookDetails = {
  /**
   * The serial number of the MacBook.
   */
  serialNumber: string;
  /**
   * The model of the MacBook.
   */
  model: string;
  /**
   * The chip of the MacBook.
   */
  chip: string;
};

/**
 * Pc details.
 */
export type PcDetails = {
  /**
   * The serial number of the Pc.
   */
  serialNumber: string;
  /**
   * The model of the Pc.
   */
  model: string;
  /**
   * The maker of the Pc.
   */
  maker: string;
};

export type Device = {
  /**
   * The unique identifier of the device.
   */
  id: string;
  /**
   * The type of the device.
   */
  type: DeviceType;
  /**
   * The status of the device.
   */
  status: DeviceStatus;
  /**
   * Last update date of the device.
   */
  lastUpdate: string;
  /**
   * The date of purchase of the device.
   */
  dayOfPurchase: string;
  /**
   * The user of the device.
   * If the device is not assigned to a user, this field is undefined.
   */
  user: User | undefined;
  /**
   * The details of the device.
   */
  details: IPhoneDetails | IPadDetails | MacBookDetails | PcDetails;
};
