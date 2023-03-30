export const partOfBodyTile = (part: string | string[]) => {
  switch (part) {
    case 'arms':
      return 'Руки';
    case 'body':
      return 'Тіло';
    case 'legs':
      return 'Ноги';
    case 'face':
      return 'Обличчя';
    default:
      return '';
  }
};
