export type NotificationType = 'rental-ending-soon' | 'rental-ended' | 'general';

export interface RentalNotification {
  id: string;
  type: NotificationType;
  title: string;
  body: string;
  timeRemaining?: number; 
  timestamp: Date;
  isRead: boolean;
}

export interface NotificationSettings {
  enableNotifications: boolean;
  enableSoundNotifications: boolean;
  enableVibration: boolean;
}
