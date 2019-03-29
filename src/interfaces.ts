export interface FlashCard {
    id: string;
    title: string;
    imageLink: string;
    proposed: string;
    answer: string;
    audioAnswer: string;
    type: 'audio' | 'text';
    groupId: string;
    group: Group; 
}

export interface Group {
    id: string;
    name: string;
}

export interface AppState {
    cards: FlashCard[];
    currentGroupId: string;
}