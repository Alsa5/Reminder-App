import { Reminder } from "../models/reminderModel";

export const reminderController = {
  create: async (data: any) => await Reminder.create(data),
  read: async () => await Reminder.find(),
  update: async (id: string, update: any) =>
    await Reminder.findByIdAndUpdate(id, update, { new: true }),
  delete: async (id: string) =>
    await Reminder.findByIdAndDelete(id),
};
