import { MagicFormat, MagicFormatInfo } from '../models/sideboard.model';

export const MAGIC_FORMATS: readonly MagicFormatInfo[] = [
  { id: 'pauper', label: 'Pauper', description: 'Metagame de comunes de Magic' },
  { id: 'modern', label: 'Modern', description: 'Metagame de Modern competitivo' },
  { id: 'standard', label: 'Standard', description: 'Metagame de Standard, el formato rotativo' },
  { id: 'pioneer', label: 'Pioneer', description: 'Metagame de Pioneer, desde Return to Ravnica' }
];

export function getMagicFormatLabel(id: MagicFormat): string {
  return MAGIC_FORMATS.find((format) => format.id === id)?.label ?? id;
}
