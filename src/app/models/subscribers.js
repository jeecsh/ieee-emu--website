// models/Subscriber.js
import mongoose from 'mongoose';

const SubscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  subscribedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Subscriber || mongoose.model('Subscriber', SubscriberSchema);
