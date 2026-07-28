import {describe, expect, it} from 'vitest'

import {birthIcon, birthSymbol, deathIcon, deathSymbol} from '../src/icons.js'

describe('neutral genealogy symbols', () => {
  it('exports the neutral text markers', () => {
    expect(birthSymbol).toBe('/')
    expect(deathSymbol).toBe('\\')
  })

  it('exports a dedicated icon for each marker', () => {
    expect(birthIcon).toBeDefined()
    expect(deathIcon).toBeDefined()
  })
})
