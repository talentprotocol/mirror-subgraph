import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/Mirror Observer/Mirror Observer"

export function createBaseDescriptionURISetEvent(
  clone: Address,
  oldBaseDescriptionURI: string,
  newBaseDescriptionURI: string
): BaseDescriptionURISet {
  let baseDescriptionUriSetEvent =
    changetype<BaseDescriptionURISet>(newMockEvent())

  baseDescriptionUriSetEvent.parameters = new Array()

  baseDescriptionUriSetEvent.parameters.push(
    new ethereum.EventParam("clone", ethereum.Value.fromAddress(clone))
  )
  baseDescriptionUriSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldBaseDescriptionURI",
      ethereum.Value.fromString(oldBaseDescriptionURI)
    )
  )
  baseDescriptionUriSetEvent.parameters.push(
    new ethereum.EventParam(
      "newBaseDescriptionURI",
      ethereum.Value.fromString(newBaseDescriptionURI)
    )
  )

  return baseDescriptionUriSetEvent
}

export function createCloneDeployedEvent(
  factory: Address,
  owner: Address,
  clone: Address
): CloneDeployed {
  let cloneDeployedEvent = changetype<CloneDeployed>(newMockEvent())

  cloneDeployedEvent.parameters = new Array()

  cloneDeployedEvent.parameters.push(
    new ethereum.EventParam("factory", ethereum.Value.fromAddress(factory))
  )
  cloneDeployedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  cloneDeployedEvent.parameters.push(
    new ethereum.EventParam("clone", ethereum.Value.fromAddress(clone))
  )

  return cloneDeployedEvent
}

export function createFactoryGuardSetEvent(guard: boolean): FactoryGuardSet {
  let factoryGuardSetEvent = changetype<FactoryGuardSet>(newMockEvent())

  factoryGuardSetEvent.parameters = new Array()

  factoryGuardSetEvent.parameters.push(
    new ethereum.EventParam("guard", ethereum.Value.fromBoolean(guard))
  )

  return factoryGuardSetEvent
}

export function createFactoryImplementationSetEvent(
  factory: Address,
  oldImplementation: Address,
  newImplementation: Address
): FactoryImplementationSet {
  let factoryImplementationSetEvent =
    changetype<FactoryImplementationSet>(newMockEvent())

  factoryImplementationSetEvent.parameters = new Array()

  factoryImplementationSetEvent.parameters.push(
    new ethereum.EventParam("factory", ethereum.Value.fromAddress(factory))
  )
  factoryImplementationSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  factoryImplementationSetEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return factoryImplementationSetEvent
}

export function createFactoryLimitSetEvent(
  factory: Address,
  oldLimit: BigInt,
  newLimit: BigInt
): FactoryLimitSet {
  let factoryLimitSetEvent = changetype<FactoryLimitSet>(newMockEvent())

  factoryLimitSetEvent.parameters = new Array()

  factoryLimitSetEvent.parameters.push(
    new ethereum.EventParam("factory", ethereum.Value.fromAddress(factory))
  )
  factoryLimitSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldLimit",
      ethereum.Value.fromUnsignedBigInt(oldLimit)
    )
  )
  factoryLimitSetEvent.parameters.push(
    new ethereum.EventParam(
      "newLimit",
      ethereum.Value.fromUnsignedBigInt(newLimit)
    )
  )

  return factoryLimitSetEvent
}

export function createFundingRecipientSetEvent(
  clone: Address,
  oldFundingRecipient: Address,
  newFundingRecipient: Address
): FundingRecipientSet {
  let fundingRecipientSetEvent = changetype<FundingRecipientSet>(newMockEvent())

  fundingRecipientSetEvent.parameters = new Array()

  fundingRecipientSetEvent.parameters.push(
    new ethereum.EventParam("clone", ethereum.Value.fromAddress(clone))
  )
  fundingRecipientSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldFundingRecipient",
      ethereum.Value.fromAddress(oldFundingRecipient)
    )
  )
  fundingRecipientSetEvent.parameters.push(
    new ethereum.EventParam(
      "newFundingRecipient",
      ethereum.Value.fromAddress(newFundingRecipient)
    )
  )

  return fundingRecipientSetEvent
}

export function createPriceSetEvent(
  clone: Address,
  oldLimit: BigInt,
  newLimit: BigInt
): PriceSet {
  let priceSetEvent = changetype<PriceSet>(newMockEvent())

  priceSetEvent.parameters = new Array()

  priceSetEvent.parameters.push(
    new ethereum.EventParam("clone", ethereum.Value.fromAddress(clone))
  )
  priceSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldLimit",
      ethereum.Value.fromUnsignedBigInt(oldLimit)
    )
  )
  priceSetEvent.parameters.push(
    new ethereum.EventParam(
      "newLimit",
      ethereum.Value.fromUnsignedBigInt(newLimit)
    )
  )

  return priceSetEvent
}

