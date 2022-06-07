import { SubscriptionTier } from "../models/subscription-tier.model";
import subscriptionTiers from "./subscription-tiers.json";

export class SubscriptionConstants {
  public static readonly SUBSCRIPTION_TIERS: SubscriptionTier[] =
    subscriptionTiers as SubscriptionTier[];
}
