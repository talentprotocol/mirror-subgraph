import {
  BaseDescriptionURISet as BaseDescriptionURISetEvent,
  CloneDeployed as CloneDeployedEvent,
  FactoryGuardSet as FactoryGuardSetEvent,
  FactoryImplementationSet as FactoryImplementationSetEvent,
  FactoryLimitSet as FactoryLimitSetEvent,
  FundingRecipientSet as FundingRecipientSetEvent,
  PriceSet as PriceSetEvent,
  RendererSet as RendererSetEvent,
  RoyaltyChange as RoyaltyChangeEvent,
  Transfer as TransferEvent,
  TributarySet as TributarySetEvent,
  WritingEditionLimitSet as WritingEditionLimitSetEvent,
  WritingEditionPurchased as WritingEditionPurchasedEvent
} from "../generated/Mirror Observer/Mirror Observer"
import {
  BaseDescriptionURISet,
  CloneDeployed,
  FactoryGuardSet,
  FactoryImplementationSet,
  FactoryLimitSet,
  FundingRecipientSet,
  PriceSet,
  RendererSet,
  RoyaltyChange,
  Transfer,
  TributarySet,
  WritingEditionLimitSet,
  WritingEditionPurchased
} from "../generated/schema"

export function handleBaseDescriptionURISet(
  event: BaseDescriptionURISetEvent
): void {
  let entity = new BaseDescriptionURISet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.clone = event.params.clone
  entity.oldBaseDescriptionURI = event.params.oldBaseDescriptionURI
  entity.newBaseDescriptionURI = event.params.newBaseDescriptionURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCloneDeployed(event: CloneDeployedEvent): void {
  let entity = new CloneDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.factory = event.params.factory
  entity.owner = event.params.owner
  entity.clone = event.params.clone

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFactoryGuardSet(event: FactoryGuardSetEvent): void {
  let entity = new FactoryGuardSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.guard = event.params.guard

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFactoryImplementationSet(
  event: FactoryImplementationSetEvent
): void {
  let entity = new FactoryImplementationSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.factory = event.params.factory
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFactoryLimitSet(event: FactoryLimitSetEvent): void {
  let entity = new FactoryLimitSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.factory = event.params.factory
  entity.oldLimit = event.params.oldLimit
  entity.newLimit = event.params.newLimit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundingRecipientSet(
  event: FundingRecipientSetEvent
): void {
  let entity = new FundingRecipientSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.clone = event.params.clone
  entity.oldFundingRecipient = event.params.oldFundingRecipient
  entity.newFundingRecipient = event.params.newFundingRecipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePriceSet(event: PriceSetEvent): void {
  let entity = new PriceSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.clone = event.params.clone
  entity.oldLimit = event.params.oldLimit
  entity.newLimit = event.params.newLimit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRendererSet(event: RendererSetEvent): void {
  let entity = new RendererSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.clone = event.params.clone
  entity.renderer = event.params.renderer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoyaltyChange(event: RoyaltyChangeEvent): void {
  let entity = new RoyaltyChange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.clone = event.params.clone
  entity.oldRoyaltyRecipient = event.params.oldRoyaltyRecipient
  entity.oldRoyaltyBPS = event.params.oldRoyaltyBPS
  entity.newRoyaltyRecipient = event.params.newRoyaltyRecipient
  entity.newRoyaltyBPS = event.params.newRoyaltyBPS

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.clone = event.params.clone
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTributarySet(event: TributarySetEvent): void {
  let entity = new TributarySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.factory = event.params.factory
  entity.clone = event.params.clone
  entity.oldTributary = event.params.oldTributary
  entity.newTributary = event.params.newTributary

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWritingEditionLimitSet(
  event: WritingEditionLimitSetEvent
): void {
  let entity = new WritingEditionLimitSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.clone = event.params.clone
  entity.oldLimit = event.params.oldLimit
  entity.newLimit = event.params.newLimit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWritingEditionPurchased(
  event: WritingEditionPurchasedEvent
): void {
  let entity = new WritingEditionPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.clone = event.params.clone
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
