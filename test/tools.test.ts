import { describe, expect, it } from 'vitest'
import { isEmptyObj, isStr } from '../src'

describe('tools', () => {
  it('should be true', () => {
    expect(isStr('')).toBe(true)
    expect(isStr(1)).toMatchInlineSnapshot('false')
  })
})

describe('判断对象是否是空', () => {
  it('是否是空', () => {
    expect(isEmptyObj({})).toBe(true)
    expect(isEmptyObj({
      a: '1',
    })).toBe(false)
    expect(isEmptyObj(4444)).toBe(true)
    expect(isEmptyObj([])).toBe(true)
    expect(isEmptyObj(null)).toBe(true)
    expect(isEmptyObj(undefined)).toBe(true)
  })
})
