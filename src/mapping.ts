import { Fee } from "../generated/schema";
import {
  FeeCharged
} from "../generated/ERC20Forwader/ERC20Forwader";

export function handleFeeCharged(event: FeeCharged): void {
  let fee = new Fee(event.transaction.from.toHex());
  fee.userAddress = event.params.from;
  fee.feeCharged = event.params.charge;
  fee.tokenAddress = event.params.token;
  fee.save();
}


