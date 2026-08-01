// Outline geometry for each piece, all defined in the same 0 0 1240 1160
// viewBox so that when every piece is at rest (translate 0,0 / rotate 0)
// they interlock into the full mark. Positions are stylized, not a
// pixel trace of the source artwork.

export const CENTER_MARK_PATH =
  'M430,300 L810,300 L760,430 L940,560 L760,1010 L620,650 L480,1010 L300,560 L460,430 Z';

export const LEFT_UPPER_WING_PATH =
  'M40,300 L330,268 L382,428 L232,458 L150,462 Z';

export const RIGHT_UPPER_WING_PATH =
  'M1200,300 L910,268 L858,428 L1008,458 L1090,462 Z';

export const LEFT_LOWER_WING_PATH =
  'M160,478 L420,450 L555,598 L390,610 L220,600 Z';

export const RIGHT_LOWER_WING_PATH =
  'M1080,478 L820,450 L685,598 L850,610 L1020,600 Z';

export const VIEWBOX = '0 0 1240 1160';
