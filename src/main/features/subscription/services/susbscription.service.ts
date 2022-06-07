import { SubscriptionTier } from "../models/subscription-tier.model";
import { SubscriptionConstants } from "../utils/subscription-constants";
import { SubscriptionMessages } from "../utils/subscription-messages";

export class SubscriptionService {
  private static instance: SubscriptionService;

  public static getInstance(): SubscriptionService {
    return !!SubscriptionService.instance
      ? SubscriptionService.instance
      : new SubscriptionService();
  }

  public calculateTotalPriceFromSubscriptions(
    subscriptions: number
  ): number | undefined {
    const tier = this.findTierSubscription(subscriptions);
    if (!tier)
      throw new Error(SubscriptionMessages.error.subscriptionNumber.invalid);
    return subscriptions * tier.price;
  }

  private findTierSubscription(
    subscriptions: number
  ): SubscriptionTier | undefined {
    if (subscriptions === undefined || subscriptions === null)
      throw new Error(
        SubscriptionMessages.error.subscriptionNumber.notProvided
      );
    if (Number.isNaN(subscriptions))
      throw new Error(SubscriptionMessages.error.subscriptionNumber.invalid);
    return SubscriptionConstants.SUBSCRIPTION_TIERS.find(
      (tier) => tier.minRange <= subscriptions
    );
  }
}
