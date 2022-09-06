import { CorePalette, colorUtils } from '@elemental-design/material-color-utilities';

export const generatePalette = (hex: string) => {
  const argb = colorUtils.intFromHex(hex);

  const core = CorePalette.of(argb);

  const tone50 = core.a1.tone(0);
  const tone100 = core.a1.tone(10);
  const tone200 = core.a1.tone(20);
  const tone300 = core.a1.tone(30);
  const tone400 = core.a1.tone(40);
  const tone500 = core.a1.tone(50);
  const tone600 = core.a1.tone(60);
  const tone700 = core.a1.tone(70);
  const tone800 = core.a1.tone(80);
  const tone900 = core.a1.tone(90);

  return {
    [50]: colorUtils.hexFromInt(tone50),
    [100]: colorUtils.hexFromInt(tone100),
    [200]: colorUtils.hexFromInt(tone200),
    [300]: colorUtils.hexFromInt(tone300),
    [400]: colorUtils.hexFromInt(tone400),
    [500]: colorUtils.hexFromInt(tone500),
    [600]: colorUtils.hexFromInt(tone600),
    [700]: colorUtils.hexFromInt(tone700),
    [800]: colorUtils.hexFromInt(tone800),
    [900]: colorUtils.hexFromInt(tone900),
  };
}
