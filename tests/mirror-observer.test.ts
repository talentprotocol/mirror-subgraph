import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { BaseDescriptionURISet } from "../generated/schema"
import { BaseDescriptionURISet as BaseDescriptionURISetEvent } from "../generated/Mirror Observer/Mirror Observer"
import { handleBaseDescriptionURISet } from "../src/mirror-observer"
import { createBaseDescriptionURISetEvent } from "./mirror-observer-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let clone = Address.fromString("0x0000000000000000000000000000000000000001")
    let oldBaseDescriptionURI = "Example string value"
    let newBaseDescriptionURI = "Example string value"
    let newBaseDescriptionURISetEvent = createBaseDescriptionURISetEvent(
      clone,
      oldBaseDescriptionURI,
      newBaseDescriptionURI
    )
    handleBaseDescriptionURISet(newBaseDescriptionURISetEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BaseDescriptionURISet created and stored", () => {
    assert.entityCount("BaseDescriptionURISet", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BaseDescriptionURISet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "clone",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BaseDescriptionURISet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "oldBaseDescriptionURI",
      "Example string value"
    )
    assert.fieldEquals(
      "BaseDescriptionURISet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newBaseDescriptionURI",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
