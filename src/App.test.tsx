import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App integration', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders counter screen by default', () => {
    render(<App />);
    expect(screen.getByText('GÜNCEL DEĞER')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('increments counter', () => {
    render(<App />);
    const addBtn = screen.getAllByText('add')[0];
    fireEvent.click(addBtn);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrements counter', () => {
    render(<App />);
    const removeBtn = screen.getAllByText('remove')[0];
    fireEvent.click(removeBtn);
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('opens reset modal and confirms', () => {
    render(<App />);
    const addBtn = screen.getAllByText('add')[0];
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    expect(screen.getByText('2')).toBeInTheDocument();

    const resetBtn = screen.getByText('SIFIRLA');
    fireEvent.click(resetBtn);

    expect(screen.getByText('Sayacı Sıfırla?')).toBeInTheDocument();
    const confirmBtn = screen.getByText('EVET, SIFIRLA');
    fireEvent.click(confirmBtn);

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('cancels reset modal', () => {
    render(<App />);
    const resetBtn = screen.getByText('SIFIRLA');
    fireEvent.click(resetBtn);
    expect(screen.getByText('Sayacı Sıfırla?')).toBeInTheDocument();
    const cancelBtn = screen.getByText('İPTAL');
    fireEvent.click(cancelBtn);
    expect(screen.queryByText('Sayacı Sıfırla?')).not.toBeInTheDocument();
  });

  it('navigates to notes screen', () => {
    render(<App />);
    const notesNav = screen.getAllByText('NOTLAR')[0];
    fireEvent.click(notesNav);
    expect(screen.getByText(/Sayaç/)).toBeInTheDocument();
    expect(screen.getByText('Günlük Notlar')).toBeInTheDocument();
  });

  it('navigates to settings screen', () => {
    render(<App />);
    const settingsNav = screen.getAllByText('AYARLAR')[0];
    fireEvent.click(settingsNav);
    expect(screen.getByText('Ayarlar')).toBeInTheDocument();
    expect(screen.getByText('Görünüm')).toBeInTheDocument();
  });

  it('adds a note from notes screen', () => {
    render(<App />);
    const notesNav = screen.getAllByText('NOTLAR')[0];
    fireEvent.click(notesNav);

    const textarea = screen.getByPlaceholderText('Yeni not ekle...');
    fireEvent.change(textarea, { target: { value: 'Test notu eklendi' } });
    const addBtn = screen.getByText('EKLE');
    fireEvent.click(addBtn);

    expect(screen.getByText('Test notu eklendi')).toBeInTheDocument();
  });

  it('clears history from notes screen', () => {
    render(<App />);
    // Add some history
    const addBtn = screen.getAllByText('add')[0];
    fireEvent.click(addBtn);

    // Go to notes
    const notesNav = screen.getAllByText('NOTLAR')[0];
    fireEvent.click(notesNav);

    const clearBtn = screen.getByText('GEÇMİŞİ TEMİZLE');
    fireEvent.click(clearBtn);

    expect(screen.getByText('Henüz geçmiş yok.')).toBeInTheDocument();
  });
});