export function createRendererSetEvent(
  clone: Address,
  renderer: Address
): RendererSet {
  let rendererSetEvent = changetype<RendererSet>(newMockEvent())

  rendererSetEvent.parameters = new Array()

  rendererSetEvent.parameters.push(
    new ethereum.EventParam("clone", ethereum.Value.fromAddress(clone))
  )
  rendererSetEvent.parameters.push(
    new ethereum.EventParam("renderer", ethereum.Value.fromAddress(renderer))
  )

  return rendererSetEvent
}

export function createRoyaltyChangeEvent(
  clone: Address,
  oldRoyaltyRecipient: Address,
  oldRoyaltyBPS: BigInt,
  newRoyaltyRecipient: Address,
  newRoyaltyBPS: BigInt
): RoyaltyChange {
  let royaltyChangeEvent = changetype<RoyaltyChange>(newMockEvent())

  royaltyChangeEvent.parameters = new Array()

  royaltyChangeEvent.parameters.push(
    new ethereum.EventParam("clone", ethereum.Value.fromAddress(clone))
  )
  royaltyChangeEvent.parameters.push(
    new ethereum.EventParam(
      "oldRoyaltyRecipient",
      ethereum.Value.fromAddress(oldRoyaltyRecipient)
    )
  )
  royaltyChangeEvent.parameters.push(
    new ethereum.EventParam(
      "oldRoyaltyBPS",
      ethereum.Value.fromUnsignedBigInt(oldRoyaltyBPS)
    )
  )
  royaltyChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newRoyaltyRecipient",
      ethereum.Value.fromAddress(newRoyaltyRecipient)
    )
  )
  royaltyChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newRoyaltyBPS",
      ethereum.Value.fromUnsignedBigInt(newRoyaltyBPS)
    )
  )

  return royaltyChangeEvent
}

export function createTransferEvent(
  clone: Address,
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("clone", ethereum.Value.fromAddress(clone))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createTributarySetEvent(
  factory: Address,
  clone: Address,
  oldTributary: Address,
  newTributary: Address
): TributarySet {
  let tributarySetEvent = changetype<TributarySet>(newMockEvent())

  tributarySetEvent.parameters = new Array()

  tributarySetEvent.parameters.push(
    new ethereum.EventParam("factory", ethereum.Value.fromAddress(factory))
  )
  tributarySetEvent.parameters.push(
    new ethereum.EventParam("clone", ethereum.Value.fromAddress(clone))
  )
  tributarySetEvent.parameters.push(
    new ethereum.EventParam(
      "oldTributary",
      ethereum.Value.fromAddress(oldTributary)
    )
  )
  tributarySetEvent.parameters.push(
    new ethereum.EventParam(
      "newTributary",
      ethereum.Value.fromAddress(newTributary)
    )
  )

  return tributarySetEvent
}

export function createWritingEditionLimitSetEvent(
  clone: Address,
  oldLimit: BigInt,
  newLimit: BigInt
): WritingEditionLimitSet {
  let writingEditionLimitSetEvent =
    changetype<WritingEditionLimitSet>(newMockEvent())

  writingEditionLimitSetEvent.parameters = new Array()

  writingEditionLimitSetEvent.parameters.push(
    new ethereum.EventParam("clone", ethereum.Value.fromAddress(clone))
  )
  writingEditionLimitSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldLimit",
      ethereum.Value.fromUnsignedBigInt(oldLimit)
    )
  )
  writingEditionLimitSetEvent.parameters.push(
    new ethereum.EventParam(
      "newLimit",
      ethereum.Value.fromUnsignedBigInt(newLimit)
    )
  )

  return writingEditionLimitSetEvent
}

export function createWritingEditionPurchasedEvent(
  clone: Address,
  tokenId: BigInt,
  recipient: Address,
  price: BigInt,
  message: string,
  flatFeeAmount: BigInt
): WritingEditionPurchased {
  let writingEditionPurchasedEvent =
    changetype<WritingEditionPurchased>(newMockEvent())

  writingEditionPurchasedEvent.parameters = new Array()

  writingEditionPurchasedEvent.parameters.push(
    new ethereum.EventParam("clone", ethereum.Value.fromAddress(clone))
  )
  writingEditionPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  writingEditionPurchasedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  writingEditionPurchasedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  writingEditionPurchasedEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )
  writingEditionPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "flatFeeAmount",
      ethereum.Value.fromUnsignedBigInt(flatFeeAmount)
    )
  )

  return writingEditionPurchasedEvent
}
