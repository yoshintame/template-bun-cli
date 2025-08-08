import { runCommand } from '@oclif/test'
import { describe, expect, it } from 'vitest'

describe('hello', () => {
  it('runs hello', async () => {
    const result = await runCommand('hello friend --from oclif')
    expect(result.stdout).toContain('hello friend from oclif!')
  })
})
