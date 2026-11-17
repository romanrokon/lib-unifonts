// @ AI Context: single-line frames so they fit a 150-char Instagram bio and can't misalign.
export interface Frame {
  id: string;
  left: string;
  right: string;
}

export const FRAMES: Frame[] = [
  { id: 'sparkle_heart', left: '♡ ⋆ ˚｡⋆ ', right: ' ⋆｡˚ ⋆ ♡' },
  { id: 'shooting_star', left: '★彡 ', right: ' 彡★' },
  { id: 'wings', left: '˗ˏˋ ', right: ' ˎˊ˗' },
  { id: 'bubble', left: '꒰ঌ ', right: ' ໒꒱' },
  { id: 'stars', left: '⋆｡°✩ ', right: ' ✩°｡⋆' },
  { id: 'flowers', left: '✿ ❀ ', right: ' ❀ ✿' },
  { id: 'ornament', left: '━━✦❘༻ ', right: ' ༺❘✦━━' },
  { id: 'cloud', left: '⊹₊˚‧︵‿₊୨ ', right: ' ୧₊‿︵‧˚₊⊹' },
  { id: 'moon', left: '☾ ⋆*･ﾟ ', right: ' ﾟ･*⋆ ☽' },
  { id: 'brackets', left: '『 ', right: ' 』' },
];

export function frameText(s: string, id: string): string {
  const text = s.trim();

  if (text === '') {
    return '';
  }

  const frame = FRAMES.filter(f => f.id === id)[0] || FRAMES[0];

  return frame.left + text + frame.right;
}
