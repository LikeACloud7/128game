import { beforeEach,describe, expect, it, vi } from 'vitest';

import { failedCheck, successCheck } from './gameLogic';
import { type State } from './types';

describe('Game Logic', () => {
    let mockState: State;
    let setState: React.Dispatch<React.SetStateAction<State>>;

    beforeEach(() => {
        mockState = {
            score: 0,
            board: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
            isSuccess: false,
            isFailed: false
        };
        setState = vi.fn();
        vi.mock('./moveMapLogic', () => ({
            initBoard: () => [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        }));
    });

    describe('successCheck', () => {
        it('should set isSuccess to true when 128 is present', () => {
            mockState.board = [[0,128,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
            successCheck({ state: mockState, setState });
            expect(setState).toHaveBeenCalledWith({
                ...mockState,
                isSuccess: true
            });
        });

        it('should not set isSuccess when 128 is not present', () => {
            successCheck({ state: mockState, setState });
            expect(setState).not.toHaveBeenCalled();
        });
    });

    describe('failedCheck', () => {
        it('should set isFailed to true when no moves are possible', () => {
            mockState.board = [[2,4,2,4],[4,2,4,2],[2,4,2,4],[4,2,4,2]];
            failedCheck({ state: mockState, setState });
            expect(setState).toHaveBeenCalledWith({
                ...mockState,
                isFailed: true
            });
        });

        it('should not set isFailed when moves are possible', () => {
            mockState.board = [[2,4,2,4],[4,2,4,2],[2,4,2,4],[4,2,4,4]];
            failedCheck({ state: mockState, setState });
            expect(setState).not.toHaveBeenCalled();
        });
    });
});