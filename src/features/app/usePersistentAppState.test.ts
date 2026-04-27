import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePersistentAppState } from './usePersistentAppState';

describe('usePersistentAppState', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('initializes with default state', () => {
    const { result } = renderHook(() => usePersistentAppState());
    expect(result.current.state.count).toBe(0);
    expect(result.current.state.stepSize).toBe(1);
    expect(result.current.state.theme).toBe('dark');
    expect(result.current.state.history).toEqual([]);
    expect(result.current.state.notes).toEqual([]);
  });

  it('increments count by step size', () => {
    const { result } = renderHook(() => usePersistentAppState());
    act(() => result.current.increment());
    expect(result.current.state.count).toBe(1);
    expect(result.current.state.history).toHaveLength(1);
    expect(result.current.state.history[0].type).toBe('increment');
  });

  it('decrements count by step size', () => {
    const { result } = renderHook(() => usePersistentAppState());
    act(() => result.current.decrement());
    expect(result.current.state.count).toBe(-1);
    expect(result.current.state.history[0].type).toBe('decrement');
  });

  it('reset sets count to zero and records history', () => {
    const { result } = renderHook(() => usePersistentAppState());
    act(() => result.current.increment());
    act(() => result.current.increment());
    act(() => result.current.reset());
    expect(result.current.state.count).toBe(0);
    expect(result.current.state.history[0].type).toBe('reset');
  });

  it('clears history', () => {
    const { result } = renderHook(() => usePersistentAppState());
    act(() => result.current.increment());
    act(() => result.current.clearHistory());
    expect(result.current.state.history).toEqual([]);
  });

  it('adds a note', () => {
    const { result } = renderHook(() => usePersistentAppState());
    act(() => result.current.addNote('  Test notu  '));
    expect(result.current.state.notes).toHaveLength(1);
    expect(result.current.state.notes[0].text).toBe('Test notu');
  });

  it('does not add empty note', () => {
    const { result } = renderHook(() => usePersistentAppState());
    act(() => result.current.addNote('   '));
    expect(result.current.state.notes).toEqual([]);
  });

  it('deletes a note', () => {
    const { result } = renderHook(() => usePersistentAppState());
    act(() => result.current.addNote('Silinecek'));
    const id = result.current.state.notes[0].id;
    act(() => result.current.deleteNote(id));
    expect(result.current.state.notes).toEqual([]);
  });

  it('changes step size', () => {
    const { result } = renderHook(() => usePersistentAppState());
    act(() => result.current.setStepSize(5));
    expect(result.current.state.stepSize).toBe(5);
    act(() => result.current.increment());
    expect(result.current.state.count).toBe(5);
  });

  it('changes theme', () => {
    const { result } = renderHook(() => usePersistentAppState());
    act(() => result.current.setTheme('light'));
    expect(result.current.state.theme).toBe('light');
  });

  it('clears all data', () => {
    const { result } = renderHook(() => usePersistentAppState());
    act(() => result.current.increment());
    act(() => result.current.addNote('Not'));
    act(() => result.current.setStepSize(3));
    act(() => result.current.clearAllData());
    expect(result.current.state.count).toBe(0);
    expect(result.current.state.stepSize).toBe(1);
    expect(result.current.state.history).toEqual([]);
    expect(result.current.state.notes).toEqual([]);
    expect(result.current.state.theme).toBe('dark');
  });

  it('persists to localStorage', () => {
    const { result } = renderHook(() => usePersistentAppState());
    act(() => result.current.increment());
    const stored = localStorage.getItem('smoke-jsonfix-state');
    expect(stored).toBeTruthy();
    const parsed = JSON.parse(stored!);
    expect(parsed.count).toBe(1);
  });
});
