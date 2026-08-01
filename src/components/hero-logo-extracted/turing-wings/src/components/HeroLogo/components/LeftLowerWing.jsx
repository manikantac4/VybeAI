import LogoPiece from './LogoPiece';
import { LEFT_LOWER_WING_PATH } from '../utils/paths';
import { ORIGINS, TIMING } from '../utils/constants';

export default function LeftLowerWing({ controls }) {
  return (
    <LogoPiece
      d={LEFT_LOWER_WING_PATH}
      origin={ORIGINS.leftLowerWing}
      delay={TIMING.leftLowerWing}
      controls={controls}
    />
  );
}
