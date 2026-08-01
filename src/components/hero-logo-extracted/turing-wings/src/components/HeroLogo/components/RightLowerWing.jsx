import LogoPiece from './LogoPiece';
import { RIGHT_LOWER_WING_PATH } from '../utils/paths';
import { ORIGINS, TIMING } from '../utils/constants';

export default function RightLowerWing({ controls }) {
  return (
    <LogoPiece
      d={RIGHT_LOWER_WING_PATH}
      origin={ORIGINS.rightLowerWing}
      delay={TIMING.rightLowerWing}
      controls={controls}
    />
  );
}
