import {
  CloneDeployed as CloneDeployedEvent,
  WritingEditionPurchased as WritingEditionPurchasedEvent
} from "../generated/Mirror Observer/MirrorObserver"
import { Clone, ClonePurchase } from "../generated/schema"


export function handleCloneDeployed(event: CloneDeployedEvent): void {
  let entity = new Clone(
    event.params.clone.toHexString()
  )
  entity.factory = event.params.factory
  entity.owner = event.params.owner
  entity.clone = event.params.clone

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWritingEditionPurchased(
  event: WritingEditionPurchasedEvent
): void {

  let clone = Clone.load(event.params.clone.toHexString());
  if (!clone) {
    clone = new Clone(event.params.clone.toHexString())
  }
  let entity = new ClonePurchase(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.clone = clone.id
  entity.tokenId = event.params.tokenId
  entity.recipient = event.params.recipient
  entity.price = event.params.price
  entity.message = event.params.message
  entity.flatFeeAmount = event.params.flatFeeAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
