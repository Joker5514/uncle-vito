import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BlackjackGame from '../BlackjackGame';
import * as aiService from '../../services/ai';

// Mock the AI service
vi.mock('../../services/ai', () => ({
  getVitoMessage: vi.fn(),
}));

describe('BlackjackGame', () => {
  const mockSetVitoMessage = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(aiService.getVitoMessage).mockResolvedValue("Mock AI message");
  });

  it('renders initial game state', async () => {
    render(<BlackjackGame setVitoMessage={mockSetVitoMessage} />);

    expect(screen.getByText(/Dealer's Hand/i)).toBeInTheDocument();
    expect(screen.getByText(/Your Hand/i)).toBeInTheDocument();
    expect(screen.getByText('Hit')).toBeInTheDocument();
    expect(screen.getByText('Stand')).toBeInTheDocument();

    // Wait for initial deal
    await waitFor(() => {
        const cards = screen.getAllByText(/[♠♥♦♣]/);
        expect(cards.length).toBeGreaterThan(0);
    });
  });

  it('allows player to hit', async () => {
    render(<BlackjackGame setVitoMessage={mockSetVitoMessage} />);

    // Wait for initial deal
    await waitFor(() => screen.getAllByText(/[♠♥♦♣]/));

    let hitButton = screen.getByText('Hit');

    // If dealt 21 on initial hand, hit button will be disabled. Draw a new hand.
    while ((hitButton as HTMLButtonElement).disabled) {
      fireEvent.click(screen.getByText('New Hand'));
      // Wait for re-deal to complete (checking for dom change)
      await waitFor(() => {
          expect(screen.getAllByText(/[♠♥♦♣]/).length).toBeGreaterThan(0);
      });
      hitButton = screen.getByText('Hit');
    }

    const initialCards = screen.getAllByText(/[♠♥♦♣]/).length;

    fireEvent.click(hitButton);

    await waitFor(() => {
        const newCards = screen.getAllByText(/[♠♥♦♣]/).length;
        expect(newCards).toBeGreaterThan(initialCards);
    });
  });

  it('allows player to stand', async () => {
    render(<BlackjackGame setVitoMessage={mockSetVitoMessage} />);

    // Wait for initial deal
    await waitFor(() => screen.getAllByText(/[♠♥♦♣]/));

    fireEvent.click(screen.getByText('Stand'));

    await waitFor(() => {
        expect(screen.getByText(/Win|Lose|Push|Bust/i)).toBeInTheDocument();
    });

    // Check if AI message was called
    expect(aiService.getVitoMessage).toHaveBeenCalled();
  });
});
