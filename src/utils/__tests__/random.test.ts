import { describe, it, expect, vi } from 'vitest';
import { getRandomInt } from '../gameLogic';

describe('getRandomInt', () => {
  it('should return a number within the specified range', () => {
    // Mock window.crypto.getRandomValues for testing
    const mockGetRandomValues = vi.fn((array) => {
      array[0] = 50; // Some value
      return array;
    });

    Object.defineProperty(window, 'crypto', {
      value: { getRandomValues: mockGetRandomValues },
      writable: true
    });

    const min = 0;
    const max = 10;
    const range = max - min + 1;
    const expected = min + (50 % range);

    const result = getRandomInt(min, max);
    expect(result).toBe(expected);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
    expect(mockGetRandomValues).toHaveBeenCalled();
  });

  it('should produce values within range over multiple iterations', () => {
    const min = 5;
    const max = 15;
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    }
  });
});
